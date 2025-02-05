!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
        module.l = !0,
        module.exports
    }
    var parentJsonpFunction = window.webpackJsonp;
    window.webpackJsonp = function(chunkIds, moreModules, executeModules) {
        for (var moduleId, chunkId, result, i = 0, resolves = []; i < chunkIds.length; i++)
            chunkId = chunkIds[i],
            installedChunks[chunkId] && resolves.push(installedChunks[chunkId][0]),
            installedChunks[chunkId] = 0;
        for (moduleId in moreModules)
            Object.prototype.hasOwnProperty.call(moreModules, moduleId) && (modules[moduleId] = moreModules[moduleId]);
        for (parentJsonpFunction && parentJsonpFunction(chunkIds, moreModules, executeModules); resolves.length; )
            resolves.shift()();
        if (executeModules)
            for (i = 0; i < executeModules.length; i++)
                result = __webpack_require__(__webpack_require__.s = executeModules[i]);
        return result
    }
    ;
    var installedModules = {}
      , installedChunks = {
        1: 0
    };
    __webpack_require__.e = function(chunkId) {
        function onScriptComplete() {
            script.onerror = script.onload = null,
            clearTimeout(timeout);
            var chunk = installedChunks[chunkId];
            0 !== chunk && (chunk && chunk[1](new Error("Loading chunk " + chunkId + " failed.")),
            installedChunks[chunkId] = void 0)
        }
        if (0 === installedChunks[chunkId])
            return Promise.resolve();
        if (installedChunks[chunkId])
            return installedChunks[chunkId][2];
        var promise = new Promise(function(resolve, reject) {
            installedChunks[chunkId] = [resolve, reject]
        }
        );
        installedChunks[chunkId][2] = promise;
        var head = document.getElementsByTagName("head")[0]
          , script = document.createElement("script");
        script.type = "text/javascript",
        script.charset = "utf-8",
        script.async = !0,
        script.timeout = 12e4,
        __webpack_require__.nc && script.setAttribute("nonce", __webpack_require__.nc),
        script.src = __webpack_require__.p + "" + ({
            0: "app"
        }[chunkId] || chunkId) + ".9889edfde5a128563069.js";
        var timeout = setTimeout(onScriptComplete, 12e4);
        return script.onerror = script.onload = onScriptComplete,
        head.appendChild(script),
        promise
    }
    ,
    __webpack_require__.m = modules,
    __webpack_require__.c = installedModules,
    __webpack_require__.i = function(value) {
        return value
    }
    ,
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        })
    }
    ,
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default
        }
        : function() {
            return module
        }
        ;
        return __webpack_require__.d(getter, "a", getter),
        getter
    }
    ,
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }
    ,
    __webpack_require__.p = "./",
    __webpack_require__.oe = function(err) {
        throw err
    }
    ,
    __webpack_require__(__webpack_require__.s = 279)
}({
    170: function(module, exports, __webpack_require__) {
        (function(__webpack_provided_window_dot_jQuery) {
            !function(window) {
                "use strict";
                function errorHandlingConfig(config) {
                    if (!isObject(config))
                        return minErrConfig;
                    isDefined(config.objectMaxDepth) && (minErrConfig.objectMaxDepth = isValidObjectMaxDepth(config.objectMaxDepth) ? config.objectMaxDepth : NaN)
                }
                function isValidObjectMaxDepth(maxDepth) {
                    return isNumber(maxDepth) && maxDepth > 0
                }
                function minErr(module, ErrorConstructor) {
                    return ErrorConstructor = ErrorConstructor || Error,
                    function() {
                        var paramPrefix, i, code = arguments[0], template = arguments[1], message = "[" + (module ? module + ":" : "") + code + "] ", templateArgs = sliceArgs(arguments, 2).map(function(arg) {
                            return toDebugString(arg, minErrConfig.objectMaxDepth)
                        });
                        for (message += template.replace(/\{\d+\}/g, function(match) {
                            var index = +match.slice(1, -1);
                            return index < templateArgs.length ? templateArgs[index] : match
                        }),
                        message += "\nhttp://errors.angularjs.org/1.6.5/" + (module ? module + "/" : "") + code,
                        i = 0,
                        paramPrefix = "?"; i < templateArgs.length; i++,
                        paramPrefix = "&")
                            message += paramPrefix + "p" + i + "=" + encodeURIComponent(templateArgs[i]);
                        return new ErrorConstructor(message)
                    }
                }
                function isArrayLike(obj) {
                    if (null == obj || isWindow(obj))
                        return !1;
                    if (isArray(obj) || isString(obj) || jqLite && obj instanceof jqLite)
                        return !0;
                    var length = "length"in Object(obj) && obj.length;
                    return isNumber(length) && (length >= 0 && (length - 1 in obj || obj instanceof Array) || "function" == typeof obj.item)
                }
                function forEach(obj, iterator, context) {
                    var key, length;
                    if (obj)
                        if (isFunction(obj))
                            for (key in obj)
                                "prototype" !== key && "length" !== key && "name" !== key && obj.hasOwnProperty(key) && iterator.call(context, obj[key], key, obj);
                        else if (isArray(obj) || isArrayLike(obj)) {
                            var isPrimitive = "object" != typeof obj;
                            for (key = 0,
                            length = obj.length; key < length; key++)
                                (isPrimitive || key in obj) && iterator.call(context, obj[key], key, obj)
                        } else if (obj.forEach && obj.forEach !== forEach)
                            obj.forEach(iterator, context, obj);
                        else if (isBlankObject(obj))
                            for (key in obj)
                                iterator.call(context, obj[key], key, obj);
                        else if ("function" == typeof obj.hasOwnProperty)
                            for (key in obj)
                                obj.hasOwnProperty(key) && iterator.call(context, obj[key], key, obj);
                        else
                            for (key in obj)
                                hasOwnProperty.call(obj, key) && iterator.call(context, obj[key], key, obj);
                    return obj
                }
                function forEachSorted(obj, iterator, context) {
                    for (var keys = Object.keys(obj).sort(), i = 0; i < keys.length; i++)
                        iterator.call(context, obj[keys[i]], keys[i]);
                    return keys
                }
                function reverseParams(iteratorFn) {
                    return function(value, key) {
                        iteratorFn(key, value)
                    }
                }
                function nextUid() {
                    return ++uid
                }
                function setHashKey(obj, h) {
                    h ? obj.$$hashKey = h : delete obj.$$hashKey
                }
                function baseExtend(dst, objs, deep) {
                    for (var h = dst.$$hashKey, i = 0, ii = objs.length; i < ii; ++i) {
                        var obj = objs[i];
                        if (isObject(obj) || isFunction(obj))
                            for (var keys = Object.keys(obj), j = 0, jj = keys.length; j < jj; j++) {
                                var key = keys[j]
                                  , src = obj[key];
                                deep && isObject(src) ? isDate(src) ? dst[key] = new Date(src.valueOf()) : isRegExp(src) ? dst[key] = new RegExp(src) : src.nodeName ? dst[key] = src.cloneNode(!0) : isElement(src) ? dst[key] = src.clone() : (isObject(dst[key]) || (dst[key] = isArray(src) ? [] : {}),
                                baseExtend(dst[key], [src], !0)) : dst[key] = src
                            }
                    }
                    return setHashKey(dst, h),
                    dst
                }
                function extend(dst) {
                    return baseExtend(dst, slice.call(arguments, 1), !1)
                }
                function merge(dst) {
                    return baseExtend(dst, slice.call(arguments, 1), !0)
                }
                function toInt(str) {
                    return parseInt(str, 10)
                }
                function inherit(parent, extra) {
                    return extend(Object.create(parent), extra)
                }
                function noop() {}
                function identity($) {
                    return $
                }
                function valueFn(value) {
                    return function() {
                        return value
                    }
                }
                function hasCustomToString(obj) {
                    return isFunction(obj.toString) && obj.toString !== toString
                }
                function isUndefined(value) {
                    return void 0 === value
                }
                function isDefined(value) {
                    return void 0 !== value
                }
                function isObject(value) {
                    return null !== value && "object" == typeof value
                }
                function isBlankObject(value) {
                    return null !== value && "object" == typeof value && !getPrototypeOf(value)
                }
                function isString(value) {
                    return "string" == typeof value
                }
                function isNumber(value) {
                    return "number" == typeof value
                }
                function isDate(value) {
                    return "[object Date]" === toString.call(value)
                }
                function isError(value) {
                    switch (toString.call(value)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return value instanceof Error
                    }
                }
                function isFunction(value) {
                    return "function" == typeof value
                }
                function isRegExp(value) {
                    return "[object RegExp]" === toString.call(value)
                }
                function isWindow(obj) {
                    return obj && obj.window === obj
                }
                function isScope(obj) {
                    return obj && obj.$evalAsync && obj.$watch
                }
                function isFile(obj) {
                    return "[object File]" === toString.call(obj)
                }
                function isFormData(obj) {
                    return "[object FormData]" === toString.call(obj)
                }
                function isBlob(obj) {
                    return "[object Blob]" === toString.call(obj)
                }
                function isBoolean(value) {
                    return "boolean" == typeof value
                }
                function isPromiseLike(obj) {
                    return obj && isFunction(obj.then)
                }
                function isTypedArray(value) {
                    return value && isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value))
                }
                function isArrayBuffer(obj) {
                    return "[object ArrayBuffer]" === toString.call(obj)
                }
                function isElement(node) {
                    return !(!node || !(node.nodeName || node.prop && node.attr && node.find))
                }
                function makeMap(str) {
                    var i, obj = {}, items = str.split(",");
                    for (i = 0; i < items.length; i++)
                        obj[items[i]] = !0;
                    return obj
                }
                function nodeName_(element) {
                    return lowercase(element.nodeName || element[0] && element[0].nodeName)
                }
                function includes(array, obj) {
                    return -1 !== Array.prototype.indexOf.call(array, obj)
                }
                function arrayRemove(array, value) {
                    var index = array.indexOf(value);
                    return index >= 0 && array.splice(index, 1),
                    index
                }
                function copy(source, destination, maxDepth) {
                    function copyRecurse(source, destination, maxDepth) {
                        if (--maxDepth < 0)
                            return "...";
                        var key, h = destination.$$hashKey;
                        if (isArray(source))
                            for (var i = 0, ii = source.length; i < ii; i++)
                                destination.push(copyElement(source[i], maxDepth));
                        else if (isBlankObject(source))
                            for (key in source)
                                destination[key] = copyElement(source[key], maxDepth);
                        else if (source && "function" == typeof source.hasOwnProperty)
                            for (key in source)
                                source.hasOwnProperty(key) && (destination[key] = copyElement(source[key], maxDepth));
                        else
                            for (key in source)
                                hasOwnProperty.call(source, key) && (destination[key] = copyElement(source[key], maxDepth));
                        return setHashKey(destination, h),
                        destination
                    }
                    function copyElement(source, maxDepth) {
                        if (!isObject(source))
                            return source;
                        var index = stackSource.indexOf(source);
                        if (-1 !== index)
                            return stackDest[index];
                        if (isWindow(source) || isScope(source))
                            throw ngMinErr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                        var needsRecurse = !1
                          , destination = copyType(source);
                        return void 0 === destination && (destination = isArray(source) ? [] : Object.create(getPrototypeOf(source)),
                        needsRecurse = !0),
                        stackSource.push(source),
                        stackDest.push(destination),
                        needsRecurse ? copyRecurse(source, destination, maxDepth) : destination
                    }
                    function copyType(source) {
                        switch (toString.call(source)) {
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return new source.constructor(copyElement(source.buffer),source.byteOffset,source.length);
                        case "[object ArrayBuffer]":
                            if (!source.slice) {
                                var copied = new ArrayBuffer(source.byteLength);
                                return new Uint8Array(copied).set(new Uint8Array(source)),
                                copied
                            }
                            return source.slice(0);
                        case "[object Boolean]":
                        case "[object Number]":
                        case "[object String]":
                        case "[object Date]":
                            return new source.constructor(source.valueOf());
                        case "[object RegExp]":
                            var re = new RegExp(source.source,source.toString().match(/[^\/]*$/)[0]);
                            return re.lastIndex = source.lastIndex,
                            re;
                        case "[object Blob]":
                            return new source.constructor([source],{
                                type: source.type
                            })
                        }
                        if (isFunction(source.cloneNode))
                            return source.cloneNode(!0)
                    }
                    var stackSource = []
                      , stackDest = [];
                    if (maxDepth = isValidObjectMaxDepth(maxDepth) ? maxDepth : NaN,
                    destination) {
                        if (isTypedArray(destination) || isArrayBuffer(destination))
                            throw ngMinErr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                        if (source === destination)
                            throw ngMinErr("cpi", "Can't copy! Source and destination are identical.");
                        return isArray(destination) ? destination.length = 0 : forEach(destination, function(value, key) {
                            "$$hashKey" !== key && delete destination[key]
                        }),
                        stackSource.push(source),
                        stackDest.push(destination),
                        copyRecurse(source, destination, maxDepth)
                    }
                    return copyElement(source, maxDepth)
                }
                function simpleCompare(a, b) {
                    return a === b || a !== a && b !== b
                }
                function equals(o1, o2) {
                    if (o1 === o2)
                        return !0;
                    if (null === o1 || null === o2)
                        return !1;
                    if (o1 !== o1 && o2 !== o2)
                        return !0;
                    var length, key, keySet, t1 = typeof o1, t2 = typeof o2;
                    if (t1 === t2 && "object" === t1) {
                        if (!isArray(o1)) {
                            if (isDate(o1))
                                return !!isDate(o2) && simpleCompare(o1.getTime(), o2.getTime());
                            if (isRegExp(o1))
                                return !!isRegExp(o2) && o1.toString() === o2.toString();
                            if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2) || isDate(o2) || isRegExp(o2))
                                return !1;
                            keySet = createMap();
                            for (key in o1)
                                if ("$" !== key.charAt(0) && !isFunction(o1[key])) {
                                    if (!equals(o1[key], o2[key]))
                                        return !1;
                                    keySet[key] = !0
                                }
                            for (key in o2)
                                if (!(key in keySet) && "$" !== key.charAt(0) && isDefined(o2[key]) && !isFunction(o2[key]))
                                    return !1;
                            return !0
                        }
                        if (!isArray(o2))
                            return !1;
                        if ((length = o1.length) === o2.length) {
                            for (key = 0; key < length; key++)
                                if (!equals(o1[key], o2[key]))
                                    return !1;
                            return !0
                        }
                    }
                    return !1
                }
                function concat(array1, array2, index) {
                    return array1.concat(slice.call(array2, index))
                }
                function sliceArgs(args, startIndex) {
                    return slice.call(args, startIndex || 0)
                }
                function bind(self, fn) {
                    var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
                    return !isFunction(fn) || fn instanceof RegExp ? fn : curryArgs.length ? function() {
                        return arguments.length ? fn.apply(self, concat(curryArgs, arguments, 0)) : fn.apply(self, curryArgs)
                    }
                    : function() {
                        return arguments.length ? fn.apply(self, arguments) : fn.call(self)
                    }
                }
                function toJsonReplacer(key, value) {
                    var val = value;
                    return "string" == typeof key && "$" === key.charAt(0) && "$" === key.charAt(1) ? val = void 0 : isWindow(value) ? val = "$WINDOW" : value && window.document === value ? val = "$DOCUMENT" : isScope(value) && (val = "$SCOPE"),
                    val
                }
                function toJson(obj, pretty) {
                    if (!isUndefined(obj))
                        return isNumber(pretty) || (pretty = pretty ? 2 : null),
                        JSON.stringify(obj, toJsonReplacer, pretty)
                }
                function fromJson(json) {
                    return isString(json) ? JSON.parse(json) : json
                }
                function timezoneToOffset(timezone, fallback) {
                    timezone = timezone.replace(ALL_COLONS, "");
                    var requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
                    return isNumberNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset
                }
                function addDateMinutes(date, minutes) {
                    return date = new Date(date.getTime()),
                    date.setMinutes(date.getMinutes() + minutes),
                    date
                }
                function convertTimezoneToLocal(date, timezone, reverse) {
                    reverse = reverse ? -1 : 1;
                    var dateTimezoneOffset = date.getTimezoneOffset();
                    return addDateMinutes(date, reverse * (timezoneToOffset(timezone, dateTimezoneOffset) - dateTimezoneOffset))
                }
                function startingTag(element) {
                    element = jqLite(element).clone().empty();
                    var elemHtml = jqLite("<div>").append(element).html();
                    try {
                        return element[0].nodeType === NODE_TYPE_TEXT ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(match, nodeName) {
                            return "<" + lowercase(nodeName)
                        })
                    } catch (e) {
                        return lowercase(elemHtml)
                    }
                }
                function tryDecodeURIComponent(value) {
                    try {
                        return decodeURIComponent(value)
                    } catch (e) {}
                }
                function parseKeyValue(keyValue) {
                    var obj = {};
                    return forEach((keyValue || "").split("&"), function(keyValue) {
                        var splitPoint, key, val;
                        keyValue && (key = keyValue = keyValue.replace(/\+/g, "%20"),
                        splitPoint = keyValue.indexOf("="),
                        -1 !== splitPoint && (key = keyValue.substring(0, splitPoint),
                        val = keyValue.substring(splitPoint + 1)),
                        key = tryDecodeURIComponent(key),
                        isDefined(key) && (val = !isDefined(val) || tryDecodeURIComponent(val),
                        hasOwnProperty.call(obj, key) ? isArray(obj[key]) ? obj[key].push(val) : obj[key] = [obj[key], val] : obj[key] = val))
                    }),
                    obj
                }
                function toKeyValue(obj) {
                    var parts = [];
                    return forEach(obj, function(value, key) {
                        isArray(value) ? forEach(value, function(arrayValue) {
                            parts.push(encodeUriQuery(key, !0) + (!0 === arrayValue ? "" : "=" + encodeUriQuery(arrayValue, !0)))
                        }) : parts.push(encodeUriQuery(key, !0) + (!0 === value ? "" : "=" + encodeUriQuery(value, !0)))
                    }),
                    parts.length ? parts.join("&") : ""
                }
                function encodeUriSegment(val) {
                    return encodeUriQuery(val, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                }
                function encodeUriQuery(val, pctEncodeSpaces) {
                    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, pctEncodeSpaces ? "%20" : "+")
                }
                function getNgAttribute(element, ngAttr) {
                    var attr, i, ii = ngAttrPrefixes.length;
                    for (i = 0; i < ii; ++i)
                        if (attr = ngAttrPrefixes[i] + ngAttr,
                        isString(attr = element.getAttribute(attr)))
                            return attr;
                    return null
                }
                function angularInit(element, bootstrap) {
                    var appElement, module, config = {};
                    if (forEach(ngAttrPrefixes, function(prefix) {
                        var name = prefix + "app";
                        !appElement && element.hasAttribute && element.hasAttribute(name) && (appElement = element,
                        module = element.getAttribute(name))
                    }),
                    forEach(ngAttrPrefixes, function(prefix) {
                        var candidate, name = prefix + "app";
                        !appElement && (candidate = element.querySelector("[" + name.replace(":", "\\:") + "]")) && (appElement = candidate,
                        module = candidate.getAttribute(name))
                    }),
                    appElement) {
                        if (!isAutoBootstrapAllowed)
                            return void window.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
                        config.strictDi = null !== getNgAttribute(appElement, "strict-di"),
                        bootstrap(appElement, module ? [module] : [], config)
                    }
                }
                function bootstrap(element, modules, config) {
                    isObject(config) || (config = {}),
                    config = extend({
                        strictDi: !1
                    }, config);
                    var doBootstrap = function() {
                        if (element = jqLite(element),
                        element.injector()) {
                            var tag = element[0] === window.document ? "document" : startingTag(element);
                            throw ngMinErr("btstrpd", "App already bootstrapped with this element '{0}'", tag.replace(/</, "&lt;").replace(/>/, "&gt;"))
                        }
                        modules = modules || [],
                        modules.unshift(["$provide", function($provide) {
                            $provide.value("$rootElement", element)
                        }
                        ]),
                        config.debugInfoEnabled && modules.push(["$compileProvider", function($compileProvider) {
                            $compileProvider.debugInfoEnabled(!0)
                        }
                        ]),
                        modules.unshift("ng");
                        var injector = createInjector(modules, config.strictDi);
                        return injector.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(scope, element, compile, injector) {
                            scope.$apply(function() {
                                element.data("$injector", injector),
                                compile(element)(scope)
                            })
                        }
                        ]),
                        injector
                    }
                      , NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/
                      , NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
                    if (window && NG_ENABLE_DEBUG_INFO.test(window.name) && (config.debugInfoEnabled = !0,
                    window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, "")),
                    window && !NG_DEFER_BOOTSTRAP.test(window.name))
                        return doBootstrap();
                    window.name = window.name.replace(NG_DEFER_BOOTSTRAP, ""),
                    angular.resumeBootstrap = function(extraModules) {
                        return forEach(extraModules, function(module) {
                            modules.push(module)
                        }),
                        doBootstrap()
                    }
                    ,
                    isFunction(angular.resumeDeferredBootstrap) && angular.resumeDeferredBootstrap()
                }
                function reloadWithDebugInfo() {
                    window.name = "NG_ENABLE_DEBUG_INFO!" + window.name,
                    window.location.reload()
                }
                function getTestability(rootElement) {
                    var injector = angular.element(rootElement).injector();
                    if (!injector)
                        throw ngMinErr("test", "no injector found for element argument to getTestability");
                    return injector.get("$$testability")
                }
                function snake_case(name, separator) {
                    return separator = separator || "_",
                    name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
                        return (pos ? separator : "") + letter.toLowerCase()
                    })
                }
                function assertArg(arg, name, reason) {
                    if (!arg)
                        throw ngMinErr("areq", "Argument '{0}' is {1}", name || "?", reason || "required");
                    return arg
                }
                function assertArgFn(arg, name, acceptArrayAnnotation) {
                    return acceptArrayAnnotation && isArray(arg) && (arg = arg[arg.length - 1]),
                    assertArg(isFunction(arg), name, "not a function, got " + (arg && "object" == typeof arg ? arg.constructor.name || "Object" : typeof arg)),
                    arg
                }
                function assertNotHasOwnProperty(name, context) {
                    if ("hasOwnProperty" === name)
                        throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context)
                }
                function getter(obj, path, bindFnToScope) {
                    if (!path)
                        return obj;
                    for (var key, keys = path.split("."), lastInstance = obj, len = keys.length, i = 0; i < len; i++)
                        key = keys[i],
                        obj && (obj = (lastInstance = obj)[key]);
                    return !bindFnToScope && isFunction(obj) ? bind(lastInstance, obj) : obj
                }
                function getBlockNodes(nodes) {
                    for (var blockNodes, node = nodes[0], endNode = nodes[nodes.length - 1], i = 1; node !== endNode && (node = node.nextSibling); i++)
                        (blockNodes || nodes[i] !== node) && (blockNodes || (blockNodes = jqLite(slice.call(nodes, 0, i))),
                        blockNodes.push(node));
                    return blockNodes || nodes
                }
                function createMap() {
                    return Object.create(null)
                }
                function stringify(value) {
                    if (null == value)
                        return "";
                    switch (typeof value) {
                    case "string":
                        break;
                    case "number":
                        value = "" + value;
                        break;
                    default:
                        value = !hasCustomToString(value) || isArray(value) || isDate(value) ? toJson(value) : value.toString()
                    }
                    return value
                }
                function setupModuleLoader(window) {
                    function ensure(obj, name, factory) {
                        return obj[name] || (obj[name] = factory())
                    }
                    var $injectorMinErr = minErr("$injector")
                      , ngMinErr = minErr("ng")
                      , angular = ensure(window, "angular", Object);
                    return angular.$$minErr = angular.$$minErr || minErr,
                    ensure(angular, "module", function() {
                        var modules = {};
                        return function(name, requires, configFn) {
                            var info = {};
                            return function(name, context) {
                                if ("hasOwnProperty" === name)
                                    throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context)
                            }(name, "module"),
                            requires && modules.hasOwnProperty(name) && (modules[name] = null),
                            ensure(modules, name, function() {
                                function invokeLater(provider, method, insertMethod, queue) {
                                    return queue || (queue = invokeQueue),
                                    function() {
                                        return queue[insertMethod || "push"]([provider, method, arguments]),
                                        moduleInstance
                                    }
                                }
                                function invokeLaterAndSetModuleName(provider, method, queue) {
                                    return queue || (queue = invokeQueue),
                                    function(recipeName, factoryFunction) {
                                        return factoryFunction && isFunction(factoryFunction) && (factoryFunction.$$moduleName = name),
                                        queue.push([provider, method, arguments]),
                                        moduleInstance
                                    }
                                }
                                if (!requires)
                                    throw $injectorMinErr("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", name);
                                var invokeQueue = []
                                  , configBlocks = []
                                  , runBlocks = []
                                  , config = invokeLater("$injector", "invoke", "push", configBlocks)
                                  , moduleInstance = {
                                    _invokeQueue: invokeQueue,
                                    _configBlocks: configBlocks,
                                    _runBlocks: runBlocks,
                                    info: function(value) {
                                        if (isDefined(value)) {
                                            if (!isObject(value))
                                                throw ngMinErr("aobj", "Argument '{0}' must be an object", "value");
                                            return info = value,
                                            this
                                        }
                                        return info
                                    },
                                    requires: requires,
                                    name: name,
                                    provider: invokeLaterAndSetModuleName("$provide", "provider"),
                                    factory: invokeLaterAndSetModuleName("$provide", "factory"),
                                    service: invokeLaterAndSetModuleName("$provide", "service"),
                                    value: invokeLater("$provide", "value"),
                                    constant: invokeLater("$provide", "constant", "unshift"),
                                    decorator: invokeLaterAndSetModuleName("$provide", "decorator", configBlocks),
                                    animation: invokeLaterAndSetModuleName("$animateProvider", "register"),
                                    filter: invokeLaterAndSetModuleName("$filterProvider", "register"),
                                    controller: invokeLaterAndSetModuleName("$controllerProvider", "register"),
                                    directive: invokeLaterAndSetModuleName("$compileProvider", "directive"),
                                    component: invokeLaterAndSetModuleName("$compileProvider", "component"),
                                    config: config,
                                    run: function(block) {
                                        return runBlocks.push(block),
                                        this
                                    }
                                };
                                return configFn && config(configFn),
                                moduleInstance
                            })
                        }
                    })
                }
                function shallowCopy(src, dst) {
                    if (isArray(src)) {
                        dst = dst || [];
                        for (var i = 0, ii = src.length; i < ii; i++)
                            dst[i] = src[i]
                    } else if (isObject(src)) {
                        dst = dst || {};
                        for (var key in src)
                            "$" === key.charAt(0) && "$" === key.charAt(1) || (dst[key] = src[key])
                    }
                    return dst || src
                }
                function serializeObject(obj, maxDepth) {
                    var seen = [];
                    return isValidObjectMaxDepth(maxDepth) && (obj = angular.copy(obj, null, maxDepth)),
                    JSON.stringify(obj, function(key, val) {
                        if (val = toJsonReplacer(key, val),
                        isObject(val)) {
                            if (seen.indexOf(val) >= 0)
                                return "...";
                            seen.push(val)
                        }
                        return val
                    })
                }
                function toDebugString(obj, maxDepth) {
                    return "function" == typeof obj ? obj.toString().replace(/ \{[\s\S]*$/, "") : isUndefined(obj) ? "undefined" : "string" != typeof obj ? serializeObject(obj, maxDepth) : obj
                }
                function jqNextId() {
                    return ++jqId
                }
                function cssKebabToCamel(name) {
                    return kebabToCamel(name.replace(MS_HACK_REGEXP, "ms-"))
                }
                function fnCamelCaseReplace(all, letter) {
                    return letter.toUpperCase()
                }
                function kebabToCamel(name) {
                    return name.replace(DASH_LOWERCASE_REGEXP, fnCamelCaseReplace)
                }
                function jqLiteIsTextNode(html) {
                    return !HTML_REGEXP.test(html)
                }
                function jqLiteAcceptsData(node) {
                    var nodeType = node.nodeType;
                    return nodeType === NODE_TYPE_ELEMENT || !nodeType || nodeType === NODE_TYPE_DOCUMENT
                }
                function jqLiteHasData(node) {
                    for (var key in jqCache[node.ng339])
                        return !0;
                    return !1
                }
                function jqLiteBuildFragment(html, context) {
                    var tmp, tag, wrap, i, fragment = context.createDocumentFragment(), nodes = [];
                    if (jqLiteIsTextNode(html))
                        nodes.push(context.createTextNode(html));
                    else {
                        for (tmp = fragment.appendChild(context.createElement("div")),
                        tag = (TAG_NAME_REGEXP.exec(html) || ["", ""])[1].toLowerCase(),
                        wrap = wrapMap[tag] || wrapMap._default,
                        tmp.innerHTML = wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2],
                        i = wrap[0]; i--; )
                            tmp = tmp.lastChild;
                        nodes = concat(nodes, tmp.childNodes),
                        tmp = fragment.firstChild,
                        tmp.textContent = ""
                    }
                    return fragment.textContent = "",
                    fragment.innerHTML = "",
                    forEach(nodes, function(node) {
                        fragment.appendChild(node)
                    }),
                    fragment
                }
                function jqLiteParseHTML(html, context) {
                    context = context || window.document;
                    var parsed;
                    return (parsed = SINGLE_TAG_REGEXP.exec(html)) ? [context.createElement(parsed[1])] : (parsed = jqLiteBuildFragment(html, context)) ? parsed.childNodes : []
                }
                function jqLiteWrapNode(node, wrapper) {
                    var parent = node.parentNode;
                    parent && parent.replaceChild(wrapper, node),
                    wrapper.appendChild(node)
                }
                function JQLite(element) {
                    if (element instanceof JQLite)
                        return element;
                    var argIsString;
                    if (isString(element) && (element = trim(element),
                    argIsString = !0),
                    !(this instanceof JQLite)) {
                        if (argIsString && "<" !== element.charAt(0))
                            throw jqLiteMinErr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                        return new JQLite(element)
                    }
                    argIsString ? jqLiteAddNodes(this, jqLiteParseHTML(element)) : isFunction(element) ? jqLiteReady(element) : jqLiteAddNodes(this, element)
                }
                function jqLiteClone(element) {
                    return element.cloneNode(!0)
                }
                function jqLiteDealoc(element, onlyDescendants) {
                    !onlyDescendants && jqLiteAcceptsData(element) && jqLite.cleanData([element]),
                    element.querySelectorAll && jqLite.cleanData(element.querySelectorAll("*"))
                }
                function jqLiteOff(element, type, fn, unsupported) {
                    if (isDefined(unsupported))
                        throw jqLiteMinErr("offargs", "jqLite#off() does not support the `selector` argument");
                    var expandoStore = jqLiteExpandoStore(element)
                      , events = expandoStore && expandoStore.events
                      , handle = expandoStore && expandoStore.handle;
                    if (handle)
                        if (type) {
                            var removeHandler = function(type) {
                                var listenerFns = events[type];
                                isDefined(fn) && arrayRemove(listenerFns || [], fn),
                                isDefined(fn) && listenerFns && listenerFns.length > 0 || (element.removeEventListener(type, handle),
                                delete events[type])
                            };
                            forEach(type.split(" "), function(type) {
                                removeHandler(type),
                                MOUSE_EVENT_MAP[type] && removeHandler(MOUSE_EVENT_MAP[type])
                            })
                        } else
                            for (type in events)
                                "$destroy" !== type && element.removeEventListener(type, handle),
                                delete events[type]
                }
                function jqLiteRemoveData(element, name) {
                    var expandoId = element.ng339
                      , expandoStore = expandoId && jqCache[expandoId];
                    if (expandoStore) {
                        if (name)
                            return void delete expandoStore.data[name];
                        expandoStore.handle && (expandoStore.events.$destroy && expandoStore.handle({}, "$destroy"),
                        jqLiteOff(element)),
                        delete jqCache[expandoId],
                        element.ng339 = void 0
                    }
                }
                function jqLiteExpandoStore(element, createIfNecessary) {
                    var expandoId = element.ng339
                      , expandoStore = expandoId && jqCache[expandoId];
                    return createIfNecessary && !expandoStore && (element.ng339 = expandoId = jqNextId(),
                    expandoStore = jqCache[expandoId] = {
                        events: {},
                        data: {},
                        handle: void 0
                    }),
                    expandoStore
                }
                function jqLiteData(element, key, value) {
                    if (jqLiteAcceptsData(element)) {
                        var prop, isSimpleSetter = isDefined(value), isSimpleGetter = !isSimpleSetter && key && !isObject(key), massGetter = !key, expandoStore = jqLiteExpandoStore(element, !isSimpleGetter), data = expandoStore && expandoStore.data;
                        if (isSimpleSetter)
                            data[kebabToCamel(key)] = value;
                        else {
                            if (massGetter)
                                return data;
                            if (isSimpleGetter)
                                return data && data[kebabToCamel(key)];
                            for (prop in key)
                                data[kebabToCamel(prop)] = key[prop]
                        }
                    }
                }
                function jqLiteHasClass(element, selector) {
                    return !!element.getAttribute && (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1
                }
                function jqLiteRemoveClass(element, cssClasses) {
                    cssClasses && element.setAttribute && forEach(cssClasses.split(" "), function(cssClass) {
                        element.setAttribute("class", trim((" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " ")))
                    })
                }
                function jqLiteAddClass(element, cssClasses) {
                    if (cssClasses && element.setAttribute) {
                        var existingClasses = (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                        forEach(cssClasses.split(" "), function(cssClass) {
                            cssClass = trim(cssClass),
                            -1 === existingClasses.indexOf(" " + cssClass + " ") && (existingClasses += cssClass + " ")
                        }),
                        element.setAttribute("class", trim(existingClasses))
                    }
                }
                function jqLiteAddNodes(root, elements) {
                    if (elements)
                        if (elements.nodeType)
                            root[root.length++] = elements;
                        else {
                            var length = elements.length;
                            if ("number" == typeof length && elements.window !== elements) {
                                if (length)
                                    for (var i = 0; i < length; i++)
                                        root[root.length++] = elements[i]
                            } else
                                root[root.length++] = elements
                        }
                }
                function jqLiteController(element, name) {
                    return jqLiteInheritedData(element, "$" + (name || "ngController") + "Controller")
                }
                function jqLiteInheritedData(element, name, value) {
                    element.nodeType === NODE_TYPE_DOCUMENT && (element = element.documentElement);
                    for (var names = isArray(name) ? name : [name]; element; ) {
                        for (var i = 0, ii = names.length; i < ii; i++)
                            if (isDefined(value = jqLite.data(element, names[i])))
                                return value;
                        element = element.parentNode || element.nodeType === NODE_TYPE_DOCUMENT_FRAGMENT && element.host
                    }
                }
                function jqLiteEmpty(element) {
                    for (jqLiteDealoc(element, !0); element.firstChild; )
                        element.removeChild(element.firstChild)
                }
                function jqLiteRemove(element, keepData) {
                    keepData || jqLiteDealoc(element);
                    var parent = element.parentNode;
                    parent && parent.removeChild(element)
                }
                function jqLiteDocumentLoaded(action, win) {
                    win = win || window,
                    "complete" === win.document.readyState ? win.setTimeout(action) : jqLite(win).on("load", action)
                }
                function jqLiteReady(fn) {
                    function trigger() {
                        window.document.removeEventListener("DOMContentLoaded", trigger),
                        window.removeEventListener("load", trigger),
                        fn()
                    }
                    "complete" === window.document.readyState ? window.setTimeout(fn) : (window.document.addEventListener("DOMContentLoaded", trigger),
                    window.addEventListener("load", trigger))
                }
                function getBooleanAttrName(element, name) {
                    var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
                    return booleanAttr && BOOLEAN_ELEMENTS[nodeName_(element)] && booleanAttr
                }
                function getAliasedAttrName(name) {
                    return ALIASED_ATTR[name]
                }
                function createEventHandler(element, events) {
                    var eventHandler = function(event, type) {
                        event.isDefaultPrevented = function() {
                            return event.defaultPrevented
                        }
                        ;
                        var eventFns = events[type || event.type]
                          , eventFnsLength = eventFns ? eventFns.length : 0;
                        if (eventFnsLength) {
                            if (isUndefined(event.immediatePropagationStopped)) {
                                var originalStopImmediatePropagation = event.stopImmediatePropagation;
                                event.stopImmediatePropagation = function() {
                                    event.immediatePropagationStopped = !0,
                                    event.stopPropagation && event.stopPropagation(),
                                    originalStopImmediatePropagation && originalStopImmediatePropagation.call(event)
                                }
                            }
                            event.isImmediatePropagationStopped = function() {
                                return !0 === event.immediatePropagationStopped
                            }
                            ;
                            var handlerWrapper = eventFns.specialHandlerWrapper || defaultHandlerWrapper;
                            eventFnsLength > 1 && (eventFns = shallowCopy(eventFns));
                            for (var i = 0; i < eventFnsLength; i++)
                                event.isImmediatePropagationStopped() || handlerWrapper(element, event, eventFns[i])
                        }
                    };
                    return eventHandler.elem = element,
                    eventHandler
                }
                function defaultHandlerWrapper(element, event, handler) {
                    handler.call(element, event)
                }
                function specialMouseHandlerWrapper(target, event, handler) {
                    var related = event.relatedTarget;
                    related && (related === target || jqLiteContains.call(target, related)) || handler.call(target, event)
                }
                function $$jqLiteProvider() {
                    this.$get = function() {
                        return extend(JQLite, {
                            hasClass: function(node, classes) {
                                return node.attr && (node = node[0]),
                                jqLiteHasClass(node, classes)
                            },
                            addClass: function(node, classes) {
                                return node.attr && (node = node[0]),
                                jqLiteAddClass(node, classes)
                            },
                            removeClass: function(node, classes) {
                                return node.attr && (node = node[0]),
                                jqLiteRemoveClass(node, classes)
                            }
                        })
                    }
                }
                function hashKey(obj, nextUidFn) {
                    var key = obj && obj.$$hashKey;
                    if (key)
                        return "function" == typeof key && (key = obj.$$hashKey()),
                        key;
                    var objType = typeof obj;
                    return key = "function" === objType || "object" === objType && null !== obj ? obj.$$hashKey = objType + ":" + (nextUidFn || nextUid)() : objType + ":" + obj
                }
                function NgMapShim() {
                    this._keys = [],
                    this._values = [],
                    this._lastKey = NaN,
                    this._lastIndex = -1
                }
                function stringifyFn(fn) {
                    return Function.prototype.toString.call(fn)
                }
                function extractArgs(fn) {
                    var fnText = stringifyFn(fn).replace(STRIP_COMMENTS, "");
                    return fnText.match(ARROW_ARG) || fnText.match(FN_ARGS)
                }
                function anonFn(fn) {
                    var args = extractArgs(fn);
                    return args ? "function(" + (args[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
                }
                function annotate(fn, strictDi, name) {
                    var $inject, argDecl, last;
                    if ("function" == typeof fn) {
                        if (!($inject = fn.$inject)) {
                            if ($inject = [],
                            fn.length) {
                                if (strictDi)
                                    throw isString(name) && name || (name = fn.name || anonFn(fn)),
                                    $injectorMinErr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", name);
                                argDecl = extractArgs(fn),
                                forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
                                    arg.replace(FN_ARG, function(all, underscore, name) {
                                        $inject.push(name)
                                    })
                                })
                            }
                            fn.$inject = $inject
                        }
                    } else
                        isArray(fn) ? (last = fn.length - 1,
                        assertArgFn(fn[last], "fn"),
                        $inject = fn.slice(0, last)) : assertArgFn(fn, "fn", !0);
                    return $inject
                }
                function createInjector(modulesToLoad, strictDi) {
                    function supportObject(delegate) {
                        return function(key, value) {
                            if (!isObject(key))
                                return delegate(key, value);
                            forEach(key, reverseParams(delegate))
                        }
                    }
                    function provider(name, provider_) {
                        if (assertNotHasOwnProperty(name, "service"),
                        (isFunction(provider_) || isArray(provider_)) && (provider_ = providerInjector.instantiate(provider_)),
                        !provider_.$get)
                            throw $injectorMinErr("pget", "Provider '{0}' must define $get factory method.", name);
                        return providerCache[name + providerSuffix] = provider_
                    }
                    function enforceReturnValue(name, factory) {
                        return function() {
                            var result = instanceInjector.invoke(factory, this);
                            if (isUndefined(result))
                                throw $injectorMinErr("undef", "Provider '{0}' must return a value from $get factory method.", name);
                            return result
                        }
                    }
                    function factory(name, factoryFn, enforce) {
                        return provider(name, {
                            $get: !1 !== enforce ? enforceReturnValue(name, factoryFn) : factoryFn
                        })
                    }
                    function service(name, constructor) {
                        return factory(name, ["$injector", function($injector) {
                            return $injector.instantiate(constructor)
                        }
                        ])
                    }
                    function value(name, val) {
                        return factory(name, valueFn(val), !1)
                    }
                    function constant(name, value) {
                        assertNotHasOwnProperty(name, "constant"),
                        providerCache[name] = value,
                        instanceCache[name] = value
                    }
                    function decorator(serviceName, decorFn) {
                        var origProvider = providerInjector.get(serviceName + providerSuffix)
                          , orig$get = origProvider.$get;
                        origProvider.$get = function() {
                            var origInstance = instanceInjector.invoke(orig$get, origProvider);
                            return instanceInjector.invoke(decorFn, null, {
                                $delegate: origInstance
                            })
                        }
                    }
                    function loadModules(modulesToLoad) {
                        assertArg(isUndefined(modulesToLoad) || isArray(modulesToLoad), "modulesToLoad", "not an array");
                        var moduleFn, runBlocks = [];
                        return forEach(modulesToLoad, function(module) {
                            function runInvokeQueue(queue) {
                                var i, ii;
                                for (i = 0,
                                ii = queue.length; i < ii; i++) {
                                    var invokeArgs = queue[i]
                                      , provider = providerInjector.get(invokeArgs[0]);
                                    provider[invokeArgs[1]].apply(provider, invokeArgs[2])
                                }
                            }
                            if (!loadedModules.get(module)) {
                                loadedModules.set(module, !0);
                                try {
                                    isString(module) ? (moduleFn = angularModule(module),
                                    instanceInjector.modules[module] = moduleFn,
                                    runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks),
                                    runInvokeQueue(moduleFn._invokeQueue),
                                    runInvokeQueue(moduleFn._configBlocks)) : isFunction(module) ? runBlocks.push(providerInjector.invoke(module)) : isArray(module) ? runBlocks.push(providerInjector.invoke(module)) : assertArgFn(module, "module")
                                } catch (e) {
                                    throw isArray(module) && (module = module[module.length - 1]),
                                    e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack),
                                    $injectorMinErr("modulerr", "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e)
                                }
                            }
                        }),
                        runBlocks
                    }
                    function createInternalInjector(cache, factory) {
                        function getService(serviceName, caller) {
                            if (cache.hasOwnProperty(serviceName)) {
                                if (cache[serviceName] === INSTANTIATING)
                                    throw $injectorMinErr("cdep", "Circular dependency found: {0}", serviceName + " <- " + path.join(" <- "));
                                return cache[serviceName]
                            }
                            try {
                                return path.unshift(serviceName),
                                cache[serviceName] = INSTANTIATING,
                                cache[serviceName] = factory(serviceName, caller),
                                cache[serviceName]
                            } catch (err) {
                                throw cache[serviceName] === INSTANTIATING && delete cache[serviceName],
                                err
                            } finally {
                                path.shift()
                            }
                        }
                        function injectionArgs(fn, locals, serviceName) {
                            for (var args = [], $inject = createInjector.$$annotate(fn, strictDi, serviceName), i = 0, length = $inject.length; i < length; i++) {
                                var key = $inject[i];
                                if ("string" != typeof key)
                                    throw $injectorMinErr("itkn", "Incorrect injection token! Expected service name as string, got {0}", key);
                                args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key, serviceName))
                            }
                            return args
                        }
                        function isClass(func) {
                            if (msie || "function" != typeof func)
                                return !1;
                            var result = func.$$ngIsClass;
                            return isBoolean(result) || (result = func.$$ngIsClass = /^(?:class\b|constructor\()/.test(stringifyFn(func))),
                            result
                        }
                        function invoke(fn, self, locals, serviceName) {
                            "string" == typeof locals && (serviceName = locals,
                            locals = null);
                            var args = injectionArgs(fn, locals, serviceName);
                            return isArray(fn) && (fn = fn[fn.length - 1]),
                            isClass(fn) ? (args.unshift(null),
                            new (Function.prototype.bind.apply(fn, args))) : fn.apply(self, args)
                        }
                        function instantiate(Type, locals, serviceName) {
                            var ctor = isArray(Type) ? Type[Type.length - 1] : Type
                              , args = injectionArgs(Type, locals, serviceName);
                            return args.unshift(null),
                            new (Function.prototype.bind.apply(ctor, args))
                        }
                        return {
                            invoke: invoke,
                            instantiate: instantiate,
                            get: getService,
                            annotate: createInjector.$$annotate,
                            has: function(name) {
                                return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name)
                            }
                        }
                    }
                    strictDi = !0 === strictDi;
                    var INSTANTIATING = {}
                      , providerSuffix = "Provider"
                      , path = []
                      , loadedModules = new NgMap
                      , providerCache = {
                        $provide: {
                            provider: supportObject(provider),
                            factory: supportObject(factory),
                            service: supportObject(service),
                            value: supportObject(value),
                            constant: supportObject(constant),
                            decorator: decorator
                        }
                    }
                      , providerInjector = providerCache.$injector = createInternalInjector(providerCache, function(serviceName, caller) {
                        throw angular.isString(caller) && path.push(caller),
                        $injectorMinErr("unpr", "Unknown provider: {0}", path.join(" <- "))
                    })
                      , instanceCache = {}
                      , protoInstanceInjector = createInternalInjector(instanceCache, function(serviceName, caller) {
                        var provider = providerInjector.get(serviceName + providerSuffix, caller);
                        return instanceInjector.invoke(provider.$get, provider, void 0, serviceName)
                    })
                      , instanceInjector = protoInstanceInjector;
                    providerCache["$injector" + providerSuffix] = {
                        $get: valueFn(protoInstanceInjector)
                    },
                    instanceInjector.modules = providerInjector.modules = createMap();
                    var runBlocks = loadModules(modulesToLoad);
                    return instanceInjector = protoInstanceInjector.get("$injector"),
                    instanceInjector.strictDi = strictDi,
                    forEach(runBlocks, function(fn) {
                        fn && instanceInjector.invoke(fn)
                    }),
                    instanceInjector
                }
                function $AnchorScrollProvider() {
                    var autoScrollingEnabled = !0;
                    this.disableAutoScrolling = function() {
                        autoScrollingEnabled = !1
                    }
                    ,
                    this.$get = ["$window", "$location", "$rootScope", function($window, $location, $rootScope) {
                        function getFirstAnchor(list) {
                            var result = null;
                            return Array.prototype.some.call(list, function(element) {
                                if ("a" === nodeName_(element))
                                    return result = element,
                                    !0
                            }),
                            result
                        }
                        function getYOffset() {
                            var offset = scroll.yOffset;
                            if (isFunction(offset))
                                offset = offset();
                            else if (isElement(offset)) {
                                var elem = offset[0]
                                  , style = $window.getComputedStyle(elem);
                                offset = "fixed" !== style.position ? 0 : elem.getBoundingClientRect().bottom
                            } else
                                isNumber(offset) || (offset = 0);
                            return offset
                        }
                        function scrollTo(elem) {
                            if (elem) {
                                elem.scrollIntoView();
                                var offset = getYOffset();
                                if (offset) {
                                    var elemTop = elem.getBoundingClientRect().top;
                                    $window.scrollBy(0, elemTop - offset)
                                }
                            } else
                                $window.scrollTo(0, 0)
                        }
                        function scroll(hash) {
                            hash = isString(hash) ? hash : isNumber(hash) ? hash.toString() : $location.hash();
                            var elm;
                            hash ? (elm = document.getElementById(hash)) ? scrollTo(elm) : (elm = getFirstAnchor(document.getElementsByName(hash))) ? scrollTo(elm) : "top" === hash && scrollTo(null) : scrollTo(null)
                        }
                        var document = $window.document;
                        return autoScrollingEnabled && $rootScope.$watch(function() {
                            return $location.hash()
                        }, function(newVal, oldVal) {
                            newVal === oldVal && "" === newVal || jqLiteDocumentLoaded(function() {
                                $rootScope.$evalAsync(scroll)
                            })
                        }),
                        scroll
                    }
                    ]
                }
                function mergeClasses(a, b) {
                    return a || b ? a ? b ? (isArray(a) && (a = a.join(" ")),
                    isArray(b) && (b = b.join(" ")),
                    a + " " + b) : a : b : ""
                }
                function extractElementNode(element) {
                    for (var i = 0; i < element.length; i++) {
                        var elm = element[i];
                        if (elm.nodeType === ELEMENT_NODE)
                            return elm
                    }
                }
                function splitClasses(classes) {
                    isString(classes) && (classes = classes.split(" "));
                    var obj = createMap();
                    return forEach(classes, function(klass) {
                        klass.length && (obj[klass] = !0)
                    }),
                    obj
                }
                function prepareAnimateOptions(options) {
                    return isObject(options) ? options : {}
                }
                function Browser(window, document, $log, $sniffer) {
                    function completeOutstandingRequest(fn) {
                        try {
                            fn.apply(null, sliceArgs(arguments, 1))
                        } finally {
                            if (0 === --outstandingRequestCount)
                                for (; outstandingRequestCallbacks.length; )
                                    try {
                                        outstandingRequestCallbacks.pop()()
                                    } catch (e) {
                                        $log.error(e)
                                    }
                        }
                    }
                    function getHash(url) {
                        var index = url.indexOf("#");
                        return -1 === index ? "" : url.substr(index)
                    }
                    function cacheStateAndFireUrlChange() {
                        pendingLocation = null,
                        fireStateOrUrlChange()
                    }
                    function cacheState() {
                        cachedState = getCurrentState(),
                        cachedState = isUndefined(cachedState) ? null : cachedState,
                        equals(cachedState, lastCachedState) && (cachedState = lastCachedState),
                        lastCachedState = cachedState,
                        lastHistoryState = cachedState
                    }
                    function fireStateOrUrlChange() {
                        var prevLastHistoryState = lastHistoryState;
                        cacheState(),
                        lastBrowserUrl === self.url() && prevLastHistoryState === cachedState || (lastBrowserUrl = self.url(),
                        lastHistoryState = cachedState,
                        forEach(urlChangeListeners, function(listener) {
                            listener(self.url(), cachedState)
                        }))
                    }
                    var self = this
                      , location = window.location
                      , history = window.history
                      , setTimeout = window.setTimeout
                      , clearTimeout = window.clearTimeout
                      , pendingDeferIds = {};
                    self.isMock = !1;
                    var outstandingRequestCount = 0
                      , outstandingRequestCallbacks = [];
                    self.$$completeOutstandingRequest = completeOutstandingRequest,
                    self.$$incOutstandingRequestCount = function() {
                        outstandingRequestCount++
                    }
                    ,
                    self.notifyWhenNoOutstandingRequests = function(callback) {
                        0 === outstandingRequestCount ? callback() : outstandingRequestCallbacks.push(callback)
                    }
                    ;
                    var cachedState, lastHistoryState, lastBrowserUrl = location.href, baseElement = document.find("base"), pendingLocation = null, getCurrentState = $sniffer.history ? function() {
                        try {
                            return history.state
                        } catch (e) {}
                    }
                    : noop;
                    cacheState(),
                    self.url = function(url, replace, state) {
                        if (isUndefined(state) && (state = null),
                        location !== window.location && (location = window.location),
                        history !== window.history && (history = window.history),
                        url) {
                            var sameState = lastHistoryState === state;
                            if (lastBrowserUrl === url && (!$sniffer.history || sameState))
                                return self;
                            var sameBase = lastBrowserUrl && stripHash(lastBrowserUrl) === stripHash(url);
                            return lastBrowserUrl = url,
                            lastHistoryState = state,
                            !$sniffer.history || sameBase && sameState ? (sameBase || (pendingLocation = url),
                            replace ? location.replace(url) : sameBase ? location.hash = getHash(url) : location.href = url,
                            location.href !== url && (pendingLocation = url)) : (history[replace ? "replaceState" : "pushState"](state, "", url),
                            cacheState()),
                            pendingLocation && (pendingLocation = url),
                            self
                        }
                        return pendingLocation || location.href.replace(/%27/g, "'")
                    }
                    ,
                    self.state = function() {
                        return cachedState
                    }
                    ;
                    var urlChangeListeners = []
                      , urlChangeInit = !1
                      , lastCachedState = null;
                    self.onUrlChange = function(callback) {
                        return urlChangeInit || ($sniffer.history && jqLite(window).on("popstate", cacheStateAndFireUrlChange),
                        jqLite(window).on("hashchange", cacheStateAndFireUrlChange),
                        urlChangeInit = !0),
                        urlChangeListeners.push(callback),
                        callback
                    }
                    ,
                    self.$$applicationDestroyed = function() {
                        jqLite(window).off("hashchange popstate", cacheStateAndFireUrlChange)
                    }
                    ,
                    self.$$checkUrlChange = fireStateOrUrlChange,
                    self.baseHref = function() {
                        var href = baseElement.attr("href");
                        return href ? href.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
                    }
                    ,
                    self.defer = function(fn, delay) {
                        var timeoutId;
                        return outstandingRequestCount++,
                        timeoutId = setTimeout(function() {
                            delete pendingDeferIds[timeoutId],
                            completeOutstandingRequest(fn)
                        }, delay || 0),
                        pendingDeferIds[timeoutId] = !0,
                        timeoutId
                    }
                    ,
                    self.defer.cancel = function(deferId) {
                        return !!pendingDeferIds[deferId] && (delete pendingDeferIds[deferId],
                        clearTimeout(deferId),
                        completeOutstandingRequest(noop),
                        !0)
                    }
                }
                function $BrowserProvider() {
                    this.$get = ["$window", "$log", "$sniffer", "$document", function($window, $log, $sniffer, $document) {
                        return new Browser($window,$document,$log,$sniffer)
                    }
                    ]
                }
                function $CacheFactoryProvider() {
                    this.$get = function() {
                        function cacheFactory(cacheId, options) {
                            function refresh(entry) {
                                entry !== freshEnd && (staleEnd ? staleEnd === entry && (staleEnd = entry.n) : staleEnd = entry,
                                link(entry.n, entry.p),
                                link(entry, freshEnd),
                                freshEnd = entry,
                                freshEnd.n = null)
                            }
                            function link(nextEntry, prevEntry) {
                                nextEntry !== prevEntry && (nextEntry && (nextEntry.p = prevEntry),
                                prevEntry && (prevEntry.n = nextEntry))
                            }
                            if (cacheId in caches)
                                throw minErr("$cacheFactory")("iid", "CacheId '{0}' is already taken!", cacheId);
                            var size = 0
                              , stats = extend({}, options, {
                                id: cacheId
                            })
                              , data = createMap()
                              , capacity = options && options.capacity || Number.MAX_VALUE
                              , lruHash = createMap()
                              , freshEnd = null
                              , staleEnd = null;
                            return caches[cacheId] = {
                                put: function(key, value) {
                                    if (!isUndefined(value)) {
                                        if (capacity < Number.MAX_VALUE) {
                                            refresh(lruHash[key] || (lruHash[key] = {
                                                key: key
                                            }))
                                        }
                                        return key in data || size++,
                                        data[key] = value,
                                        size > capacity && this.remove(staleEnd.key),
                                        value
                                    }
                                },
                                get: function(key) {
                                    if (capacity < Number.MAX_VALUE) {
                                        var lruEntry = lruHash[key];
                                        if (!lruEntry)
                                            return;
                                        refresh(lruEntry)
                                    }
                                    return data[key]
                                },
                                remove: function(key) {
                                    if (capacity < Number.MAX_VALUE) {
                                        var lruEntry = lruHash[key];
                                        if (!lruEntry)
                                            return;
                                        lruEntry === freshEnd && (freshEnd = lruEntry.p),
                                        lruEntry === staleEnd && (staleEnd = lruEntry.n),
                                        link(lruEntry.n, lruEntry.p),
                                        delete lruHash[key]
                                    }
                                    key in data && (delete data[key],
                                    size--)
                                },
                                removeAll: function() {
                                    data = createMap(),
                                    size = 0,
                                    lruHash = createMap(),
                                    freshEnd = staleEnd = null
                                },
                                destroy: function() {
                                    data = null,
                                    stats = null,
                                    lruHash = null,
                                    delete caches[cacheId]
                                },
                                info: function() {
                                    return extend({}, stats, {
                                        size: size
                                    })
                                }
                            }
                        }
                        var caches = {};
                        return cacheFactory.info = function() {
                            var info = {};
                            return forEach(caches, function(cache, cacheId) {
                                info[cacheId] = cache.info()
                            }),
                            info
                        }
                        ,
                        cacheFactory.get = function(cacheId) {
                            return caches[cacheId]
                        }
                        ,
                        cacheFactory
                    }
                }
                function $TemplateCacheProvider() {
                    this.$get = ["$cacheFactory", function($cacheFactory) {
                        return $cacheFactory("templates")
                    }
                    ]
                }
                function UNINITIALIZED_VALUE() {}
                function $CompileProvider($provide, $$sanitizeUriProvider) {
                    function parseIsolateBindings(scope, directiveName, isController) {
                        var LOCAL_REGEXP = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/
                          , bindings = createMap();
                        return forEach(scope, function(definition, scopeName) {
                            if (definition in bindingCache)
                                return void (bindings[scopeName] = bindingCache[definition]);
                            var match = definition.match(LOCAL_REGEXP);
                            if (!match)
                                throw $compileMinErr("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", directiveName, scopeName, definition, isController ? "controller bindings definition" : "isolate scope definition");
                            bindings[scopeName] = {
                                mode: match[1][0],
                                collection: "*" === match[2],
                                optional: "?" === match[3],
                                attrName: match[4] || scopeName
                            },
                            match[4] && (bindingCache[definition] = bindings[scopeName])
                        }),
                        bindings
                    }
                    function parseDirectiveBindings(directive, directiveName) {
                        var bindings = {
                            isolateScope: null,
                            bindToController: null
                        };
                        if (isObject(directive.scope) && (!0 === directive.bindToController ? (bindings.bindToController = parseIsolateBindings(directive.scope, directiveName, !0),
                        bindings.isolateScope = {}) : bindings.isolateScope = parseIsolateBindings(directive.scope, directiveName, !1)),
                        isObject(directive.bindToController) && (bindings.bindToController = parseIsolateBindings(directive.bindToController, directiveName, !0)),
                        bindings.bindToController && !directive.controller)
                            throw $compileMinErr("noctrl", "Cannot bind to controller without directive '{0}'s controller.", directiveName);
                        return bindings
                    }
                    function assertValidDirectiveName(name) {
                        var letter = name.charAt(0);
                        if (!letter || letter !== lowercase(letter))
                            throw $compileMinErr("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", name);
                        if (name !== name.trim())
                            throw $compileMinErr("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", name)
                    }
                    function getDirectiveRequire(directive) {
                        var require = directive.require || directive.controller && directive.name;
                        return !isArray(require) && isObject(require) && forEach(require, function(value, key) {
                            var match = value.match(REQUIRE_PREFIX_REGEXP);
                            value.substring(match[0].length) || (require[key] = match[0] + key)
                        }),
                        require
                    }
                    function getDirectiveRestrict(restrict, name) {
                        if (restrict && (!isString(restrict) || !/[EACM]/.test(restrict)))
                            throw $compileMinErr("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", restrict, name);
                        return restrict || "EA"
                    }
                    var hasDirectives = {}
                      , Suffix = "Directive"
                      , COMMENT_DIRECTIVE_REGEXP = /^\s*directive:\s*([\w-]+)\s+(.*)$/
                      , CLASS_DIRECTIVE_REGEXP = /(([\w-]+)(?::([^;]+))?;?)/
                      , ALL_OR_NOTHING_ATTRS = makeMap("ngSrc,ngSrcset,src,srcset")
                      , REQUIRE_PREFIX_REGEXP = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/
                      , EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/
                      , bindingCache = createMap();
                    this.directive = function registerDirective(name, directiveFactory) {
                        return assertArg(name, "name"),
                        assertNotHasOwnProperty(name, "directive"),
                        isString(name) ? (assertValidDirectiveName(name),
                        assertArg(directiveFactory, "directiveFactory"),
                        hasDirectives.hasOwnProperty(name) || (hasDirectives[name] = [],
                        $provide.factory(name + Suffix, ["$injector", "$exceptionHandler", function($injector, $exceptionHandler) {
                            var directives = [];
                            return forEach(hasDirectives[name], function(directiveFactory, index) {
                                try {
                                    var directive = $injector.invoke(directiveFactory);
                                    isFunction(directive) ? directive = {
                                        compile: valueFn(directive)
                                    } : !directive.compile && directive.link && (directive.compile = valueFn(directive.link)),
                                    directive.priority = directive.priority || 0,
                                    directive.index = index,
                                    directive.name = directive.name || name,
                                    directive.require = getDirectiveRequire(directive),
                                    directive.restrict = getDirectiveRestrict(directive.restrict, name),
                                    directive.$$moduleName = directiveFactory.$$moduleName,
                                    directives.push(directive)
                                } catch (e) {
                                    $exceptionHandler(e)
                                }
                            }),
                            directives
                        }
                        ])),
                        hasDirectives[name].push(directiveFactory)) : forEach(name, reverseParams(registerDirective)),
                        this
                    }
                    ,
                    this.component = function registerComponent(name, options) {
                        function factory($injector) {
                            function makeInjectable(fn) {
                                return isFunction(fn) || isArray(fn) ? function(tElement, tAttrs) {
                                    return $injector.invoke(fn, this, {
                                        $element: tElement,
                                        $attrs: tAttrs
                                    })
                                }
                                : fn
                            }
                            var template = options.template || options.templateUrl ? options.template : ""
                              , ddo = {
                                controller: controller,
                                controllerAs: identifierForController(options.controller) || options.controllerAs || "$ctrl",
                                template: makeInjectable(template),
                                templateUrl: makeInjectable(options.templateUrl),
                                transclude: options.transclude,
                                scope: {},
                                bindToController: options.bindings || {},
                                restrict: "E",
                                require: options.require
                            };
                            return forEach(options, function(val, key) {
                                "$" === key.charAt(0) && (ddo[key] = val)
                            }),
                            ddo
                        }
                        if (!isString(name))
                            return forEach(name, reverseParams(bind(this, registerComponent))),
                            this;
                        var controller = options.controller || function() {}
                        ;
                        return forEach(options, function(val, key) {
                            "$" === key.charAt(0) && (factory[key] = val,
                            isFunction(controller) && (controller[key] = val))
                        }),
                        factory.$inject = ["$injector"],
                        this.directive(name, factory)
                    }
                    ,
                    this.aHrefSanitizationWhitelist = function(regexp) {
                        return isDefined(regexp) ? ($$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp),
                        this) : $$sanitizeUriProvider.aHrefSanitizationWhitelist()
                    }
                    ,
                    this.imgSrcSanitizationWhitelist = function(regexp) {
                        return isDefined(regexp) ? ($$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp),
                        this) : $$sanitizeUriProvider.imgSrcSanitizationWhitelist()
                    }
                    ;
                    var debugInfoEnabled = !0;
                    this.debugInfoEnabled = function(enabled) {
                        return isDefined(enabled) ? (debugInfoEnabled = enabled,
                        this) : debugInfoEnabled
                    }
                    ;
                    var preAssignBindingsEnabled = !1;
                    this.preAssignBindingsEnabled = function(enabled) {
                        return isDefined(enabled) ? (preAssignBindingsEnabled = enabled,
                        this) : preAssignBindingsEnabled
                    }
                    ;
                    var TTL = 10;
                    this.onChangesTtl = function(value) {
                        return arguments.length ? (TTL = value,
                        this) : TTL
                    }
                    ;
                    var commentDirectivesEnabledConfig = !0;
                    this.commentDirectivesEnabled = function(value) {
                        return arguments.length ? (commentDirectivesEnabledConfig = value,
                        this) : commentDirectivesEnabledConfig
                    }
                    ;
                    var cssClassDirectivesEnabledConfig = !0;
                    this.cssClassDirectivesEnabled = function(value) {
                        return arguments.length ? (cssClassDirectivesEnabledConfig = value,
                        this) : cssClassDirectivesEnabledConfig
                    }
                    ,
                    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function($injector, $interpolate, $exceptionHandler, $templateRequest, $parse, $controller, $rootScope, $sce, $animate, $$sanitizeUri) {
                        function flushOnChangesQueue() {
                            try {
                                if (!--onChangesTtl)
                                    throw onChangesQueue = void 0,
                                    $compileMinErr("infchng", "{0} $onChanges() iterations reached. Aborting!\n", TTL);
                                $rootScope.$apply(function() {
                                    for (var errors = [], i = 0, ii = onChangesQueue.length; i < ii; ++i)
                                        try {
                                            onChangesQueue[i]()
                                        } catch (e) {
                                            errors.push(e)
                                        }
                                    if (onChangesQueue = void 0,
                                    errors.length)
                                        throw errors
                                })
                            } finally {
                                onChangesTtl++
                            }
                        }
                        function Attributes(element, attributesToCopy) {
                            if (attributesToCopy) {
                                var i, l, key, keys = Object.keys(attributesToCopy);
                                for (i = 0,
                                l = keys.length; i < l; i++)
                                    key = keys[i],
                                    this[key] = attributesToCopy[key]
                            } else
                                this.$attr = {};
                            this.$$element = element
                        }
                        function setSpecialAttr(element, attrName, value) {
                            specialAttrHolder.innerHTML = "<span " + attrName + ">";
                            var attributes = specialAttrHolder.firstChild.attributes
                              , attribute = attributes[0];
                            attributes.removeNamedItem(attribute.name),
                            attribute.value = value,
                            element.attributes.setNamedItem(attribute)
                        }
                        function safeAddClass($element, className) {
                            try {
                                $element.addClass(className)
                            } catch (e) {}
                        }
                        function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                            $compileNodes instanceof jqLite || ($compileNodes = jqLite($compileNodes));
                            var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
                            compile.$$addScopeClass($compileNodes);
                            var namespace = null;
                            return function(scope, cloneConnectFn, options) {
                                if (!$compileNodes)
                                    throw $compileMinErr("multilink", "This element has already been linked.");
                                assertArg(scope, "scope"),
                                previousCompileContext && previousCompileContext.needsNewScope && (scope = scope.$parent.$new()),
                                options = options || {};
                                var parentBoundTranscludeFn = options.parentBoundTranscludeFn
                                  , transcludeControllers = options.transcludeControllers
                                  , futureParentElement = options.futureParentElement;
                                parentBoundTranscludeFn && parentBoundTranscludeFn.$$boundTransclude && (parentBoundTranscludeFn = parentBoundTranscludeFn.$$boundTransclude),
                                namespace || (namespace = detectNamespaceForChildElements(futureParentElement));
                                var $linkNode;
                                if ($linkNode = "html" !== namespace ? jqLite(wrapTemplate(namespace, jqLite("<div>").append($compileNodes).html())) : cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes,
                                transcludeControllers)
                                    for (var controllerName in transcludeControllers)
                                        $linkNode.data("$" + controllerName + "Controller", transcludeControllers[controllerName].instance);
                                return compile.$$addScopeInfo($linkNode, scope),
                                cloneConnectFn && cloneConnectFn($linkNode, scope),
                                compositeLinkFn && compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn),
                                cloneConnectFn || ($compileNodes = compositeLinkFn = null),
                                $linkNode
                            }
                        }
                        function detectNamespaceForChildElements(parentElement) {
                            var node = parentElement && parentElement[0];
                            return node && "foreignobject" !== nodeName_(node) && toString.call(node).match(/SVG/) ? "svg" : "html"
                        }
                        function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
                            function compositeLinkFn(scope, nodeList, $rootElement, parentBoundTranscludeFn) {
                                var nodeLinkFn, childLinkFn, node, childScope, i, ii, idx, childBoundTranscludeFn, stableNodeList;
                                if (nodeLinkFnFound) {
                                    var nodeListLength = nodeList.length;
                                    for (stableNodeList = new Array(nodeListLength),
                                    i = 0; i < linkFns.length; i += 3)
                                        idx = linkFns[i],
                                        stableNodeList[idx] = nodeList[idx]
                                } else
                                    stableNodeList = nodeList;
                                for (i = 0,
                                ii = linkFns.length; i < ii; )
                                    node = stableNodeList[linkFns[i++]],
                                    nodeLinkFn = linkFns[i++],
                                    childLinkFn = linkFns[i++],
                                    nodeLinkFn ? (nodeLinkFn.scope ? (childScope = scope.$new(),
                                    compile.$$addScopeInfo(jqLite(node), childScope)) : childScope = scope,
                                    childBoundTranscludeFn = nodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, nodeLinkFn.transclude, parentBoundTranscludeFn) : !nodeLinkFn.templateOnThisElement && parentBoundTranscludeFn ? parentBoundTranscludeFn : !parentBoundTranscludeFn && transcludeFn ? createBoundTranscludeFn(scope, transcludeFn) : null,
                                    nodeLinkFn(childLinkFn, childScope, node, $rootElement, childBoundTranscludeFn)) : childLinkFn && childLinkFn(scope, node.childNodes, void 0, parentBoundTranscludeFn)
                            }
                            for (var attrs, directives, nodeLinkFn, childNodes, childLinkFn, linkFnFound, nodeLinkFnFound, linkFns = [], notLiveList = isArray(nodeList) || nodeList instanceof jqLite, i = 0; i < nodeList.length; i++)
                                attrs = new Attributes,
                                11 === msie && mergeConsecutiveTextNodes(nodeList, i, notLiveList),
                                directives = collectDirectives(nodeList[i], [], attrs, 0 === i ? maxPriority : void 0, ignoreDirective),
                                nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null,
                                nodeLinkFn && nodeLinkFn.scope && compile.$$addScopeClass(attrs.$$element),
                                childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length ? null : compileNodes(childNodes, nodeLinkFn ? (nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement) && nodeLinkFn.transclude : transcludeFn),
                                (nodeLinkFn || childLinkFn) && (linkFns.push(i, nodeLinkFn, childLinkFn),
                                linkFnFound = !0,
                                nodeLinkFnFound = nodeLinkFnFound || nodeLinkFn),
                                previousCompileContext = null;
                            return linkFnFound ? compositeLinkFn : null
                        }
                        function mergeConsecutiveTextNodes(nodeList, idx, notLiveList) {
                            var sibling, node = nodeList[idx], parent = node.parentNode;
                            if (node.nodeType === NODE_TYPE_TEXT)
                                for (; ; ) {
                                    if (!(sibling = parent ? node.nextSibling : nodeList[idx + 1]) || sibling.nodeType !== NODE_TYPE_TEXT)
                                        break;
                                    node.nodeValue = node.nodeValue + sibling.nodeValue,
                                    sibling.parentNode && sibling.parentNode.removeChild(sibling),
                                    notLiveList && sibling === nodeList[idx + 1] && nodeList.splice(idx + 1, 1)
                                }
                        }
                        function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn) {
                            function boundTranscludeFn(transcludedScope, cloneFn, controllers, futureParentElement, containingScope) {
                                return transcludedScope || (transcludedScope = scope.$new(!1, containingScope),
                                transcludedScope.$$transcluded = !0),
                                transcludeFn(transcludedScope, cloneFn, {
                                    parentBoundTranscludeFn: previousBoundTranscludeFn,
                                    transcludeControllers: controllers,
                                    futureParentElement: futureParentElement
                                })
                            }
                            var boundSlots = boundTranscludeFn.$$slots = createMap();
                            for (var slotName in transcludeFn.$$slots)
                                transcludeFn.$$slots[slotName] ? boundSlots[slotName] = createBoundTranscludeFn(scope, transcludeFn.$$slots[slotName], previousBoundTranscludeFn) : boundSlots[slotName] = null;
                            return boundTranscludeFn
                        }
                        function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                            var match, nodeName, className, nodeType = node.nodeType, attrsMap = attrs.$attr;
                            switch (nodeType) {
                            case NODE_TYPE_ELEMENT:
                                nodeName = nodeName_(node),
                                addDirective(directives, directiveNormalize(nodeName), "E", maxPriority, ignoreDirective);
                                for (var attr, name, nName, ngAttrName, value, isNgAttr, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; j < jj; j++) {
                                    var attrStartName = !1
                                      , attrEndName = !1;
                                    attr = nAttrs[j],
                                    name = attr.name,
                                    value = attr.value,
                                    ngAttrName = directiveNormalize(name),
                                    isNgAttr = NG_ATTR_BINDING.test(ngAttrName),
                                    isNgAttr && (name = name.replace(PREFIX_REGEXP, "").substr(8).replace(/_(.)/g, function(match, letter) {
                                        return letter.toUpperCase()
                                    }));
                                    var multiElementMatch = ngAttrName.match(MULTI_ELEMENT_DIR_RE);
                                    multiElementMatch && directiveIsMultiElement(multiElementMatch[1]) && (attrStartName = name,
                                    attrEndName = name.substr(0, name.length - 5) + "end",
                                    name = name.substr(0, name.length - 6)),
                                    nName = directiveNormalize(name.toLowerCase()),
                                    attrsMap[nName] = name,
                                    !isNgAttr && attrs.hasOwnProperty(nName) || (attrs[nName] = value,
                                    getBooleanAttrName(node, nName) && (attrs[nName] = !0)),
                                    addAttrInterpolateDirective(node, directives, value, nName, isNgAttr),
                                    addDirective(directives, nName, "A", maxPriority, ignoreDirective, attrStartName, attrEndName)
                                }
                                if ("input" === nodeName && "hidden" === node.getAttribute("type") && node.setAttribute("autocomplete", "off"),
                                !cssClassDirectivesEnabled)
                                    break;
                                if (className = node.className,
                                isObject(className) && (className = className.animVal),
                                isString(className) && "" !== className)
                                    for (; match = CLASS_DIRECTIVE_REGEXP.exec(className); )
                                        nName = directiveNormalize(match[2]),
                                        addDirective(directives, nName, "C", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[3])),
                                        className = className.substr(match.index + match[0].length);
                                break;
                            case NODE_TYPE_TEXT:
                                addTextInterpolateDirective(directives, node.nodeValue);
                                break;
                            case NODE_TYPE_COMMENT:
                                if (!commentDirectivesEnabled)
                                    break;
                                collectCommentDirectives(node, directives, attrs, maxPriority, ignoreDirective)
                            }
                            return directives.sort(byPriority),
                            directives
                        }
                        function collectCommentDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                            try {
                                var match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
                                if (match) {
                                    var nName = directiveNormalize(match[1]);
                                    addDirective(directives, nName, "M", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[2]))
                                }
                            } catch (e) {}
                        }
                        function groupScan(node, attrStart, attrEnd) {
                            var nodes = []
                              , depth = 0;
                            if (attrStart && node.hasAttribute && node.hasAttribute(attrStart))
                                do {
                                    if (!node)
                                        throw $compileMinErr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                                    node.nodeType === NODE_TYPE_ELEMENT && (node.hasAttribute(attrStart) && depth++,
                                    node.hasAttribute(attrEnd) && depth--),
                                    nodes.push(node),
                                    node = node.nextSibling
                                } while (depth > 0);
                            else
                                nodes.push(node);
                            return jqLite(nodes)
                        }
                        function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
                            return function(scope, element, attrs, controllers, transcludeFn) {
                                return element = groupScan(element[0], attrStart, attrEnd),
                                linkFn(scope, element, attrs, controllers, transcludeFn)
                            }
                        }
                        function compilationGenerator(eager, $compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                            var compiled;
                            return eager ? compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) : function() {
                                return compiled || (compiled = compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext),
                                $compileNodes = transcludeFn = previousCompileContext = null),
                                compiled.apply(this, arguments)
                            }
                        }
                        function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
                            function addLinkFns(pre, post, attrStart, attrEnd) {
                                pre && (attrStart && (pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd)),
                                pre.require = directive.require,
                                pre.directiveName = directiveName,
                                (newIsolateScopeDirective === directive || directive.$$isolateScope) && (pre = cloneAndAnnotateFn(pre, {
                                    isolateScope: !0
                                })),
                                preLinkFns.push(pre)),
                                post && (attrStart && (post = groupElementsLinkFnWrapper(post, attrStart, attrEnd)),
                                post.require = directive.require,
                                post.directiveName = directiveName,
                                (newIsolateScopeDirective === directive || directive.$$isolateScope) && (post = cloneAndAnnotateFn(post, {
                                    isolateScope: !0
                                })),
                                postLinkFns.push(post))
                            }
                            function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
                                function controllersBoundTransclude(scope, cloneAttachFn, futureParentElement, slotName) {
                                    var transcludeControllers;
                                    if (isScope(scope) || (slotName = futureParentElement,
                                    futureParentElement = cloneAttachFn,
                                    cloneAttachFn = scope,
                                    scope = void 0),
                                    hasElementTranscludeDirective && (transcludeControllers = elementControllers),
                                    futureParentElement || (futureParentElement = hasElementTranscludeDirective ? $element.parent() : $element),
                                    !slotName)
                                        return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                                    var slotTranscludeFn = boundTranscludeFn.$$slots[slotName];
                                    if (slotTranscludeFn)
                                        return slotTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                                    if (isUndefined(slotTranscludeFn))
                                        throw $compileMinErr("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', slotName, startingTag($element))
                                }
                                var i, ii, linkFn, isolateScope, controllerScope, elementControllers, transcludeFn, $element, attrs, scopeBindingInfo;
                                compileNode === linkNode ? (attrs = templateAttrs,
                                $element = templateAttrs.$$element) : ($element = jqLite(linkNode),
                                attrs = new Attributes($element,templateAttrs)),
                                controllerScope = scope,
                                newIsolateScopeDirective ? isolateScope = scope.$new(!0) : newScopeDirective && (controllerScope = scope.$parent),
                                boundTranscludeFn && (transcludeFn = controllersBoundTransclude,
                                transcludeFn.$$boundTransclude = boundTranscludeFn,
                                transcludeFn.isSlotFilled = function(slotName) {
                                    return !!boundTranscludeFn.$$slots[slotName]
                                }
                                ),
                                controllerDirectives && (elementControllers = setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective)),
                                newIsolateScopeDirective && (compile.$$addScopeInfo($element, isolateScope, !0, !(templateDirective && (templateDirective === newIsolateScopeDirective || templateDirective === newIsolateScopeDirective.$$originalDirective))),
                                compile.$$addScopeClass($element, !0),
                                isolateScope.$$isolateBindings = newIsolateScopeDirective.$$isolateBindings,
                                scopeBindingInfo = initializeDirectiveBindings(scope, attrs, isolateScope, isolateScope.$$isolateBindings, newIsolateScopeDirective),
                                scopeBindingInfo.removeWatches && isolateScope.$on("$destroy", scopeBindingInfo.removeWatches));
                                for (var name in elementControllers) {
                                    var controllerDirective = controllerDirectives[name]
                                      , controller = elementControllers[name]
                                      , bindings = controllerDirective.$$bindings.bindToController;
                                    if (preAssignBindingsEnabled) {
                                        controller.bindingInfo = bindings ? initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective) : {};
                                        var controllerResult = controller();
                                        controllerResult !== controller.instance && (controller.instance = controllerResult,
                                        $element.data("$" + controllerDirective.name + "Controller", controllerResult),
                                        controller.bindingInfo.removeWatches && controller.bindingInfo.removeWatches(),
                                        controller.bindingInfo = initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective))
                                    } else
                                        controller.instance = controller(),
                                        $element.data("$" + controllerDirective.name + "Controller", controller.instance),
                                        controller.bindingInfo = initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective)
                                }
                                for (forEach(controllerDirectives, function(controllerDirective, name) {
                                    var require = controllerDirective.require;
                                    controllerDirective.bindToController && !isArray(require) && isObject(require) && extend(elementControllers[name].instance, getControllers(name, require, $element, elementControllers))
                                }),
                                forEach(elementControllers, function(controller) {
                                    var controllerInstance = controller.instance;
                                    if (isFunction(controllerInstance.$onChanges))
                                        try {
                                            controllerInstance.$onChanges(controller.bindingInfo.initialChanges)
                                        } catch (e) {
                                            $exceptionHandler(e)
                                        }
                                    if (isFunction(controllerInstance.$onInit))
                                        try {
                                            controllerInstance.$onInit()
                                        } catch (e) {
                                            $exceptionHandler(e)
                                        }
                                    isFunction(controllerInstance.$doCheck) && (controllerScope.$watch(function() {
                                        controllerInstance.$doCheck()
                                    }),
                                    controllerInstance.$doCheck()),
                                    isFunction(controllerInstance.$onDestroy) && controllerScope.$on("$destroy", function() {
                                        controllerInstance.$onDestroy()
                                    })
                                }),
                                i = 0,
                                ii = preLinkFns.length; i < ii; i++)
                                    linkFn = preLinkFns[i],
                                    invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                                var scopeToChild = scope;
                                for (newIsolateScopeDirective && (newIsolateScopeDirective.template || null === newIsolateScopeDirective.templateUrl) && (scopeToChild = isolateScope),
                                childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, void 0, boundTranscludeFn),
                                i = postLinkFns.length - 1; i >= 0; i--)
                                    linkFn = postLinkFns[i],
                                    invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                                forEach(elementControllers, function(controller) {
                                    var controllerInstance = controller.instance;
                                    isFunction(controllerInstance.$postLink) && controllerInstance.$postLink()
                                })
                            }
                            previousCompileContext = previousCompileContext || {};
                            for (var directive, directiveName, $template, linkFn, directiveValue, terminalPriority = -Number.MAX_VALUE, newScopeDirective = previousCompileContext.newScopeDirective, controllerDirectives = previousCompileContext.controllerDirectives, newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective, templateDirective = previousCompileContext.templateDirective, nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective, hasTranscludeDirective = !1, hasTemplate = !1, hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective, $compileNode = templateAttrs.$$element = jqLite(compileNode), replaceDirective = originalReplaceDirective, childTranscludeFn = transcludeFn, didScanForMultipleTransclusion = !1, mightHaveMultipleTransclusionError = !1, i = 0, ii = directives.length; i < ii; i++) {
                                directive = directives[i];
                                var attrStart = directive.$$start
                                  , attrEnd = directive.$$end;
                                if (attrStart && ($compileNode = groupScan(compileNode, attrStart, attrEnd)),
                                $template = void 0,
                                terminalPriority > directive.priority)
                                    break;
                                if (directiveValue = directive.scope,
                                directiveValue && (directive.templateUrl || (isObject(directiveValue) ? (assertNoDuplicate("new/isolated scope", newIsolateScopeDirective || newScopeDirective, directive, $compileNode),
                                newIsolateScopeDirective = directive) : assertNoDuplicate("new/isolated scope", newIsolateScopeDirective, directive, $compileNode)),
                                newScopeDirective = newScopeDirective || directive),
                                directiveName = directive.name,
                                !didScanForMultipleTransclusion && (directive.replace && (directive.templateUrl || directive.template) || directive.transclude && !directive.$$tlb)) {
                                    for (var candidateDirective, scanningIndex = i + 1; candidateDirective = directives[scanningIndex++]; )
                                        if (candidateDirective.transclude && !candidateDirective.$$tlb || candidateDirective.replace && (candidateDirective.templateUrl || candidateDirective.template)) {
                                            mightHaveMultipleTransclusionError = !0;
                                            break
                                        }
                                    didScanForMultipleTransclusion = !0
                                }
                                if (!directive.templateUrl && directive.controller && (controllerDirectives = controllerDirectives || createMap(),
                                assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode),
                                controllerDirectives[directiveName] = directive),
                                directiveValue = directive.transclude)
                                    if (hasTranscludeDirective = !0,
                                    directive.$$tlb || (assertNoDuplicate("transclusion", nonTlbTranscludeDirective, directive, $compileNode),
                                    nonTlbTranscludeDirective = directive),
                                    "element" === directiveValue)
                                        hasElementTranscludeDirective = !0,
                                        terminalPriority = directive.priority,
                                        $template = $compileNode,
                                        $compileNode = templateAttrs.$$element = jqLite(compile.$$createComment(directiveName, templateAttrs[directiveName])),
                                        compileNode = $compileNode[0],
                                        replaceWith(jqCollection, sliceArgs($template), compileNode),
                                        $template[0].$$parentNode = $template[0].parentNode,
                                        childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {
                                            nonTlbTranscludeDirective: nonTlbTranscludeDirective
                                        });
                                    else {
                                        var slots = createMap();
                                        if (isObject(directiveValue)) {
                                            $template = [];
                                            var slotMap = createMap()
                                              , filledSlots = createMap();
                                            forEach(directiveValue, function(elementSelector, slotName) {
                                                var optional = "?" === elementSelector.charAt(0);
                                                elementSelector = optional ? elementSelector.substring(1) : elementSelector,
                                                slotMap[elementSelector] = slotName,
                                                slots[slotName] = null,
                                                filledSlots[slotName] = optional
                                            }),
                                            forEach($compileNode.contents(), function(node) {
                                                var slotName = slotMap[directiveNormalize(nodeName_(node))];
                                                slotName ? (filledSlots[slotName] = !0,
                                                slots[slotName] = slots[slotName] || [],
                                                slots[slotName].push(node)) : $template.push(node)
                                            }),
                                            forEach(filledSlots, function(filled, slotName) {
                                                if (!filled)
                                                    throw $compileMinErr("reqslot", "Required transclusion slot `{0}` was not filled.", slotName)
                                            });
                                            for (var slotName in slots)
                                                slots[slotName] && (slots[slotName] = compilationGenerator(mightHaveMultipleTransclusionError, slots[slotName], transcludeFn))
                                        } else
                                            $template = jqLite(jqLiteClone(compileNode)).contents();
                                        $compileNode.empty(),
                                        childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, void 0, void 0, {
                                            needsNewScope: directive.$$isolateScope || directive.$$newScope
                                        }),
                                        childTranscludeFn.$$slots = slots
                                    }
                                if (directive.template)
                                    if (hasTemplate = !0,
                                    assertNoDuplicate("template", templateDirective, directive, $compileNode),
                                    templateDirective = directive,
                                    directiveValue = isFunction(directive.template) ? directive.template($compileNode, templateAttrs) : directive.template,
                                    directiveValue = denormalizeTemplate(directiveValue),
                                    directive.replace) {
                                        if (replaceDirective = directive,
                                        $template = jqLiteIsTextNode(directiveValue) ? [] : removeComments(wrapTemplate(directive.templateNamespace, trim(directiveValue))),
                                        compileNode = $template[0],
                                        1 !== $template.length || compileNode.nodeType !== NODE_TYPE_ELEMENT)
                                            throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", directiveName, "");
                                        replaceWith(jqCollection, $compileNode, compileNode);
                                        var newTemplateAttrs = {
                                            $attr: {}
                                        }
                                          , templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs)
                                          , unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                                        (newIsolateScopeDirective || newScopeDirective) && markDirectiveScope(templateDirectives, newIsolateScopeDirective, newScopeDirective),
                                        directives = directives.concat(templateDirectives).concat(unprocessedDirectives),
                                        mergeTemplateAttributes(templateAttrs, newTemplateAttrs),
                                        ii = directives.length
                                    } else
                                        $compileNode.html(directiveValue);
                                if (directive.templateUrl)
                                    hasTemplate = !0,
                                    assertNoDuplicate("template", templateDirective, directive, $compileNode),
                                    templateDirective = directive,
                                    directive.replace && (replaceDirective = directive),
                                    nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                                        controllerDirectives: controllerDirectives,
                                        newScopeDirective: newScopeDirective !== directive && newScopeDirective,
                                        newIsolateScopeDirective: newIsolateScopeDirective,
                                        templateDirective: templateDirective,
                                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                                    }),
                                    ii = directives.length;
                                else if (directive.compile)
                                    try {
                                        linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                                        var context = directive.$$originalDirective || directive;
                                        isFunction(linkFn) ? addLinkFns(null, bind(context, linkFn), attrStart, attrEnd) : linkFn && addLinkFns(bind(context, linkFn.pre), bind(context, linkFn.post), attrStart, attrEnd)
                                    } catch (e) {
                                        $exceptionHandler(e, startingTag($compileNode))
                                    }
                                directive.terminal && (nodeLinkFn.terminal = !0,
                                terminalPriority = Math.max(terminalPriority, directive.priority))
                            }
                            return nodeLinkFn.scope = newScopeDirective && !0 === newScopeDirective.scope,
                            nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective,
                            nodeLinkFn.templateOnThisElement = hasTemplate,
                            nodeLinkFn.transclude = childTranscludeFn,
                            previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective,
                            nodeLinkFn
                        }
                        function getControllers(directiveName, require, $element, elementControllers) {
                            var value;
                            if (isString(require)) {
                                var match = require.match(REQUIRE_PREFIX_REGEXP)
                                  , name = require.substring(match[0].length)
                                  , inheritType = match[1] || match[3]
                                  , optional = "?" === match[2];
                                if ("^^" === inheritType ? $element = $element.parent() : (value = elementControllers && elementControllers[name],
                                value = value && value.instance),
                                !value) {
                                    var dataName = "$" + name + "Controller";
                                    value = inheritType ? $element.inheritedData(dataName) : $element.data(dataName)
                                }
                                if (!value && !optional)
                                    throw $compileMinErr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", name, directiveName)
                            } else if (isArray(require)) {
                                value = [];
                                for (var i = 0, ii = require.length; i < ii; i++)
                                    value[i] = getControllers(directiveName, require[i], $element, elementControllers)
                            } else
                                isObject(require) && (value = {},
                                forEach(require, function(controller, property) {
                                    value[property] = getControllers(directiveName, controller, $element, elementControllers)
                                }));
                            return value || null
                        }
                        function setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective) {
                            var elementControllers = createMap();
                            for (var controllerKey in controllerDirectives) {
                                var directive = controllerDirectives[controllerKey]
                                  , locals = {
                                    $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                                    $element: $element,
                                    $attrs: attrs,
                                    $transclude: transcludeFn
                                }
                                  , controller = directive.controller;
                                "@" === controller && (controller = attrs[directive.name]);
                                var controllerInstance = $controller(controller, locals, !0, directive.controllerAs);
                                elementControllers[directive.name] = controllerInstance,
                                $element.data("$" + directive.name + "Controller", controllerInstance.instance)
                            }
                            return elementControllers
                        }
                        function markDirectiveScope(directives, isolateScope, newScope) {
                            for (var j = 0, jj = directives.length; j < jj; j++)
                                directives[j] = inherit(directives[j], {
                                    $$isolateScope: isolateScope,
                                    $$newScope: newScope
                                })
                        }
                        function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
                            if (name === ignoreDirective)
                                return null;
                            var match = null;
                            if (hasDirectives.hasOwnProperty(name))
                                for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; i < ii; i++)
                                    if (directive = directives[i],
                                    (isUndefined(maxPriority) || maxPriority > directive.priority) && -1 !== directive.restrict.indexOf(location)) {
                                        if (startAttrName && (directive = inherit(directive, {
                                            $$start: startAttrName,
                                            $$end: endAttrName
                                        })),
                                        !directive.$$bindings) {
                                            var bindings = directive.$$bindings = parseDirectiveBindings(directive, directive.name);
                                            isObject(bindings.isolateScope) && (directive.$$isolateBindings = bindings.isolateScope)
                                        }
                                        tDirectives.push(directive),
                                        match = directive
                                    }
                            return match
                        }
                        function directiveIsMultiElement(name) {
                            if (hasDirectives.hasOwnProperty(name))
                                for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; i < ii; i++)
                                    if (directive = directives[i],
                                    directive.multiElement)
                                        return !0;
                            return !1
                        }
                        function mergeTemplateAttributes(dst, src) {
                            var srcAttr = src.$attr
                              , dstAttr = dst.$attr;
                            forEach(dst, function(value, key) {
                                "$" !== key.charAt(0) && (src[key] && src[key] !== value && (value.length ? value += ("style" === key ? ";" : " ") + src[key] : value = src[key]),
                                dst.$set(key, value, !0, srcAttr[key]))
                            }),
                            forEach(src, function(value, key) {
                                dst.hasOwnProperty(key) || "$" === key.charAt(0) || (dst[key] = value,
                                "class" !== key && "style" !== key && (dstAttr[key] = srcAttr[key]))
                            })
                        }
                        function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
                            var afterTemplateNodeLinkFn, afterTemplateChildLinkFn, linkQueue = [], beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = inherit(origAsyncDirective, {
                                templateUrl: null,
                                transclude: null,
                                replace: null,
                                $$originalDirective: origAsyncDirective
                            }), templateUrl = isFunction(origAsyncDirective.templateUrl) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl, templateNamespace = origAsyncDirective.templateNamespace;
                            return $compileNode.empty(),
                            $templateRequest(templateUrl).then(function(content) {
                                var compileNode, tempTemplateAttrs, $template, childBoundTranscludeFn;
                                if (content = denormalizeTemplate(content),
                                origAsyncDirective.replace) {
                                    if ($template = jqLiteIsTextNode(content) ? [] : removeComments(wrapTemplate(templateNamespace, trim(content))),
                                    compileNode = $template[0],
                                    1 !== $template.length || compileNode.nodeType !== NODE_TYPE_ELEMENT)
                                        throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                                    tempTemplateAttrs = {
                                        $attr: {}
                                    },
                                    replaceWith($rootElement, $compileNode, compileNode);
                                    var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                                    isObject(origAsyncDirective.scope) && markDirectiveScope(templateDirectives, !0),
                                    directives = templateDirectives.concat(directives),
                                    mergeTemplateAttributes(tAttrs, tempTemplateAttrs)
                                } else
                                    compileNode = beforeTemplateCompileNode,
                                    $compileNode.html(content);
                                for (directives.unshift(derivedSyncDirective),
                                afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext),
                                forEach($rootElement, function(node, i) {
                                    node === compileNode && ($rootElement[i] = $compileNode[0])
                                }),
                                afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn); linkQueue.length; ) {
                                    var scope = linkQueue.shift()
                                      , beforeTemplateLinkNode = linkQueue.shift()
                                      , linkRootElement = linkQueue.shift()
                                      , boundTranscludeFn = linkQueue.shift()
                                      , linkNode = $compileNode[0];
                                    if (!scope.$$destroyed) {
                                        if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                                            var oldClasses = beforeTemplateLinkNode.className;
                                            previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace || (linkNode = jqLiteClone(compileNode)),
                                            replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode),
                                            safeAddClass(jqLite(linkNode), oldClasses)
                                        }
                                        childBoundTranscludeFn = afterTemplateNodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn) : boundTranscludeFn,
                                        afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn)
                                    }
                                }
                                linkQueue = null
                            }).catch(function(error) {
                                isError(error) && $exceptionHandler(error)
                            }),
                            function(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
                                var childBoundTranscludeFn = boundTranscludeFn;
                                scope.$$destroyed || (linkQueue ? linkQueue.push(scope, node, rootElement, childBoundTranscludeFn) : (afterTemplateNodeLinkFn.transcludeOnThisElement && (childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn)),
                                afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, childBoundTranscludeFn)))
                            }
                        }
                        function byPriority(a, b) {
                            var diff = b.priority - a.priority;
                            return 0 !== diff ? diff : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                        }
                        function assertNoDuplicate(what, previousDirective, directive, element) {
                            function wrapModuleNameIfDefined(moduleName) {
                                return moduleName ? " (module: " + moduleName + ")" : ""
                            }
                            if (previousDirective)
                                throw $compileMinErr("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", previousDirective.name, wrapModuleNameIfDefined(previousDirective.$$moduleName), directive.name, wrapModuleNameIfDefined(directive.$$moduleName), what, startingTag(element))
                        }
                        function addTextInterpolateDirective(directives, text) {
                            var interpolateFn = $interpolate(text, !0);
                            interpolateFn && directives.push({
                                priority: 0,
                                compile: function(templateNode) {
                                    var templateNodeParent = templateNode.parent()
                                      , hasCompileParent = !!templateNodeParent.length;
                                    return hasCompileParent && compile.$$addBindingClass(templateNodeParent),
                                    function(scope, node) {
                                        var parent = node.parent();
                                        hasCompileParent || compile.$$addBindingClass(parent),
                                        compile.$$addBindingInfo(parent, interpolateFn.expressions),
                                        scope.$watch(interpolateFn, function(value) {
                                            node[0].nodeValue = value
                                        })
                                    }
                                }
                            })
                        }
                        function wrapTemplate(type, template) {
                            switch (type = lowercase(type || "html")) {
                            case "svg":
                            case "math":
                                var wrapper = window.document.createElement("div");
                                return wrapper.innerHTML = "<" + type + ">" + template + "</" + type + ">",
                                wrapper.childNodes[0].childNodes;
                            default:
                                return template
                            }
                        }
                        function getTrustedContext(node, attrNormalizedName) {
                            if ("srcdoc" === attrNormalizedName)
                                return $sce.HTML;
                            var tag = nodeName_(node);
                            if ("src" === attrNormalizedName || "ngSrc" === attrNormalizedName) {
                                if (-1 === ["img", "video", "audio", "source", "track"].indexOf(tag))
                                    return $sce.RESOURCE_URL
                            } else if ("xlinkHref" === attrNormalizedName || "form" === tag && "action" === attrNormalizedName || "link" === tag && "href" === attrNormalizedName)
                                return $sce.RESOURCE_URL
                        }
                        function addAttrInterpolateDirective(node, directives, value, name, isNgAttr) {
                            var trustedContext = getTrustedContext(node, name)
                              , mustHaveExpression = !isNgAttr
                              , allOrNothing = ALL_OR_NOTHING_ATTRS[name] || isNgAttr
                              , interpolateFn = $interpolate(value, mustHaveExpression, trustedContext, allOrNothing);
                            if (interpolateFn) {
                                if ("multiple" === name && "select" === nodeName_(node))
                                    throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
                                if (EVENT_HANDLER_ATTR_REGEXP.test(name))
                                    throw $compileMinErr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                directives.push({
                                    priority: 100,
                                    compile: function() {
                                        return {
                                            pre: function(scope, element, attr) {
                                                var $$observers = attr.$$observers || (attr.$$observers = createMap())
                                                  , newValue = attr[name];
                                                newValue !== value && (interpolateFn = newValue && $interpolate(newValue, !0, trustedContext, allOrNothing),
                                                value = newValue),
                                                interpolateFn && (attr[name] = interpolateFn(scope),
                                                ($$observers[name] || ($$observers[name] = [])).$$inter = !0,
                                                (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function(newValue, oldValue) {
                                                    "class" === name && newValue !== oldValue ? attr.$updateClass(newValue, oldValue) : attr.$set(name, newValue)
                                                }))
                                            }
                                        }
                                    }
                                })
                            }
                        }
                        function replaceWith($rootElement, elementsToRemove, newNode) {
                            var i, ii, firstElementToRemove = elementsToRemove[0], removeCount = elementsToRemove.length, parent = firstElementToRemove.parentNode;
                            if ($rootElement)
                                for (i = 0,
                                ii = $rootElement.length; i < ii; i++)
                                    if ($rootElement[i] === firstElementToRemove) {
                                        $rootElement[i++] = newNode;
                                        for (var j = i, j2 = j + removeCount - 1, jj = $rootElement.length; j < jj; j++,
                                        j2++)
                                            j2 < jj ? $rootElement[j] = $rootElement[j2] : delete $rootElement[j];
                                        $rootElement.length -= removeCount - 1,
                                        $rootElement.context === firstElementToRemove && ($rootElement.context = newNode);
                                        break
                                    }
                            parent && parent.replaceChild(newNode, firstElementToRemove);
                            var fragment = window.document.createDocumentFragment();
                            for (i = 0; i < removeCount; i++)
                                fragment.appendChild(elementsToRemove[i]);
                            for (jqLite.hasData(firstElementToRemove) && (jqLite.data(newNode, jqLite.data(firstElementToRemove)),
                            jqLite(firstElementToRemove).off("$destroy")),
                            jqLite.cleanData(fragment.querySelectorAll("*")),
                            i = 1; i < removeCount; i++)
                                delete elementsToRemove[i];
                            elementsToRemove[0] = newNode,
                            elementsToRemove.length = 1
                        }
                        function cloneAndAnnotateFn(fn, annotation) {
                            return extend(function() {
                                return fn.apply(null, arguments)
                            }, fn, annotation)
                        }
                        function invokeLinkFn(linkFn, scope, $element, attrs, controllers, transcludeFn) {
                            try {
                                linkFn(scope, $element, attrs, controllers, transcludeFn)
                            } catch (e) {
                                $exceptionHandler(e, startingTag($element))
                            }
                        }
                        function initializeDirectiveBindings(scope, attrs, destination, bindings, directive) {
                            function recordChanges(key, currentValue, previousValue) {
                                isFunction(destination.$onChanges) && !simpleCompare(currentValue, previousValue) && (onChangesQueue || (scope.$$postDigest(flushOnChangesQueue),
                                onChangesQueue = []),
                                changes || (changes = {},
                                onChangesQueue.push(triggerOnChangesHook)),
                                changes[key] && (previousValue = changes[key].previousValue),
                                changes[key] = new SimpleChange(previousValue,currentValue))
                            }
                            function triggerOnChangesHook() {
                                destination.$onChanges(changes),
                                changes = void 0
                            }
                            var changes, removeWatchCollection = [], initialChanges = {};
                            return forEach(bindings, function(definition, scopeName) {
                                var lastValue, parentGet, parentSet, compare, removeWatch, attrName = definition.attrName, optional = definition.optional, mode = definition.mode;
                                switch (mode) {
                                case "@":
                                    optional || hasOwnProperty.call(attrs, attrName) || (destination[scopeName] = attrs[attrName] = void 0),
                                    removeWatch = attrs.$observe(attrName, function(value) {
                                        if (isString(value) || isBoolean(value)) {
                                            var oldValue = destination[scopeName];
                                            recordChanges(scopeName, value, oldValue),
                                            destination[scopeName] = value
                                        }
                                    }),
                                    attrs.$$observers[attrName].$$scope = scope,
                                    lastValue = attrs[attrName],
                                    isString(lastValue) ? destination[scopeName] = $interpolate(lastValue)(scope) : isBoolean(lastValue) && (destination[scopeName] = lastValue),
                                    initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE,destination[scopeName]),
                                    removeWatchCollection.push(removeWatch);
                                    break;
                                case "=":
                                    if (!hasOwnProperty.call(attrs, attrName)) {
                                        if (optional)
                                            break;
                                        attrs[attrName] = void 0
                                    }
                                    if (optional && !attrs[attrName])
                                        break;
                                    parentGet = $parse(attrs[attrName]),
                                    compare = parentGet.literal ? equals : simpleCompare,
                                    parentSet = parentGet.assign || function() {
                                        throw lastValue = destination[scopeName] = parentGet(scope),
                                        $compileMinErr("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", attrs[attrName], attrName, directive.name)
                                    }
                                    ,
                                    lastValue = destination[scopeName] = parentGet(scope);
                                    var parentValueWatch = function(parentValue) {
                                        return compare(parentValue, destination[scopeName]) || (compare(parentValue, lastValue) ? parentSet(scope, parentValue = destination[scopeName]) : destination[scopeName] = parentValue),
                                        lastValue = parentValue
                                    };
                                    parentValueWatch.$stateful = !0,
                                    removeWatch = definition.collection ? scope.$watchCollection(attrs[attrName], parentValueWatch) : scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal),
                                    removeWatchCollection.push(removeWatch);
                                    break;
                                case "<":
                                    if (!hasOwnProperty.call(attrs, attrName)) {
                                        if (optional)
                                            break;
                                        attrs[attrName] = void 0
                                    }
                                    if (optional && !attrs[attrName])
                                        break;
                                    parentGet = $parse(attrs[attrName]);
                                    var deepWatch = parentGet.literal
                                      , initialValue = destination[scopeName] = parentGet(scope);
                                    initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE,destination[scopeName]),
                                    removeWatch = scope.$watch(parentGet, function(newValue, oldValue) {
                                        if (oldValue === newValue) {
                                            if (oldValue === initialValue || deepWatch && equals(oldValue, initialValue))
                                                return;
                                            oldValue = initialValue
                                        }
                                        recordChanges(scopeName, newValue, oldValue),
                                        destination[scopeName] = newValue
                                    }, deepWatch),
                                    removeWatchCollection.push(removeWatch);
                                    break;
                                case "&":
                                    if ((parentGet = attrs.hasOwnProperty(attrName) ? $parse(attrs[attrName]) : noop) === noop && optional)
                                        break;
                                    destination[scopeName] = function(locals) {
                                        return parentGet(scope, locals)
                                    }
                                }
                            }),
                            {
                                initialChanges: initialChanges,
                                removeWatches: removeWatchCollection.length && function() {
                                    for (var i = 0, ii = removeWatchCollection.length; i < ii; ++i)
                                        removeWatchCollection[i]()
                                }
                            }
                        }
                        var onChangesQueue, SIMPLE_ATTR_NAME = /^\w/, specialAttrHolder = window.document.createElement("div"), commentDirectivesEnabled = commentDirectivesEnabledConfig, cssClassDirectivesEnabled = cssClassDirectivesEnabledConfig, onChangesTtl = TTL;
                        Attributes.prototype = {
                            $normalize: directiveNormalize,
                            $addClass: function(classVal) {
                                classVal && classVal.length > 0 && $animate.addClass(this.$$element, classVal)
                            },
                            $removeClass: function(classVal) {
                                classVal && classVal.length > 0 && $animate.removeClass(this.$$element, classVal)
                            },
                            $updateClass: function(newClasses, oldClasses) {
                                var toAdd = tokenDifference(newClasses, oldClasses);
                                toAdd && toAdd.length && $animate.addClass(this.$$element, toAdd);
                                var toRemove = tokenDifference(oldClasses, newClasses);
                                toRemove && toRemove.length && $animate.removeClass(this.$$element, toRemove)
                            },
                            $set: function(key, value, writeAttr, attrName) {
                                var nodeName, node = this.$$element[0], booleanKey = getBooleanAttrName(node, key), aliasedKey = getAliasedAttrName(key), observer = key;
                                if (booleanKey ? (this.$$element.prop(key, value),
                                attrName = booleanKey) : aliasedKey && (this[aliasedKey] = value,
                                observer = aliasedKey),
                                this[key] = value,
                                attrName ? this.$attr[key] = attrName : (attrName = this.$attr[key]) || (this.$attr[key] = attrName = snake_case(key, "-")),
                                "a" === (nodeName = nodeName_(this.$$element)) && ("href" === key || "xlinkHref" === key) || "img" === nodeName && "src" === key)
                                    this[key] = value = $$sanitizeUri(value, "src" === key);
                                else if ("img" === nodeName && "srcset" === key && isDefined(value)) {
                                    for (var result = "", trimmedSrcset = trim(value), srcPattern = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, pattern = /\s/.test(trimmedSrcset) ? srcPattern : /(,)/, rawUris = trimmedSrcset.split(pattern), nbrUrisWith2parts = Math.floor(rawUris.length / 2), i = 0; i < nbrUrisWith2parts; i++) {
                                        var innerIdx = 2 * i;
                                        result += $$sanitizeUri(trim(rawUris[innerIdx]), !0),
                                        result += " " + trim(rawUris[innerIdx + 1])
                                    }
                                    var lastTuple = trim(rawUris[2 * i]).split(/\s/);
                                    result += $$sanitizeUri(trim(lastTuple[0]), !0),
                                    2 === lastTuple.length && (result += " " + trim(lastTuple[1])),
                                    this[key] = value = result
                                }
                                !1 !== writeAttr && (null === value || isUndefined(value) ? this.$$element.removeAttr(attrName) : SIMPLE_ATTR_NAME.test(attrName) ? this.$$element.attr(attrName, value) : setSpecialAttr(this.$$element[0], attrName, value));
                                var $$observers = this.$$observers;
                                $$observers && forEach($$observers[observer], function(fn) {
                                    try {
                                        fn(value)
                                    } catch (e) {
                                        $exceptionHandler(e)
                                    }
                                })
                            },
                            $observe: function(key, fn) {
                                var attrs = this
                                  , $$observers = attrs.$$observers || (attrs.$$observers = createMap())
                                  , listeners = $$observers[key] || ($$observers[key] = []);
                                return listeners.push(fn),
                                $rootScope.$evalAsync(function() {
                                    listeners.$$inter || !attrs.hasOwnProperty(key) || isUndefined(attrs[key]) || fn(attrs[key])
                                }),
                                function() {
                                    arrayRemove(listeners, fn)
                                }
                            }
                        };
                        var startSymbol = $interpolate.startSymbol()
                          , endSymbol = $interpolate.endSymbol()
                          , denormalizeTemplate = "{{" === startSymbol && "}}" === endSymbol ? identity : function(template) {
                            return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol)
                        }
                          , NG_ATTR_BINDING = /^ngAttr[A-Z]/
                          , MULTI_ELEMENT_DIR_RE = /^(.+)Start$/;
                        return compile.$$addBindingInfo = debugInfoEnabled ? function($element, binding) {
                            var bindings = $element.data("$binding") || [];
                            isArray(binding) ? bindings = bindings.concat(binding) : bindings.push(binding),
                            $element.data("$binding", bindings)
                        }
                        : noop,
                        compile.$$addBindingClass = debugInfoEnabled ? function($element) {
                            safeAddClass($element, "ng-binding")
                        }
                        : noop,
                        compile.$$addScopeInfo = debugInfoEnabled ? function($element, scope, isolated, noTemplate) {
                            var dataName = isolated ? noTemplate ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                            $element.data(dataName, scope)
                        }
                        : noop,
                        compile.$$addScopeClass = debugInfoEnabled ? function($element, isolated) {
                            safeAddClass($element, isolated ? "ng-isolate-scope" : "ng-scope")
                        }
                        : noop,
                        compile.$$createComment = function(directiveName, comment) {
                            var content = "";
                            return debugInfoEnabled && (content = " " + (directiveName || "") + ": ",
                            comment && (content += comment + " ")),
                            window.document.createComment(content)
                        }
                        ,
                        compile
                    }
                    ]
                }
                function SimpleChange(previous, current) {
                    this.previousValue = previous,
                    this.currentValue = current
                }
                function directiveNormalize(name) {
                    return name.replace(PREFIX_REGEXP, "").replace(SPECIAL_CHARS_REGEXP, fnCamelCaseReplace)
                }
                function tokenDifference(str1, str2) {
                    var values = ""
                      , tokens1 = str1.split(/\s+/)
                      , tokens2 = str2.split(/\s+/);
                    outer: for (var i = 0; i < tokens1.length; i++) {
                        for (var token = tokens1[i], j = 0; j < tokens2.length; j++)
                            if (token === tokens2[j])
                                continue outer;
                        values += (values.length > 0 ? " " : "") + token
                    }
                    return values
                }
                function removeComments(jqNodes) {
                    jqNodes = jqLite(jqNodes);
                    var i = jqNodes.length;
                    if (i <= 1)
                        return jqNodes;
                    for (; i--; ) {
                        var node = jqNodes[i];
                        (node.nodeType === NODE_TYPE_COMMENT || node.nodeType === NODE_TYPE_TEXT && "" === node.nodeValue.trim()) && splice.call(jqNodes, i, 1)
                    }
                    return jqNodes
                }
                function identifierForController(controller, ident) {
                    if (ident && isString(ident))
                        return ident;
                    if (isString(controller)) {
                        var match = CNTRL_REG.exec(controller);
                        if (match)
                            return match[3]
                    }
                }
                function $ControllerProvider() {
                    var controllers = {}
                      , globals = !1;
                    this.has = function(name) {
                        return controllers.hasOwnProperty(name)
                    }
                    ,
                    this.register = function(name, constructor) {
                        assertNotHasOwnProperty(name, "controller"),
                        isObject(name) ? extend(controllers, name) : controllers[name] = constructor
                    }
                    ,
                    this.allowGlobals = function() {
                        globals = !0
                    }
                    ,
                    this.$get = ["$injector", "$window", function($injector, $window) {
                        function addIdentifier(locals, identifier, instance, name) {
                            if (!locals || !isObject(locals.$scope))
                                throw minErr("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", name, identifier);
                            locals.$scope[identifier] = instance
                        }
                        return function(expression, locals, later, ident) {
                            var instance, match, constructor, identifier;
                            if (later = !0 === later,
                            ident && isString(ident) && (identifier = ident),
                            isString(expression)) {
                                if (!(match = expression.match(CNTRL_REG)))
                                    throw $controllerMinErr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", expression);
                                if (constructor = match[1],
                                identifier = identifier || match[3],
                                !(expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, !0) || (globals ? getter($window, constructor, !0) : void 0)))
                                    throw $controllerMinErr("ctrlreg", "The controller with the name '{0}' is not registered.", constructor);
                                assertArgFn(expression, constructor, !0)
                            }
                            if (later) {
                                var controllerPrototype = (isArray(expression) ? expression[expression.length - 1] : expression).prototype;
                                return instance = Object.create(controllerPrototype || null),
                                identifier && addIdentifier(locals, identifier, instance, constructor || expression.name),
                                extend(function() {
                                    var result = $injector.invoke(expression, instance, locals, constructor);
                                    return result !== instance && (isObject(result) || isFunction(result)) && (instance = result,
                                    identifier && addIdentifier(locals, identifier, instance, constructor || expression.name)),
                                    instance
                                }, {
                                    instance: instance,
                                    identifier: identifier
                                })
                            }
                            return instance = $injector.instantiate(expression, locals, constructor),
                            identifier && addIdentifier(locals, identifier, instance, constructor || expression.name),
                            instance
                        }
                    }
                    ]
                }
                function $DocumentProvider() {
                    this.$get = ["$window", function(window) {
                        return jqLite(window.document)
                    }
                    ]
                }
                function $$IsDocumentHiddenProvider() {
                    this.$get = ["$document", "$rootScope", function($document, $rootScope) {
                        function changeListener() {
                            hidden = doc.hidden
                        }
                        var doc = $document[0]
                          , hidden = doc && doc.hidden;
                        return $document.on("visibilitychange", changeListener),
                        $rootScope.$on("$destroy", function() {
                            $document.off("visibilitychange", changeListener)
                        }),
                        function() {
                            return hidden
                        }
                    }
                    ]
                }
                function $ExceptionHandlerProvider() {
                    this.$get = ["$log", function($log) {
                        return function(exception, cause) {
                            $log.error.apply($log, arguments)
                        }
                    }
                    ]
                }
                function serializeValue(v) {
                    return isObject(v) ? isDate(v) ? v.toISOString() : toJson(v) : v
                }
                function $HttpParamSerializerProvider() {
                    this.$get = function() {
                        return function(params) {
                            if (!params)
                                return "";
                            var parts = [];
                            return forEachSorted(params, function(value, key) {
                                null === value || isUndefined(value) || (isArray(value) ? forEach(value, function(v) {
                                    parts.push(encodeUriQuery(key) + "=" + encodeUriQuery(serializeValue(v)))
                                }) : parts.push(encodeUriQuery(key) + "=" + encodeUriQuery(serializeValue(value))))
                            }),
                            parts.join("&")
                        }
                    }
                }
                function $HttpParamSerializerJQLikeProvider() {
                    this.$get = function() {
                        return function(params) {
                            function serialize(toSerialize, prefix, topLevel) {
                                null === toSerialize || isUndefined(toSerialize) || (isArray(toSerialize) ? forEach(toSerialize, function(value, index) {
                                    serialize(value, prefix + "[" + (isObject(value) ? index : "") + "]")
                                }) : isObject(toSerialize) && !isDate(toSerialize) ? forEachSorted(toSerialize, function(value, key) {
                                    serialize(value, prefix + (topLevel ? "" : "[") + key + (topLevel ? "" : "]"))
                                }) : parts.push(encodeUriQuery(prefix) + "=" + encodeUriQuery(serializeValue(toSerialize))))
                            }
                            if (!params)
                                return "";
                            var parts = [];
                            return serialize(params, "", !0),
                            parts.join("&")
                        }
                    }
                }
                function defaultHttpResponseTransform(data, headers) {
                    if (isString(data)) {
                        var tempData = data.replace(JSON_PROTECTION_PREFIX, "").trim();
                        if (tempData) {
                            var contentType = headers("Content-Type");
                            if (contentType && 0 === contentType.indexOf(APPLICATION_JSON) || isJsonLike(tempData))
                                try {
                                    data = fromJson(tempData)
                                } catch (e) {
                                    throw $httpMinErr("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', data, e)
                                }
                        }
                    }
                    return data
                }
                function isJsonLike(str) {
                    var jsonStart = str.match(JSON_START);
                    return jsonStart && JSON_ENDS[jsonStart[0]].test(str)
                }
                function parseHeaders(headers) {
                    function fillInParsed(key, val) {
                        key && (parsed[key] = parsed[key] ? parsed[key] + ", " + val : val)
                    }
                    var i, parsed = createMap();
                    return isString(headers) ? forEach(headers.split("\n"), function(line) {
                        i = line.indexOf(":"),
                        fillInParsed(lowercase(trim(line.substr(0, i))), trim(line.substr(i + 1)))
                    }) : isObject(headers) && forEach(headers, function(headerVal, headerKey) {
                        fillInParsed(lowercase(headerKey), trim(headerVal))
                    }),
                    parsed
                }
                function headersGetter(headers) {
                    var headersObj;
                    return function(name) {
                        if (headersObj || (headersObj = parseHeaders(headers)),
                        name) {
                            var value = headersObj[lowercase(name)];
                            return void 0 === value && (value = null),
                            value
                        }
                        return headersObj
                    }
                }
                function transformData(data, headers, status, fns) {
                    return isFunction(fns) ? fns(data, headers, status) : (forEach(fns, function(fn) {
                        data = fn(data, headers, status)
                    }),
                    data)
                }
                function isSuccess(status) {
                    return 200 <= status && status < 300
                }
                function $HttpProvider() {
                    var defaults = this.defaults = {
                        transformResponse: [defaultHttpResponseTransform],
                        transformRequest: [function(d) {
                            return !isObject(d) || isFile(d) || isBlob(d) || isFormData(d) ? d : toJson(d)
                        }
                        ],
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            post: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
                            put: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
                            patch: shallowCopy(CONTENT_TYPE_APPLICATION_JSON)
                        },
                        xsrfCookieName: "XSRF-TOKEN",
                        xsrfHeaderName: "X-XSRF-TOKEN",
                        paramSerializer: "$httpParamSerializer",
                        jsonpCallbackParam: "callback"
                    }
                      , useApplyAsync = !1;
                    this.useApplyAsync = function(value) {
                        return isDefined(value) ? (useApplyAsync = !!value,
                        this) : useApplyAsync
                    }
                    ;
                    var interceptorFactories = this.interceptors = [];
                    this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function($browser, $httpBackend, $$cookieReader, $cacheFactory, $rootScope, $q, $injector, $sce) {
                        function $http(requestConfig) {
                            function chainInterceptors(promise, interceptors) {
                                for (var i = 0, ii = interceptors.length; i < ii; ) {
                                    var thenFn = interceptors[i++]
                                      , rejectFn = interceptors[i++];
                                    promise = promise.then(thenFn, rejectFn)
                                }
                                return interceptors.length = 0,
                                promise
                            }
                            function completeOutstandingRequest() {
                                $browser.$$completeOutstandingRequest(noop)
                            }
                            function executeHeaderFns(headers, config) {
                                var headerContent, processedHeaders = {};
                                return forEach(headers, function(headerFn, header) {
                                    isFunction(headerFn) ? null != (headerContent = headerFn(config)) && (processedHeaders[header] = headerContent) : processedHeaders[header] = headerFn
                                }),
                                processedHeaders
                            }
                            function serverRequest(config) {
                                var headers = config.headers
                                  , reqData = transformData(config.data, headersGetter(headers), void 0, config.transformRequest);
                                return isUndefined(reqData) && forEach(headers, function(value, header) {
                                    "content-type" === lowercase(header) && delete headers[header]
                                }),
                                isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials) && (config.withCredentials = defaults.withCredentials),
                                sendReq(config, reqData).then(transformResponse, transformResponse)
                            }
                            function transformResponse(response) {
                                var resp = extend({}, response);
                                return resp.data = transformData(response.data, response.headers, response.status, config.transformResponse),
                                isSuccess(response.status) ? resp : $q.reject(resp)
                            }
                            if (!isObject(requestConfig))
                                throw minErr("$http")("badreq", "Http request configuration must be an object.  Received: {0}", requestConfig);
                            if (!isString($sce.valueOf(requestConfig.url)))
                                throw minErr("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", requestConfig.url);
                            var config = extend({
                                method: "get",
                                transformRequest: defaults.transformRequest,
                                transformResponse: defaults.transformResponse,
                                paramSerializer: defaults.paramSerializer,
                                jsonpCallbackParam: defaults.jsonpCallbackParam
                            }, requestConfig);
                            config.headers = function(config) {
                                var defHeaderName, lowercaseDefHeaderName, reqHeaderName, defHeaders = defaults.headers, reqHeaders = extend({}, config.headers);
                                defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]);
                                defaultHeadersIteration: for (defHeaderName in defHeaders) {
                                    lowercaseDefHeaderName = lowercase(defHeaderName);
                                    for (reqHeaderName in reqHeaders)
                                        if (lowercase(reqHeaderName) === lowercaseDefHeaderName)
                                            continue defaultHeadersIteration;
                                    reqHeaders[defHeaderName] = defHeaders[defHeaderName]
                                }
                                return executeHeaderFns(reqHeaders, shallowCopy(config))
                            }(requestConfig),
                            config.method = uppercase(config.method),
                            config.paramSerializer = isString(config.paramSerializer) ? $injector.get(config.paramSerializer) : config.paramSerializer,
                            $browser.$$incOutstandingRequestCount();
                            var requestInterceptors = []
                              , responseInterceptors = []
                              , promise = $q.resolve(config);
                            return forEach(reversedInterceptors, function(interceptor) {
                                (interceptor.request || interceptor.requestError) && requestInterceptors.unshift(interceptor.request, interceptor.requestError),
                                (interceptor.response || interceptor.responseError) && responseInterceptors.push(interceptor.response, interceptor.responseError)
                            }),
                            promise = chainInterceptors(promise, requestInterceptors),
                            promise = promise.then(serverRequest),
                            promise = chainInterceptors(promise, responseInterceptors),
                            promise = promise.finally(completeOutstandingRequest)
                        }
                        function sendReq(config, reqData) {
                            function createApplyHandlers(eventHandlers) {
                                if (eventHandlers) {
                                    var applyHandlers = {};
                                    return forEach(eventHandlers, function(eventHandler, key) {
                                        applyHandlers[key] = function(event) {
                                            function callEventHandler() {
                                                eventHandler(event)
                                            }
                                            useApplyAsync ? $rootScope.$applyAsync(callEventHandler) : $rootScope.$$phase ? callEventHandler() : $rootScope.$apply(callEventHandler)
                                        }
                                    }),
                                    applyHandlers
                                }
                            }
                            function done(status, response, headersString, statusText) {
                                function resolveHttpPromise() {
                                    resolvePromise(response, status, headersString, statusText)
                                }
                                cache && (isSuccess(status) ? cache.put(url, [status, response, parseHeaders(headersString), statusText]) : cache.remove(url)),
                                useApplyAsync ? $rootScope.$applyAsync(resolveHttpPromise) : (resolveHttpPromise(),
                                $rootScope.$$phase || $rootScope.$apply())
                            }
                            function resolvePromise(response, status, headers, statusText) {
                                status = status >= -1 ? status : 0,
                                (isSuccess(status) ? deferred.resolve : deferred.reject)({
                                    data: response,
                                    status: status,
                                    headers: headersGetter(headers),
                                    config: config,
                                    statusText: statusText
                                })
                            }
                            function resolvePromiseWithResult(result) {
                                resolvePromise(result.data, result.status, shallowCopy(result.headers()), result.statusText)
                            }
                            function removePendingReq() {
                                var idx = $http.pendingRequests.indexOf(config);
                                -1 !== idx && $http.pendingRequests.splice(idx, 1)
                            }
                            var cache, cachedResp, deferred = $q.defer(), promise = deferred.promise, reqHeaders = config.headers, isJsonp = "jsonp" === lowercase(config.method), url = config.url;
                            if (isJsonp ? url = $sce.getTrustedResourceUrl(url) : isString(url) || (url = $sce.valueOf(url)),
                            url = buildUrl(url, config.paramSerializer(config.params)),
                            isJsonp && (url = sanitizeJsonpCallbackParam(url, config.jsonpCallbackParam)),
                            $http.pendingRequests.push(config),
                            promise.then(removePendingReq, removePendingReq),
                            !config.cache && !defaults.cache || !1 === config.cache || "GET" !== config.method && "JSONP" !== config.method || (cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache),
                            cache && (cachedResp = cache.get(url),
                            isDefined(cachedResp) ? isPromiseLike(cachedResp) ? cachedResp.then(resolvePromiseWithResult, resolvePromiseWithResult) : isArray(cachedResp) ? resolvePromise(cachedResp[1], cachedResp[0], shallowCopy(cachedResp[2]), cachedResp[3]) : resolvePromise(cachedResp, 200, {}, "OK") : cache.put(url, promise)),
                            isUndefined(cachedResp)) {
                                var xsrfValue = urlIsSameOrigin(config.url) ? $$cookieReader()[config.xsrfCookieName || defaults.xsrfCookieName] : void 0;
                                xsrfValue && (reqHeaders[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue),
                                $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType, createApplyHandlers(config.eventHandlers), createApplyHandlers(config.uploadEventHandlers))
                            }
                            return promise
                        }
                        function buildUrl(url, serializedParams) {
                            return serializedParams.length > 0 && (url += (-1 === url.indexOf("?") ? "?" : "&") + serializedParams),
                            url
                        }
                        function sanitizeJsonpCallbackParam(url, key) {
                            if (/[&?][^=]+=JSON_CALLBACK/.test(url))
                                throw $httpMinErr("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', url);
                            if (new RegExp("[&?]" + key + "=").test(url))
                                throw $httpMinErr("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', key, url);
                            return url += (-1 === url.indexOf("?") ? "?" : "&") + key + "=JSON_CALLBACK"
                        }
                        var defaultCache = $cacheFactory("$http");
                        defaults.paramSerializer = isString(defaults.paramSerializer) ? $injector.get(defaults.paramSerializer) : defaults.paramSerializer;
                        var reversedInterceptors = [];
                        return forEach(interceptorFactories, function(interceptorFactory) {
                            reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory))
                        }),
                        $http.pendingRequests = [],
                        function(names) {
                            forEach(arguments, function(name) {
                                $http[name] = function(url, config) {
                                    return $http(extend({}, config || {}, {
                                        method: name,
                                        url: url
                                    }))
                                }
                            })
                        }("get", "delete", "head", "jsonp"),
                        function(name) {
                            forEach(arguments, function(name) {
                                $http[name] = function(url, data, config) {
                                    return $http(extend({}, config || {}, {
                                        method: name,
                                        url: url,
                                        data: data
                                    }))
                                }
                            })
                        }("post", "put", "patch"),
                        $http.defaults = defaults,
                        $http
                    }
                    ]
                }
                function $xhrFactoryProvider() {
                    this.$get = function() {
                        return function() {
                            return new window.XMLHttpRequest
                        }
                    }
                }
                function $HttpBackendProvider() {
                    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function($browser, $jsonpCallbacks, $document, $xhrFactory) {
                        return createHttpBackend($browser, $xhrFactory, $browser.defer, $jsonpCallbacks, $document[0])
                    }
                    ]
                }
                function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
                    function jsonpReq(url, callbackPath, done) {
                        url = url.replace("JSON_CALLBACK", callbackPath);
                        var script = rawDocument.createElement("script")
                          , callback = null;
                        return script.type = "text/javascript",
                        script.src = url,
                        script.async = !0,
                        callback = function(event) {
                            script.removeEventListener("load", callback),
                            script.removeEventListener("error", callback),
                            rawDocument.body.removeChild(script),
                            script = null;
                            var status = -1
                              , text = "unknown";
                            event && ("load" !== event.type || callbacks.wasCalled(callbackPath) || (event = {
                                type: "error"
                            }),
                            text = event.type,
                            status = "error" === event.type ? 404 : 200),
                            done && done(status, text)
                        }
                        ,
                        script.addEventListener("load", callback),
                        script.addEventListener("error", callback),
                        rawDocument.body.appendChild(script),
                        callback
                    }
                    return function(method, url, post, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers) {
                        function timeoutRequest() {
                            jsonpDone && jsonpDone(),
                            xhr && xhr.abort()
                        }
                        function completeRequest(callback, status, response, headersString, statusText) {
                            isDefined(timeoutId) && $browserDefer.cancel(timeoutId),
                            jsonpDone = xhr = null,
                            callback(status, response, headersString, statusText)
                        }
                        if (url = url || $browser.url(),
                        "jsonp" === lowercase(method))
                            var callbackPath = callbacks.createCallback(url)
                              , jsonpDone = jsonpReq(url, callbackPath, function(status, text) {
                                var response = 200 === status && callbacks.getResponse(callbackPath);
                                completeRequest(callback, status, response, "", text),
                                callbacks.removeCallback(callbackPath)
                            });
                        else {
                            var xhr = createXhr(method, url);
                            xhr.open(method, url, !0),
                            forEach(headers, function(value, key) {
                                isDefined(value) && xhr.setRequestHeader(key, value)
                            }),
                            xhr.onload = function() {
                                var statusText = xhr.statusText || ""
                                  , response = "response"in xhr ? xhr.response : xhr.responseText
                                  , status = 1223 === xhr.status ? 204 : xhr.status;
                                0 === status && (status = response ? 200 : "file" === urlResolve(url).protocol ? 404 : 0),
                                completeRequest(callback, status, response, xhr.getAllResponseHeaders(), statusText)
                            }
                            ;
                            var requestError = function() {
                                completeRequest(callback, -1, null, null, "")
                            };
                            if (xhr.onerror = requestError,
                            xhr.onabort = requestError,
                            xhr.ontimeout = requestError,
                            forEach(eventHandlers, function(value, key) {
                                xhr.addEventListener(key, value)
                            }),
                            forEach(uploadEventHandlers, function(value, key) {
                                xhr.upload.addEventListener(key, value)
                            }),
                            withCredentials && (xhr.withCredentials = !0),
                            responseType)
                                try {
                                    xhr.responseType = responseType
                                } catch (e) {
                                    if ("json" !== responseType)
                                        throw e
                                }
                            xhr.send(isUndefined(post) ? null : post)
                        }
                        if (timeout > 0)
                            var timeoutId = $browserDefer(timeoutRequest, timeout);
                        else
                            isPromiseLike(timeout) && timeout.then(timeoutRequest)
                    }
                }
                function $InterpolateProvider() {
                    var startSymbol = "{{"
                      , endSymbol = "}}";
                    this.startSymbol = function(value) {
                        return value ? (startSymbol = value,
                        this) : startSymbol
                    }
                    ,
                    this.endSymbol = function(value) {
                        return value ? (endSymbol = value,
                        this) : endSymbol
                    }
                    ,
                    this.$get = ["$parse", "$exceptionHandler", "$sce", function($parse, $exceptionHandler, $sce) {
                        function escape(ch) {
                            return "\\\\\\" + ch
                        }
                        function unescapeText(text) {
                            return text.replace(escapedStartRegexp, startSymbol).replace(escapedEndRegexp, endSymbol)
                        }
                        function constantWatchDelegate(scope, listener, objectEquality, constantInterp) {
                            var unwatch = scope.$watch(function(scope) {
                                return unwatch(),
                                constantInterp(scope)
                            }, listener, objectEquality);
                            return unwatch
                        }
                        function $interpolate(text, mustHaveExpression, trustedContext, allOrNothing) {
                            function parseStringifyInterceptor(value) {
                                try {
                                    return value = getValue(value),
                                    allOrNothing && !isDefined(value) ? value : stringify(value)
                                } catch (err) {
                                    $exceptionHandler($interpolateMinErr.interr(text, err))
                                }
                            }
                            if (!text.length || -1 === text.indexOf(startSymbol)) {
                                var constantInterp;
                                if (!mustHaveExpression) {
                                    constantInterp = valueFn(unescapeText(text)),
                                    constantInterp.exp = text,
                                    constantInterp.expressions = [],
                                    constantInterp.$$watchDelegate = constantWatchDelegate
                                }
                                return constantInterp
                            }
                            allOrNothing = !!allOrNothing;
                            for (var startIndex, endIndex, exp, index = 0, expressions = [], parseFns = [], textLength = text.length, concat = [], expressionPositions = []; index < textLength; ) {
                                if (-1 === (startIndex = text.indexOf(startSymbol, index)) || -1 === (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength))) {
                                    index !== textLength && concat.push(unescapeText(text.substring(index)));
                                    break
                                }
                                index !== startIndex && concat.push(unescapeText(text.substring(index, startIndex))),
                                exp = text.substring(startIndex + startSymbolLength, endIndex),
                                expressions.push(exp),
                                parseFns.push($parse(exp, parseStringifyInterceptor)),
                                index = endIndex + endSymbolLength,
                                expressionPositions.push(concat.length),
                                concat.push("")
                            }
                            if (trustedContext && concat.length > 1 && $interpolateMinErr.throwNoconcat(text),
                            !mustHaveExpression || expressions.length) {
                                var compute = function(values) {
                                    for (var i = 0, ii = expressions.length; i < ii; i++) {
                                        if (allOrNothing && isUndefined(values[i]))
                                            return;
                                        concat[expressionPositions[i]] = values[i]
                                    }
                                    return concat.join("")
                                }
                                  , getValue = function(value) {
                                    return trustedContext ? $sce.getTrusted(trustedContext, value) : $sce.valueOf(value)
                                };
                                return extend(function(context) {
                                    var i = 0
                                      , ii = expressions.length
                                      , values = new Array(ii);
                                    try {
                                        for (; i < ii; i++)
                                            values[i] = parseFns[i](context);
                                        return compute(values)
                                    } catch (err) {
                                        $exceptionHandler($interpolateMinErr.interr(text, err))
                                    }
                                }, {
                                    exp: text,
                                    expressions: expressions,
                                    $$watchDelegate: function(scope, listener) {
                                        var lastValue;
                                        return scope.$watchGroup(parseFns, function(values, oldValues) {
                                            var currValue = compute(values);
                                            isFunction(listener) && listener.call(this, currValue, values !== oldValues ? lastValue : currValue, scope),
                                            lastValue = currValue
                                        })
                                    }
                                })
                            }
                        }
                        var startSymbolLength = startSymbol.length
                          , endSymbolLength = endSymbol.length
                          , escapedStartRegexp = new RegExp(startSymbol.replace(/./g, escape),"g")
                          , escapedEndRegexp = new RegExp(endSymbol.replace(/./g, escape),"g");
                        return $interpolate.startSymbol = function() {
                            return startSymbol
                        }
                        ,
                        $interpolate.endSymbol = function() {
                            return endSymbol
                        }
                        ,
                        $interpolate
                    }
                    ]
                }
                function $IntervalProvider() {
                    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function($rootScope, $window, $q, $$q, $browser) {
                        function interval(fn, delay, count, invokeApply) {
                            function callback() {
                                hasParams ? fn.apply(null, args) : fn(iteration)
                            }
                            var hasParams = arguments.length > 4
                              , args = hasParams ? sliceArgs(arguments, 4) : []
                              , setInterval = $window.setInterval
                              , clearInterval = $window.clearInterval
                              , iteration = 0
                              , skipApply = isDefined(invokeApply) && !invokeApply
                              , deferred = (skipApply ? $$q : $q).defer()
                              , promise = deferred.promise;
                            return count = isDefined(count) ? count : 0,
                            promise.$$intervalId = setInterval(function() {
                                skipApply ? $browser.defer(callback) : $rootScope.$evalAsync(callback),
                                deferred.notify(iteration++),
                                count > 0 && iteration >= count && (deferred.resolve(iteration),
                                clearInterval(promise.$$intervalId),
                                delete intervals[promise.$$intervalId]),
                                skipApply || $rootScope.$apply()
                            }, delay),
                            intervals[promise.$$intervalId] = deferred,
                            promise
                        }
                        var intervals = {};
                        return interval.cancel = function(promise) {
                            return !!(promise && promise.$$intervalId in intervals) && (markQExceptionHandled(intervals[promise.$$intervalId].promise),
                            intervals[promise.$$intervalId].reject("canceled"),
                            $window.clearInterval(promise.$$intervalId),
                            delete intervals[promise.$$intervalId],
                            !0)
                        }
                        ,
                        interval
                    }
                    ]
                }
                function encodePath(path) {
                    for (var segments = path.split("/"), i = segments.length; i--; )
                        segments[i] = encodeUriSegment(segments[i]);
                    return segments.join("/")
                }
                function parseAbsoluteUrl(absoluteUrl, locationObj) {
                    var parsedUrl = urlResolve(absoluteUrl);
                    locationObj.$$protocol = parsedUrl.protocol,
                    locationObj.$$host = parsedUrl.hostname,
                    locationObj.$$port = toInt(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null
                }
                function parseAppUrl(url, locationObj) {
                    if (DOUBLE_SLASH_REGEX.test(url))
                        throw $locationMinErr("badpath", 'Invalid url "{0}".', url);
                    var prefixed = "/" !== url.charAt(0);
                    prefixed && (url = "/" + url);
                    var match = urlResolve(url);
                    locationObj.$$path = decodeURIComponent(prefixed && "/" === match.pathname.charAt(0) ? match.pathname.substring(1) : match.pathname),
                    locationObj.$$search = parseKeyValue(match.search),
                    locationObj.$$hash = decodeURIComponent(match.hash),
                    locationObj.$$path && "/" !== locationObj.$$path.charAt(0) && (locationObj.$$path = "/" + locationObj.$$path)
                }
                function startsWith(str, search) {
                    return str.slice(0, search.length) === search
                }
                function stripBaseUrl(base, url) {
                    if (startsWith(url, base))
                        return url.substr(base.length)
                }
                function stripHash(url) {
                    var index = url.indexOf("#");
                    return -1 === index ? url : url.substr(0, index)
                }
                function trimEmptyHash(url) {
                    return url.replace(/(#.+)|#$/, "$1")
                }
                function stripFile(url) {
                    return url.substr(0, stripHash(url).lastIndexOf("/") + 1)
                }
                function serverBase(url) {
                    return url.substring(0, url.indexOf("/", url.indexOf("//") + 2))
                }
                function LocationHtml5Url(appBase, appBaseNoFile, basePrefix) {
                    this.$$html5 = !0,
                    basePrefix = basePrefix || "",
                    parseAbsoluteUrl(appBase, this),
                    this.$$parse = function(url) {
                        var pathUrl = stripBaseUrl(appBaseNoFile, url);
                        if (!isString(pathUrl))
                            throw $locationMinErr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
                        parseAppUrl(pathUrl, this),
                        this.$$path || (this.$$path = "/"),
                        this.$$compose()
                    }
                    ,
                    this.$$compose = function() {
                        var search = toKeyValue(this.$$search)
                          , hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
                        this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash,
                        this.$$absUrl = appBaseNoFile + this.$$url.substr(1),
                        this.$$urlUpdatedByLocation = !0
                    }
                    ,
                    this.$$parseLinkUrl = function(url, relHref) {
                        if (relHref && "#" === relHref[0])
                            return this.hash(relHref.slice(1)),
                            !0;
                        var appUrl, prevAppUrl, rewrittenUrl;
                        return isDefined(appUrl = stripBaseUrl(appBase, url)) ? (prevAppUrl = appUrl,
                        rewrittenUrl = basePrefix && isDefined(appUrl = stripBaseUrl(basePrefix, appUrl)) ? appBaseNoFile + (stripBaseUrl("/", appUrl) || appUrl) : appBase + prevAppUrl) : isDefined(appUrl = stripBaseUrl(appBaseNoFile, url)) ? rewrittenUrl = appBaseNoFile + appUrl : appBaseNoFile === url + "/" && (rewrittenUrl = appBaseNoFile),
                        rewrittenUrl && this.$$parse(rewrittenUrl),
                        !!rewrittenUrl
                    }
                }
                function LocationHashbangUrl(appBase, appBaseNoFile, hashPrefix) {
                    parseAbsoluteUrl(appBase, this),
                    this.$$parse = function(url) {
                        var withoutHashUrl, withoutBaseUrl = stripBaseUrl(appBase, url) || stripBaseUrl(appBaseNoFile, url);
                        isUndefined(withoutBaseUrl) || "#" !== withoutBaseUrl.charAt(0) ? this.$$html5 ? withoutHashUrl = withoutBaseUrl : (withoutHashUrl = "",
                        isUndefined(withoutBaseUrl) && (appBase = url,
                        this.replace())) : (withoutHashUrl = stripBaseUrl(hashPrefix, withoutBaseUrl),
                        isUndefined(withoutHashUrl) && (withoutHashUrl = withoutBaseUrl)),
                        parseAppUrl(withoutHashUrl, this),
                        this.$$path = function(path, url, base) {
                            var firstPathSegmentMatch, windowsFilePathExp = /^\/[A-Z]:(\/.*)/;
                            return startsWith(url, base) && (url = url.replace(base, "")),
                            windowsFilePathExp.exec(url) ? path : (firstPathSegmentMatch = windowsFilePathExp.exec(path),
                            firstPathSegmentMatch ? firstPathSegmentMatch[1] : path)
                        }(this.$$path, withoutHashUrl, appBase),
                        this.$$compose()
                    }
                    ,
                    this.$$compose = function() {
                        var search = toKeyValue(this.$$search)
                          , hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
                        this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash,
                        this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : ""),
                        this.$$urlUpdatedByLocation = !0
                    }
                    ,
                    this.$$parseLinkUrl = function(url, relHref) {
                        return stripHash(appBase) === stripHash(url) && (this.$$parse(url),
                        !0)
                    }
                }
                function LocationHashbangInHtml5Url(appBase, appBaseNoFile, hashPrefix) {
                    this.$$html5 = !0,
                    LocationHashbangUrl.apply(this, arguments),
                    this.$$parseLinkUrl = function(url, relHref) {
                        if (relHref && "#" === relHref[0])
                            return this.hash(relHref.slice(1)),
                            !0;
                        var rewrittenUrl, appUrl;
                        return appBase === stripHash(url) ? rewrittenUrl = url : (appUrl = stripBaseUrl(appBaseNoFile, url)) ? rewrittenUrl = appBase + hashPrefix + appUrl : appBaseNoFile === url + "/" && (rewrittenUrl = appBaseNoFile),
                        rewrittenUrl && this.$$parse(rewrittenUrl),
                        !!rewrittenUrl
                    }
                    ,
                    this.$$compose = function() {
                        var search = toKeyValue(this.$$search)
                          , hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
                        this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash,
                        this.$$absUrl = appBase + hashPrefix + this.$$url,
                        this.$$urlUpdatedByLocation = !0
                    }
                }
                function locationGetter(property) {
                    return function() {
                        return this[property]
                    }
                }
                function locationGetterSetter(property, preprocess) {
                    return function(value) {
                        return isUndefined(value) ? this[property] : (this[property] = preprocess(value),
                        this.$$compose(),
                        this)
                    }
                }
                function $LocationProvider() {
                    var hashPrefix = "!"
                      , html5Mode = {
                        enabled: !1,
                        requireBase: !0,
                        rewriteLinks: !0
                    };
                    this.hashPrefix = function(prefix) {
                        return isDefined(prefix) ? (hashPrefix = prefix,
                        this) : hashPrefix
                    }
                    ,
                    this.html5Mode = function(mode) {
                        return isBoolean(mode) ? (html5Mode.enabled = mode,
                        this) : isObject(mode) ? (isBoolean(mode.enabled) && (html5Mode.enabled = mode.enabled),
                        isBoolean(mode.requireBase) && (html5Mode.requireBase = mode.requireBase),
                        (isBoolean(mode.rewriteLinks) || isString(mode.rewriteLinks)) && (html5Mode.rewriteLinks = mode.rewriteLinks),
                        this) : html5Mode
                    }
                    ,
                    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function($rootScope, $browser, $sniffer, $rootElement, $window) {
                        function setBrowserUrlWithFallback(url, replace, state) {
                            var oldUrl = $location.url()
                              , oldState = $location.$$state;
                            try {
                                $browser.url(url, replace, state),
                                $location.$$state = $browser.state()
                            } catch (e) {
                                throw $location.url(oldUrl),
                                $location.$$state = oldState,
                                e
                            }
                        }
                        function afterLocationChange(oldUrl, oldState) {
                            $rootScope.$broadcast("$locationChangeSuccess", $location.absUrl(), oldUrl, $location.$$state, oldState)
                        }
                        var $location, LocationMode, appBase, baseHref = $browser.baseHref(), initialUrl = $browser.url();
                        if (html5Mode.enabled) {
                            if (!baseHref && html5Mode.requireBase)
                                throw $locationMinErr("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                            appBase = serverBase(initialUrl) + (baseHref || "/"),
                            LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url
                        } else
                            appBase = stripHash(initialUrl),
                            LocationMode = LocationHashbangUrl;
                        var appBaseNoFile = stripFile(appBase);
                        $location = new LocationMode(appBase,appBaseNoFile,"#" + hashPrefix),
                        $location.$$parseLinkUrl(initialUrl, initialUrl),
                        $location.$$state = $browser.state();
                        var IGNORE_URI_REGEXP = /^\s*(javascript|mailto):/i;
                        $rootElement.on("click", function(event) {
                            var rewriteLinks = html5Mode.rewriteLinks;
                            if (rewriteLinks && !event.ctrlKey && !event.metaKey && !event.shiftKey && 2 !== event.which && 2 !== event.button) {
                                for (var elm = jqLite(event.target); "a" !== nodeName_(elm[0]); )
                                    if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0])
                                        return;
                                if (!isString(rewriteLinks) || !isUndefined(elm.attr(rewriteLinks))) {
                                    var absHref = elm.prop("href")
                                      , relHref = elm.attr("href") || elm.attr("xlink:href");
                                    isObject(absHref) && "[object SVGAnimatedString]" === absHref.toString() && (absHref = urlResolve(absHref.animVal).href),
                                    IGNORE_URI_REGEXP.test(absHref) || !absHref || elm.attr("target") || event.isDefaultPrevented() || $location.$$parseLinkUrl(absHref, relHref) && (event.preventDefault(),
                                    $location.absUrl() !== $browser.url() && ($rootScope.$apply(),
                                    $window.angular["ff-684208-preventDefault"] = !0))
                                }
                            }
                        }),
                        trimEmptyHash($location.absUrl()) !== trimEmptyHash(initialUrl) && $browser.url($location.absUrl(), !0);
                        var initializing = !0;
                        return $browser.onUrlChange(function(newUrl, newState) {
                            if (!startsWith(newUrl, appBaseNoFile))
                                return void ($window.location.href = newUrl);
                            $rootScope.$evalAsync(function() {
                                var defaultPrevented, oldUrl = $location.absUrl(), oldState = $location.$$state;
                                newUrl = trimEmptyHash(newUrl),
                                $location.$$parse(newUrl),
                                $location.$$state = newState,
                                defaultPrevented = $rootScope.$broadcast("$locationChangeStart", newUrl, oldUrl, newState, oldState).defaultPrevented,
                                $location.absUrl() === newUrl && (defaultPrevented ? ($location.$$parse(oldUrl),
                                $location.$$state = oldState,
                                setBrowserUrlWithFallback(oldUrl, !1, oldState)) : (initializing = !1,
                                afterLocationChange(oldUrl, oldState)))
                            }),
                            $rootScope.$$phase || $rootScope.$digest()
                        }),
                        $rootScope.$watch(function() {
                            if (initializing || $location.$$urlUpdatedByLocation) {
                                $location.$$urlUpdatedByLocation = !1;
                                var oldUrl = trimEmptyHash($browser.url())
                                  , newUrl = trimEmptyHash($location.absUrl())
                                  , oldState = $browser.state()
                                  , currentReplace = $location.$$replace
                                  , urlOrStateChanged = oldUrl !== newUrl || $location.$$html5 && $sniffer.history && oldState !== $location.$$state;
                                (initializing || urlOrStateChanged) && (initializing = !1,
                                $rootScope.$evalAsync(function() {
                                    var newUrl = $location.absUrl()
                                      , defaultPrevented = $rootScope.$broadcast("$locationChangeStart", newUrl, oldUrl, $location.$$state, oldState).defaultPrevented;
                                    $location.absUrl() === newUrl && (defaultPrevented ? ($location.$$parse(oldUrl),
                                    $location.$$state = oldState) : (urlOrStateChanged && setBrowserUrlWithFallback(newUrl, currentReplace, oldState === $location.$$state ? null : $location.$$state),
                                    afterLocationChange(oldUrl, oldState)))
                                }))
                            }
                            $location.$$replace = !1
                        }),
                        $location
                    }
                    ]
                }
                function $LogProvider() {
                    var debug = !0
                      , self = this;
                    this.debugEnabled = function(flag) {
                        return isDefined(flag) ? (debug = flag,
                        this) : debug
                    }
                    ,
                    this.$get = ["$window", function($window) {
                        function formatError(arg) {
                            return isError(arg) && (arg.stack && formatStackTrace ? arg = arg.message && -1 === arg.stack.indexOf(arg.message) ? "Error: " + arg.message + "\n" + arg.stack : arg.stack : arg.sourceURL && (arg = arg.message + "\n" + arg.sourceURL + ":" + arg.line)),
                            arg
                        }
                        function consoleLog(type) {
                            var console = $window.console || {}
                              , logFn = console[type] || console.log || noop;
                            return function() {
                                var args = [];
                                return forEach(arguments, function(arg) {
                                    args.push(formatError(arg))
                                }),
                                Function.prototype.apply.call(logFn, console, args)
                            }
                        }
                        var formatStackTrace = msie || /\bEdge\//.test($window.navigator && $window.navigator.userAgent);
                        return {
                            log: consoleLog("log"),
                            info: consoleLog("info"),
                            warn: consoleLog("warn"),
                            error: consoleLog("error"),
                            debug: function() {
                                var fn = consoleLog("debug");
                                return function() {
                                    debug && fn.apply(self, arguments)
                                }
                            }()
                        }
                    }
                    ]
                }
                function getStringValue(name) {
                    return name + ""
                }
                function ifDefined(v, d) {
                    return void 0 !== v ? v : d
                }
                function plusFn(l, r) {
                    return void 0 === l ? r : void 0 === r ? l : l + r
                }
                function isStateless($filter, filterName) {
                    return !$filter(filterName).$stateful
                }
                function isPure(node, parentIsPure) {
                    switch (node.type) {
                    case AST.MemberExpression:
                        if (node.computed)
                            return !1;
                        break;
                    case AST.UnaryExpression:
                        return PURITY_ABSOLUTE;
                    case AST.BinaryExpression:
                        return "+" !== node.operator && PURITY_ABSOLUTE;
                    case AST.CallExpression:
                        return !1
                    }
                    return void 0 === parentIsPure ? PURITY_RELATIVE : parentIsPure
                }
                function findConstantAndWatchExpressions(ast, $filter, parentIsPure) {
                    var allConstants, argsToWatch, isStatelessFilter, astIsPure = ast.isPure = isPure(ast, parentIsPure);
                    switch (ast.type) {
                    case AST.Program:
                        allConstants = !0,
                        forEach(ast.body, function(expr) {
                            findConstantAndWatchExpressions(expr.expression, $filter, astIsPure),
                            allConstants = allConstants && expr.expression.constant
                        }),
                        ast.constant = allConstants;
                        break;
                    case AST.Literal:
                        ast.constant = !0,
                        ast.toWatch = [];
                        break;
                    case AST.UnaryExpression:
                        findConstantAndWatchExpressions(ast.argument, $filter, astIsPure),
                        ast.constant = ast.argument.constant,
                        ast.toWatch = ast.argument.toWatch;
                        break;
                    case AST.BinaryExpression:
                        findConstantAndWatchExpressions(ast.left, $filter, astIsPure),
                        findConstantAndWatchExpressions(ast.right, $filter, astIsPure),
                        ast.constant = ast.left.constant && ast.right.constant,
                        ast.toWatch = ast.left.toWatch.concat(ast.right.toWatch);
                        break;
                    case AST.LogicalExpression:
                        findConstantAndWatchExpressions(ast.left, $filter, astIsPure),
                        findConstantAndWatchExpressions(ast.right, $filter, astIsPure),
                        ast.constant = ast.left.constant && ast.right.constant,
                        ast.toWatch = ast.constant ? [] : [ast];
                        break;
                    case AST.ConditionalExpression:
                        findConstantAndWatchExpressions(ast.test, $filter, astIsPure),
                        findConstantAndWatchExpressions(ast.alternate, $filter, astIsPure),
                        findConstantAndWatchExpressions(ast.consequent, $filter, astIsPure),
                        ast.constant = ast.test.constant && ast.alternate.constant && ast.consequent.constant,
                        ast.toWatch = ast.constant ? [] : [ast];
                        break;
                    case AST.Identifier:
                        ast.constant = !1,
                        ast.toWatch = [ast];
                        break;
                    case AST.MemberExpression:
                        findConstantAndWatchExpressions(ast.object, $filter, astIsPure),
                        ast.computed && findConstantAndWatchExpressions(ast.property, $filter, astIsPure),
                        ast.constant = ast.object.constant && (!ast.computed || ast.property.constant),
                        ast.toWatch = [ast];
                        break;
                    case AST.CallExpression:
                        isStatelessFilter = !!ast.filter && isStateless($filter, ast.callee.name),
                        allConstants = isStatelessFilter,
                        argsToWatch = [],
                        forEach(ast.arguments, function(expr) {
                            findConstantAndWatchExpressions(expr, $filter, astIsPure),
                            allConstants = allConstants && expr.constant,
                            expr.constant || argsToWatch.push.apply(argsToWatch, expr.toWatch)
                        }),
                        ast.constant = allConstants,
                        ast.toWatch = isStatelessFilter ? argsToWatch : [ast];
                        break;
                    case AST.AssignmentExpression:
                        findConstantAndWatchExpressions(ast.left, $filter, astIsPure),
                        findConstantAndWatchExpressions(ast.right, $filter, astIsPure),
                        ast.constant = ast.left.constant && ast.right.constant,
                        ast.toWatch = [ast];
                        break;
                    case AST.ArrayExpression:
                        allConstants = !0,
                        argsToWatch = [],
                        forEach(ast.elements, function(expr) {
                            findConstantAndWatchExpressions(expr, $filter, astIsPure),
                            allConstants = allConstants && expr.constant,
                            expr.constant || argsToWatch.push.apply(argsToWatch, expr.toWatch)
                        }),
                        ast.constant = allConstants,
                        ast.toWatch = argsToWatch;
                        break;
                    case AST.ObjectExpression:
                        allConstants = !0,
                        argsToWatch = [],
                        forEach(ast.properties, function(property) {
                            findConstantAndWatchExpressions(property.value, $filter, astIsPure),
                            allConstants = allConstants && property.value.constant && !property.computed,
                            property.value.constant || argsToWatch.push.apply(argsToWatch, property.value.toWatch),
                            property.computed && (findConstantAndWatchExpressions(property.key, $filter, astIsPure),
                            property.key.constant || argsToWatch.push.apply(argsToWatch, property.key.toWatch))
                        }),
                        ast.constant = allConstants,
                        ast.toWatch = argsToWatch;
                        break;
                    case AST.ThisExpression:
                    case AST.LocalsExpression:
                        ast.constant = !1,
                        ast.toWatch = []
                    }
                }
                function getInputs(body) {
                    if (1 === body.length) {
                        var lastExpression = body[0].expression
                          , candidate = lastExpression.toWatch;
                        return 1 !== candidate.length ? candidate : candidate[0] !== lastExpression ? candidate : void 0
                    }
                }
                function isAssignable(ast) {
                    return ast.type === AST.Identifier || ast.type === AST.MemberExpression
                }
                function assignableAST(ast) {
                    if (1 === ast.body.length && isAssignable(ast.body[0].expression))
                        return {
                            type: AST.AssignmentExpression,
                            left: ast.body[0].expression,
                            right: {
                                type: AST.NGValueParameter
                            },
                            operator: "="
                        }
                }
                function isLiteral(ast) {
                    return 0 === ast.body.length || 1 === ast.body.length && (ast.body[0].expression.type === AST.Literal || ast.body[0].expression.type === AST.ArrayExpression || ast.body[0].expression.type === AST.ObjectExpression)
                }
                function isConstant(ast) {
                    return ast.constant
                }
                function ASTCompiler($filter) {
                    this.$filter = $filter
                }
                function ASTInterpreter($filter) {
                    this.$filter = $filter
                }
                function Parser(lexer, $filter, options) {
                    this.ast = new AST(lexer,options),
                    this.astCompiler = options.csp ? new ASTInterpreter($filter) : new ASTCompiler($filter)
                }
                function getValueOf(value) {
                    return isFunction(value.valueOf) ? value.valueOf() : objectValueOf.call(value)
                }
                function $ParseProvider() {
                    var identStart, identContinue, cache = createMap(), literals = {
                        true: !0,
                        false: !1,
                        null: null,
                        undefined: void 0
                    };
                    this.addLiteral = function(literalName, literalValue) {
                        literals[literalName] = literalValue
                    }
                    ,
                    this.setIdentifierFns = function(identifierStart, identifierContinue) {
                        return identStart = identifierStart,
                        identContinue = identifierContinue,
                        this
                    }
                    ,
                    this.$get = ["$filter", function($filter) {
                        function $parse(exp, interceptorFn) {
                            var parsedExpression, oneTime, cacheKey;
                            switch (typeof exp) {
                            case "string":
                                if (exp = exp.trim(),
                                cacheKey = exp,
                                !(parsedExpression = cache[cacheKey])) {
                                    ":" === exp.charAt(0) && ":" === exp.charAt(1) && (oneTime = !0,
                                    exp = exp.substring(2));
                                    parsedExpression = new Parser(new Lexer($parseOptions),$filter,$parseOptions).parse(exp),
                                    parsedExpression.constant ? parsedExpression.$$watchDelegate = constantWatchDelegate : oneTime ? parsedExpression.$$watchDelegate = parsedExpression.literal ? oneTimeLiteralWatchDelegate : oneTimeWatchDelegate : parsedExpression.inputs && (parsedExpression.$$watchDelegate = inputsWatchDelegate),
                                    cache[cacheKey] = parsedExpression
                                }
                                return addInterceptor(parsedExpression, interceptorFn);
                            case "function":
                                return addInterceptor(exp, interceptorFn);
                            default:
                                return addInterceptor(noop, interceptorFn)
                            }
                        }
                        function expressionInputDirtyCheck(newValue, oldValueOfValue, compareObjectIdentity) {
                            return null == newValue || null == oldValueOfValue ? newValue === oldValueOfValue : !("object" == typeof newValue && "object" == typeof (newValue = getValueOf(newValue)) && !compareObjectIdentity) && (newValue === oldValueOfValue || newValue !== newValue && oldValueOfValue !== oldValueOfValue)
                        }
                        function inputsWatchDelegate(scope, listener, objectEquality, parsedExpression, prettyPrintExpression) {
                            var lastResult, inputExpressions = parsedExpression.inputs;
                            if (1 === inputExpressions.length) {
                                var oldInputValueOf = expressionInputDirtyCheck;
                                return inputExpressions = inputExpressions[0],
                                scope.$watch(function(scope) {
                                    var newInputValue = inputExpressions(scope);
                                    return expressionInputDirtyCheck(newInputValue, oldInputValueOf, inputExpressions.isPure) || (lastResult = parsedExpression(scope, void 0, void 0, [newInputValue]),
                                    oldInputValueOf = newInputValue && getValueOf(newInputValue)),
                                    lastResult
                                }, listener, objectEquality, prettyPrintExpression)
                            }
                            for (var oldInputValueOfValues = [], oldInputValues = [], i = 0, ii = inputExpressions.length; i < ii; i++)
                                oldInputValueOfValues[i] = expressionInputDirtyCheck,
                                oldInputValues[i] = null;
                            return scope.$watch(function(scope) {
                                for (var changed = !1, i = 0, ii = inputExpressions.length; i < ii; i++) {
                                    var newInputValue = inputExpressions[i](scope);
                                    (changed || (changed = !expressionInputDirtyCheck(newInputValue, oldInputValueOfValues[i], inputExpressions[i].isPure))) && (oldInputValues[i] = newInputValue,
                                    oldInputValueOfValues[i] = newInputValue && getValueOf(newInputValue))
                                }
                                return changed && (lastResult = parsedExpression(scope, void 0, void 0, oldInputValues)),
                                lastResult
                            }, listener, objectEquality, prettyPrintExpression)
                        }
                        function oneTimeWatchDelegate(scope, listener, objectEquality, parsedExpression, prettyPrintExpression) {
                            function oneTimeWatch(scope) {
                                return parsedExpression(scope)
                            }
                            function oneTimeListener(value, old, scope) {
                                lastValue = value,
                                isFunction(listener) && listener(value, old, scope),
                                isDefined(value) && scope.$$postDigest(function() {
                                    isDefined(lastValue) && unwatch()
                                })
                            }
                            var unwatch, lastValue;
                            return unwatch = parsedExpression.inputs ? inputsWatchDelegate(scope, oneTimeListener, objectEquality, parsedExpression, prettyPrintExpression) : scope.$watch(oneTimeWatch, oneTimeListener, objectEquality)
                        }
                        function oneTimeLiteralWatchDelegate(scope, listener, objectEquality, parsedExpression) {
                            function isAllDefined(value) {
                                var allDefined = !0;
                                return forEach(value, function(val) {
                                    isDefined(val) || (allDefined = !1)
                                }),
                                allDefined
                            }
                            var unwatch, lastValue;
                            return unwatch = scope.$watch(function(scope) {
                                return parsedExpression(scope)
                            }, function(value, old, scope) {
                                lastValue = value,
                                isFunction(listener) && listener(value, old, scope),
                                isAllDefined(value) && scope.$$postDigest(function() {
                                    isAllDefined(lastValue) && unwatch()
                                })
                            }, objectEquality)
                        }
                        function constantWatchDelegate(scope, listener, objectEquality, parsedExpression) {
                            var unwatch = scope.$watch(function(scope) {
                                return unwatch(),
                                parsedExpression(scope)
                            }, listener, objectEquality);
                            return unwatch
                        }
                        function addInterceptor(parsedExpression, interceptorFn) {
                            if (!interceptorFn)
                                return parsedExpression;
                            var watchDelegate = parsedExpression.$$watchDelegate
                              , useInputs = !1
                              , regularWatch = watchDelegate !== oneTimeLiteralWatchDelegate && watchDelegate !== oneTimeWatchDelegate
                              , fn = regularWatch ? function(scope, locals, assign, inputs) {
                                var value = useInputs && inputs ? inputs[0] : parsedExpression(scope, locals, assign, inputs);
                                return interceptorFn(value, scope, locals)
                            }
                            : function(scope, locals, assign, inputs) {
                                var value = parsedExpression(scope, locals, assign, inputs)
                                  , result = interceptorFn(value, scope, locals);
                                return isDefined(value) ? result : value
                            }
                            ;
                            return useInputs = !parsedExpression.inputs,
                            watchDelegate && watchDelegate !== inputsWatchDelegate ? (fn.$$watchDelegate = watchDelegate,
                            fn.inputs = parsedExpression.inputs) : interceptorFn.$stateful || (fn.$$watchDelegate = inputsWatchDelegate,
                            fn.inputs = parsedExpression.inputs ? parsedExpression.inputs : [parsedExpression]),
                            fn.inputs && (fn.inputs = fn.inputs.map(function(e) {
                                return e.isPure === PURITY_RELATIVE ? function(s) {
                                    return e(s)
                                }
                                : e
                            })),
                            fn
                        }
                        var noUnsafeEval = csp().noUnsafeEval
                          , $parseOptions = {
                            csp: noUnsafeEval,
                            literals: copy(literals),
                            isIdentifierStart: isFunction(identStart) && identStart,
                            isIdentifierContinue: isFunction(identContinue) && identContinue
                        };
                        return $parse
                    }
                    ]
                }
                function $QProvider() {
                    var errorOnUnhandledRejections = !0;
                    this.$get = ["$rootScope", "$exceptionHandler", function($rootScope, $exceptionHandler) {
                        return qFactory(function(callback) {
                            $rootScope.$evalAsync(callback)
                        }, $exceptionHandler, errorOnUnhandledRejections)
                    }
                    ],
                    this.errorOnUnhandledRejections = function(value) {
                        return isDefined(value) ? (errorOnUnhandledRejections = value,
                        this) : errorOnUnhandledRejections
                    }
                }
                function $$QProvider() {
                    var errorOnUnhandledRejections = !0;
                    this.$get = ["$browser", "$exceptionHandler", function($browser, $exceptionHandler) {
                        return qFactory(function(callback) {
                            $browser.defer(callback)
                        }, $exceptionHandler, errorOnUnhandledRejections)
                    }
                    ],
                    this.errorOnUnhandledRejections = function(value) {
                        return isDefined(value) ? (errorOnUnhandledRejections = value,
                        this) : errorOnUnhandledRejections
                    }
                }
                function qFactory(nextTick, exceptionHandler, errorOnUnhandledRejections) {
                    function defer() {
                        return new Deferred
                    }
                    function Deferred() {
                        var promise = this.promise = new Promise;
                        this.resolve = function(val) {
                            resolvePromise(promise, val)
                        }
                        ,
                        this.reject = function(reason) {
                            rejectPromise(promise, reason)
                        }
                        ,
                        this.notify = function(progress) {
                            notifyPromise(promise, progress)
                        }
                    }
                    function Promise() {
                        this.$$state = {
                            status: 0
                        }
                    }
                    function processQueue(state) {
                        var fn, promise, pending;
                        pending = state.pending,
                        state.processScheduled = !1,
                        state.pending = void 0;
                        try {
                            for (var i = 0, ii = pending.length; i < ii; ++i) {
                                markQStateExceptionHandled(state),
                                promise = pending[i][0],
                                fn = pending[i][state.status];
                                try {
                                    isFunction(fn) ? resolvePromise(promise, fn(state.value)) : 1 === state.status ? resolvePromise(promise, state.value) : rejectPromise(promise, state.value)
                                } catch (e) {
                                    rejectPromise(promise, e)
                                }
                            }
                        } finally {
                            --queueSize,
                            errorOnUnhandledRejections && 0 === queueSize && nextTick(processChecks)
                        }
                    }
                    function processChecks() {
                        for (; !queueSize && checkQueue.length; ) {
                            var toCheck = checkQueue.shift();
                            if (!isStateExceptionHandled(toCheck)) {
                                markQStateExceptionHandled(toCheck);
                                var errorMessage = "Possibly unhandled rejection: " + toDebugString(toCheck.value);
                                isError(toCheck.value) ? exceptionHandler(toCheck.value, errorMessage) : exceptionHandler(errorMessage)
                            }
                        }
                    }
                    function scheduleProcessQueue(state) {
                        !errorOnUnhandledRejections || state.pending || 2 !== state.status || isStateExceptionHandled(state) || (0 === queueSize && 0 === checkQueue.length && nextTick(processChecks),
                        checkQueue.push(state)),
                        !state.processScheduled && state.pending && (state.processScheduled = !0,
                        ++queueSize,
                        nextTick(function() {
                            processQueue(state)
                        }))
                    }
                    function resolvePromise(promise, val) {
                        promise.$$state.status || (val === promise ? $$reject(promise, $qMinErr("qcycle", "Expected promise to be resolved with value other than itself '{0}'", val)) : $$resolve(promise, val))
                    }
                    function $$resolve(promise, val) {
                        function doResolve(val) {
                            done || (done = !0,
                            $$resolve(promise, val))
                        }
                        function doReject(val) {
                            done || (done = !0,
                            $$reject(promise, val))
                        }
                        function doNotify(progress) {
                            notifyPromise(promise, progress)
                        }
                        var then, done = !1;
                        try {
                            (isObject(val) || isFunction(val)) && (then = val.then),
                            isFunction(then) ? (promise.$$state.status = -1,
                            then.call(val, doResolve, doReject, doNotify)) : (promise.$$state.value = val,
                            promise.$$state.status = 1,
                            scheduleProcessQueue(promise.$$state))
                        } catch (e) {
                            doReject(e)
                        }
                    }
                    function rejectPromise(promise, reason) {
                        promise.$$state.status || $$reject(promise, reason)
                    }
                    function $$reject(promise, reason) {
                        promise.$$state.value = reason,
                        promise.$$state.status = 2,
                        scheduleProcessQueue(promise.$$state)
                    }
                    function notifyPromise(promise, progress) {
                        var callbacks = promise.$$state.pending;
                        promise.$$state.status <= 0 && callbacks && callbacks.length && nextTick(function() {
                            for (var callback, result, i = 0, ii = callbacks.length; i < ii; i++) {
                                result = callbacks[i][0],
                                callback = callbacks[i][3];
                                try {
                                    notifyPromise(result, isFunction(callback) ? callback(progress) : progress)
                                } catch (e) {
                                    exceptionHandler(e)
                                }
                            }
                        })
                    }
                    function reject(reason) {
                        var result = new Promise;
                        return rejectPromise(result, reason),
                        result
                    }
                    function handleCallback(value, resolver, callback) {
                        var callbackOutput = null;
                        try {
                            isFunction(callback) && (callbackOutput = callback())
                        } catch (e) {
                            return reject(e)
                        }
                        return isPromiseLike(callbackOutput) ? callbackOutput.then(function() {
                            return resolver(value)
                        }, reject) : resolver(value)
                    }
                    function when(value, callback, errback, progressBack) {
                        var result = new Promise;
                        return resolvePromise(result, value),
                        result.then(callback, errback, progressBack)
                    }
                    function all(promises) {
                        var result = new Promise
                          , counter = 0
                          , results = isArray(promises) ? [] : {};
                        return forEach(promises, function(promise, key) {
                            counter++,
                            when(promise).then(function(value) {
                                results[key] = value,
                                --counter || resolvePromise(result, results)
                            }, function(reason) {
                                rejectPromise(result, reason)
                            })
                        }),
                        0 === counter && resolvePromise(result, results),
                        result
                    }
                    function race(promises) {
                        var deferred = defer();
                        return forEach(promises, function(promise) {
                            when(promise).then(deferred.resolve, deferred.reject)
                        }),
                        deferred.promise
                    }
                    function $Q(resolver) {
                        function resolveFn(value) {
                            resolvePromise(promise, value)
                        }
                        function rejectFn(reason) {
                            rejectPromise(promise, reason)
                        }
                        if (!isFunction(resolver))
                            throw $qMinErr("norslvr", "Expected resolverFn, got '{0}'", resolver);
                        var promise = new Promise;
                        return resolver(resolveFn, rejectFn),
                        promise
                    }
                    var $qMinErr = minErr("$q", TypeError)
                      , queueSize = 0
                      , checkQueue = [];
                    extend(Promise.prototype, {
                        then: function(onFulfilled, onRejected, progressBack) {
                            if (isUndefined(onFulfilled) && isUndefined(onRejected) && isUndefined(progressBack))
                                return this;
                            var result = new Promise;
                            return this.$$state.pending = this.$$state.pending || [],
                            this.$$state.pending.push([result, onFulfilled, onRejected, progressBack]),
                            this.$$state.status > 0 && scheduleProcessQueue(this.$$state),
                            result
                        },
                        catch: function(callback) {
                            return this.then(null, callback)
                        },
                        finally: function(callback, progressBack) {
                            return this.then(function(value) {
                                return handleCallback(value, resolve, callback)
                            }, function(error) {
                                return handleCallback(error, reject, callback)
                            }, progressBack)
                        }
                    });
                    var resolve = when;
                    return $Q.prototype = Promise.prototype,
                    $Q.defer = defer,
                    $Q.reject = reject,
                    $Q.when = when,
                    $Q.resolve = resolve,
                    $Q.all = all,
                    $Q.race = race,
                    $Q
                }
                function isStateExceptionHandled(state) {
                    return !!state.pur
                }
                function markQStateExceptionHandled(state) {
                    state.pur = !0
                }
                function markQExceptionHandled(q) {
                    markQStateExceptionHandled(q.$$state)
                }
                function $$RAFProvider() {
                    this.$get = ["$window", "$timeout", function($window, $timeout) {
                        var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame
                          , cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame
                          , rafSupported = !!requestAnimationFrame
                          , raf = rafSupported ? function(fn) {
                            var id = requestAnimationFrame(fn);
                            return function() {
                                cancelAnimationFrame(id)
                            }
                        }
                        : function(fn) {
                            var timer = $timeout(fn, 16.66, !1);
                            return function() {
                                $timeout.cancel(timer)
                            }
                        }
                        ;
                        return raf.supported = rafSupported,
                        raf
                    }
                    ]
                }
                function $RootScopeProvider() {
                    function createChildScopeClass(parent) {
                        function ChildScope() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
                            this.$$listeners = {},
                            this.$$listenerCount = {},
                            this.$$watchersCount = 0,
                            this.$id = nextUid(),
                            this.$$ChildScope = null
                        }
                        return ChildScope.prototype = parent,
                        ChildScope
                    }
                    var TTL = 10
                      , $rootScopeMinErr = minErr("$rootScope")
                      , lastDirtyWatch = null
                      , applyAsyncId = null;
                    this.digestTtl = function(value) {
                        return arguments.length && (TTL = value),
                        TTL
                    }
                    ,
                    this.$get = ["$exceptionHandler", "$parse", "$browser", function($exceptionHandler, $parse, $browser) {
                        function destroyChildScope($event) {
                            $event.currentScope.$$destroyed = !0
                        }
                        function cleanUpScope($scope) {
                            9 === msie && ($scope.$$childHead && cleanUpScope($scope.$$childHead),
                            $scope.$$nextSibling && cleanUpScope($scope.$$nextSibling)),
                            $scope.$parent = $scope.$$nextSibling = $scope.$$prevSibling = $scope.$$childHead = $scope.$$childTail = $scope.$root = $scope.$$watchers = null
                        }
                        function Scope() {
                            this.$id = nextUid(),
                            this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
                            this.$root = this,
                            this.$$destroyed = !1,
                            this.$$listeners = {},
                            this.$$listenerCount = {},
                            this.$$watchersCount = 0,
                            this.$$isolateBindings = null
                        }
                        function beginPhase(phase) {
                            if ($rootScope.$$phase)
                                throw $rootScopeMinErr("inprog", "{0} already in progress", $rootScope.$$phase);
                            $rootScope.$$phase = phase
                        }
                        function clearPhase() {
                            $rootScope.$$phase = null
                        }
                        function incrementWatchersCount(current, count) {
                            do {
                                current.$$watchersCount += count
                            } while (current = current.$parent)
                        }
                        function decrementListenerCount(current, count, name) {
                            do {
                                current.$$listenerCount[name] -= count,
                                0 === current.$$listenerCount[name] && delete current.$$listenerCount[name]
                            } while (current = current.$parent)
                        }
                        function initWatchVal() {}
                        function flushApplyAsync() {
                            for (; applyAsyncQueue.length; )
                                try {
                                    applyAsyncQueue.shift()()
                                } catch (e) {
                                    $exceptionHandler(e)
                                }
                            applyAsyncId = null
                        }
                        function scheduleApplyAsync() {
                            null === applyAsyncId && (applyAsyncId = $browser.defer(function() {
                                $rootScope.$apply(flushApplyAsync)
                            }))
                        }
                        Scope.prototype = {
                            constructor: Scope,
                            $new: function(isolate, parent) {
                                var child;
                                return parent = parent || this,
                                isolate ? (child = new Scope,
                                child.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = createChildScopeClass(this)),
                                child = new this.$$ChildScope),
                                child.$parent = parent,
                                child.$$prevSibling = parent.$$childTail,
                                parent.$$childHead ? (parent.$$childTail.$$nextSibling = child,
                                parent.$$childTail = child) : parent.$$childHead = parent.$$childTail = child,
                                (isolate || parent !== this) && child.$on("$destroy", destroyChildScope),
                                child
                            },
                            $watch: function(watchExp, listener, objectEquality, prettyPrintExpression) {
                                var get = $parse(watchExp);
                                if (get.$$watchDelegate)
                                    return get.$$watchDelegate(this, listener, objectEquality, get, watchExp);
                                var scope = this
                                  , array = scope.$$watchers
                                  , watcher = {
                                    fn: listener,
                                    last: initWatchVal,
                                    get: get,
                                    exp: prettyPrintExpression || watchExp,
                                    eq: !!objectEquality
                                };
                                return lastDirtyWatch = null,
                                isFunction(listener) || (watcher.fn = noop),
                                array || (array = scope.$$watchers = [],
                                array.$$digestWatchIndex = -1),
                                array.unshift(watcher),
                                array.$$digestWatchIndex++,
                                incrementWatchersCount(this, 1),
                                function() {
                                    var index = arrayRemove(array, watcher);
                                    index >= 0 && (incrementWatchersCount(scope, -1),
                                    index < array.$$digestWatchIndex && array.$$digestWatchIndex--),
                                    lastDirtyWatch = null
                                }
                            },
                            $watchGroup: function(watchExpressions, listener) {
                                function watchGroupAction() {
                                    changeReactionScheduled = !1,
                                    firstRun ? (firstRun = !1,
                                    listener(newValues, newValues, self)) : listener(newValues, oldValues, self)
                                }
                                var oldValues = new Array(watchExpressions.length)
                                  , newValues = new Array(watchExpressions.length)
                                  , deregisterFns = []
                                  , self = this
                                  , changeReactionScheduled = !1
                                  , firstRun = !0;
                                if (!watchExpressions.length) {
                                    var shouldCall = !0;
                                    return self.$evalAsync(function() {
                                        shouldCall && listener(newValues, newValues, self)
                                    }),
                                    function() {
                                        shouldCall = !1
                                    }
                                }
                                return 1 === watchExpressions.length ? this.$watch(watchExpressions[0], function(value, oldValue, scope) {
                                    newValues[0] = value,
                                    oldValues[0] = oldValue,
                                    listener(newValues, value === oldValue ? newValues : oldValues, scope)
                                }) : (forEach(watchExpressions, function(expr, i) {
                                    var unwatchFn = self.$watch(expr, function(value, oldValue) {
                                        newValues[i] = value,
                                        oldValues[i] = oldValue,
                                        changeReactionScheduled || (changeReactionScheduled = !0,
                                        self.$evalAsync(watchGroupAction))
                                    });
                                    deregisterFns.push(unwatchFn)
                                }),
                                function() {
                                    for (; deregisterFns.length; )
                                        deregisterFns.shift()()
                                }
                                )
                            },
                            $watchCollection: function(obj, listener) {
                                function $watchCollectionInterceptor(_value) {
                                    newValue = _value;
                                    var newLength, key, newItem, oldItem;
                                    if (!isUndefined(newValue)) {
                                        if (isObject(newValue))
                                            if (isArrayLike(newValue)) {
                                                oldValue !== internalArray && (oldValue = internalArray,
                                                oldLength = oldValue.length = 0,
                                                changeDetected++),
                                                newLength = newValue.length,
                                                oldLength !== newLength && (changeDetected++,
                                                oldValue.length = oldLength = newLength);
                                                for (var i = 0; i < newLength; i++)
                                                    oldItem = oldValue[i],
                                                    newItem = newValue[i],
                                                    oldItem !== oldItem && newItem !== newItem || oldItem === newItem || (changeDetected++,
                                                    oldValue[i] = newItem)
                                            } else {
                                                oldValue !== internalObject && (oldValue = internalObject = {},
                                                oldLength = 0,
                                                changeDetected++),
                                                newLength = 0;
                                                for (key in newValue)
                                                    hasOwnProperty.call(newValue, key) && (newLength++,
                                                    newItem = newValue[key],
                                                    oldItem = oldValue[key],
                                                    key in oldValue ? oldItem !== oldItem && newItem !== newItem || oldItem === newItem || (changeDetected++,
                                                    oldValue[key] = newItem) : (oldLength++,
                                                    oldValue[key] = newItem,
                                                    changeDetected++));
                                                if (oldLength > newLength) {
                                                    changeDetected++;
                                                    for (key in oldValue)
                                                        hasOwnProperty.call(newValue, key) || (oldLength--,
                                                        delete oldValue[key])
                                                }
                                            }
                                        else
                                            oldValue !== newValue && (oldValue = newValue,
                                            changeDetected++);
                                        return changeDetected
                                    }
                                }
                                function $watchCollectionAction() {
                                    if (initRun ? (initRun = !1,
                                    listener(newValue, newValue, self)) : listener(newValue, veryOldValue, self),
                                    trackVeryOldValue)
                                        if (isObject(newValue))
                                            if (isArrayLike(newValue)) {
                                                veryOldValue = new Array(newValue.length);
                                                for (var i = 0; i < newValue.length; i++)
                                                    veryOldValue[i] = newValue[i]
                                            } else {
                                                veryOldValue = {};
                                                for (var key in newValue)
                                                    hasOwnProperty.call(newValue, key) && (veryOldValue[key] = newValue[key])
                                            }
                                        else
                                            veryOldValue = newValue
                                }
                                $watchCollectionInterceptor.$stateful = !0;
                                var newValue, oldValue, veryOldValue, self = this, trackVeryOldValue = listener.length > 1, changeDetected = 0, changeDetector = $parse(obj, $watchCollectionInterceptor), internalArray = [], internalObject = {}, initRun = !0, oldLength = 0;
                                return this.$watch(changeDetector, $watchCollectionAction)
                            },
                            $digest: function() {
                                var watch, value, last, fn, get, watchers, dirty, next, current, logIdx, asyncTask, ttl = TTL, target = this, watchLog = [];
                                beginPhase("$digest"),
                                $browser.$$checkUrlChange(),
                                this === $rootScope && null !== applyAsyncId && ($browser.defer.cancel(applyAsyncId),
                                flushApplyAsync()),
                                lastDirtyWatch = null;
                                do {
                                    dirty = !1,
                                    current = target;
                                    for (var asyncQueuePosition = 0; asyncQueuePosition < asyncQueue.length; asyncQueuePosition++) {
                                        try {
                                            asyncTask = asyncQueue[asyncQueuePosition],
                                            fn = asyncTask.fn,
                                            fn(asyncTask.scope, asyncTask.locals)
                                        } catch (e) {
                                            $exceptionHandler(e)
                                        }
                                        lastDirtyWatch = null
                                    }
                                    asyncQueue.length = 0;
                                    traverseScopesLoop: do {
                                        if (watchers = current.$$watchers)
                                            for (watchers.$$digestWatchIndex = watchers.length; watchers.$$digestWatchIndex--; )
                                                try {
                                                    if (watch = watchers[watchers.$$digestWatchIndex])
                                                        if (get = watch.get,
                                                        (value = get(current)) === (last = watch.last) || (watch.eq ? equals(value, last) : isNumberNaN(value) && isNumberNaN(last))) {
                                                            if (watch === lastDirtyWatch) {
                                                                dirty = !1;
                                                                break traverseScopesLoop
                                                            }
                                                        } else
                                                            dirty = !0,
                                                            lastDirtyWatch = watch,
                                                            watch.last = watch.eq ? copy(value, null) : value,
                                                            fn = watch.fn,
                                                            fn(value, last === initWatchVal ? value : last, current),
                                                            ttl < 5 && (logIdx = 4 - ttl,
                                                            watchLog[logIdx] || (watchLog[logIdx] = []),
                                                            watchLog[logIdx].push({
                                                                msg: isFunction(watch.exp) ? "fn: " + (watch.exp.name || watch.exp.toString()) : watch.exp,
                                                                newVal: value,
                                                                oldVal: last
                                                            }))
                                                } catch (e) {
                                                    $exceptionHandler(e)
                                                }
                                        if (!(next = current.$$watchersCount && current.$$childHead || current !== target && current.$$nextSibling))
                                            for (; current !== target && !(next = current.$$nextSibling); )
                                                current = current.$parent
                                    } while (current = next);
                                    if ((dirty || asyncQueue.length) && !ttl--)
                                        throw clearPhase(),
                                        $rootScopeMinErr("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", TTL, watchLog)
                                } while (dirty || asyncQueue.length);
                                for (clearPhase(); postDigestQueuePosition < postDigestQueue.length; )
                                    try {
                                        postDigestQueue[postDigestQueuePosition++]()
                                    } catch (e) {
                                        $exceptionHandler(e)
                                    }
                                postDigestQueue.length = postDigestQueuePosition = 0,
                                $browser.$$checkUrlChange()
                            },
                            $destroy: function() {
                                if (!this.$$destroyed) {
                                    var parent = this.$parent;
                                    this.$broadcast("$destroy"),
                                    this.$$destroyed = !0,
                                    this === $rootScope && $browser.$$applicationDestroyed(),
                                    incrementWatchersCount(this, -this.$$watchersCount);
                                    for (var eventName in this.$$listenerCount)
                                        decrementListenerCount(this, this.$$listenerCount[eventName], eventName);
                                    parent && parent.$$childHead === this && (parent.$$childHead = this.$$nextSibling),
                                    parent && parent.$$childTail === this && (parent.$$childTail = this.$$prevSibling),
                                    this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                                    this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                                    this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = noop,
                                    this.$on = this.$watch = this.$watchGroup = function() {
                                        return noop
                                    }
                                    ,
                                    this.$$listeners = {},
                                    this.$$nextSibling = null,
                                    cleanUpScope(this)
                                }
                            },
                            $eval: function(expr, locals) {
                                return $parse(expr)(this, locals)
                            },
                            $evalAsync: function(expr, locals) {
                                $rootScope.$$phase || asyncQueue.length || $browser.defer(function() {
                                    asyncQueue.length && $rootScope.$digest()
                                }),
                                asyncQueue.push({
                                    scope: this,
                                    fn: $parse(expr),
                                    locals: locals
                                })
                            },
                            $$postDigest: function(fn) {
                                postDigestQueue.push(fn)
                            },
                            $apply: function(expr) {
                                try {
                                    beginPhase("$apply");
                                    try {
                                        return this.$eval(expr)
                                    } finally {
                                        clearPhase()
                                    }
                                } catch (e) {
                                    $exceptionHandler(e)
                                } finally {
                                    try {
                                        $rootScope.$digest()
                                    } catch (e) {
                                        throw $exceptionHandler(e),
                                        e
                                    }
                                }
                            },
                            $applyAsync: function(expr) {
                                function $applyAsyncExpression() {
                                    scope.$eval(expr)
                                }
                                var scope = this;
                                expr && applyAsyncQueue.push($applyAsyncExpression),
                                expr = $parse(expr),
                                scheduleApplyAsync()
                            },
                            $on: function(name, listener) {
                                var namedListeners = this.$$listeners[name];
                                namedListeners || (this.$$listeners[name] = namedListeners = []),
                                namedListeners.push(listener);
                                var current = this;
                                do {
                                    current.$$listenerCount[name] || (current.$$listenerCount[name] = 0),
                                    current.$$listenerCount[name]++
                                } while (current = current.$parent);
                                var self = this;
                                return function() {
                                    var indexOfListener = namedListeners.indexOf(listener);
                                    -1 !== indexOfListener && (namedListeners[indexOfListener] = null,
                                    decrementListenerCount(self, 1, name))
                                }
                            },
                            $emit: function(name, args) {
                                var namedListeners, i, length, empty = [], scope = this, stopPropagation = !1, event = {
                                    name: name,
                                    targetScope: scope,
                                    stopPropagation: function() {
                                        stopPropagation = !0
                                    },
                                    preventDefault: function() {
                                        event.defaultPrevented = !0
                                    },
                                    defaultPrevented: !1
                                }, listenerArgs = concat([event], arguments, 1);
                                do {
                                    for (namedListeners = scope.$$listeners[name] || empty,
                                    event.currentScope = scope,
                                    i = 0,
                                    length = namedListeners.length; i < length; i++)
                                        if (namedListeners[i])
                                            try {
                                                namedListeners[i].apply(null, listenerArgs)
                                            } catch (e) {
                                                $exceptionHandler(e)
                                            }
                                        else
                                            namedListeners.splice(i, 1),
                                            i--,
                                            length--;
                                    if (stopPropagation)
                                        return event.currentScope = null,
                                        event;
                                    scope = scope.$parent
                                } while (scope);
                                return event.currentScope = null,
                                event
                            },
                            $broadcast: function(name, args) {
                                var target = this
                                  , current = target
                                  , next = target
                                  , event = {
                                    name: name,
                                    targetScope: target,
                                    preventDefault: function() {
                                        event.defaultPrevented = !0
                                    },
                                    defaultPrevented: !1
                                };
                                if (!target.$$listenerCount[name])
                                    return event;
                                for (var listeners, i, length, listenerArgs = concat([event], arguments, 1); current = next; ) {
                                    for (event.currentScope = current,
                                    listeners = current.$$listeners[name] || [],
                                    i = 0,
                                    length = listeners.length; i < length; i++)
                                        if (listeners[i])
                                            try {
                                                listeners[i].apply(null, listenerArgs)
                                            } catch (e) {
                                                $exceptionHandler(e)
                                            }
                                        else
                                            listeners.splice(i, 1),
                                            i--,
                                            length--;
                                    if (!(next = current.$$listenerCount[name] && current.$$childHead || current !== target && current.$$nextSibling))
                                        for (; current !== target && !(next = current.$$nextSibling); )
                                            current = current.$parent
                                }
                                return event.currentScope = null,
                                event
                            }
                        };
                        var $rootScope = new Scope
                          , asyncQueue = $rootScope.$$asyncQueue = []
                          , postDigestQueue = $rootScope.$$postDigestQueue = []
                          , applyAsyncQueue = $rootScope.$$applyAsyncQueue = []
                          , postDigestQueuePosition = 0;
                        return $rootScope
                    }
                    ]
                }
                function $$SanitizeUriProvider() {
                    var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/
                      , imgSrcSanitizationWhitelist = /^\s*((https?|ftp|file|blob):|data:image\/)/;
                    this.aHrefSanitizationWhitelist = function(regexp) {
                        return isDefined(regexp) ? (aHrefSanitizationWhitelist = regexp,
                        this) : aHrefSanitizationWhitelist
                    }
                    ,
                    this.imgSrcSanitizationWhitelist = function(regexp) {
                        return isDefined(regexp) ? (imgSrcSanitizationWhitelist = regexp,
                        this) : imgSrcSanitizationWhitelist
                    }
                    ,
                    this.$get = function() {
                        return function(uri, isImage) {
                            var normalizedVal, regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
                            return normalizedVal = urlResolve(uri).href,
                            "" === normalizedVal || normalizedVal.match(regex) ? uri : "unsafe:" + normalizedVal
                        }
                    }
                }
                function snakeToCamel(name) {
                    return name.replace(UNDERSCORE_LOWERCASE_REGEXP, fnCamelCaseReplace)
                }
                function adjustMatcher(matcher) {
                    if ("self" === matcher)
                        return matcher;
                    if (isString(matcher)) {
                        if (matcher.indexOf("***") > -1)
                            throw $sceMinErr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", matcher);
                        return matcher = escapeForRegexp(matcher).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"),
                        new RegExp("^" + matcher + "$")
                    }
                    if (isRegExp(matcher))
                        return new RegExp("^" + matcher.source + "$");
                    throw $sceMinErr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
                }
                function adjustMatchers(matchers) {
                    var adjustedMatchers = [];
                    return isDefined(matchers) && forEach(matchers, function(matcher) {
                        adjustedMatchers.push(adjustMatcher(matcher))
                    }),
                    adjustedMatchers
                }
                function $SceDelegateProvider() {
                    this.SCE_CONTEXTS = SCE_CONTEXTS;
                    var resourceUrlWhitelist = ["self"]
                      , resourceUrlBlacklist = [];
                    this.resourceUrlWhitelist = function(value) {
                        return arguments.length && (resourceUrlWhitelist = adjustMatchers(value)),
                        resourceUrlWhitelist
                    }
                    ,
                    this.resourceUrlBlacklist = function(value) {
                        return arguments.length && (resourceUrlBlacklist = adjustMatchers(value)),
                        resourceUrlBlacklist
                    }
                    ,
                    this.$get = ["$injector", function($injector) {
                        function matchUrl(matcher, parsedUrl) {
                            return "self" === matcher ? urlIsSameOrigin(parsedUrl) : !!matcher.exec(parsedUrl.href)
                        }
                        function isResourceUrlAllowedByPolicy(url) {
                            var i, n, parsedUrl = urlResolve(url.toString()), allowed = !1;
                            for (i = 0,
                            n = resourceUrlWhitelist.length; i < n; i++)
                                if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
                                    allowed = !0;
                                    break
                                }
                            if (allowed)
                                for (i = 0,
                                n = resourceUrlBlacklist.length; i < n; i++)
                                    if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                                        allowed = !1;
                                        break
                                    }
                            return allowed
                        }
                        function generateHolderType(Base) {
                            var holderType = function(trustedValue) {
                                this.$$unwrapTrustedValue = function() {
                                    return trustedValue
                                }
                            };
                            return Base && (holderType.prototype = new Base),
                            holderType.prototype.valueOf = function() {
                                return this.$$unwrapTrustedValue()
                            }
                            ,
                            holderType.prototype.toString = function() {
                                return this.$$unwrapTrustedValue().toString()
                            }
                            ,
                            holderType
                        }
                        function trustAs(type, trustedValue) {
                            var Constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                            if (!Constructor)
                                throw $sceMinErr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", type, trustedValue);
                            if (null === trustedValue || isUndefined(trustedValue) || "" === trustedValue)
                                return trustedValue;
                            if ("string" != typeof trustedValue)
                                throw $sceMinErr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", type);
                            return new Constructor(trustedValue)
                        }
                        function valueOf(maybeTrusted) {
                            return maybeTrusted instanceof trustedValueHolderBase ? maybeTrusted.$$unwrapTrustedValue() : maybeTrusted
                        }
                        function getTrusted(type, maybeTrusted) {
                            if (null === maybeTrusted || isUndefined(maybeTrusted) || "" === maybeTrusted)
                                return maybeTrusted;
                            var constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                            if (constructor && maybeTrusted instanceof constructor)
                                return maybeTrusted.$$unwrapTrustedValue();
                            if (type === SCE_CONTEXTS.RESOURCE_URL) {
                                if (isResourceUrlAllowedByPolicy(maybeTrusted))
                                    return maybeTrusted;
                                throw $sceMinErr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", maybeTrusted.toString())
                            }
                            if (type === SCE_CONTEXTS.HTML)
                                return htmlSanitizer(maybeTrusted);
                            throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.")
                        }
                        var htmlSanitizer = function(html) {
                            throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.")
                        };
                        $injector.has("$sanitize") && (htmlSanitizer = $injector.get("$sanitize"));
                        var trustedValueHolderBase = generateHolderType()
                          , byType = {};
                        return byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase),
                        byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase),
                        byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase),
                        byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase),
                        byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]),
                        {
                            trustAs: trustAs,
                            getTrusted: getTrusted,
                            valueOf: valueOf
                        }
                    }
                    ]
                }
                function $SceProvider() {
                    var enabled = !0;
                    this.enabled = function(value) {
                        return arguments.length && (enabled = !!value),
                        enabled
                    }
                    ,
                    this.$get = ["$parse", "$sceDelegate", function($parse, $sceDelegate) {
                        if (enabled && msie < 8)
                            throw $sceMinErr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                        var sce = shallowCopy(SCE_CONTEXTS);
                        sce.isEnabled = function() {
                            return enabled
                        }
                        ,
                        sce.trustAs = $sceDelegate.trustAs,
                        sce.getTrusted = $sceDelegate.getTrusted,
                        sce.valueOf = $sceDelegate.valueOf,
                        enabled || (sce.trustAs = sce.getTrusted = function(type, value) {
                            return value
                        }
                        ,
                        sce.valueOf = identity),
                        sce.parseAs = function(type, expr) {
                            var parsed = $parse(expr);
                            return parsed.literal && parsed.constant ? parsed : $parse(expr, function(value) {
                                return sce.getTrusted(type, value)
                            })
                        }
                        ;
                        var parse = sce.parseAs
                          , getTrusted = sce.getTrusted
                          , trustAs = sce.trustAs;
                        return forEach(SCE_CONTEXTS, function(enumValue, name) {
                            var lName = lowercase(name);
                            sce[snakeToCamel("parse_as_" + lName)] = function(expr) {
                                return parse(enumValue, expr)
                            }
                            ,
                            sce[snakeToCamel("get_trusted_" + lName)] = function(value) {
                                return getTrusted(enumValue, value)
                            }
                            ,
                            sce[snakeToCamel("trust_as_" + lName)] = function(value) {
                                return trustAs(enumValue, value)
                            }
                        }),
                        sce
                    }
                    ]
                }
                function $SnifferProvider() {
                    this.$get = ["$window", "$document", function($window, $document) {
                        var eventSupport = {}
                          , isNw = $window.nw && $window.nw.process
                          , isChromePackagedApp = !isNw && $window.chrome && ($window.chrome.app && $window.chrome.app.runtime || !$window.chrome.app && $window.chrome.runtime && $window.chrome.runtime.id)
                          , hasHistoryPushState = !isChromePackagedApp && $window.history && $window.history.pushState
                          , android = toInt((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1])
                          , boxee = /Boxee/i.test(($window.navigator || {}).userAgent)
                          , document = $document[0] || {}
                          , bodyStyle = document.body && document.body.style
                          , transitions = !1
                          , animations = !1;
                        return bodyStyle && (transitions = !!("transition"in bodyStyle || "webkitTransition"in bodyStyle),
                        animations = !!("animation"in bodyStyle || "webkitAnimation"in bodyStyle)),
                        {
                            history: !(!hasHistoryPushState || android < 4 || boxee),
                            hasEvent: function(event) {
                                if ("input" === event && msie)
                                    return !1;
                                if (isUndefined(eventSupport[event])) {
                                    var divElm = document.createElement("div");
                                    eventSupport[event] = "on" + event in divElm
                                }
                                return eventSupport[event]
                            },
                            csp: csp(),
                            transitions: transitions,
                            animations: animations,
                            android: android
                        }
                    }
                    ]
                }
                function $TemplateRequestProvider() {
                    var httpOptions;
                    this.httpOptions = function(val) {
                        return val ? (httpOptions = val,
                        this) : httpOptions
                    }
                    ,
                    this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function($exceptionHandler, $templateCache, $http, $q, $sce) {
                        function handleRequestFn(tpl, ignoreRequestError) {
                            function handleError(resp) {
                                return ignoreRequestError || (resp = $templateRequestMinErr("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", tpl, resp.status, resp.statusText),
                                $exceptionHandler(resp)),
                                $q.reject(resp)
                            }
                            handleRequestFn.totalPendingRequests++,
                            isString(tpl) && !isUndefined($templateCache.get(tpl)) || (tpl = $sce.getTrustedResourceUrl(tpl));
                            var transformResponse = $http.defaults && $http.defaults.transformResponse;
                            return isArray(transformResponse) ? transformResponse = transformResponse.filter(function(transformer) {
                                return transformer !== defaultHttpResponseTransform
                            }) : transformResponse === defaultHttpResponseTransform && (transformResponse = null),
                            $http.get(tpl, extend({
                                cache: $templateCache,
                                transformResponse: transformResponse
                            }, httpOptions)).finally(function() {
                                handleRequestFn.totalPendingRequests--
                            }).then(function(response) {
                                return $templateCache.put(tpl, response.data),
                                response.data
                            }, handleError)
                        }
                        return handleRequestFn.totalPendingRequests = 0,
                        handleRequestFn
                    }
                    ]
                }
                function $$TestabilityProvider() {
                    this.$get = ["$rootScope", "$browser", "$location", function($rootScope, $browser, $location) {
                        var testability = {};
                        return testability.findBindings = function(element, expression, opt_exactMatch) {
                            var bindings = element.getElementsByClassName("ng-binding")
                              , matches = [];
                            return forEach(bindings, function(binding) {
                                var dataBinding = angular.element(binding).data("$binding");
                                dataBinding && forEach(dataBinding, function(bindingName) {
                                    if (opt_exactMatch) {
                                        new RegExp("(^|\\s)" + escapeForRegexp(expression) + "(\\s|\\||$)").test(bindingName) && matches.push(binding)
                                    } else
                                        -1 !== bindingName.indexOf(expression) && matches.push(binding)
                                })
                            }),
                            matches
                        }
                        ,
                        testability.findModels = function(element, expression, opt_exactMatch) {
                            for (var prefixes = ["ng-", "data-ng-", "ng\\:"], p = 0; p < prefixes.length; ++p) {
                                var attributeEquals = opt_exactMatch ? "=" : "*="
                                  , selector = "[" + prefixes[p] + "model" + attributeEquals + '"' + expression + '"]'
                                  , elements = element.querySelectorAll(selector);
                                if (elements.length)
                                    return elements
                            }
                        }
                        ,
                        testability.getLocation = function() {
                            return $location.url()
                        }
                        ,
                        testability.setLocation = function(url) {
                            url !== $location.url() && ($location.url(url),
                            $rootScope.$digest())
                        }
                        ,
                        testability.whenStable = function(callback) {
                            $browser.notifyWhenNoOutstandingRequests(callback)
                        }
                        ,
                        testability
                    }
                    ]
                }
                function $TimeoutProvider() {
                    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function($rootScope, $browser, $q, $$q, $exceptionHandler) {
                        function timeout(fn, delay, invokeApply) {
                            isFunction(fn) || (invokeApply = delay,
                            delay = fn,
                            fn = noop);
                            var timeoutId, args = sliceArgs(arguments, 3), skipApply = isDefined(invokeApply) && !invokeApply, deferred = (skipApply ? $$q : $q).defer(), promise = deferred.promise;
                            return timeoutId = $browser.defer(function() {
                                try {
                                    deferred.resolve(fn.apply(null, args))
                                } catch (e) {
                                    deferred.reject(e),
                                    $exceptionHandler(e)
                                } finally {
                                    delete deferreds[promise.$$timeoutId]
                                }
                                skipApply || $rootScope.$apply()
                            }, delay),
                            promise.$$timeoutId = timeoutId,
                            deferreds[timeoutId] = deferred,
                            promise
                        }
                        var deferreds = {};
                        return timeout.cancel = function(promise) {
                            return !!(promise && promise.$$timeoutId in deferreds) && (markQExceptionHandled(deferreds[promise.$$timeoutId].promise),
                            deferreds[promise.$$timeoutId].reject("canceled"),
                            delete deferreds[promise.$$timeoutId],
                            $browser.defer.cancel(promise.$$timeoutId))
                        }
                        ,
                        timeout
                    }
                    ]
                }
                function urlResolve(url) {
                    var href = url;
                    return msie && (urlParsingNode.setAttribute("href", href),
                    href = urlParsingNode.href),
                    urlParsingNode.setAttribute("href", href),
                    {
                        href: urlParsingNode.href,
                        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                        host: urlParsingNode.host,
                        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                        hostname: urlParsingNode.hostname,
                        port: urlParsingNode.port,
                        pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
                    }
                }
                function urlIsSameOrigin(requestUrl) {
                    var parsed = isString(requestUrl) ? urlResolve(requestUrl) : requestUrl;
                    return parsed.protocol === originUrl.protocol && parsed.host === originUrl.host
                }
                function $WindowProvider() {
                    this.$get = valueFn(window)
                }
                function $$CookieReader($document) {
                    function safeGetCookie(rawDocument) {
                        try {
                            return rawDocument.cookie || ""
                        } catch (e) {
                            return ""
                        }
                    }
                    function safeDecodeURIComponent(str) {
                        try {
                            return decodeURIComponent(str)
                        } catch (e) {
                            return str
                        }
                    }
                    var rawDocument = $document[0] || {}
                      , lastCookies = {}
                      , lastCookieString = "";
                    return function() {
                        var cookieArray, cookie, i, index, name, currentCookieString = safeGetCookie(rawDocument);
                        if (currentCookieString !== lastCookieString)
                            for (lastCookieString = currentCookieString,
                            cookieArray = lastCookieString.split("; "),
                            lastCookies = {},
                            i = 0; i < cookieArray.length; i++)
                                cookie = cookieArray[i],
                                (index = cookie.indexOf("=")) > 0 && (name = safeDecodeURIComponent(cookie.substring(0, index)),
                                isUndefined(lastCookies[name]) && (lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1))));
                        return lastCookies
                    }
                }
                function $$CookieReaderProvider() {
                    this.$get = $$CookieReader
                }
                function $FilterProvider($provide) {
                    function register(name, factory) {
                        if (isObject(name)) {
                            var filters = {};
                            return forEach(name, function(filter, key) {
                                filters[key] = register(key, filter)
                            }),
                            filters
                        }
                        return $provide.factory(name + suffix, factory)
                    }
                    var suffix = "Filter";
                    this.register = register,
                    this.$get = ["$injector", function($injector) {
                        return function(name) {
                            return $injector.get(name + suffix)
                        }
                    }
                    ],
                    register("currency", currencyFilter),
                    register("date", dateFilter),
                    register("filter", filterFilter),
                    register("json", jsonFilter),
                    register("limitTo", limitToFilter),
                    register("lowercase", lowercaseFilter),
                    register("number", numberFilter),
                    register("orderBy", orderByFilter),
                    register("uppercase", uppercaseFilter)
                }
                function filterFilter() {
                    return function(array, expression, comparator, anyPropertyKey) {
                        if (!isArrayLike(array)) {
                            if (null == array)
                                return array;
                            throw minErr("filter")("notarray", "Expected array but received: {0}", array)
                        }
                        anyPropertyKey = anyPropertyKey || "$";
                        var predicateFn, matchAgainstAnyProp, expressionType = getTypeForFilter(expression);
                        switch (expressionType) {
                        case "function":
                            predicateFn = expression;
                            break;
                        case "boolean":
                        case "null":
                        case "number":
                        case "string":
                            matchAgainstAnyProp = !0;
                        case "object":
                            predicateFn = createPredicateFn(expression, comparator, anyPropertyKey, matchAgainstAnyProp);
                            break;
                        default:
                            return array
                        }
                        return Array.prototype.filter.call(array, predicateFn)
                    }
                }
                function createPredicateFn(expression, comparator, anyPropertyKey, matchAgainstAnyProp) {
                    var shouldMatchPrimitives = isObject(expression) && anyPropertyKey in expression;
                    return !0 === comparator ? comparator = equals : isFunction(comparator) || (comparator = function(actual, expected) {
                        return !isUndefined(actual) && (null === actual || null === expected ? actual === expected : !(isObject(expected) || isObject(actual) && !hasCustomToString(actual)) && (actual = lowercase("" + actual),
                        expected = lowercase("" + expected),
                        -1 !== actual.indexOf(expected)))
                    }
                    ),
                    function(item) {
                        return shouldMatchPrimitives && !isObject(item) ? deepCompare(item, expression[anyPropertyKey], comparator, anyPropertyKey, !1) : deepCompare(item, expression, comparator, anyPropertyKey, matchAgainstAnyProp)
                    }
                }
                function deepCompare(actual, expected, comparator, anyPropertyKey, matchAgainstAnyProp, dontMatchWholeObject) {
                    var actualType = getTypeForFilter(actual)
                      , expectedType = getTypeForFilter(expected);
                    if ("string" === expectedType && "!" === expected.charAt(0))
                        return !deepCompare(actual, expected.substring(1), comparator, anyPropertyKey, matchAgainstAnyProp);
                    if (isArray(actual))
                        return actual.some(function(item) {
                            return deepCompare(item, expected, comparator, anyPropertyKey, matchAgainstAnyProp)
                        });
                    switch (actualType) {
                    case "object":
                        var key;
                        if (matchAgainstAnyProp) {
                            for (key in actual)
                                if (key.charAt && "$" !== key.charAt(0) && deepCompare(actual[key], expected, comparator, anyPropertyKey, !0))
                                    return !0;
                            return !dontMatchWholeObject && deepCompare(actual, expected, comparator, anyPropertyKey, !1)
                        }
                        if ("object" === expectedType) {
                            for (key in expected) {
                                var expectedVal = expected[key];
                                if (!isFunction(expectedVal) && !isUndefined(expectedVal)) {
                                    var matchAnyProperty = key === anyPropertyKey;
                                    if (!deepCompare(matchAnyProperty ? actual : actual[key], expectedVal, comparator, anyPropertyKey, matchAnyProperty, matchAnyProperty))
                                        return !1
                                }
                            }
                            return !0
                        }
                        return comparator(actual, expected);
                    case "function":
                        return !1;
                    default:
                        return comparator(actual, expected)
                    }
                }
                function getTypeForFilter(val) {
                    return null === val ? "null" : typeof val
                }
                function currencyFilter($locale) {
                    var formats = $locale.NUMBER_FORMATS;
                    return function(amount, currencySymbol, fractionSize) {
                        return isUndefined(currencySymbol) && (currencySymbol = formats.CURRENCY_SYM),
                        isUndefined(fractionSize) && (fractionSize = formats.PATTERNS[1].maxFrac),
                        null == amount ? amount : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).replace(/\u00A4/g, currencySymbol)
                    }
                }
                function numberFilter($locale) {
                    var formats = $locale.NUMBER_FORMATS;
                    return function(number, fractionSize) {
                        return null == number ? number : formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize)
                    }
                }
                function parse(numStr) {
                    var digits, numberOfIntegerDigits, i, j, zeros, exponent = 0;
                    for ((numberOfIntegerDigits = numStr.indexOf(DECIMAL_SEP)) > -1 && (numStr = numStr.replace(DECIMAL_SEP, "")),
                    (i = numStr.search(/e/i)) > 0 ? (numberOfIntegerDigits < 0 && (numberOfIntegerDigits = i),
                    numberOfIntegerDigits += +numStr.slice(i + 1),
                    numStr = numStr.substring(0, i)) : numberOfIntegerDigits < 0 && (numberOfIntegerDigits = numStr.length),
                    i = 0; numStr.charAt(i) === ZERO_CHAR; i++)
                        ;
                    if (i === (zeros = numStr.length))
                        digits = [0],
                        numberOfIntegerDigits = 1;
                    else {
                        for (zeros--; numStr.charAt(zeros) === ZERO_CHAR; )
                            zeros--;
                        for (numberOfIntegerDigits -= i,
                        digits = [],
                        j = 0; i <= zeros; i++,
                        j++)
                            digits[j] = +numStr.charAt(i)
                    }
                    return numberOfIntegerDigits > MAX_DIGITS && (digits = digits.splice(0, MAX_DIGITS - 1),
                    exponent = numberOfIntegerDigits - 1,
                    numberOfIntegerDigits = 1),
                    {
                        d: digits,
                        e: exponent,
                        i: numberOfIntegerDigits
                    }
                }
                function roundNumber(parsedNumber, fractionSize, minFrac, maxFrac) {
                    var digits = parsedNumber.d
                      , fractionLen = digits.length - parsedNumber.i;
                    fractionSize = isUndefined(fractionSize) ? Math.min(Math.max(minFrac, fractionLen), maxFrac) : +fractionSize;
                    var roundAt = fractionSize + parsedNumber.i
                      , digit = digits[roundAt];
                    if (roundAt > 0) {
                        digits.splice(Math.max(parsedNumber.i, roundAt));
                        for (var j = roundAt; j < digits.length; j++)
                            digits[j] = 0
                    } else {
                        fractionLen = Math.max(0, fractionLen),
                        parsedNumber.i = 1,
                        digits.length = Math.max(1, roundAt = fractionSize + 1),
                        digits[0] = 0;
                        for (var i = 1; i < roundAt; i++)
                            digits[i] = 0
                    }
                    if (digit >= 5)
                        if (roundAt - 1 < 0) {
                            for (var k = 0; k > roundAt; k--)
                                digits.unshift(0),
                                parsedNumber.i++;
                            digits.unshift(1),
                            parsedNumber.i++
                        } else
                            digits[roundAt - 1]++;
                    for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
                        digits.push(0);
                    var carry = digits.reduceRight(function(carry, d, i, digits) {
                        return d += carry,
                        digits[i] = d % 10,
                        Math.floor(d / 10)
                    }, 0);
                    carry && (digits.unshift(carry),
                    parsedNumber.i++)
                }
                function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
                    if (!isString(number) && !isNumber(number) || isNaN(number))
                        return "";
                    var parsedNumber, isInfinity = !isFinite(number), isZero = !1, numStr = Math.abs(number) + "", formattedText = "";
                    if (isInfinity)
                        formattedText = "∞";
                    else {
                        parsedNumber = parse(numStr),
                        roundNumber(parsedNumber, fractionSize, pattern.minFrac, pattern.maxFrac);
                        var digits = parsedNumber.d
                          , integerLen = parsedNumber.i
                          , exponent = parsedNumber.e
                          , decimals = [];
                        for (isZero = digits.reduce(function(isZero, d) {
                            return isZero && !d
                        }, !0); integerLen < 0; )
                            digits.unshift(0),
                            integerLen++;
                        integerLen > 0 ? decimals = digits.splice(integerLen, digits.length) : (decimals = digits,
                        digits = [0]);
                        var groups = [];
                        for (digits.length >= pattern.lgSize && groups.unshift(digits.splice(-pattern.lgSize, digits.length).join("")); digits.length > pattern.gSize; )
                            groups.unshift(digits.splice(-pattern.gSize, digits.length).join(""));
                        digits.length && groups.unshift(digits.join("")),
                        formattedText = groups.join(groupSep),
                        decimals.length && (formattedText += decimalSep + decimals.join("")),
                        exponent && (formattedText += "e+" + exponent)
                    }
                    return number < 0 && !isZero ? pattern.negPre + formattedText + pattern.negSuf : pattern.posPre + formattedText + pattern.posSuf
                }
                function padNumber(num, digits, trim, negWrap) {
                    var neg = "";
                    for ((num < 0 || negWrap && num <= 0) && (negWrap ? num = 1 - num : (num = -num,
                    neg = "-")),
                    num = "" + num; num.length < digits; )
                        num = ZERO_CHAR + num;
                    return trim && (num = num.substr(num.length - digits)),
                    neg + num
                }
                function dateGetter(name, size, offset, trim, negWrap) {
                    return offset = offset || 0,
                    function(date) {
                        var value = date["get" + name]();
                        return (offset > 0 || value > -offset) && (value += offset),
                        0 === value && -12 === offset && (value = 12),
                        padNumber(value, size, trim, negWrap)
                    }
                }
                function dateStrGetter(name, shortForm, standAlone) {
                    return function(date, formats) {
                        var value = date["get" + name]();
                        return formats[uppercase((standAlone ? "STANDALONE" : "") + (shortForm ? "SHORT" : "") + name)][value]
                    }
                }
                function timeZoneGetter(date, formats, offset) {
                    var zone = -1 * offset
                      , paddedZone = zone >= 0 ? "+" : "";
                    return paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2)
                }
                function getFirstThursdayOfYear(year) {
                    var dayOfWeekOnFirst = new Date(year,0,1).getDay();
                    return new Date(year,0,(dayOfWeekOnFirst <= 4 ? 5 : 12) - dayOfWeekOnFirst)
                }
                function getThursdayThisWeek(datetime) {
                    return new Date(datetime.getFullYear(),datetime.getMonth(),datetime.getDate() + (4 - datetime.getDay()))
                }
                function weekGetter(size) {
                    return function(date) {
                        var firstThurs = getFirstThursdayOfYear(date.getFullYear())
                          , thisThurs = getThursdayThisWeek(date)
                          , diff = +thisThurs - +firstThurs;
                        return padNumber(1 + Math.round(diff / 6048e5), size)
                    }
                }
                function ampmGetter(date, formats) {
                    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1]
                }
                function eraGetter(date, formats) {
                    return date.getFullYear() <= 0 ? formats.ERAS[0] : formats.ERAS[1]
                }
                function longEraGetter(date, formats) {
                    return date.getFullYear() <= 0 ? formats.ERANAMES[0] : formats.ERANAMES[1]
                }
                function dateFilter($locale) {
                    function jsonStringToDate(string) {
                        var match;
                        if (match = string.match(R_ISO8601_STR)) {
                            var date = new Date(0)
                              , tzHour = 0
                              , tzMin = 0
                              , dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear
                              , timeSetter = match[8] ? date.setUTCHours : date.setHours;
                            match[9] && (tzHour = toInt(match[9] + match[10]),
                            tzMin = toInt(match[9] + match[11])),
                            dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
                            var h = toInt(match[4] || 0) - tzHour
                              , m = toInt(match[5] || 0) - tzMin
                              , s = toInt(match[6] || 0)
                              , ms = Math.round(1e3 * parseFloat("0." + (match[7] || 0)));
                            return timeSetter.call(date, h, m, s, ms),
                            date
                        }
                        return string
                    }
                    var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
                    return function(date, format, timezone) {
                        var fn, match, text = "", parts = [];
                        if (format = format || "mediumDate",
                        format = $locale.DATETIME_FORMATS[format] || format,
                        isString(date) && (date = NUMBER_STRING.test(date) ? toInt(date) : jsonStringToDate(date)),
                        isNumber(date) && (date = new Date(date)),
                        !isDate(date) || !isFinite(date.getTime()))
                            return date;
                        for (; format; )
                            match = DATE_FORMATS_SPLIT.exec(format),
                            match ? (parts = concat(parts, match, 1),
                            format = parts.pop()) : (parts.push(format),
                            format = null);
                        var dateTimezoneOffset = date.getTimezoneOffset();
                        return timezone && (dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset),
                        date = convertTimezoneToLocal(date, timezone, !0)),
                        forEach(parts, function(value) {
                            fn = DATE_FORMATS[value],
                            text += fn ? fn(date, $locale.DATETIME_FORMATS, dateTimezoneOffset) : "''" === value ? "'" : value.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                        }),
                        text
                    }
                }
                function jsonFilter() {
                    return function(object, spacing) {
                        return isUndefined(spacing) && (spacing = 2),
                        toJson(object, spacing)
                    }
                }
                function limitToFilter() {
                    return function(input, limit, begin) {
                        return limit = Math.abs(Number(limit)) === 1 / 0 ? Number(limit) : toInt(limit),
                        isNumberNaN(limit) ? input : (isNumber(input) && (input = input.toString()),
                        isArrayLike(input) ? (begin = !begin || isNaN(begin) ? 0 : toInt(begin),
                        begin = begin < 0 ? Math.max(0, input.length + begin) : begin,
                        limit >= 0 ? sliceFn(input, begin, begin + limit) : 0 === begin ? sliceFn(input, limit, input.length) : sliceFn(input, Math.max(0, begin + limit), begin)) : input)
                    }
                }
                function sliceFn(input, begin, end) {
                    return isString(input) ? input.slice(begin, end) : slice.call(input, begin, end)
                }
                function orderByFilter($parse) {
                    function processPredicates(sortPredicates) {
                        return sortPredicates.map(function(predicate) {
                            var descending = 1
                              , get = identity;
                            if (isFunction(predicate))
                                get = predicate;
                            else if (isString(predicate) && ("+" !== predicate.charAt(0) && "-" !== predicate.charAt(0) || (descending = "-" === predicate.charAt(0) ? -1 : 1,
                            predicate = predicate.substring(1)),
                            "" !== predicate && (get = $parse(predicate),
                            get.constant))) {
                                var key = get();
                                get = function(value) {
                                    return value[key]
                                }
                            }
                            return {
                                get: get,
                                descending: descending
                            }
                        })
                    }
                    function isPrimitive(value) {
                        switch (typeof value) {
                        case "number":
                        case "boolean":
                        case "string":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    function objectValue(value) {
                        return isFunction(value.valueOf) && (value = value.valueOf(),
                        isPrimitive(value)) ? value : (hasCustomToString(value) && (value = value.toString(),
                        isPrimitive(value)),
                        value)
                    }
                    function getPredicateValue(value, index) {
                        var type = typeof value;
                        return null === value ? (type = "string",
                        value = "null") : "object" === type && (value = objectValue(value)),
                        {
                            value: value,
                            type: type,
                            index: index
                        }
                    }
                    function defaultCompare(v1, v2) {
                        var result = 0
                          , type1 = v1.type
                          , type2 = v2.type;
                        if (type1 === type2) {
                            var value1 = v1.value
                              , value2 = v2.value;
                            "string" === type1 ? (value1 = value1.toLowerCase(),
                            value2 = value2.toLowerCase()) : "object" === type1 && (isObject(value1) && (value1 = v1.index),
                            isObject(value2) && (value2 = v2.index)),
                            value1 !== value2 && (result = value1 < value2 ? -1 : 1)
                        } else
                            result = type1 < type2 ? -1 : 1;
                        return result
                    }
                    return function(array, sortPredicate, reverseOrder, compareFn) {
                        function getComparisonObject(value, index) {
                            return {
                                value: value,
                                tieBreaker: {
                                    value: index,
                                    type: "number",
                                    index: index
                                },
                                predicateValues: predicates.map(function(predicate) {
                                    return getPredicateValue(predicate.get(value), index)
                                })
                            }
                        }
                        function doComparison(v1, v2) {
                            for (var i = 0, ii = predicates.length; i < ii; i++) {
                                var result = compare(v1.predicateValues[i], v2.predicateValues[i]);
                                if (result)
                                    return result * predicates[i].descending * descending
                            }
                            return (compare(v1.tieBreaker, v2.tieBreaker) || defaultCompare(v1.tieBreaker, v2.tieBreaker)) * descending
                        }
                        if (null == array)
                            return array;
                        if (!isArrayLike(array))
                            throw minErr("orderBy")("notarray", "Expected array but received: {0}", array);
                        isArray(sortPredicate) || (sortPredicate = [sortPredicate]),
                        0 === sortPredicate.length && (sortPredicate = ["+"]);
                        var predicates = processPredicates(sortPredicate)
                          , descending = reverseOrder ? -1 : 1
                          , compare = isFunction(compareFn) ? compareFn : defaultCompare
                          , compareValues = Array.prototype.map.call(array, getComparisonObject);
                        return compareValues.sort(doComparison),
                        array = compareValues.map(function(item) {
                            return item.value
                        })
                    }
                }
                function ngDirective(directive) {
                    return isFunction(directive) && (directive = {
                        link: directive
                    }),
                    directive.restrict = directive.restrict || "AC",
                    valueFn(directive)
                }
                function nullFormRenameControl(control, name) {
                    control.$name = name
                }
                function FormController($element, $attrs, $scope, $animate, $interpolate) {
                    this.$$controls = [],
                    this.$error = {},
                    this.$$success = {},
                    this.$pending = void 0,
                    this.$name = $interpolate($attrs.name || $attrs.ngForm || "")($scope),
                    this.$dirty = !1,
                    this.$pristine = !0,
                    this.$valid = !0,
                    this.$invalid = !1,
                    this.$submitted = !1,
                    this.$$parentForm = nullFormCtrl,
                    this.$$element = $element,
                    this.$$animate = $animate,
                    setupValidity(this)
                }
                function setupValidity(instance) {
                    instance.$$classCache = {},
                    instance.$$classCache[INVALID_CLASS] = !(instance.$$classCache[VALID_CLASS] = instance.$$element.hasClass(VALID_CLASS))
                }
                function addSetValidityMethod(context) {
                    function createAndSet(ctrl, name, value, controller) {
                        ctrl[name] || (ctrl[name] = {}),
                        set(ctrl[name], value, controller)
                    }
                    function unsetAndCleanup(ctrl, name, value, controller) {
                        ctrl[name] && unset(ctrl[name], value, controller),
                        isObjectEmpty(ctrl[name]) && (ctrl[name] = void 0)
                    }
                    function cachedToggleClass(ctrl, className, switchValue) {
                        switchValue && !ctrl.$$classCache[className] ? (ctrl.$$animate.addClass(ctrl.$$element, className),
                        ctrl.$$classCache[className] = !0) : !switchValue && ctrl.$$classCache[className] && (ctrl.$$animate.removeClass(ctrl.$$element, className),
                        ctrl.$$classCache[className] = !1)
                    }
                    function toggleValidationCss(ctrl, validationErrorKey, isValid) {
                        validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "",
                        cachedToggleClass(ctrl, VALID_CLASS + validationErrorKey, !0 === isValid),
                        cachedToggleClass(ctrl, INVALID_CLASS + validationErrorKey, !1 === isValid)
                    }
                    var clazz = context.clazz
                      , set = context.set
                      , unset = context.unset;
                    clazz.prototype.$setValidity = function(validationErrorKey, state, controller) {
                        isUndefined(state) ? createAndSet(this, "$pending", validationErrorKey, controller) : unsetAndCleanup(this, "$pending", validationErrorKey, controller),
                        isBoolean(state) ? state ? (unset(this.$error, validationErrorKey, controller),
                        set(this.$$success, validationErrorKey, controller)) : (set(this.$error, validationErrorKey, controller),
                        unset(this.$$success, validationErrorKey, controller)) : (unset(this.$error, validationErrorKey, controller),
                        unset(this.$$success, validationErrorKey, controller)),
                        this.$pending ? (cachedToggleClass(this, PENDING_CLASS, !0),
                        this.$valid = this.$invalid = void 0,
                        toggleValidationCss(this, "", null)) : (cachedToggleClass(this, PENDING_CLASS, !1),
                        this.$valid = isObjectEmpty(this.$error),
                        this.$invalid = !this.$valid,
                        toggleValidationCss(this, "", this.$valid));
                        var combinedState;
                        combinedState = this.$pending && this.$pending[validationErrorKey] ? void 0 : !this.$error[validationErrorKey] && (!!this.$$success[validationErrorKey] || null),
                        toggleValidationCss(this, validationErrorKey, combinedState),
                        this.$$parentForm.$setValidity(validationErrorKey, combinedState, this)
                    }
                }
                function isObjectEmpty(obj) {
                    if (obj)
                        for (var prop in obj)
                            if (obj.hasOwnProperty(prop))
                                return !1;
                    return !0
                }
                function stringBasedInputType(ctrl) {
                    ctrl.$formatters.push(function(value) {
                        return ctrl.$isEmpty(value) ? value : value.toString()
                    })
                }
                function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
                    baseInputType(scope, element, attr, ctrl, $sniffer, $browser),
                    stringBasedInputType(ctrl)
                }
                function baseInputType(scope, element, attr, ctrl, $sniffer, $browser) {
                    var type = lowercase(element[0].type);
                    if (!$sniffer.android) {
                        var composing = !1;
                        element.on("compositionstart", function() {
                            composing = !0
                        }),
                        element.on("compositionend", function() {
                            composing = !1,
                            listener()
                        })
                    }
                    var timeout, listener = function(ev) {
                        if (timeout && ($browser.defer.cancel(timeout),
                        timeout = null),
                        !composing) {
                            var value = element.val()
                              , event = ev && ev.type;
                            "password" === type || attr.ngTrim && "false" === attr.ngTrim || (value = trim(value)),
                            (ctrl.$viewValue !== value || "" === value && ctrl.$$hasNativeValidators) && ctrl.$setViewValue(value, event)
                        }
                    };
                    if ($sniffer.hasEvent("input"))
                        element.on("input", listener);
                    else {
                        var deferListener = function(ev, input, origValue) {
                            timeout || (timeout = $browser.defer(function() {
                                timeout = null,
                                input && input.value === origValue || listener(ev)
                            }))
                        };
                        element.on("keydown", function(event) {
                            var key = event.keyCode;
                            91 === key || 15 < key && key < 19 || 37 <= key && key <= 40 || deferListener(event, this, this.value)
                        }),
                        $sniffer.hasEvent("paste") && element.on("paste cut", deferListener)
                    }
                    element.on("change", listener),
                    PARTIAL_VALIDATION_TYPES[type] && ctrl.$$hasNativeValidators && type === attr.type && element.on(PARTIAL_VALIDATION_EVENTS, function(ev) {
                        if (!timeout) {
                            var validity = this[VALIDITY_STATE_PROPERTY]
                              , origBadInput = validity.badInput
                              , origTypeMismatch = validity.typeMismatch;
                            timeout = $browser.defer(function() {
                                timeout = null,
                                validity.badInput === origBadInput && validity.typeMismatch === origTypeMismatch || listener(ev)
                            })
                        }
                    }),
                    ctrl.$render = function() {
                        var value = ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue;
                        element.val() !== value && element.val(value)
                    }
                }
                function weekParser(isoWeek, existingDate) {
                    if (isDate(isoWeek))
                        return isoWeek;
                    if (isString(isoWeek)) {
                        WEEK_REGEXP.lastIndex = 0;
                        var parts = WEEK_REGEXP.exec(isoWeek);
                        if (parts) {
                            var year = +parts[1]
                              , week = +parts[2]
                              , hours = 0
                              , minutes = 0
                              , seconds = 0
                              , milliseconds = 0
                              , firstThurs = getFirstThursdayOfYear(year)
                              , addDays = 7 * (week - 1);
                            return existingDate && (hours = existingDate.getHours(),
                            minutes = existingDate.getMinutes(),
                            seconds = existingDate.getSeconds(),
                            milliseconds = existingDate.getMilliseconds()),
                            new Date(year,0,firstThurs.getDate() + addDays,hours,minutes,seconds,milliseconds)
                        }
                    }
                    return NaN
                }
                function createDateParser(regexp, mapping) {
                    return function(iso, date) {
                        var parts, map;
                        if (isDate(iso))
                            return iso;
                        if (isString(iso)) {
                            if ('"' === iso.charAt(0) && '"' === iso.charAt(iso.length - 1) && (iso = iso.substring(1, iso.length - 1)),
                            ISO_DATE_REGEXP.test(iso))
                                return new Date(iso);
                            if (regexp.lastIndex = 0,
                            parts = regexp.exec(iso))
                                return parts.shift(),
                                map = date ? {
                                    yyyy: date.getFullYear(),
                                    MM: date.getMonth() + 1,
                                    dd: date.getDate(),
                                    HH: date.getHours(),
                                    mm: date.getMinutes(),
                                    ss: date.getSeconds(),
                                    sss: date.getMilliseconds() / 1e3
                                } : {
                                    yyyy: 1970,
                                    MM: 1,
                                    dd: 1,
                                    HH: 0,
                                    mm: 0,
                                    ss: 0,
                                    sss: 0
                                },
                                forEach(parts, function(part, index) {
                                    index < mapping.length && (map[mapping[index]] = +part)
                                }),
                                new Date(map.yyyy,map.MM - 1,map.dd,map.HH,map.mm,map.ss || 0,1e3 * map.sss || 0)
                        }
                        return NaN
                    }
                }
                function createDateInputType(type, regexp, parseDate, format) {
                    return function(scope, element, attr, ctrl, $sniffer, $browser, $filter) {
                        function isValidDate(value) {
                            return value && !(value.getTime && value.getTime() !== value.getTime())
                        }
                        function parseObservedDateValue(val) {
                            return isDefined(val) && !isDate(val) ? parseDate(val) || void 0 : val
                        }
                        badInputChecker(scope, element, attr, ctrl),
                        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
                        var previousDate, timezone = ctrl && ctrl.$options.getOption("timezone");
                        if (ctrl.$$parserName = type,
                        ctrl.$parsers.push(function(value) {
                            if (ctrl.$isEmpty(value))
                                return null;
                            if (regexp.test(value)) {
                                var parsedDate = parseDate(value, previousDate);
                                return timezone && (parsedDate = convertTimezoneToLocal(parsedDate, timezone)),
                                parsedDate
                            }
                        }),
                        ctrl.$formatters.push(function(value) {
                            if (value && !isDate(value))
                                throw ngModelMinErr("datefmt", "Expected `{0}` to be a date", value);
                            return isValidDate(value) ? (previousDate = value,
                            previousDate && timezone && (previousDate = convertTimezoneToLocal(previousDate, timezone, !0)),
                            $filter("date")(value, format, timezone)) : (previousDate = null,
                            "")
                        }),
                        isDefined(attr.min) || attr.ngMin) {
                            var minVal;
                            ctrl.$validators.min = function(value) {
                                return !isValidDate(value) || isUndefined(minVal) || parseDate(value) >= minVal
                            }
                            ,
                            attr.$observe("min", function(val) {
                                minVal = parseObservedDateValue(val),
                                ctrl.$validate()
                            })
                        }
                        if (isDefined(attr.max) || attr.ngMax) {
                            var maxVal;
                            ctrl.$validators.max = function(value) {
                                return !isValidDate(value) || isUndefined(maxVal) || parseDate(value) <= maxVal
                            }
                            ,
                            attr.$observe("max", function(val) {
                                maxVal = parseObservedDateValue(val),
                                ctrl.$validate()
                            })
                        }
                    }
                }
                function badInputChecker(scope, element, attr, ctrl) {
                    var node = element[0];
                    (ctrl.$$hasNativeValidators = isObject(node.validity)) && ctrl.$parsers.push(function(value) {
                        var validity = element.prop(VALIDITY_STATE_PROPERTY) || {};
                        return validity.badInput || validity.typeMismatch ? void 0 : value
                    })
                }
                function numberFormatterParser(ctrl) {
                    ctrl.$$parserName = "number",
                    ctrl.$parsers.push(function(value) {
                        return ctrl.$isEmpty(value) ? null : NUMBER_REGEXP.test(value) ? parseFloat(value) : void 0
                    }),
                    ctrl.$formatters.push(function(value) {
                        if (!ctrl.$isEmpty(value)) {
                            if (!isNumber(value))
                                throw ngModelMinErr("numfmt", "Expected `{0}` to be a number", value);
                            value = value.toString()
                        }
                        return value
                    })
                }
                function parseNumberAttrVal(val) {
                    return isDefined(val) && !isNumber(val) && (val = parseFloat(val)),
                    isNumberNaN(val) ? void 0 : val
                }
                function isNumberInteger(num) {
                    return (0 | num) === num
                }
                function countDecimals(num) {
                    var numString = num.toString()
                      , decimalSymbolIndex = numString.indexOf(".");
                    if (-1 === decimalSymbolIndex) {
                        if (-1 < num && num < 1) {
                            var match = /e-(\d+)$/.exec(numString);
                            if (match)
                                return Number(match[1])
                        }
                        return 0
                    }
                    return numString.length - decimalSymbolIndex - 1
                }
                function isValidForStep(viewValue, stepBase, step) {
                    var value = Number(viewValue)
                      , isNonIntegerValue = !isNumberInteger(value)
                      , isNonIntegerStepBase = !isNumberInteger(stepBase)
                      , isNonIntegerStep = !isNumberInteger(step);
                    if (isNonIntegerValue || isNonIntegerStepBase || isNonIntegerStep) {
                        var valueDecimals = isNonIntegerValue ? countDecimals(value) : 0
                          , stepBaseDecimals = isNonIntegerStepBase ? countDecimals(stepBase) : 0
                          , stepDecimals = isNonIntegerStep ? countDecimals(step) : 0
                          , decimalCount = Math.max(valueDecimals, stepBaseDecimals, stepDecimals)
                          , multiplier = Math.pow(10, decimalCount);
                        value *= multiplier,
                        stepBase *= multiplier,
                        step *= multiplier,
                        isNonIntegerValue && (value = Math.round(value)),
                        isNonIntegerStepBase && (stepBase = Math.round(stepBase)),
                        isNonIntegerStep && (step = Math.round(step))
                    }
                    return (value - stepBase) % step == 0
                }
                function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
                    badInputChecker(scope, element, attr, ctrl),
                    numberFormatterParser(ctrl),
                    baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
                    var minVal, maxVal;
                    if ((isDefined(attr.min) || attr.ngMin) && (ctrl.$validators.min = function(value) {
                        return ctrl.$isEmpty(value) || isUndefined(minVal) || value >= minVal
                    }
                    ,
                    attr.$observe("min", function(val) {
                        minVal = parseNumberAttrVal(val),
                        ctrl.$validate()
                    })),
                    (isDefined(attr.max) || attr.ngMax) && (ctrl.$validators.max = function(value) {
                        return ctrl.$isEmpty(value) || isUndefined(maxVal) || value <= maxVal
                    }
                    ,
                    attr.$observe("max", function(val) {
                        maxVal = parseNumberAttrVal(val),
                        ctrl.$validate()
                    })),
                    isDefined(attr.step) || attr.ngStep) {
                        var stepVal;
                        ctrl.$validators.step = function(modelValue, viewValue) {
                            return ctrl.$isEmpty(viewValue) || isUndefined(stepVal) || isValidForStep(viewValue, minVal || 0, stepVal)
                        }
                        ,
                        attr.$observe("step", function(val) {
                            stepVal = parseNumberAttrVal(val),
                            ctrl.$validate()
                        })
                    }
                }
                function rangeInputType(scope, element, attr, ctrl, $sniffer, $browser) {
                    function setInitialValueAndObserver(htmlAttrName, changeFn) {
                        element.attr(htmlAttrName, attr[htmlAttrName]),
                        attr.$observe(htmlAttrName, changeFn)
                    }
                    function minChange(val) {
                        if (minVal = parseNumberAttrVal(val),
                        !isNumberNaN(ctrl.$modelValue))
                            if (supportsRange) {
                                var elVal = element.val();
                                minVal > elVal && (elVal = minVal,
                                element.val(elVal)),
                                ctrl.$setViewValue(elVal)
                            } else
                                ctrl.$validate()
                    }
                    function maxChange(val) {
                        if (maxVal = parseNumberAttrVal(val),
                        !isNumberNaN(ctrl.$modelValue))
                            if (supportsRange) {
                                var elVal = element.val();
                                maxVal < elVal && (element.val(maxVal),
                                elVal = maxVal < minVal ? minVal : maxVal),
                                ctrl.$setViewValue(elVal)
                            } else
                                ctrl.$validate()
                    }
                    function stepChange(val) {
                        stepVal = parseNumberAttrVal(val),
                        isNumberNaN(ctrl.$modelValue) || (supportsRange && ctrl.$viewValue !== element.val() ? ctrl.$setViewValue(element.val()) : ctrl.$validate())
                    }
                    badInputChecker(scope, element, attr, ctrl),
                    numberFormatterParser(ctrl),
                    baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
                    var supportsRange = ctrl.$$hasNativeValidators && "range" === element[0].type
                      , minVal = supportsRange ? 0 : void 0
                      , maxVal = supportsRange ? 100 : void 0
                      , stepVal = supportsRange ? 1 : void 0
                      , validity = element[0].validity
                      , hasMinAttr = isDefined(attr.min)
                      , hasMaxAttr = isDefined(attr.max)
                      , hasStepAttr = isDefined(attr.step)
                      , originalRender = ctrl.$render;
                    ctrl.$render = supportsRange && isDefined(validity.rangeUnderflow) && isDefined(validity.rangeOverflow) ? function() {
                        originalRender(),
                        ctrl.$setViewValue(element.val())
                    }
                    : originalRender,
                    hasMinAttr && (ctrl.$validators.min = supportsRange ? function() {
                        return !0
                    }
                    : function(modelValue, viewValue) {
                        return ctrl.$isEmpty(viewValue) || isUndefined(minVal) || viewValue >= minVal
                    }
                    ,
                    setInitialValueAndObserver("min", minChange)),
                    hasMaxAttr && (ctrl.$validators.max = supportsRange ? function() {
                        return !0
                    }
                    : function(modelValue, viewValue) {
                        return ctrl.$isEmpty(viewValue) || isUndefined(maxVal) || viewValue <= maxVal
                    }
                    ,
                    setInitialValueAndObserver("max", maxChange)),
                    hasStepAttr && (ctrl.$validators.step = supportsRange ? function() {
                        return !validity.stepMismatch
                    }
                    : function(modelValue, viewValue) {
                        return ctrl.$isEmpty(viewValue) || isUndefined(stepVal) || isValidForStep(viewValue, minVal || 0, stepVal)
                    }
                    ,
                    setInitialValueAndObserver("step", stepChange))
                }
                function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
                    baseInputType(scope, element, attr, ctrl, $sniffer, $browser),
                    stringBasedInputType(ctrl),
                    ctrl.$$parserName = "url",
                    ctrl.$validators.url = function(modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        return ctrl.$isEmpty(value) || URL_REGEXP.test(value)
                    }
                }
                function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
                    baseInputType(scope, element, attr, ctrl, $sniffer, $browser),
                    stringBasedInputType(ctrl),
                    ctrl.$$parserName = "email",
                    ctrl.$validators.email = function(modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        return ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value)
                    }
                }
                function radioInputType(scope, element, attr, ctrl) {
                    var doTrim = !attr.ngTrim || "false" !== trim(attr.ngTrim);
                    isUndefined(attr.name) && element.attr("name", nextUid());
                    var listener = function(ev) {
                        var value;
                        element[0].checked && (value = attr.value,
                        doTrim && (value = trim(value)),
                        ctrl.$setViewValue(value, ev && ev.type))
                    };
                    element.on("click", listener),
                    ctrl.$render = function() {
                        var value = attr.value;
                        doTrim && (value = trim(value)),
                        element[0].checked = value === ctrl.$viewValue
                    }
                    ,
                    attr.$observe("value", ctrl.$render)
                }
                function parseConstantExpr($parse, context, name, expression, fallback) {
                    var parseFn;
                    if (isDefined(expression)) {
                        if (parseFn = $parse(expression),
                        !parseFn.constant)
                            throw ngModelMinErr("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", name, expression);
                        return parseFn(context)
                    }
                    return fallback
                }
                function checkboxInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter, $parse) {
                    var trueValue = parseConstantExpr($parse, scope, "ngTrueValue", attr.ngTrueValue, !0)
                      , falseValue = parseConstantExpr($parse, scope, "ngFalseValue", attr.ngFalseValue, !1)
                      , listener = function(ev) {
                        ctrl.$setViewValue(element[0].checked, ev && ev.type)
                    };
                    element.on("click", listener),
                    ctrl.$render = function() {
                        element[0].checked = ctrl.$viewValue
                    }
                    ,
                    ctrl.$isEmpty = function(value) {
                        return !1 === value
                    }
                    ,
                    ctrl.$formatters.push(function(value) {
                        return equals(value, trueValue)
                    }),
                    ctrl.$parsers.push(function(value) {
                        return value ? trueValue : falseValue
                    })
                }
                function classDirective(name, selector) {
                    function arrayDifference(tokens1, tokens2) {
                        if (!tokens1 || !tokens1.length)
                            return [];
                        if (!tokens2 || !tokens2.length)
                            return tokens1;
                        var values = [];
                        outer: for (var i = 0; i < tokens1.length; i++) {
                            for (var token = tokens1[i], j = 0; j < tokens2.length; j++)
                                if (token === tokens2[j])
                                    continue outer;
                            values.push(token)
                        }
                        return values
                    }
                    function split(classString) {
                        return classString && classString.split(" ")
                    }
                    function toClassString(classValue) {
                        var classString = classValue;
                        return isArray(classValue) ? classString = classValue.map(toClassString).join(" ") : isObject(classValue) && (classString = Object.keys(classValue).filter(function(key) {
                            return classValue[key]
                        }).join(" ")),
                        classString
                    }
                    function toFlatValue(classValue) {
                        var flatValue = classValue;
                        if (isArray(classValue))
                            flatValue = classValue.map(toFlatValue);
                        else if (isObject(classValue)) {
                            var hasUndefined = !1;
                            flatValue = Object.keys(classValue).filter(function(key) {
                                var value = classValue[key];
                                return !hasUndefined && isUndefined(value) && (hasUndefined = !0),
                                value
                            }),
                            hasUndefined && flatValue.push(void 0)
                        }
                        return flatValue
                    }
                    name = "ngClass" + name;
                    var indexWatchExpression;
                    return ["$parse", function($parse) {
                        return {
                            restrict: "AC",
                            link: function(scope, element, attr) {
                                function addClasses(classString) {
                                    classString = digestClassCounts(split(classString), 1),
                                    attr.$addClass(classString)
                                }
                                function removeClasses(classString) {
                                    classString = digestClassCounts(split(classString), -1),
                                    attr.$removeClass(classString)
                                }
                                function updateClasses(oldClassString, newClassString) {
                                    var oldClassArray = split(oldClassString)
                                      , newClassArray = split(newClassString)
                                      , toRemoveArray = arrayDifference(oldClassArray, newClassArray)
                                      , toAddArray = arrayDifference(newClassArray, oldClassArray)
                                      , toRemoveString = digestClassCounts(toRemoveArray, -1)
                                      , toAddString = digestClassCounts(toAddArray, 1);
                                    attr.$addClass(toAddString),
                                    attr.$removeClass(toRemoveString)
                                }
                                function digestClassCounts(classArray, count) {
                                    var classesToUpdate = [];
                                    return forEach(classArray, function(className) {
                                        (count > 0 || classCounts[className]) && (classCounts[className] = (classCounts[className] || 0) + count,
                                        classCounts[className] === +(count > 0) && classesToUpdate.push(className))
                                    }),
                                    classesToUpdate.join(" ")
                                }
                                function ngClassIndexWatchAction(newModulo) {
                                    newModulo === selector ? addClasses(oldClassString) : removeClasses(oldClassString),
                                    oldModulo = newModulo
                                }
                                function ngClassOneTimeWatchAction(newClassValue) {
                                    var newClassString = toClassString(newClassValue);
                                    newClassString !== oldClassString && ngClassWatchAction(newClassString)
                                }
                                function ngClassWatchAction(newClassString) {
                                    oldModulo === selector && updateClasses(oldClassString, newClassString),
                                    oldClassString = newClassString
                                }
                                var oldClassString, expression = attr[name].trim(), isOneTime = ":" === expression.charAt(0) && ":" === expression.charAt(1), watchInterceptor = isOneTime ? toFlatValue : toClassString, watchExpression = $parse(expression, watchInterceptor), watchAction = isOneTime ? ngClassOneTimeWatchAction : ngClassWatchAction, classCounts = element.data("$classCounts"), oldModulo = !0;
                                classCounts || (classCounts = createMap(),
                                element.data("$classCounts", classCounts)),
                                "ngClass" !== name && (indexWatchExpression || (indexWatchExpression = $parse("$index", function($index) {
                                    return 1 & $index
                                })),
                                scope.$watch(indexWatchExpression, ngClassIndexWatchAction)),
                                scope.$watch(watchExpression, watchAction, isOneTime)
                            }
                        }
                    }
                    ]
                }
                function NgModelController($scope, $exceptionHandler, $attr, $element, $parse, $animate, $timeout, $q, $interpolate) {
                    this.$viewValue = Number.NaN,
                    this.$modelValue = Number.NaN,
                    this.$$rawModelValue = void 0,
                    this.$validators = {},
                    this.$asyncValidators = {},
                    this.$parsers = [],
                    this.$formatters = [],
                    this.$viewChangeListeners = [],
                    this.$untouched = !0,
                    this.$touched = !1,
                    this.$pristine = !0,
                    this.$dirty = !1,
                    this.$valid = !0,
                    this.$invalid = !1,
                    this.$error = {},
                    this.$$success = {},
                    this.$pending = void 0,
                    this.$name = $interpolate($attr.name || "", !1)($scope),
                    this.$$parentForm = nullFormCtrl,
                    this.$options = defaultModelOptions,
                    this.$$parsedNgModel = $parse($attr.ngModel),
                    this.$$parsedNgModelAssign = this.$$parsedNgModel.assign,
                    this.$$ngModelGet = this.$$parsedNgModel,
                    this.$$ngModelSet = this.$$parsedNgModelAssign,
                    this.$$pendingDebounce = null,
                    this.$$parserValid = void 0,
                    this.$$currentValidationRunId = 0,
                    Object.defineProperty(this, "$$scope", {
                        value: $scope
                    }),
                    this.$$attr = $attr,
                    this.$$element = $element,
                    this.$$animate = $animate,
                    this.$$timeout = $timeout,
                    this.$$parse = $parse,
                    this.$$q = $q,
                    this.$$exceptionHandler = $exceptionHandler,
                    setupValidity(this),
                    setupModelWatcher(this)
                }
                function setupModelWatcher(ctrl) {
                    ctrl.$$scope.$watch(function(scope) {
                        var modelValue = ctrl.$$ngModelGet(scope);
                        if (modelValue !== ctrl.$modelValue && (ctrl.$modelValue === ctrl.$modelValue || modelValue === modelValue)) {
                            ctrl.$modelValue = ctrl.$$rawModelValue = modelValue,
                            ctrl.$$parserValid = void 0;
                            for (var formatters = ctrl.$formatters, idx = formatters.length, viewValue = modelValue; idx--; )
                                viewValue = formatters[idx](viewValue);
                            ctrl.$viewValue !== viewValue && (ctrl.$$updateEmptyClasses(viewValue),
                            ctrl.$viewValue = ctrl.$$lastCommittedViewValue = viewValue,
                            ctrl.$render(),
                            ctrl.$$runValidators(ctrl.$modelValue, ctrl.$viewValue, noop))
                        }
                        return modelValue
                    })
                }
                function ModelOptions(options) {
                    this.$$options = options
                }
                function defaults(dst, src) {
                    forEach(src, function(value, key) {
                        isDefined(dst[key]) || (dst[key] = value)
                    })
                }
                function setOptionSelectedStatus(optionEl, value) {
                    optionEl.prop("selected", value),
                    optionEl.attr("selected", value)
                }
                var minErrConfig = {
                    objectMaxDepth: 5
                }
                  , REGEX_STRING_REGEXP = /^\/(.+)\/([a-z]*)$/
                  , VALIDITY_STATE_PROPERTY = "validity"
                  , hasOwnProperty = Object.prototype.hasOwnProperty
                  , lowercase = function(string) {
                    return isString(string) ? string.toLowerCase() : string
                }
                  , uppercase = function(string) {
                    return isString(string) ? string.toUpperCase() : string
                }
                  , manualLowercase = function(s) {
                    return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
                        return String.fromCharCode(32 | ch.charCodeAt(0))
                    }) : s
                }
                  , manualUppercase = function(s) {
                    return isString(s) ? s.replace(/[a-z]/g, function(ch) {
                        return String.fromCharCode(-33 & ch.charCodeAt(0))
                    }) : s
                };
                "i" !== "I".toLowerCase() && (lowercase = manualLowercase,
                uppercase = manualUppercase);
                var msie, jqLite, jQuery, angularModule, slice = [].slice, splice = [].splice, push = [].push, toString = Object.prototype.toString, getPrototypeOf = Object.getPrototypeOf, ngMinErr = minErr("ng"), angular = window.angular || (window.angular = {}), uid = 0;
                msie = window.document.documentMode;
                var isNumberNaN = Number.isNaN || function(num) {
                    return num !== num
                }
                ;
                noop.$inject = [],
                identity.$inject = [];
                var isArray = Array.isArray
                  , TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/
                  , trim = function(value) {
                    return isString(value) ? value.trim() : value
                }
                  , escapeForRegexp = function(s) {
                    return s.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
                }
                  , csp = function() {
                    if (!isDefined(csp.rules)) {
                        var ngCspElement = window.document.querySelector("[ng-csp]") || window.document.querySelector("[data-ng-csp]");
                        if (ngCspElement) {
                            var ngCspAttribute = ngCspElement.getAttribute("ng-csp") || ngCspElement.getAttribute("data-ng-csp");
                            csp.rules = {
                                noUnsafeEval: !ngCspAttribute || -1 !== ngCspAttribute.indexOf("no-unsafe-eval"),
                                noInlineStyle: !ngCspAttribute || -1 !== ngCspAttribute.indexOf("no-inline-style")
                            }
                        } else
                            csp.rules = {
                                noUnsafeEval: function() {
                                    try {
                                        return new Function(""),
                                        !1
                                    } catch (e) {
                                        return !0
                                    }
                                }(),
                                noInlineStyle: !1
                            }
                    }
                    return csp.rules
                }
                  , jq = function() {
                    if (isDefined(jq.name_))
                        return jq.name_;
                    var el, i, prefix, name, ii = ngAttrPrefixes.length;
                    for (i = 0; i < ii; ++i)
                        if (prefix = ngAttrPrefixes[i],
                        el = window.document.querySelector("[" + prefix.replace(":", "\\:") + "jq]")) {
                            name = el.getAttribute(prefix + "jq");
                            break
                        }
                    return jq.name_ = name
                }
                  , ALL_COLONS = /:/g
                  , ngAttrPrefixes = ["ng-", "data-ng-", "ng:", "x-ng-"]
                  , isAutoBootstrapAllowed = function(document) {
                    var script = document.currentScript;
                    if (!script)
                        return !0;
                    if (!(script instanceof window.HTMLScriptElement || script instanceof window.SVGScriptElement))
                        return !1;
                    var attributes = script.attributes;
                    return [attributes.getNamedItem("src"), attributes.getNamedItem("href"), attributes.getNamedItem("xlink:href")].every(function(src) {
                        if (!src)
                            return !0;
                        if (!src.value)
                            return !1;
                        var link = document.createElement("a");
                        if (link.href = src.value,
                        document.location.origin === link.origin)
                            return !0;
                        switch (link.protocol) {
                        case "http:":
                        case "https:":
                        case "ftp:":
                        case "blob:":
                        case "file:":
                        case "data:":
                            return !0;
                        default:
                            return !1
                        }
                    })
                }(window.document)
                  , SNAKE_CASE_REGEXP = /[A-Z]/g
                  , bindJQueryFired = !1
                  , NODE_TYPE_ELEMENT = 1
                  , NODE_TYPE_TEXT = 3
                  , NODE_TYPE_COMMENT = 8
                  , NODE_TYPE_DOCUMENT = 9
                  , NODE_TYPE_DOCUMENT_FRAGMENT = 11
                  , version = {
                    full: "1.6.5",
                    major: 1,
                    minor: 6,
                    dot: 5,
                    codeName: "toffee-salinization"
                };
                JQLite.expando = "ng339";
                var jqCache = JQLite.cache = {}
                  , jqId = 1;
                JQLite._data = function(node) {
                    return this.cache[node[this.expando]] || {}
                }
                ;
                var DASH_LOWERCASE_REGEXP = /-([a-z])/g
                  , MS_HACK_REGEXP = /^-ms-/
                  , MOUSE_EVENT_MAP = {
                    mouseleave: "mouseout",
                    mouseenter: "mouseover"
                }
                  , jqLiteMinErr = minErr("jqLite")
                  , SINGLE_TAG_REGEXP = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                  , HTML_REGEXP = /<|&#?\w+;/
                  , TAG_NAME_REGEXP = /<([\w:-]+)/
                  , XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                  , wrapMap = {
                    option: [1, '<select multiple="multiple">', "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                wrapMap.optgroup = wrapMap.option,
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead,
                wrapMap.th = wrapMap.td;
                var jqLiteContains = window.Node.prototype.contains || function(arg) {
                    return !!(16 & this.compareDocumentPosition(arg))
                }
                  , JQLitePrototype = JQLite.prototype = {
                    ready: jqLiteReady,
                    toString: function() {
                        var value = [];
                        return forEach(this, function(e) {
                            value.push("" + e)
                        }),
                        "[" + value.join(", ") + "]"
                    },
                    eq: function(index) {
                        return jqLite(index >= 0 ? this[index] : this[this.length + index])
                    },
                    length: 0,
                    push: push,
                    sort: [].sort,
                    splice: [].splice
                }
                  , BOOLEAN_ATTR = {};
                forEach("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(value) {
                    BOOLEAN_ATTR[lowercase(value)] = value
                });
                var BOOLEAN_ELEMENTS = {};
                forEach("input,select,option,textarea,button,form,details".split(","), function(value) {
                    BOOLEAN_ELEMENTS[value] = !0
                });
                var ALIASED_ATTR = {
                    ngMinlength: "minlength",
                    ngMaxlength: "maxlength",
                    ngMin: "min",
                    ngMax: "max",
                    ngPattern: "pattern",
                    ngStep: "step"
                };
                forEach({
                    data: jqLiteData,
                    removeData: jqLiteRemoveData,
                    hasData: jqLiteHasData,
                    cleanData: function(nodes) {
                        for (var i = 0, ii = nodes.length; i < ii; i++)
                            jqLiteRemoveData(nodes[i])
                    }
                }, function(fn, name) {
                    JQLite[name] = fn
                }),
                forEach({
                    data: jqLiteData,
                    inheritedData: jqLiteInheritedData,
                    scope: function(element) {
                        return jqLite.data(element, "$scope") || jqLiteInheritedData(element.parentNode || element, ["$isolateScope", "$scope"])
                    },
                    isolateScope: function(element) {
                        return jqLite.data(element, "$isolateScope") || jqLite.data(element, "$isolateScopeNoTemplate")
                    },
                    controller: jqLiteController,
                    injector: function(element) {
                        return jqLiteInheritedData(element, "$injector")
                    },
                    removeAttr: function(element, name) {
                        element.removeAttribute(name)
                    },
                    hasClass: jqLiteHasClass,
                    css: function(element, name, value) {
                        if (name = cssKebabToCamel(name),
                        !isDefined(value))
                            return element.style[name];
                        element.style[name] = value
                    },
                    attr: function(element, name, value) {
                        var ret, nodeType = element.nodeType;
                        if (nodeType !== NODE_TYPE_TEXT && 2 !== nodeType && nodeType !== NODE_TYPE_COMMENT && element.getAttribute) {
                            var lowercasedName = lowercase(name)
                              , isBooleanAttr = BOOLEAN_ATTR[lowercasedName];
                            if (!isDefined(value))
                                return ret = element.getAttribute(name),
                                isBooleanAttr && null !== ret && (ret = lowercasedName),
                                null === ret ? void 0 : ret;
                            null === value || !1 === value && isBooleanAttr ? element.removeAttribute(name) : element.setAttribute(name, isBooleanAttr ? lowercasedName : value)
                        }
                    },
                    prop: function(element, name, value) {
                        if (!isDefined(value))
                            return element[name];
                        element[name] = value
                    },
                    text: function() {
                        function getText(element, value) {
                            if (isUndefined(value)) {
                                var nodeType = element.nodeType;
                                return nodeType === NODE_TYPE_ELEMENT || nodeType === NODE_TYPE_TEXT ? element.textContent : ""
                            }
                            element.textContent = value
                        }
                        return getText.$dv = "",
                        getText
                    }(),
                    val: function(element, value) {
                        if (isUndefined(value)) {
                            if (element.multiple && "select" === nodeName_(element)) {
                                var result = [];
                                return forEach(element.options, function(option) {
                                    option.selected && result.push(option.value || option.text)
                                }),
                                result
                            }
                            return element.value
                        }
                        element.value = value
                    },
                    html: function(element, value) {
                        if (isUndefined(value))
                            return element.innerHTML;
                        jqLiteDealoc(element, !0),
                        element.innerHTML = value
                    },
                    empty: jqLiteEmpty
                }, function(fn, name) {
                    JQLite.prototype[name] = function(arg1, arg2) {
                        var i, key, nodeCount = this.length;
                        if (fn !== jqLiteEmpty && isUndefined(2 === fn.length && fn !== jqLiteHasClass && fn !== jqLiteController ? arg1 : arg2)) {
                            if (isObject(arg1)) {
                                for (i = 0; i < nodeCount; i++)
                                    if (fn === jqLiteData)
                                        fn(this[i], arg1);
                                    else
                                        for (key in arg1)
                                            fn(this[i], key, arg1[key]);
                                return this
                            }
                            for (var value = fn.$dv, jj = isUndefined(value) ? Math.min(nodeCount, 1) : nodeCount, j = 0; j < jj; j++) {
                                var nodeValue = fn(this[j], arg1, arg2);
                                value = value ? value + nodeValue : nodeValue
                            }
                            return value
                        }
                        for (i = 0; i < nodeCount; i++)
                            fn(this[i], arg1, arg2);
                        return this
                    }
                }),
                forEach({
                    removeData: jqLiteRemoveData,
                    on: function(element, type, fn, unsupported) {
                        if (isDefined(unsupported))
                            throw jqLiteMinErr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                        if (jqLiteAcceptsData(element)) {
                            var expandoStore = jqLiteExpandoStore(element, !0)
                              , events = expandoStore.events
                              , handle = expandoStore.handle;
                            handle || (handle = expandoStore.handle = createEventHandler(element, events));
                            for (var types = type.indexOf(" ") >= 0 ? type.split(" ") : [type], i = types.length, addHandler = function(type, specialHandlerWrapper, noEventListener) {
                                var eventFns = events[type];
                                eventFns || (eventFns = events[type] = [],
                                eventFns.specialHandlerWrapper = specialHandlerWrapper,
                                "$destroy" === type || noEventListener || element.addEventListener(type, handle)),
                                eventFns.push(fn)
                            }; i--; )
                                type = types[i],
                                MOUSE_EVENT_MAP[type] ? (addHandler(MOUSE_EVENT_MAP[type], specialMouseHandlerWrapper),
                                addHandler(type, void 0, !0)) : addHandler(type)
                        }
                    },
                    off: jqLiteOff,
                    one: function(element, type, fn) {
                        element = jqLite(element),
                        element.on(type, function onFn() {
                            element.off(type, fn),
                            element.off(type, onFn)
                        }),
                        element.on(type, fn)
                    },
                    replaceWith: function(element, replaceNode) {
                        var index, parent = element.parentNode;
                        jqLiteDealoc(element),
                        forEach(new JQLite(replaceNode), function(node) {
                            index ? parent.insertBefore(node, index.nextSibling) : parent.replaceChild(node, element),
                            index = node
                        })
                    },
                    children: function(element) {
                        var children = [];
                        return forEach(element.childNodes, function(element) {
                            element.nodeType === NODE_TYPE_ELEMENT && children.push(element)
                        }),
                        children
                    },
                    contents: function(element) {
                        return element.contentDocument || element.childNodes || []
                    },
                    append: function(element, node) {
                        var nodeType = element.nodeType;
                        if (nodeType === NODE_TYPE_ELEMENT || nodeType === NODE_TYPE_DOCUMENT_FRAGMENT) {
                            node = new JQLite(node);
                            for (var i = 0, ii = node.length; i < ii; i++) {
                                var child = node[i];
                                element.appendChild(child)
                            }
                        }
                    },
                    prepend: function(element, node) {
                        if (element.nodeType === NODE_TYPE_ELEMENT) {
                            var index = element.firstChild;
                            forEach(new JQLite(node), function(child) {
                                element.insertBefore(child, index)
                            })
                        }
                    },
                    wrap: function(element, wrapNode) {
                        jqLiteWrapNode(element, jqLite(wrapNode).eq(0).clone()[0])
                    },
                    remove: jqLiteRemove,
                    detach: function(element) {
                        jqLiteRemove(element, !0)
                    },
                    after: function(element, newElement) {
                        var index = element
                          , parent = element.parentNode;
                        if (parent) {
                            newElement = new JQLite(newElement);
                            for (var i = 0, ii = newElement.length; i < ii; i++) {
                                var node = newElement[i];
                                parent.insertBefore(node, index.nextSibling),
                                index = node
                            }
                        }
                    },
                    addClass: jqLiteAddClass,
                    removeClass: jqLiteRemoveClass,
                    toggleClass: function(element, selector, condition) {
                        selector && forEach(selector.split(" "), function(className) {
                            var classCondition = condition;
                            isUndefined(classCondition) && (classCondition = !jqLiteHasClass(element, className)),
                            (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className)
                        })
                    },
                    parent: function(element) {
                        var parent = element.parentNode;
                        return parent && parent.nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT ? parent : null
                    },
                    next: function(element) {
                        return element.nextElementSibling
                    },
                    find: function(element, selector) {
                        return element.getElementsByTagName ? element.getElementsByTagName(selector) : []
                    },
                    clone: jqLiteClone,
                    triggerHandler: function(element, event, extraParameters) {
                        var dummyEvent, eventFnsCopy, handlerArgs, eventName = event.type || event, expandoStore = jqLiteExpandoStore(element), events = expandoStore && expandoStore.events, eventFns = events && events[eventName];
                        eventFns && (dummyEvent = {
                            preventDefault: function() {
                                this.defaultPrevented = !0
                            },
                            isDefaultPrevented: function() {
                                return !0 === this.defaultPrevented
                            },
                            stopImmediatePropagation: function() {
                                this.immediatePropagationStopped = !0
                            },
                            isImmediatePropagationStopped: function() {
                                return !0 === this.immediatePropagationStopped
                            },
                            stopPropagation: noop,
                            type: eventName,
                            target: element
                        },
                        event.type && (dummyEvent = extend(dummyEvent, event)),
                        eventFnsCopy = shallowCopy(eventFns),
                        handlerArgs = extraParameters ? [dummyEvent].concat(extraParameters) : [dummyEvent],
                        forEach(eventFnsCopy, function(fn) {
                            dummyEvent.isImmediatePropagationStopped() || fn.apply(element, handlerArgs)
                        }))
                    }
                }, function(fn, name) {
                    JQLite.prototype[name] = function(arg1, arg2, arg3) {
                        for (var value, i = 0, ii = this.length; i < ii; i++)
                            isUndefined(value) ? (value = fn(this[i], arg1, arg2, arg3),
                            isDefined(value) && (value = jqLite(value))) : jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
                        return isDefined(value) ? value : this
                    }
                }),
                JQLite.prototype.bind = JQLite.prototype.on,
                JQLite.prototype.unbind = JQLite.prototype.off;
                var nanKey = Object.create(null);
                NgMapShim.prototype = {
                    _idx: function(key) {
                        return key === this._lastKey ? this._lastIndex : (this._lastKey = key,
                        this._lastIndex = this._keys.indexOf(key),
                        this._lastIndex)
                    },
                    _transformKey: function(key) {
                        return isNumberNaN(key) ? nanKey : key
                    },
                    get: function(key) {
                        key = this._transformKey(key);
                        var idx = this._idx(key);
                        if (-1 !== idx)
                            return this._values[idx]
                    },
                    set: function(key, value) {
                        key = this._transformKey(key);
                        var idx = this._idx(key);
                        -1 === idx && (idx = this._lastIndex = this._keys.length),
                        this._keys[idx] = key,
                        this._values[idx] = value
                    },
                    delete: function(key) {
                        key = this._transformKey(key);
                        var idx = this._idx(key);
                        return -1 !== idx && (this._keys.splice(idx, 1),
                        this._values.splice(idx, 1),
                        this._lastKey = NaN,
                        this._lastIndex = -1,
                        !0)
                    }
                };
                var NgMap = NgMapShim
                  , $$MapProvider = [function() {
                    this.$get = [function() {
                        return NgMap
                    }
                    ]
                }
                ]
                  , ARROW_ARG = /^([^(]+?)=>/
                  , FN_ARGS = /^[^(]*\(\s*([^)]*)\)/m
                  , FN_ARG_SPLIT = /,/
                  , FN_ARG = /^\s*(_?)(\S+?)\1\s*$/
                  , STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm
                  , $injectorMinErr = minErr("$injector");
                createInjector.$$annotate = annotate;
                var $animateMinErr = minErr("$animate")
                  , ELEMENT_NODE = 1
                  , $$CoreAnimateJsProvider = function() {
                    this.$get = noop
                }
                  , $$CoreAnimateQueueProvider = function() {
                    var postDigestQueue = new NgMap
                      , postDigestElements = [];
                    this.$get = ["$$AnimateRunner", "$rootScope", function($$AnimateRunner, $rootScope) {
                        function updateData(data, classes, value) {
                            var changed = !1;
                            return classes && (classes = isString(classes) ? classes.split(" ") : isArray(classes) ? classes : [],
                            forEach(classes, function(className) {
                                className && (changed = !0,
                                data[className] = value)
                            })),
                            changed
                        }
                        function handleCSSClassChanges() {
                            forEach(postDigestElements, function(element) {
                                var data = postDigestQueue.get(element);
                                if (data) {
                                    var existing = splitClasses(element.attr("class"))
                                      , toAdd = ""
                                      , toRemove = "";
                                    forEach(data, function(status, className) {
                                        status !== !!existing[className] && (status ? toAdd += (toAdd.length ? " " : "") + className : toRemove += (toRemove.length ? " " : "") + className)
                                    }),
                                    forEach(element, function(elm) {
                                        toAdd && jqLiteAddClass(elm, toAdd),
                                        toRemove && jqLiteRemoveClass(elm, toRemove)
                                    }),
                                    postDigestQueue.delete(element)
                                }
                            }),
                            postDigestElements.length = 0
                        }
                        function addRemoveClassesPostDigest(element, add, remove) {
                            var data = postDigestQueue.get(element) || {}
                              , classesAdded = updateData(data, add, !0)
                              , classesRemoved = updateData(data, remove, !1);
                            (classesAdded || classesRemoved) && (postDigestQueue.set(element, data),
                            postDigestElements.push(element),
                            1 === postDigestElements.length && $rootScope.$$postDigest(handleCSSClassChanges))
                        }
                        return {
                            enabled: noop,
                            on: noop,
                            off: noop,
                            pin: noop,
                            push: function(element, event, options, domOperation) {
                                domOperation && domOperation(),
                                options = options || {},
                                options.from && element.css(options.from),
                                options.to && element.css(options.to),
                                (options.addClass || options.removeClass) && addRemoveClassesPostDigest(element, options.addClass, options.removeClass);
                                var runner = new $$AnimateRunner;
                                return runner.complete(),
                                runner
                            }
                        }
                    }
                    ]
                }
                  , $AnimateProvider = ["$provide", function($provide) {
                    var provider = this
                      , classNameFilter = null
                      , customFilter = null;
                    this.$$registeredAnimations = Object.create(null),
                    this.register = function(name, factory) {
                        if (name && "." !== name.charAt(0))
                            throw $animateMinErr("notcsel", "Expecting class selector starting with '.' got '{0}'.", name);
                        var key = name + "-animation";
                        provider.$$registeredAnimations[name.substr(1)] = key,
                        $provide.factory(key, factory)
                    }
                    ,
                    this.customFilter = function(filterFn) {
                        return 1 === arguments.length && (customFilter = isFunction(filterFn) ? filterFn : null),
                        customFilter
                    }
                    ,
                    this.classNameFilter = function(expression) {
                        if (1 === arguments.length && (classNameFilter = expression instanceof RegExp ? expression : null)) {
                            if (new RegExp("[(\\s|\\/)]ng-animate[(\\s|\\/)]").test(classNameFilter.toString()))
                                throw classNameFilter = null,
                                $animateMinErr("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate")
                        }
                        return classNameFilter
                    }
                    ,
                    this.$get = ["$$animateQueue", function($$animateQueue) {
                        function domInsert(element, parentElement, afterElement) {
                            if (afterElement) {
                                var afterNode = extractElementNode(afterElement);
                                !afterNode || afterNode.parentNode || afterNode.previousElementSibling || (afterElement = null)
                            }
                            afterElement ? afterElement.after(element) : parentElement.prepend(element)
                        }
                        return {
                            on: $$animateQueue.on,
                            off: $$animateQueue.off,
                            pin: $$animateQueue.pin,
                            enabled: $$animateQueue.enabled,
                            cancel: function(runner) {
                                runner.end && runner.end()
                            },
                            enter: function(element, parent, after, options) {
                                return parent = parent && jqLite(parent),
                                after = after && jqLite(after),
                                parent = parent || after.parent(),
                                domInsert(element, parent, after),
                                $$animateQueue.push(element, "enter", prepareAnimateOptions(options))
                            },
                            move: function(element, parent, after, options) {
                                return parent = parent && jqLite(parent),
                                after = after && jqLite(after),
                                parent = parent || after.parent(),
                                domInsert(element, parent, after),
                                $$animateQueue.push(element, "move", prepareAnimateOptions(options))
                            },
                            leave: function(element, options) {
                                return $$animateQueue.push(element, "leave", prepareAnimateOptions(options), function() {
                                    element.remove()
                                })
                            },
                            addClass: function(element, className, options) {
                                return options = prepareAnimateOptions(options),
                                options.addClass = mergeClasses(options.addclass, className),
                                $$animateQueue.push(element, "addClass", options)
                            },
                            removeClass: function(element, className, options) {
                                return options = prepareAnimateOptions(options),
                                options.removeClass = mergeClasses(options.removeClass, className),
                                $$animateQueue.push(element, "removeClass", options)
                            },
                            setClass: function(element, add, remove, options) {
                                return options = prepareAnimateOptions(options),
                                options.addClass = mergeClasses(options.addClass, add),
                                options.removeClass = mergeClasses(options.removeClass, remove),
                                $$animateQueue.push(element, "setClass", options)
                            },
                            animate: function(element, from, to, className, options) {
                                return options = prepareAnimateOptions(options),
                                options.from = options.from ? extend(options.from, from) : from,
                                options.to = options.to ? extend(options.to, to) : to,
                                className = className || "ng-inline-animate",
                                options.tempClasses = mergeClasses(options.tempClasses, className),
                                $$animateQueue.push(element, "animate", options)
                            }
                        }
                    }
                    ]
                }
                ]
                  , $$AnimateAsyncRunFactoryProvider = function() {
                    this.$get = ["$$rAF", function($$rAF) {
                        function waitForTick(fn) {
                            waitQueue.push(fn),
                            waitQueue.length > 1 || $$rAF(function() {
                                for (var i = 0; i < waitQueue.length; i++)
                                    waitQueue[i]();
                                waitQueue = []
                            })
                        }
                        var waitQueue = [];
                        return function() {
                            var passed = !1;
                            return waitForTick(function() {
                                passed = !0
                            }),
                            function(callback) {
                                passed ? callback() : waitForTick(callback)
                            }
                        }
                    }
                    ]
                }
                  , $$AnimateRunnerFactoryProvider = function() {
                    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function($q, $sniffer, $$animateAsyncRun, $$isDocumentHidden, $timeout) {
                        function AnimateRunner(host) {
                            this.setHost(host);
                            var rafTick = $$animateAsyncRun()
                              , timeoutTick = function(fn) {
                                $timeout(fn, 0, !1)
                            };
                            this._doneCallbacks = [],
                            this._tick = function(fn) {
                                $$isDocumentHidden() ? timeoutTick(fn) : rafTick(fn)
                            }
                            ,
                            this._state = 0
                        }
                        return AnimateRunner.chain = function(chain, callback) {
                            function next() {
                                if (index === chain.length)
                                    return void callback(!0);
                                chain[index](function(response) {
                                    if (!1 === response)
                                        return void callback(!1);
                                    index++,
                                    next()
                                })
                            }
                            var index = 0;
                            next()
                        }
                        ,
                        AnimateRunner.all = function(runners, callback) {
                            function onProgress(response) {
                                status = status && response,
                                ++count === runners.length && callback(status)
                            }
                            var count = 0
                              , status = !0;
                            forEach(runners, function(runner) {
                                runner.done(onProgress)
                            })
                        }
                        ,
                        AnimateRunner.prototype = {
                            setHost: function(host) {
                                this.host = host || {}
                            },
                            done: function(fn) {
                                2 === this._state ? fn() : this._doneCallbacks.push(fn)
                            },
                            progress: noop,
                            getPromise: function() {
                                if (!this.promise) {
                                    var self = this;
                                    this.promise = $q(function(resolve, reject) {
                                        self.done(function(status) {
                                            !1 === status ? reject() : resolve()
                                        })
                                    })
                                }
                                return this.promise
                            },
                            then: function(resolveHandler, rejectHandler) {
                                return this.getPromise().then(resolveHandler, rejectHandler)
                            },
                            catch: function(handler) {
                                return this.getPromise().catch(handler)
                            },
                            finally: function(handler) {
                                return this.getPromise().finally(handler)
                            },
                            pause: function() {
                                this.host.pause && this.host.pause()
                            },
                            resume: function() {
                                this.host.resume && this.host.resume()
                            },
                            end: function() {
                                this.host.end && this.host.end(),
                                this._resolve(!0)
                            },
                            cancel: function() {
                                this.host.cancel && this.host.cancel(),
                                this._resolve(!1)
                            },
                            complete: function(response) {
                                var self = this;
                                0 === self._state && (self._state = 1,
                                self._tick(function() {
                                    self._resolve(response)
                                }))
                            },
                            _resolve: function(response) {
                                2 !== this._state && (forEach(this._doneCallbacks, function(fn) {
                                    fn(response)
                                }),
                                this._doneCallbacks.length = 0,
                                this._state = 2)
                            }
                        },
                        AnimateRunner
                    }
                    ]
                }
                  , $CoreAnimateCssProvider = function() {
                    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function($$rAF, $q, $$AnimateRunner) {
                        return function(element, initialOptions) {
                            function run() {
                                return $$rAF(function() {
                                    applyAnimationContents(),
                                    closed || runner.complete(),
                                    closed = !0
                                }),
                                runner
                            }
                            function applyAnimationContents() {
                                options.addClass && (element.addClass(options.addClass),
                                options.addClass = null),
                                options.removeClass && (element.removeClass(options.removeClass),
                                options.removeClass = null),
                                options.to && (element.css(options.to),
                                options.to = null)
                            }
                            var options = initialOptions || {};
                            options.$$prepared || (options = copy(options)),
                            options.cleanupStyles && (options.from = options.to = null),
                            options.from && (element.css(options.from),
                            options.from = null);
                            var closed, runner = new $$AnimateRunner;
                            return {
                                start: run,
                                end: run
                            }
                        }
                    }
                    ]
                }
                  , $compileMinErr = minErr("$compile")
                  , _UNINITIALIZED_VALUE = new UNINITIALIZED_VALUE;
                $CompileProvider.$inject = ["$provide", "$$sanitizeUriProvider"],
                SimpleChange.prototype.isFirstChange = function() {
                    return this.previousValue === _UNINITIALIZED_VALUE
                }
                ;
                var PREFIX_REGEXP = /^((?:x|data)[:\-_])/i
                  , SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g
                  , $controllerMinErr = minErr("$controller")
                  , CNTRL_REG = /^(\S+)(\s+as\s+([\w$]+))?$/
                  , $$ForceReflowProvider = function() {
                    this.$get = ["$document", function($document) {
                        return function(domNode) {
                            return domNode ? !domNode.nodeType && domNode instanceof jqLite && (domNode = domNode[0]) : domNode = $document[0].body,
                            domNode.offsetWidth + 1
                        }
                    }
                    ]
                }
                  , APPLICATION_JSON = "application/json"
                  , CONTENT_TYPE_APPLICATION_JSON = {
                    "Content-Type": APPLICATION_JSON + ";charset=utf-8"
                }
                  , JSON_START = /^\[|^\{(?!\{)/
                  , JSON_ENDS = {
                    "[": /]$/,
                    "{": /}$/
                }
                  , JSON_PROTECTION_PREFIX = /^\)]\}',?\n/
                  , $httpMinErr = minErr("$http")
                  , $interpolateMinErr = angular.$interpolateMinErr = minErr("$interpolate");
                $interpolateMinErr.throwNoconcat = function(text) {
                    throw $interpolateMinErr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", text)
                }
                ,
                $interpolateMinErr.interr = function(text, err) {
                    return $interpolateMinErr("interr", "Can't interpolate: {0}\n{1}", text, err.toString())
                }
                ;
                var $jsonpCallbacksProvider = function() {
                    this.$get = function() {
                        function createCallback(callbackId) {
                            var callback = function(data) {
                                callback.data = data,
                                callback.called = !0
                            };
                            return callback.id = callbackId,
                            callback
                        }
                        var callbacks = angular.callbacks
                          , callbackMap = {};
                        return {
                            createCallback: function(url) {
                                var callbackId = "_" + (callbacks.$$counter++).toString(36)
                                  , callbackPath = "angular.callbacks." + callbackId
                                  , callback = createCallback(callbackId);
                                return callbackMap[callbackPath] = callbacks[callbackId] = callback,
                                callbackPath
                            },
                            wasCalled: function(callbackPath) {
                                return callbackMap[callbackPath].called
                            },
                            getResponse: function(callbackPath) {
                                return callbackMap[callbackPath].data
                            },
                            removeCallback: function(callbackPath) {
                                var callback = callbackMap[callbackPath];
                                delete callbacks[callback.id],
                                delete callbackMap[callbackPath]
                            }
                        }
                    }
                }
                  , PATH_MATCH = /^([^?#]*)(\?([^#]*))?(#(.*))?$/
                  , DEFAULT_PORTS = {
                    http: 80,
                    https: 443,
                    ftp: 21
                }
                  , $locationMinErr = minErr("$location")
                  , DOUBLE_SLASH_REGEX = /^\s*[\\\/]{2,}/
                  , locationPrototype = {
                    $$absUrl: "",
                    $$html5: !1,
                    $$replace: !1,
                    absUrl: locationGetter("$$absUrl"),
                    url: function(url) {
                        if (isUndefined(url))
                            return this.$$url;
                        var match = PATH_MATCH.exec(url);
                        return (match[1] || "" === url) && this.path(decodeURIComponent(match[1])),
                        (match[2] || match[1] || "" === url) && this.search(match[3] || ""),
                        this.hash(match[5] || ""),
                        this
                    },
                    protocol: locationGetter("$$protocol"),
                    host: locationGetter("$$host"),
                    port: locationGetter("$$port"),
                    path: locationGetterSetter("$$path", function(path) {
                        return path = null !== path ? path.toString() : "",
                        "/" === path.charAt(0) ? path : "/" + path
                    }),
                    search: function(search, paramValue) {
                        switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (isString(search) || isNumber(search))
                                search = search.toString(),
                                this.$$search = parseKeyValue(search);
                            else {
                                if (!isObject(search))
                                    throw $locationMinErr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                search = copy(search, {}),
                                forEach(search, function(value, key) {
                                    null == value && delete search[key]
                                }),
                                this.$$search = search
                            }
                            break;
                        default:
                            isUndefined(paramValue) || null === paramValue ? delete this.$$search[search] : this.$$search[search] = paramValue
                        }
                        return this.$$compose(),
                        this
                    },
                    hash: locationGetterSetter("$$hash", function(hash) {
                        return null !== hash ? hash.toString() : ""
                    }),
                    replace: function() {
                        return this.$$replace = !0,
                        this
                    }
                };
                forEach([LocationHashbangInHtml5Url, LocationHashbangUrl, LocationHtml5Url], function(Location) {
                    Location.prototype = Object.create(locationPrototype),
                    Location.prototype.state = function(state) {
                        if (!arguments.length)
                            return this.$$state;
                        if (Location !== LocationHtml5Url || !this.$$html5)
                            throw $locationMinErr("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                        return this.$$state = isUndefined(state) ? null : state,
                        this.$$urlUpdatedByLocation = !0,
                        this
                    }
                });
                var $parseMinErr = minErr("$parse")
                  , objectValueOf = {}.constructor.prototype.valueOf
                  , OPERATORS = createMap();
                forEach("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(operator) {
                    OPERATORS[operator] = !0
                });
                var ESCAPE = {
                    n: "\n",
                    f: "\f",
                    r: "\r",
                    t: "\t",
                    v: "\v",
                    "'": "'",
                    '"': '"'
                }
                  , Lexer = function(options) {
                    this.options = options
                };
                Lexer.prototype = {
                    constructor: Lexer,
                    lex: function(text) {
                        for (this.text = text,
                        this.index = 0,
                        this.tokens = []; this.index < this.text.length; ) {
                            var ch = this.text.charAt(this.index);
                            if ('"' === ch || "'" === ch)
                                this.readString(ch);
                            else if (this.isNumber(ch) || "." === ch && this.isNumber(this.peek()))
                                this.readNumber();
                            else if (this.isIdentifierStart(this.peekMultichar()))
                                this.readIdent();
                            else if (this.is(ch, "(){}[].,;:?"))
                                this.tokens.push({
                                    index: this.index,
                                    text: ch
                                }),
                                this.index++;
                            else if (this.isWhitespace(ch))
                                this.index++;
                            else {
                                var ch2 = ch + this.peek()
                                  , ch3 = ch2 + this.peek(2)
                                  , op1 = OPERATORS[ch]
                                  , op2 = OPERATORS[ch2]
                                  , op3 = OPERATORS[ch3];
                                if (op1 || op2 || op3) {
                                    var token = op3 ? ch3 : op2 ? ch2 : ch;
                                    this.tokens.push({
                                        index: this.index,
                                        text: token,
                                        operator: !0
                                    }),
                                    this.index += token.length
                                } else
                                    this.throwError("Unexpected next character ", this.index, this.index + 1)
                            }
                        }
                        return this.tokens
                    },
                    is: function(ch, chars) {
                        return -1 !== chars.indexOf(ch)
                    },
                    peek: function(i) {
                        var num = i || 1;
                        return this.index + num < this.text.length && this.text.charAt(this.index + num)
                    },
                    isNumber: function(ch) {
                        return "0" <= ch && ch <= "9" && "string" == typeof ch
                    },
                    isWhitespace: function(ch) {
                        return " " === ch || "\r" === ch || "\t" === ch || "\n" === ch || "\v" === ch || " " === ch
                    },
                    isIdentifierStart: function(ch) {
                        return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch)
                    },
                    isValidIdentifierStart: function(ch) {
                        return "a" <= ch && ch <= "z" || "A" <= ch && ch <= "Z" || "_" === ch || "$" === ch
                    },
                    isIdentifierContinue: function(ch) {
                        return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch)
                    },
                    isValidIdentifierContinue: function(ch, cp) {
                        return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch)
                    },
                    codePointAt: function(ch) {
                        return 1 === ch.length ? ch.charCodeAt(0) : (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 56613888
                    },
                    peekMultichar: function() {
                        var ch = this.text.charAt(this.index)
                          , peek = this.peek();
                        if (!peek)
                            return ch;
                        var cp1 = ch.charCodeAt(0)
                          , cp2 = peek.charCodeAt(0);
                        return cp1 >= 55296 && cp1 <= 56319 && cp2 >= 56320 && cp2 <= 57343 ? ch + peek : ch
                    },
                    isExpOperator: function(ch) {
                        return "-" === ch || "+" === ch || this.isNumber(ch)
                    },
                    throwError: function(error, start, end) {
                        end = end || this.index;
                        var colStr = isDefined(start) ? "s " + start + "-" + this.index + " [" + this.text.substring(start, end) + "]" : " " + end;
                        throw $parseMinErr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", error, colStr, this.text)
                    },
                    readNumber: function() {
                        for (var number = "", start = this.index; this.index < this.text.length; ) {
                            var ch = lowercase(this.text.charAt(this.index));
                            if ("." === ch || this.isNumber(ch))
                                number += ch;
                            else {
                                var peekCh = this.peek();
                                if ("e" === ch && this.isExpOperator(peekCh))
                                    number += ch;
                                else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && "e" === number.charAt(number.length - 1))
                                    number += ch;
                                else {
                                    if (!this.isExpOperator(ch) || peekCh && this.isNumber(peekCh) || "e" !== number.charAt(number.length - 1))
                                        break;
                                    this.throwError("Invalid exponent")
                                }
                            }
                            this.index++
                        }
                        this.tokens.push({
                            index: start,
                            text: number,
                            constant: !0,
                            value: Number(number)
                        })
                    },
                    readIdent: function() {
                        var start = this.index;
                        for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
                            var ch = this.peekMultichar();
                            if (!this.isIdentifierContinue(ch))
                                break;
                            this.index += ch.length
                        }
                        this.tokens.push({
                            index: start,
                            text: this.text.slice(start, this.index),
                            identifier: !0
                        })
                    },
                    readString: function(quote) {
                        var start = this.index;
                        this.index++;
                        for (var string = "", rawString = quote, escape = !1; this.index < this.text.length; ) {
                            var ch = this.text.charAt(this.index);
                            if (rawString += ch,
                            escape) {
                                if ("u" === ch) {
                                    var hex = this.text.substring(this.index + 1, this.index + 5);
                                    hex.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + hex + "]"),
                                    this.index += 4,
                                    string += String.fromCharCode(parseInt(hex, 16))
                                } else {
                                    string += ESCAPE[ch] || ch
                                }
                                escape = !1
                            } else if ("\\" === ch)
                                escape = !0;
                            else {
                                if (ch === quote)
                                    return this.index++,
                                    void this.tokens.push({
                                        index: start,
                                        text: rawString,
                                        constant: !0,
                                        value: string
                                    });
                                string += ch
                            }
                            this.index++
                        }
                        this.throwError("Unterminated quote", start)
                    }
                };
                var AST = function(lexer, options) {
                    this.lexer = lexer,
                    this.options = options
                };
                AST.Program = "Program",
                AST.ExpressionStatement = "ExpressionStatement",
                AST.AssignmentExpression = "AssignmentExpression",
                AST.ConditionalExpression = "ConditionalExpression",
                AST.LogicalExpression = "LogicalExpression",
                AST.BinaryExpression = "BinaryExpression",
                AST.UnaryExpression = "UnaryExpression",
                AST.CallExpression = "CallExpression",
                AST.MemberExpression = "MemberExpression",
                AST.Identifier = "Identifier",
                AST.Literal = "Literal",
                AST.ArrayExpression = "ArrayExpression",
                AST.Property = "Property",
                AST.ObjectExpression = "ObjectExpression",
                AST.ThisExpression = "ThisExpression",
                AST.LocalsExpression = "LocalsExpression",
                AST.NGValueParameter = "NGValueParameter",
                AST.prototype = {
                    ast: function(text) {
                        this.text = text,
                        this.tokens = this.lexer.lex(text);
                        var value = this.program();
                        return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
                        value
                    },
                    program: function() {
                        for (var body = []; ; )
                            if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && body.push(this.expressionStatement()),
                            !this.expect(";"))
                                return {
                                    type: AST.Program,
                                    body: body
                                }
                    },
                    expressionStatement: function() {
                        return {
                            type: AST.ExpressionStatement,
                            expression: this.filterChain()
                        }
                    },
                    filterChain: function() {
                        for (var left = this.expression(); this.expect("|"); )
                            left = this.filter(left);
                        return left
                    },
                    expression: function() {
                        return this.assignment()
                    },
                    assignment: function() {
                        var result = this.ternary();
                        if (this.expect("=")) {
                            if (!isAssignable(result))
                                throw $parseMinErr("lval", "Trying to assign a value to a non l-value");
                            result = {
                                type: AST.AssignmentExpression,
                                left: result,
                                right: this.assignment(),
                                operator: "="
                            }
                        }
                        return result
                    },
                    ternary: function() {
                        var alternate, consequent, test = this.logicalOR();
                        return this.expect("?") && (alternate = this.expression(),
                        this.consume(":")) ? (consequent = this.expression(),
                        {
                            type: AST.ConditionalExpression,
                            test: test,
                            alternate: alternate,
                            consequent: consequent
                        }) : test
                    },
                    logicalOR: function() {
                        for (var left = this.logicalAND(); this.expect("||"); )
                            left = {
                                type: AST.LogicalExpression,
                                operator: "||",
                                left: left,
                                right: this.logicalAND()
                            };
                        return left
                    },
                    logicalAND: function() {
                        for (var left = this.equality(); this.expect("&&"); )
                            left = {
                                type: AST.LogicalExpression,
                                operator: "&&",
                                left: left,
                                right: this.equality()
                            };
                        return left
                    },
                    equality: function() {
                        for (var token, left = this.relational(); token = this.expect("==", "!=", "===", "!=="); )
                            left = {
                                type: AST.BinaryExpression,
                                operator: token.text,
                                left: left,
                                right: this.relational()
                            };
                        return left
                    },
                    relational: function() {
                        for (var token, left = this.additive(); token = this.expect("<", ">", "<=", ">="); )
                            left = {
                                type: AST.BinaryExpression,
                                operator: token.text,
                                left: left,
                                right: this.additive()
                            };
                        return left
                    },
                    additive: function() {
                        for (var token, left = this.multiplicative(); token = this.expect("+", "-"); )
                            left = {
                                type: AST.BinaryExpression,
                                operator: token.text,
                                left: left,
                                right: this.multiplicative()
                            };
                        return left
                    },
                    multiplicative: function() {
                        for (var token, left = this.unary(); token = this.expect("*", "/", "%"); )
                            left = {
                                type: AST.BinaryExpression,
                                operator: token.text,
                                left: left,
                                right: this.unary()
                            };
                        return left
                    },
                    unary: function() {
                        var token;
                        return (token = this.expect("+", "-", "!")) ? {
                            type: AST.UnaryExpression,
                            operator: token.text,
                            prefix: !0,
                            argument: this.unary()
                        } : this.primary()
                    },
                    primary: function() {
                        var primary;
                        this.expect("(") ? (primary = this.filterChain(),
                        this.consume(")")) : this.expect("[") ? primary = this.arrayDeclaration() : this.expect("{") ? primary = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? primary = copy(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? primary = {
                            type: AST.Literal,
                            value: this.options.literals[this.consume().text]
                        } : this.peek().identifier ? primary = this.identifier() : this.peek().constant ? primary = this.constant() : this.throwError("not a primary expression", this.peek());
                        for (var next; next = this.expect("(", "[", "."); )
                            "(" === next.text ? (primary = {
                                type: AST.CallExpression,
                                callee: primary,
                                arguments: this.parseArguments()
                            },
                            this.consume(")")) : "[" === next.text ? (primary = {
                                type: AST.MemberExpression,
                                object: primary,
                                property: this.expression(),
                                computed: !0
                            },
                            this.consume("]")) : "." === next.text ? primary = {
                                type: AST.MemberExpression,
                                object: primary,
                                property: this.identifier(),
                                computed: !1
                            } : this.throwError("IMPOSSIBLE");
                        return primary
                    },
                    filter: function(baseExpression) {
                        for (var args = [baseExpression], result = {
                            type: AST.CallExpression,
                            callee: this.identifier(),
                            arguments: args,
                            filter: !0
                        }; this.expect(":"); )
                            args.push(this.expression());
                        return result
                    },
                    parseArguments: function() {
                        var args = [];
                        if (")" !== this.peekToken().text)
                            do {
                                args.push(this.filterChain())
                            } while (this.expect(","));
                        return args
                    },
                    identifier: function() {
                        var token = this.consume();
                        return token.identifier || this.throwError("is not a valid identifier", token),
                        {
                            type: AST.Identifier,
                            name: token.text
                        }
                    },
                    constant: function() {
                        return {
                            type: AST.Literal,
                            value: this.consume().value
                        }
                    },
                    arrayDeclaration: function() {
                        var elements = [];
                        if ("]" !== this.peekToken().text)
                            do {
                                if (this.peek("]"))
                                    break;
                                elements.push(this.expression())
                            } while (this.expect(","));
                        return this.consume("]"),
                        {
                            type: AST.ArrayExpression,
                            elements: elements
                        }
                    },
                    object: function() {
                        var property, properties = [];
                        if ("}" !== this.peekToken().text)
                            do {
                                if (this.peek("}"))
                                    break;
                                property = {
                                    type: AST.Property,
                                    kind: "init"
                                },
                                this.peek().constant ? (property.key = this.constant(),
                                property.computed = !1,
                                this.consume(":"),
                                property.value = this.expression()) : this.peek().identifier ? (property.key = this.identifier(),
                                property.computed = !1,
                                this.peek(":") ? (this.consume(":"),
                                property.value = this.expression()) : property.value = property.key) : this.peek("[") ? (this.consume("["),
                                property.key = this.expression(),
                                this.consume("]"),
                                property.computed = !0,
                                this.consume(":"),
                                property.value = this.expression()) : this.throwError("invalid key", this.peek()),
                                properties.push(property)
                            } while (this.expect(","));
                        return this.consume("}"),
                        {
                            type: AST.ObjectExpression,
                            properties: properties
                        }
                    },
                    throwError: function(msg, token) {
                        throw $parseMinErr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", token.text, msg, token.index + 1, this.text, this.text.substring(token.index))
                    },
                    consume: function(e1) {
                        if (0 === this.tokens.length)
                            throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
                        var token = this.expect(e1);
                        return token || this.throwError("is unexpected, expecting [" + e1 + "]", this.peek()),
                        token
                    },
                    peekToken: function() {
                        if (0 === this.tokens.length)
                            throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
                        return this.tokens[0]
                    },
                    peek: function(e1, e2, e3, e4) {
                        return this.peekAhead(0, e1, e2, e3, e4)
                    },
                    peekAhead: function(i, e1, e2, e3, e4) {
                        if (this.tokens.length > i) {
                            var token = this.tokens[i]
                              , t = token.text;
                            if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4)
                                return token
                        }
                        return !1
                    },
                    expect: function(e1, e2, e3, e4) {
                        var token = this.peek(e1, e2, e3, e4);
                        return !!token && (this.tokens.shift(),
                        token)
                    },
                    selfReferential: {
                        this: {
                            type: AST.ThisExpression
                        },
                        $locals: {
                            type: AST.LocalsExpression
                        }
                    }
                };
                var PURITY_ABSOLUTE = 1
                  , PURITY_RELATIVE = 2;
                ASTCompiler.prototype = {
                    compile: function(ast) {
                        var self = this;
                        this.state = {
                            nextId: 0,
                            filters: {},
                            fn: {
                                vars: [],
                                body: [],
                                own: {}
                            },
                            assign: {
                                vars: [],
                                body: [],
                                own: {}
                            },
                            inputs: []
                        },
                        findConstantAndWatchExpressions(ast, self.$filter);
                        var assignable, extra = "";
                        if (this.stage = "assign",
                        assignable = assignableAST(ast)) {
                            this.state.computing = "assign";
                            var result = this.nextId();
                            this.recurse(assignable, result),
                            this.return_(result),
                            extra = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                        }
                        var toWatch = getInputs(ast.body);
                        self.stage = "inputs",
                        forEach(toWatch, function(watch, key) {
                            var fnKey = "fn" + key;
                            self.state[fnKey] = {
                                vars: [],
                                body: [],
                                own: {}
                            },
                            self.state.computing = fnKey;
                            var intoId = self.nextId();
                            self.recurse(watch, intoId),
                            self.return_(intoId),
                            self.state.inputs.push({
                                name: fnKey,
                                isPure: watch.isPure
                            }),
                            watch.watchId = key
                        }),
                        this.state.computing = "fn",
                        this.stage = "main",
                        this.recurse(ast);
                        var fnString = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + extra + this.watchFns() + "return fn;"
                          , fn = new Function("$filter","getStringValue","ifDefined","plus",fnString)(this.$filter, getStringValue, ifDefined, plusFn);
                        return this.state = this.stage = void 0,
                        fn
                    },
                    USE: "use",
                    STRICT: "strict",
                    watchFns: function() {
                        var result = []
                          , inputs = this.state.inputs
                          , self = this;
                        return forEach(inputs, function(input) {
                            result.push("var " + input.name + "=" + self.generateFunction(input.name, "s")),
                            input.isPure && result.push(input.name, ".isPure=" + JSON.stringify(input.isPure) + ";")
                        }),
                        inputs.length && result.push("fn.inputs=[" + inputs.map(function(i) {
                            return i.name
                        }).join(",") + "];"),
                        result.join("")
                    },
                    generateFunction: function(name, params) {
                        return "function(" + params + "){" + this.varsPrefix(name) + this.body(name) + "};"
                    },
                    filterPrefix: function() {
                        var parts = []
                          , self = this;
                        return forEach(this.state.filters, function(id, filter) {
                            parts.push(id + "=$filter(" + self.escape(filter) + ")")
                        }),
                        parts.length ? "var " + parts.join(",") + ";" : ""
                    },
                    varsPrefix: function(section) {
                        return this.state[section].vars.length ? "var " + this.state[section].vars.join(",") + ";" : ""
                    },
                    body: function(section) {
                        return this.state[section].body.join("")
                    },
                    recurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
                        var left, right, args, expression, computed, self = this;
                        if (recursionFn = recursionFn || noop,
                        !skipWatchIdCheck && isDefined(ast.watchId))
                            return intoId = intoId || this.nextId(),
                            void this.if_("i", this.lazyAssign(intoId, this.computedMember("i", ast.watchId)), this.lazyRecurse(ast, intoId, nameId, recursionFn, create, !0));
                        switch (ast.type) {
                        case AST.Program:
                            forEach(ast.body, function(expression, pos) {
                                self.recurse(expression.expression, void 0, void 0, function(expr) {
                                    right = expr
                                }),
                                pos !== ast.body.length - 1 ? self.current().body.push(right, ";") : self.return_(right)
                            });
                            break;
                        case AST.Literal:
                            expression = this.escape(ast.value),
                            this.assign(intoId, expression),
                            recursionFn(intoId || expression);
                            break;
                        case AST.UnaryExpression:
                            this.recurse(ast.argument, void 0, void 0, function(expr) {
                                right = expr
                            }),
                            expression = ast.operator + "(" + this.ifDefined(right, 0) + ")",
                            this.assign(intoId, expression),
                            recursionFn(expression);
                            break;
                        case AST.BinaryExpression:
                            this.recurse(ast.left, void 0, void 0, function(expr) {
                                left = expr
                            }),
                            this.recurse(ast.right, void 0, void 0, function(expr) {
                                right = expr
                            }),
                            expression = "+" === ast.operator ? this.plus(left, right) : "-" === ast.operator ? this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0) : "(" + left + ")" + ast.operator + "(" + right + ")",
                            this.assign(intoId, expression),
                            recursionFn(expression);
                            break;
                        case AST.LogicalExpression:
                            intoId = intoId || this.nextId(),
                            self.recurse(ast.left, intoId),
                            self.if_("&&" === ast.operator ? intoId : self.not(intoId), self.lazyRecurse(ast.right, intoId)),
                            recursionFn(intoId);
                            break;
                        case AST.ConditionalExpression:
                            intoId = intoId || this.nextId(),
                            self.recurse(ast.test, intoId),
                            self.if_(intoId, self.lazyRecurse(ast.alternate, intoId), self.lazyRecurse(ast.consequent, intoId)),
                            recursionFn(intoId);
                            break;
                        case AST.Identifier:
                            intoId = intoId || this.nextId(),
                            nameId && (nameId.context = "inputs" === self.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", ast.name) + "?l:s"),
                            nameId.computed = !1,
                            nameId.name = ast.name),
                            self.if_("inputs" === self.stage || self.not(self.getHasOwnProperty("l", ast.name)), function() {
                                self.if_("inputs" === self.stage || "s", function() {
                                    create && 1 !== create && self.if_(self.isNull(self.nonComputedMember("s", ast.name)), self.lazyAssign(self.nonComputedMember("s", ast.name), "{}")),
                                    self.assign(intoId, self.nonComputedMember("s", ast.name))
                                })
                            }, intoId && self.lazyAssign(intoId, self.nonComputedMember("l", ast.name))),
                            recursionFn(intoId);
                            break;
                        case AST.MemberExpression:
                            left = nameId && (nameId.context = this.nextId()) || this.nextId(),
                            intoId = intoId || this.nextId(),
                            self.recurse(ast.object, left, void 0, function() {
                                self.if_(self.notNull(left), function() {
                                    ast.computed ? (right = self.nextId(),
                                    self.recurse(ast.property, right),
                                    self.getStringValue(right),
                                    create && 1 !== create && self.if_(self.not(self.computedMember(left, right)), self.lazyAssign(self.computedMember(left, right), "{}")),
                                    expression = self.computedMember(left, right),
                                    self.assign(intoId, expression),
                                    nameId && (nameId.computed = !0,
                                    nameId.name = right)) : (create && 1 !== create && self.if_(self.isNull(self.nonComputedMember(left, ast.property.name)), self.lazyAssign(self.nonComputedMember(left, ast.property.name), "{}")),
                                    expression = self.nonComputedMember(left, ast.property.name),
                                    self.assign(intoId, expression),
                                    nameId && (nameId.computed = !1,
                                    nameId.name = ast.property.name))
                                }, function() {
                                    self.assign(intoId, "undefined")
                                }),
                                recursionFn(intoId)
                            }, !!create);
                            break;
                        case AST.CallExpression:
                            intoId = intoId || this.nextId(),
                            ast.filter ? (right = self.filter(ast.callee.name),
                            args = [],
                            forEach(ast.arguments, function(expr) {
                                var argument = self.nextId();
                                self.recurse(expr, argument),
                                args.push(argument)
                            }),
                            expression = right + "(" + args.join(",") + ")",
                            self.assign(intoId, expression),
                            recursionFn(intoId)) : (right = self.nextId(),
                            left = {},
                            args = [],
                            self.recurse(ast.callee, right, left, function() {
                                self.if_(self.notNull(right), function() {
                                    forEach(ast.arguments, function(expr) {
                                        self.recurse(expr, ast.constant ? void 0 : self.nextId(), void 0, function(argument) {
                                            args.push(argument)
                                        })
                                    }),
                                    expression = left.name ? self.member(left.context, left.name, left.computed) + "(" + args.join(",") + ")" : right + "(" + args.join(",") + ")",
                                    self.assign(intoId, expression)
                                }, function() {
                                    self.assign(intoId, "undefined")
                                }),
                                recursionFn(intoId)
                            }));
                            break;
                        case AST.AssignmentExpression:
                            right = this.nextId(),
                            left = {},
                            this.recurse(ast.left, void 0, left, function() {
                                self.if_(self.notNull(left.context), function() {
                                    self.recurse(ast.right, right),
                                    expression = self.member(left.context, left.name, left.computed) + ast.operator + right,
                                    self.assign(intoId, expression),
                                    recursionFn(intoId || expression)
                                })
                            }, 1);
                            break;
                        case AST.ArrayExpression:
                            args = [],
                            forEach(ast.elements, function(expr) {
                                self.recurse(expr, ast.constant ? void 0 : self.nextId(), void 0, function(argument) {
                                    args.push(argument)
                                })
                            }),
                            expression = "[" + args.join(",") + "]",
                            this.assign(intoId, expression),
                            recursionFn(intoId || expression);
                            break;
                        case AST.ObjectExpression:
                            args = [],
                            computed = !1,
                            forEach(ast.properties, function(property) {
                                property.computed && (computed = !0)
                            }),
                            computed ? (intoId = intoId || this.nextId(),
                            this.assign(intoId, "{}"),
                            forEach(ast.properties, function(property) {
                                property.computed ? (left = self.nextId(),
                                self.recurse(property.key, left)) : left = property.key.type === AST.Identifier ? property.key.name : "" + property.key.value,
                                right = self.nextId(),
                                self.recurse(property.value, right),
                                self.assign(self.member(intoId, left, property.computed), right)
                            })) : (forEach(ast.properties, function(property) {
                                self.recurse(property.value, ast.constant ? void 0 : self.nextId(), void 0, function(expr) {
                                    args.push(self.escape(property.key.type === AST.Identifier ? property.key.name : "" + property.key.value) + ":" + expr)
                                })
                            }),
                            expression = "{" + args.join(",") + "}",
                            this.assign(intoId, expression)),
                            recursionFn(intoId || expression);
                            break;
                        case AST.ThisExpression:
                            this.assign(intoId, "s"),
                            recursionFn(intoId || "s");
                            break;
                        case AST.LocalsExpression:
                            this.assign(intoId, "l"),
                            recursionFn(intoId || "l");
                            break;
                        case AST.NGValueParameter:
                            this.assign(intoId, "v"),
                            recursionFn(intoId || "v")
                        }
                    },
                    getHasOwnProperty: function(element, property) {
                        var key = element + "." + property
                          , own = this.current().own;
                        return own.hasOwnProperty(key) || (own[key] = this.nextId(!1, element + "&&(" + this.escape(property) + " in " + element + ")")),
                        own[key]
                    },
                    assign: function(id, value) {
                        if (id)
                            return this.current().body.push(id, "=", value, ";"),
                            id
                    },
                    filter: function(filterName) {
                        return this.state.filters.hasOwnProperty(filterName) || (this.state.filters[filterName] = this.nextId(!0)),
                        this.state.filters[filterName]
                    },
                    ifDefined: function(id, defaultValue) {
                        return "ifDefined(" + id + "," + this.escape(defaultValue) + ")"
                    },
                    plus: function(left, right) {
                        return "plus(" + left + "," + right + ")"
                    },
                    return_: function(id) {
                        this.current().body.push("return ", id, ";")
                    },
                    if_: function(test, alternate, consequent) {
                        if (!0 === test)
                            alternate();
                        else {
                            var body = this.current().body;
                            body.push("if(", test, "){"),
                            alternate(),
                            body.push("}"),
                            consequent && (body.push("else{"),
                            consequent(),
                            body.push("}"))
                        }
                    },
                    not: function(expression) {
                        return "!(" + expression + ")"
                    },
                    isNull: function(expression) {
                        return expression + "==null"
                    },
                    notNull: function(expression) {
                        return expression + "!=null"
                    },
                    nonComputedMember: function(left, right) {
                        var SAFE_IDENTIFIER = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/
                          , UNSAFE_CHARACTERS = /[^$_a-zA-Z0-9]/g;
                        return SAFE_IDENTIFIER.test(right) ? left + "." + right : left + '["' + right.replace(UNSAFE_CHARACTERS, this.stringEscapeFn) + '"]'
                    },
                    computedMember: function(left, right) {
                        return left + "[" + right + "]"
                    },
                    member: function(left, right, computed) {
                        return computed ? this.computedMember(left, right) : this.nonComputedMember(left, right)
                    },
                    getStringValue: function(item) {
                        this.assign(item, "getStringValue(" + item + ")")
                    },
                    lazyRecurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
                        var self = this;
                        return function() {
                            self.recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck)
                        }
                    },
                    lazyAssign: function(id, value) {
                        var self = this;
                        return function() {
                            self.assign(id, value)
                        }
                    },
                    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
                    stringEscapeFn: function(c) {
                        return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4)
                    },
                    escape: function(value) {
                        if (isString(value))
                            return "'" + value.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                        if (isNumber(value))
                            return value.toString();
                        if (!0 === value)
                            return "true";
                        if (!1 === value)
                            return "false";
                        if (null === value)
                            return "null";
                        if (void 0 === value)
                            return "undefined";
                        throw $parseMinErr("esc", "IMPOSSIBLE")
                    },
                    nextId: function(skip, init) {
                        var id = "v" + this.state.nextId++;
                        return skip || this.current().vars.push(id + (init ? "=" + init : "")),
                        id
                    },
                    current: function() {
                        return this.state[this.state.computing]
                    }
                },
                ASTInterpreter.prototype = {
                    compile: function(ast) {
                        var self = this;
                        findConstantAndWatchExpressions(ast, self.$filter);
                        var assignable, assign;
                        (assignable = assignableAST(ast)) && (assign = this.recurse(assignable));
                        var inputs, toWatch = getInputs(ast.body);
                        toWatch && (inputs = [],
                        forEach(toWatch, function(watch, key) {
                            var input = self.recurse(watch);
                            input.isPure = watch.isPure,
                            watch.input = input,
                            inputs.push(input),
                            watch.watchId = key
                        }));
                        var expressions = [];
                        forEach(ast.body, function(expression) {
                            expressions.push(self.recurse(expression.expression))
                        });
                        var fn = 0 === ast.body.length ? noop : 1 === ast.body.length ? expressions[0] : function(scope, locals) {
                            var lastValue;
                            return forEach(expressions, function(exp) {
                                lastValue = exp(scope, locals)
                            }),
                            lastValue
                        }
                        ;
                        return assign && (fn.assign = function(scope, value, locals) {
                            return assign(scope, locals, value)
                        }
                        ),
                        inputs && (fn.inputs = inputs),
                        fn
                    },
                    recurse: function(ast, context, create) {
                        var left, right, args, self = this;
                        if (ast.input)
                            return this.inputs(ast.input, ast.watchId);
                        switch (ast.type) {
                        case AST.Literal:
                            return this.value(ast.value, context);
                        case AST.UnaryExpression:
                            return right = this.recurse(ast.argument),
                            this["unary" + ast.operator](right, context);
                        case AST.BinaryExpression:
                        case AST.LogicalExpression:
                            return left = this.recurse(ast.left),
                            right = this.recurse(ast.right),
                            this["binary" + ast.operator](left, right, context);
                        case AST.ConditionalExpression:
                            return this["ternary?:"](this.recurse(ast.test), this.recurse(ast.alternate), this.recurse(ast.consequent), context);
                        case AST.Identifier:
                            return self.identifier(ast.name, context, create);
                        case AST.MemberExpression:
                            return left = this.recurse(ast.object, !1, !!create),
                            ast.computed || (right = ast.property.name),
                            ast.computed && (right = this.recurse(ast.property)),
                            ast.computed ? this.computedMember(left, right, context, create) : this.nonComputedMember(left, right, context, create);
                        case AST.CallExpression:
                            return args = [],
                            forEach(ast.arguments, function(expr) {
                                args.push(self.recurse(expr))
                            }),
                            ast.filter && (right = this.$filter(ast.callee.name)),
                            ast.filter || (right = this.recurse(ast.callee, !0)),
                            ast.filter ? function(scope, locals, assign, inputs) {
                                for (var values = [], i = 0; i < args.length; ++i)
                                    values.push(args[i](scope, locals, assign, inputs));
                                var value = right.apply(void 0, values, inputs);
                                return context ? {
                                    context: void 0,
                                    name: void 0,
                                    value: value
                                } : value
                            }
                            : function(scope, locals, assign, inputs) {
                                var value, rhs = right(scope, locals, assign, inputs);
                                if (null != rhs.value) {
                                    for (var values = [], i = 0; i < args.length; ++i)
                                        values.push(args[i](scope, locals, assign, inputs));
                                    value = rhs.value.apply(rhs.context, values)
                                }
                                return context ? {
                                    value: value
                                } : value
                            }
                            ;
                        case AST.AssignmentExpression:
                            return left = this.recurse(ast.left, !0, 1),
                            right = this.recurse(ast.right),
                            function(scope, locals, assign, inputs) {
                                var lhs = left(scope, locals, assign, inputs)
                                  , rhs = right(scope, locals, assign, inputs);
                                return lhs.context[lhs.name] = rhs,
                                context ? {
                                    value: rhs
                                } : rhs
                            }
                            ;
                        case AST.ArrayExpression:
                            return args = [],
                            forEach(ast.elements, function(expr) {
                                args.push(self.recurse(expr))
                            }),
                            function(scope, locals, assign, inputs) {
                                for (var value = [], i = 0; i < args.length; ++i)
                                    value.push(args[i](scope, locals, assign, inputs));
                                return context ? {
                                    value: value
                                } : value
                            }
                            ;
                        case AST.ObjectExpression:
                            return args = [],
                            forEach(ast.properties, function(property) {
                                property.computed ? args.push({
                                    key: self.recurse(property.key),
                                    computed: !0,
                                    value: self.recurse(property.value)
                                }) : args.push({
                                    key: property.key.type === AST.Identifier ? property.key.name : "" + property.key.value,
                                    computed: !1,
                                    value: self.recurse(property.value)
                                })
                            }),
                            function(scope, locals, assign, inputs) {
                                for (var value = {}, i = 0; i < args.length; ++i)
                                    args[i].computed ? value[args[i].key(scope, locals, assign, inputs)] = args[i].value(scope, locals, assign, inputs) : value[args[i].key] = args[i].value(scope, locals, assign, inputs);
                                return context ? {
                                    value: value
                                } : value
                            }
                            ;
                        case AST.ThisExpression:
                            return function(scope) {
                                return context ? {
                                    value: scope
                                } : scope
                            }
                            ;
                        case AST.LocalsExpression:
                            return function(scope, locals) {
                                return context ? {
                                    value: locals
                                } : locals
                            }
                            ;
                        case AST.NGValueParameter:
                            return function(scope, locals, assign) {
                                return context ? {
                                    value: assign
                                } : assign
                            }
                        }
                    },
                    "unary+": function(argument, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = argument(scope, locals, assign, inputs);
                            return arg = isDefined(arg) ? +arg : 0,
                            context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "unary-": function(argument, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = argument(scope, locals, assign, inputs);
                            return arg = isDefined(arg) ? -arg : -0,
                            context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "unary!": function(argument, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = !argument(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary+": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var lhs = left(scope, locals, assign, inputs)
                              , rhs = right(scope, locals, assign, inputs)
                              , arg = plusFn(lhs, rhs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary-": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var lhs = left(scope, locals, assign, inputs)
                              , rhs = right(scope, locals, assign, inputs)
                              , arg = (isDefined(lhs) ? lhs : 0) - (isDefined(rhs) ? rhs : 0);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary*": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) * right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary/": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) / right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary%": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) % right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary===": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) === right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary!==": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) !== right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary==": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) == right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary!=": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) != right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary<": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) < right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary>": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) > right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary<=": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) <= right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary>=": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) >= right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary&&": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) && right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "binary||": function(left, right, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = left(scope, locals, assign, inputs) || right(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    "ternary?:": function(test, alternate, consequent, context) {
                        return function(scope, locals, assign, inputs) {
                            var arg = test(scope, locals, assign, inputs) ? alternate(scope, locals, assign, inputs) : consequent(scope, locals, assign, inputs);
                            return context ? {
                                value: arg
                            } : arg
                        }
                    },
                    value: function(value, context) {
                        return function() {
                            return context ? {
                                context: void 0,
                                name: void 0,
                                value: value
                            } : value
                        }
                    },
                    identifier: function(name, context, create) {
                        return function(scope, locals, assign, inputs) {
                            var base = locals && name in locals ? locals : scope;
                            create && 1 !== create && base && null == base[name] && (base[name] = {});
                            var value = base ? base[name] : void 0;
                            return context ? {
                                context: base,
                                name: name,
                                value: value
                            } : value
                        }
                    },
                    computedMember: function(left, right, context, create) {
                        return function(scope, locals, assign, inputs) {
                            var rhs, value, lhs = left(scope, locals, assign, inputs);
                            return null != lhs && (rhs = right(scope, locals, assign, inputs),
                            rhs = getStringValue(rhs),
                            create && 1 !== create && lhs && !lhs[rhs] && (lhs[rhs] = {}),
                            value = lhs[rhs]),
                            context ? {
                                context: lhs,
                                name: rhs,
                                value: value
                            } : value
                        }
                    },
                    nonComputedMember: function(left, right, context, create) {
                        return function(scope, locals, assign, inputs) {
                            var lhs = left(scope, locals, assign, inputs);
                            create && 1 !== create && lhs && null == lhs[right] && (lhs[right] = {});
                            var value = null != lhs ? lhs[right] : void 0;
                            return context ? {
                                context: lhs,
                                name: right,
                                value: value
                            } : value
                        }
                    },
                    inputs: function(input, watchId) {
                        return function(scope, value, locals, inputs) {
                            return inputs ? inputs[watchId] : input(scope, value, locals)
                        }
                    }
                },
                Parser.prototype = {
                    constructor: Parser,
                    parse: function(text) {
                        var ast = this.ast.ast(text)
                          , fn = this.astCompiler.compile(ast);
                        return fn.literal = isLiteral(ast),
                        fn.constant = isConstant(ast),
                        fn
                    }
                };
                var $sceMinErr = minErr("$sce")
                  , SCE_CONTEXTS = {
                    HTML: "html",
                    CSS: "css",
                    URL: "url",
                    RESOURCE_URL: "resourceUrl",
                    JS: "js"
                }
                  , UNDERSCORE_LOWERCASE_REGEXP = /_([a-z])/g
                  , $templateRequestMinErr = minErr("$compile")
                  , urlParsingNode = window.document.createElement("a")
                  , originUrl = urlResolve(window.location.href);
                $$CookieReader.$inject = ["$document"],
                $FilterProvider.$inject = ["$provide"];
                var MAX_DIGITS = 22
                  , DECIMAL_SEP = "."
                  , ZERO_CHAR = "0";
                currencyFilter.$inject = ["$locale"],
                numberFilter.$inject = ["$locale"];
                var DATE_FORMATS = {
                    yyyy: dateGetter("FullYear", 4, 0, !1, !0),
                    yy: dateGetter("FullYear", 2, 0, !0, !0),
                    y: dateGetter("FullYear", 1, 0, !1, !0),
                    MMMM: dateStrGetter("Month"),
                    MMM: dateStrGetter("Month", !0),
                    MM: dateGetter("Month", 2, 1),
                    M: dateGetter("Month", 1, 1),
                    LLLL: dateStrGetter("Month", !1, !0),
                    dd: dateGetter("Date", 2),
                    d: dateGetter("Date", 1),
                    HH: dateGetter("Hours", 2),
                    H: dateGetter("Hours", 1),
                    hh: dateGetter("Hours", 2, -12),
                    h: dateGetter("Hours", 1, -12),
                    mm: dateGetter("Minutes", 2),
                    m: dateGetter("Minutes", 1),
                    ss: dateGetter("Seconds", 2),
                    s: dateGetter("Seconds", 1),
                    sss: dateGetter("Milliseconds", 3),
                    EEEE: dateStrGetter("Day"),
                    EEE: dateStrGetter("Day", !0),
                    a: ampmGetter,
                    Z: timeZoneGetter,
                    ww: weekGetter(2),
                    w: weekGetter(1),
                    G: eraGetter,
                    GG: eraGetter,
                    GGG: eraGetter,
                    GGGG: longEraGetter
                }
                  , DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/
                  , NUMBER_STRING = /^-?\d+$/;
                dateFilter.$inject = ["$locale"];
                var lowercaseFilter = valueFn(lowercase)
                  , uppercaseFilter = valueFn(uppercase);
                orderByFilter.$inject = ["$parse"];
                var htmlAnchorDirective = valueFn({
                    restrict: "E",
                    compile: function(element, attr) {
                        if (!attr.href && !attr.xlinkHref)
                            return function(scope, element) {
                                if ("a" === element[0].nodeName.toLowerCase()) {
                                    var href = "[object SVGAnimatedString]" === toString.call(element.prop("href")) ? "xlink:href" : "href";
                                    element.on("click", function(event) {
                                        element.attr(href) || event.preventDefault()
                                    })
                                }
                            }
                    }
                })
                  , ngAttributeAliasDirectives = {};
                forEach(BOOLEAN_ATTR, function(propName, attrName) {
                    function defaultLinkFn(scope, element, attr) {
                        scope.$watch(attr[normalized], function(value) {
                            attr.$set(attrName, !!value)
                        })
                    }
                    if ("multiple" !== propName) {
                        var normalized = directiveNormalize("ng-" + attrName)
                          , linkFn = defaultLinkFn;
                        "checked" === propName && (linkFn = function(scope, element, attr) {
                            attr.ngModel !== attr[normalized] && defaultLinkFn(scope, element, attr)
                        }
                        ),
                        ngAttributeAliasDirectives[normalized] = function() {
                            return {
                                restrict: "A",
                                priority: 100,
                                link: linkFn
                            }
                        }
                    }
                }),
                forEach(ALIASED_ATTR, function(htmlAttr, ngAttr) {
                    ngAttributeAliasDirectives[ngAttr] = function() {
                        return {
                            priority: 100,
                            link: function(scope, element, attr) {
                                if ("ngPattern" === ngAttr && "/" === attr.ngPattern.charAt(0)) {
                                    var match = attr.ngPattern.match(REGEX_STRING_REGEXP);
                                    if (match)
                                        return void attr.$set("ngPattern", new RegExp(match[1],match[2]))
                                }
                                scope.$watch(attr[ngAttr], function(value) {
                                    attr.$set(ngAttr, value)
                                })
                            }
                        }
                    }
                }),
                forEach(["src", "srcset", "href"], function(attrName) {
                    var normalized = directiveNormalize("ng-" + attrName);
                    ngAttributeAliasDirectives[normalized] = function() {
                        return {
                            priority: 99,
                            link: function(scope, element, attr) {
                                var propName = attrName
                                  , name = attrName;
                                "href" === attrName && "[object SVGAnimatedString]" === toString.call(element.prop("href")) && (name = "xlinkHref",
                                attr.$attr[name] = "xlink:href",
                                propName = null),
                                attr.$observe(normalized, function(value) {
                                    if (!value)
                                        return void ("href" === attrName && attr.$set(name, null));
                                    attr.$set(name, value),
                                    msie && propName && element.prop(propName, attr[name])
                                })
                            }
                        }
                    }
                });
                var nullFormCtrl = {
                    $addControl: noop,
                    $$renameControl: nullFormRenameControl,
                    $removeControl: noop,
                    $setValidity: noop,
                    $setDirty: noop,
                    $setPristine: noop,
                    $setSubmitted: noop
                }
                  , PENDING_CLASS = "ng-pending";
                FormController.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"],
                FormController.prototype = {
                    $rollbackViewValue: function() {
                        forEach(this.$$controls, function(control) {
                            control.$rollbackViewValue()
                        })
                    },
                    $commitViewValue: function() {
                        forEach(this.$$controls, function(control) {
                            control.$commitViewValue()
                        })
                    },
                    $addControl: function(control) {
                        assertNotHasOwnProperty(control.$name, "input"),
                        this.$$controls.push(control),
                        control.$name && (this[control.$name] = control),
                        control.$$parentForm = this
                    },
                    $$renameControl: function(control, newName) {
                        var oldName = control.$name;
                        this[oldName] === control && delete this[oldName],
                        this[newName] = control,
                        control.$name = newName
                    },
                    $removeControl: function(control) {
                        control.$name && this[control.$name] === control && delete this[control.$name],
                        forEach(this.$pending, function(value, name) {
                            this.$setValidity(name, null, control)
                        }, this),
                        forEach(this.$error, function(value, name) {
                            this.$setValidity(name, null, control)
                        }, this),
                        forEach(this.$$success, function(value, name) {
                            this.$setValidity(name, null, control)
                        }, this),
                        arrayRemove(this.$$controls, control),
                        control.$$parentForm = nullFormCtrl
                    },
                    $setDirty: function() {
                        this.$$animate.removeClass(this.$$element, PRISTINE_CLASS),
                        this.$$animate.addClass(this.$$element, DIRTY_CLASS),
                        this.$dirty = !0,
                        this.$pristine = !1,
                        this.$$parentForm.$setDirty()
                    },
                    $setPristine: function() {
                        this.$$animate.setClass(this.$$element, PRISTINE_CLASS, DIRTY_CLASS + " ng-submitted"),
                        this.$dirty = !1,
                        this.$pristine = !0,
                        this.$submitted = !1,
                        forEach(this.$$controls, function(control) {
                            control.$setPristine()
                        })
                    },
                    $setUntouched: function() {
                        forEach(this.$$controls, function(control) {
                            control.$setUntouched()
                        })
                    },
                    $setSubmitted: function() {
                        this.$$animate.addClass(this.$$element, "ng-submitted"),
                        this.$submitted = !0,
                        this.$$parentForm.$setSubmitted()
                    }
                },
                addSetValidityMethod({
                    clazz: FormController,
                    set: function(object, property, controller) {
                        var list = object[property];
                        if (list) {
                            -1 === list.indexOf(controller) && list.push(controller)
                        } else
                            object[property] = [controller]
                    },
                    unset: function(object, property, controller) {
                        var list = object[property];
                        list && (arrayRemove(list, controller),
                        0 === list.length && delete object[property])
                    }
                });
                var formDirectiveFactory = function(isNgForm) {
                    return ["$timeout", "$parse", function($timeout, $parse) {
                        function getSetter(expression) {
                            return "" === expression ? $parse('this[""]').assign : $parse(expression).assign || noop
                        }
                        return {
                            name: "form",
                            restrict: isNgForm ? "EAC" : "E",
                            require: ["form", "^^?form"],
                            controller: FormController,
                            compile: function(formElement, attr) {
                                formElement.addClass(PRISTINE_CLASS).addClass(VALID_CLASS);
                                var nameAttr = attr.name ? "name" : !(!isNgForm || !attr.ngForm) && "ngForm";
                                return {
                                    pre: function(scope, formElement, attr, ctrls) {
                                        var controller = ctrls[0];
                                        if (!("action"in attr)) {
                                            var handleFormSubmission = function(event) {
                                                scope.$apply(function() {
                                                    controller.$commitViewValue(),
                                                    controller.$setSubmitted()
                                                }),
                                                event.preventDefault()
                                            };
                                            formElement[0].addEventListener("submit", handleFormSubmission),
                                            formElement.on("$destroy", function() {
                                                $timeout(function() {
                                                    formElement[0].removeEventListener("submit", handleFormSubmission)
                                                }, 0, !1)
                                            })
                                        }
                                        (ctrls[1] || controller.$$parentForm).$addControl(controller);
                                        var setter = nameAttr ? getSetter(controller.$name) : noop;
                                        nameAttr && (setter(scope, controller),
                                        attr.$observe(nameAttr, function(newValue) {
                                            controller.$name !== newValue && (setter(scope, void 0),
                                            controller.$$parentForm.$$renameControl(controller, newValue),
                                            (setter = getSetter(controller.$name))(scope, controller))
                                        })),
                                        formElement.on("$destroy", function() {
                                            controller.$$parentForm.$removeControl(controller),
                                            setter(scope, void 0),
                                            extend(controller, nullFormCtrl)
                                        })
                                    }
                                }
                            }
                        }
                    }
                    ]
                }
                  , formDirective = formDirectiveFactory()
                  , ngFormDirective = formDirectiveFactory(!0)
                  , ISO_DATE_REGEXP = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/
                  , URL_REGEXP = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i
                  , EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
                  , NUMBER_REGEXP = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/
                  , DATE_REGEXP = /^(\d{4,})-(\d{2})-(\d{2})$/
                  , DATETIMELOCAL_REGEXP = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
                  , WEEK_REGEXP = /^(\d{4,})-W(\d\d)$/
                  , MONTH_REGEXP = /^(\d{4,})-(\d\d)$/
                  , TIME_REGEXP = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
                  , PARTIAL_VALIDATION_EVENTS = "keydown wheel mousedown"
                  , PARTIAL_VALIDATION_TYPES = createMap();
                forEach("date,datetime-local,month,time,week".split(","), function(type) {
                    PARTIAL_VALIDATION_TYPES[type] = !0
                });
                var inputType = {
                    text: textInputType,
                    date: createDateInputType("date", DATE_REGEXP, createDateParser(DATE_REGEXP, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                    "datetime-local": createDateInputType("datetimelocal", DATETIMELOCAL_REGEXP, createDateParser(DATETIMELOCAL_REGEXP, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                    time: createDateInputType("time", TIME_REGEXP, createDateParser(TIME_REGEXP, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                    week: createDateInputType("week", WEEK_REGEXP, weekParser, "yyyy-Www"),
                    month: createDateInputType("month", MONTH_REGEXP, createDateParser(MONTH_REGEXP, ["yyyy", "MM"]), "yyyy-MM"),
                    number: numberInputType,
                    url: urlInputType,
                    email: emailInputType,
                    radio: radioInputType,
                    range: rangeInputType,
                    checkbox: checkboxInputType,
                    hidden: noop,
                    button: noop,
                    submit: noop,
                    reset: noop,
                    file: noop
                }
                  , inputDirective = ["$browser", "$sniffer", "$filter", "$parse", function($browser, $sniffer, $filter, $parse) {
                    return {
                        restrict: "E",
                        require: ["?ngModel"],
                        link: {
                            pre: function(scope, element, attr, ctrls) {
                                ctrls[0] && (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrls[0], $sniffer, $browser, $filter, $parse)
                            }
                        }
                    }
                }
                ]
                  , CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/
                  , ngValueDirective = function() {
                    function updateElementValue(element, attr, value) {
                        var propValue = isDefined(value) ? value : 9 === msie ? "" : null;
                        element.prop("value", propValue),
                        attr.$set("value", value)
                    }
                    return {
                        restrict: "A",
                        priority: 100,
                        compile: function(tpl, tplAttr) {
                            return CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue) ? function(scope, elm, attr) {
                                updateElementValue(elm, attr, scope.$eval(attr.ngValue))
                            }
                            : function(scope, elm, attr) {
                                scope.$watch(attr.ngValue, function(value) {
                                    updateElementValue(elm, attr, value)
                                })
                            }
                        }
                    }
                }
                  , ngBindDirective = ["$compile", function($compile) {
                    return {
                        restrict: "AC",
                        compile: function(templateElement) {
                            return $compile.$$addBindingClass(templateElement),
                            function(scope, element, attr) {
                                $compile.$$addBindingInfo(element, attr.ngBind),
                                element = element[0],
                                scope.$watch(attr.ngBind, function(value) {
                                    element.textContent = stringify(value)
                                })
                            }
                        }
                    }
                }
                ]
                  , ngBindTemplateDirective = ["$interpolate", "$compile", function($interpolate, $compile) {
                    return {
                        compile: function(templateElement) {
                            return $compile.$$addBindingClass(templateElement),
                            function(scope, element, attr) {
                                var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
                                $compile.$$addBindingInfo(element, interpolateFn.expressions),
                                element = element[0],
                                attr.$observe("ngBindTemplate", function(value) {
                                    element.textContent = isUndefined(value) ? "" : value
                                })
                            }
                        }
                    }
                }
                ]
                  , ngBindHtmlDirective = ["$sce", "$parse", "$compile", function($sce, $parse, $compile) {
                    return {
                        restrict: "A",
                        compile: function(tElement, tAttrs) {
                            var ngBindHtmlGetter = $parse(tAttrs.ngBindHtml)
                              , ngBindHtmlWatch = $parse(tAttrs.ngBindHtml, function(val) {
                                return $sce.valueOf(val)
                            });
                            return $compile.$$addBindingClass(tElement),
                            function(scope, element, attr) {
                                $compile.$$addBindingInfo(element, attr.ngBindHtml),
                                scope.$watch(ngBindHtmlWatch, function() {
                                    var value = ngBindHtmlGetter(scope);
                                    element.html($sce.getTrustedHtml(value) || "")
                                })
                            }
                        }
                    }
                }
                ]
                  , ngChangeDirective = valueFn({
                    restrict: "A",
                    require: "ngModel",
                    link: function(scope, element, attr, ctrl) {
                        ctrl.$viewChangeListeners.push(function() {
                            scope.$eval(attr.ngChange)
                        })
                    }
                })
                  , ngClassDirective = classDirective("", !0)
                  , ngClassOddDirective = classDirective("Odd", 0)
                  , ngClassEvenDirective = classDirective("Even", 1)
                  , ngCloakDirective = ngDirective({
                    compile: function(element, attr) {
                        attr.$set("ngCloak", void 0),
                        element.removeClass("ng-cloak")
                    }
                })
                  , ngControllerDirective = [function() {
                    return {
                        restrict: "A",
                        scope: !0,
                        controller: "@",
                        priority: 500
                    }
                }
                ]
                  , ngEventDirectives = {}
                  , forceAsyncEvents = {
                    blur: !0,
                    focus: !0
                };
                forEach("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(eventName) {
                    var directiveName = directiveNormalize("ng-" + eventName);
                    ngEventDirectives[directiveName] = ["$parse", "$rootScope", function($parse, $rootScope) {
                        return {
                            restrict: "A",
                            compile: function($element, attr) {
                                var fn = $parse(attr[directiveName]);
                                return function(scope, element) {
                                    element.on(eventName, function(event) {
                                        var callback = function() {
                                            fn(scope, {
                                                $event: event
                                            })
                                        };
                                        forceAsyncEvents[eventName] && $rootScope.$$phase ? scope.$evalAsync(callback) : scope.$apply(callback)
                                    })
                                }
                            }
                        }
                    }
                    ]
                });
                var ngIfDirective = ["$animate", "$compile", function($animate, $compile) {
                    return {
                        multiElement: !0,
                        transclude: "element",
                        priority: 600,
                        terminal: !0,
                        restrict: "A",
                        $$tlb: !0,
                        link: function($scope, $element, $attr, ctrl, $transclude) {
                            var block, childScope, previousElements;
                            $scope.$watch($attr.ngIf, function(value) {
                                value ? childScope || $transclude(function(clone, newScope) {
                                    childScope = newScope,
                                    clone[clone.length++] = $compile.$$createComment("end ngIf", $attr.ngIf),
                                    block = {
                                        clone: clone
                                    },
                                    $animate.enter(clone, $element.parent(), $element)
                                }) : (previousElements && (previousElements.remove(),
                                previousElements = null),
                                childScope && (childScope.$destroy(),
                                childScope = null),
                                block && (previousElements = getBlockNodes(block.clone),
                                $animate.leave(previousElements).done(function(response) {
                                    !1 !== response && (previousElements = null)
                                }),
                                block = null))
                            })
                        }
                    }
                }
                ]
                  , ngIncludeDirective = ["$templateRequest", "$anchorScroll", "$animate", function($templateRequest, $anchorScroll, $animate) {
                    return {
                        restrict: "ECA",
                        priority: 400,
                        terminal: !0,
                        transclude: "element",
                        controller: angular.noop,
                        compile: function(element, attr) {
                            var srcExp = attr.ngInclude || attr.src
                              , onloadExp = attr.onload || ""
                              , autoScrollExp = attr.autoscroll;
                            return function(scope, $element, $attr, ctrl, $transclude) {
                                var currentScope, previousElement, currentElement, changeCounter = 0, cleanupLastIncludeContent = function() {
                                    previousElement && (previousElement.remove(),
                                    previousElement = null),
                                    currentScope && (currentScope.$destroy(),
                                    currentScope = null),
                                    currentElement && ($animate.leave(currentElement).done(function(response) {
                                        !1 !== response && (previousElement = null)
                                    }),
                                    previousElement = currentElement,
                                    currentElement = null)
                                };
                                scope.$watch(srcExp, function(src) {
                                    var afterAnimation = function(response) {
                                        !1 === response || !isDefined(autoScrollExp) || autoScrollExp && !scope.$eval(autoScrollExp) || $anchorScroll()
                                    }
                                      , thisChangeId = ++changeCounter;
                                    src ? ($templateRequest(src, !0).then(function(response) {
                                        if (!scope.$$destroyed && thisChangeId === changeCounter) {
                                            var newScope = scope.$new();
                                            ctrl.template = response;
                                            var clone = $transclude(newScope, function(clone) {
                                                cleanupLastIncludeContent(),
                                                $animate.enter(clone, null, $element).done(afterAnimation)
                                            });
                                            currentScope = newScope,
                                            currentElement = clone,
                                            currentScope.$emit("$includeContentLoaded", src),
                                            scope.$eval(onloadExp)
                                        }
                                    }, function() {
                                        scope.$$destroyed || thisChangeId === changeCounter && (cleanupLastIncludeContent(),
                                        scope.$emit("$includeContentError", src))
                                    }),
                                    scope.$emit("$includeContentRequested", src)) : (cleanupLastIncludeContent(),
                                    ctrl.template = null)
                                })
                            }
                        }
                    }
                }
                ]
                  , ngIncludeFillContentDirective = ["$compile", function($compile) {
                    return {
                        restrict: "ECA",
                        priority: -400,
                        require: "ngInclude",
                        link: function(scope, $element, $attr, ctrl) {
                            if (toString.call($element[0]).match(/SVG/))
                                return $element.empty(),
                                void $compile(jqLiteBuildFragment(ctrl.template, window.document).childNodes)(scope, function(clone) {
                                    $element.append(clone)
                                }, {
                                    futureParentElement: $element
                                });
                            $element.html(ctrl.template),
                            $compile($element.contents())(scope)
                        }
                    }
                }
                ]
                  , ngInitDirective = ngDirective({
                    priority: 450,
                    compile: function() {
                        return {
                            pre: function(scope, element, attrs) {
                                scope.$eval(attrs.ngInit)
                            }
                        }
                    }
                })
                  , ngListDirective = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        require: "ngModel",
                        link: function(scope, element, attr, ctrl) {
                            var ngList = attr.ngList || ", "
                              , trimValues = "false" !== attr.ngTrim
                              , separator = trimValues ? trim(ngList) : ngList
                              , parse = function(viewValue) {
                                if (!isUndefined(viewValue)) {
                                    var list = [];
                                    return viewValue && forEach(viewValue.split(separator), function(value) {
                                        value && list.push(trimValues ? trim(value) : value)
                                    }),
                                    list
                                }
                            };
                            ctrl.$parsers.push(parse),
                            ctrl.$formatters.push(function(value) {
                                if (isArray(value))
                                    return value.join(ngList)
                            }),
                            ctrl.$isEmpty = function(value) {
                                return !value || !value.length
                            }
                        }
                    }
                }
                  , VALID_CLASS = "ng-valid"
                  , INVALID_CLASS = "ng-invalid"
                  , PRISTINE_CLASS = "ng-pristine"
                  , DIRTY_CLASS = "ng-dirty"
                  , ngModelMinErr = minErr("ngModel");
                NgModelController.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"],
                NgModelController.prototype = {
                    $$initGetterSetters: function() {
                        if (this.$options.getOption("getterSetter")) {
                            var invokeModelGetter = this.$$parse(this.$$attr.ngModel + "()")
                              , invokeModelSetter = this.$$parse(this.$$attr.ngModel + "($$$p)");
                            this.$$ngModelGet = function($scope) {
                                var modelValue = this.$$parsedNgModel($scope);
                                return isFunction(modelValue) && (modelValue = invokeModelGetter($scope)),
                                modelValue
                            }
                            ,
                            this.$$ngModelSet = function($scope, newValue) {
                                isFunction(this.$$parsedNgModel($scope)) ? invokeModelSetter($scope, {
                                    $$$p: newValue
                                }) : this.$$parsedNgModelAssign($scope, newValue)
                            }
                        } else if (!this.$$parsedNgModel.assign)
                            throw ngModelMinErr("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, startingTag(this.$$element))
                    },
                    $render: noop,
                    $isEmpty: function(value) {
                        return isUndefined(value) || "" === value || null === value || value !== value
                    },
                    $$updateEmptyClasses: function(value) {
                        this.$isEmpty(value) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"),
                        this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"),
                        this.$$animate.addClass(this.$$element, "ng-not-empty"))
                    },
                    $setPristine: function() {
                        this.$dirty = !1,
                        this.$pristine = !0,
                        this.$$animate.removeClass(this.$$element, DIRTY_CLASS),
                        this.$$animate.addClass(this.$$element, PRISTINE_CLASS)
                    },
                    $setDirty: function() {
                        this.$dirty = !0,
                        this.$pristine = !1,
                        this.$$animate.removeClass(this.$$element, PRISTINE_CLASS),
                        this.$$animate.addClass(this.$$element, DIRTY_CLASS),
                        this.$$parentForm.$setDirty()
                    },
                    $setUntouched: function() {
                        this.$touched = !1,
                        this.$untouched = !0,
                        this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
                    },
                    $setTouched: function() {
                        this.$touched = !0,
                        this.$untouched = !1,
                        this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
                    },
                    $rollbackViewValue: function() {
                        this.$$timeout.cancel(this.$$pendingDebounce),
                        this.$viewValue = this.$$lastCommittedViewValue,
                        this.$render()
                    },
                    $validate: function() {
                        if (!isNumberNaN(this.$modelValue)) {
                            var viewValue = this.$$lastCommittedViewValue
                              , modelValue = this.$$rawModelValue
                              , prevValid = this.$valid
                              , prevModelValue = this.$modelValue
                              , allowInvalid = this.$options.getOption("allowInvalid")
                              , that = this;
                            this.$$runValidators(modelValue, viewValue, function(allValid) {
                                allowInvalid || prevValid === allValid || (that.$modelValue = allValid ? modelValue : void 0,
                                that.$modelValue !== prevModelValue && that.$$writeModelToScope())
                            })
                        }
                    },
                    $$runValidators: function(modelValue, viewValue, doneCallback) {
                        function setValidity(name, isValid) {
                            localValidationRunId === that.$$currentValidationRunId && that.$setValidity(name, isValid)
                        }
                        function validationDone(allValid) {
                            localValidationRunId === that.$$currentValidationRunId && doneCallback(allValid)
                        }
                        this.$$currentValidationRunId++;
                        var localValidationRunId = this.$$currentValidationRunId
                          , that = this;
                        return function() {
                            var errorKey = that.$$parserName || "parse";
                            return isUndefined(that.$$parserValid) ? (setValidity(errorKey, null),
                            !0) : (that.$$parserValid || (forEach(that.$validators, function(v, name) {
                                setValidity(name, null)
                            }),
                            forEach(that.$asyncValidators, function(v, name) {
                                setValidity(name, null)
                            })),
                            setValidity(errorKey, that.$$parserValid),
                            that.$$parserValid)
                        }() && function() {
                            var syncValidatorsValid = !0;
                            return forEach(that.$validators, function(validator, name) {
                                var result = Boolean(validator(modelValue, viewValue));
                                syncValidatorsValid = syncValidatorsValid && result,
                                setValidity(name, result)
                            }),
                            !!syncValidatorsValid || (forEach(that.$asyncValidators, function(v, name) {
                                setValidity(name, null)
                            }),
                            !1)
                        }() ? void function() {
                            var validatorPromises = []
                              , allValid = !0;
                            forEach(that.$asyncValidators, function(validator, name) {
                                var promise = validator(modelValue, viewValue);
                                if (!isPromiseLike(promise))
                                    throw ngModelMinErr("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", promise);
                                setValidity(name, void 0),
                                validatorPromises.push(promise.then(function() {
                                    setValidity(name, !0)
                                }, function() {
                                    allValid = !1,
                                    setValidity(name, !1)
                                }))
                            }),
                            validatorPromises.length ? that.$$q.all(validatorPromises).then(function() {
                                validationDone(allValid)
                            }, noop) : validationDone(!0)
                        }() : void validationDone(!1)
                    },
                    $commitViewValue: function() {
                        var viewValue = this.$viewValue;
                        this.$$timeout.cancel(this.$$pendingDebounce),
                        (this.$$lastCommittedViewValue !== viewValue || "" === viewValue && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(viewValue),
                        this.$$lastCommittedViewValue = viewValue,
                        this.$pristine && this.$setDirty(),
                        this.$$parseAndValidate())
                    },
                    $$parseAndValidate: function() {
                        function writeToModelIfNeeded() {
                            that.$modelValue !== prevModelValue && that.$$writeModelToScope()
                        }
                        var viewValue = this.$$lastCommittedViewValue
                          , modelValue = viewValue
                          , that = this;
                        if (this.$$parserValid = !isUndefined(modelValue) || void 0,
                        this.$$parserValid)
                            for (var i = 0; i < this.$parsers.length; i++)
                                if (modelValue = this.$parsers[i](modelValue),
                                isUndefined(modelValue)) {
                                    this.$$parserValid = !1;
                                    break
                                }
                        isNumberNaN(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
                        var prevModelValue = this.$modelValue
                          , allowInvalid = this.$options.getOption("allowInvalid");
                        this.$$rawModelValue = modelValue,
                        allowInvalid && (this.$modelValue = modelValue,
                        writeToModelIfNeeded()),
                        this.$$runValidators(modelValue, this.$$lastCommittedViewValue, function(allValid) {
                            allowInvalid || (that.$modelValue = allValid ? modelValue : void 0,
                            writeToModelIfNeeded())
                        })
                    },
                    $$writeModelToScope: function() {
                        this.$$ngModelSet(this.$$scope, this.$modelValue),
                        forEach(this.$viewChangeListeners, function(listener) {
                            try {
                                listener()
                            } catch (e) {
                                this.$$exceptionHandler(e)
                            }
                        }, this)
                    },
                    $setViewValue: function(value, trigger) {
                        this.$viewValue = value,
                        this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(trigger)
                    },
                    $$debounceViewValueCommit: function(trigger) {
                        var debounceDelay = this.$options.getOption("debounce");
                        isNumber(debounceDelay[trigger]) ? debounceDelay = debounceDelay[trigger] : isNumber(debounceDelay.default) && (debounceDelay = debounceDelay.default),
                        this.$$timeout.cancel(this.$$pendingDebounce);
                        var that = this;
                        debounceDelay > 0 ? this.$$pendingDebounce = this.$$timeout(function() {
                            that.$commitViewValue()
                        }, debounceDelay) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                            that.$commitViewValue()
                        })
                    },
                    $overrideModelOptions: function(options) {
                        this.$options = this.$options.createChild(options)
                    }
                },
                addSetValidityMethod({
                    clazz: NgModelController,
                    set: function(object, property) {
                        object[property] = !0
                    },
                    unset: function(object, property) {
                        delete object[property]
                    }
                });
                var defaultModelOptions, ngModelDirective = ["$rootScope", function($rootScope) {
                    return {
                        restrict: "A",
                        require: ["ngModel", "^?form", "^?ngModelOptions"],
                        controller: NgModelController,
                        priority: 1,
                        compile: function(element) {
                            return element.addClass(PRISTINE_CLASS).addClass("ng-untouched").addClass(VALID_CLASS),
                            {
                                pre: function(scope, element, attr, ctrls) {
                                    var modelCtrl = ctrls[0]
                                      , formCtrl = ctrls[1] || modelCtrl.$$parentForm
                                      , optionsCtrl = ctrls[2];
                                    optionsCtrl && (modelCtrl.$options = optionsCtrl.$options),
                                    modelCtrl.$$initGetterSetters(),
                                    formCtrl.$addControl(modelCtrl),
                                    attr.$observe("name", function(newValue) {
                                        modelCtrl.$name !== newValue && modelCtrl.$$parentForm.$$renameControl(modelCtrl, newValue)
                                    }),
                                    scope.$on("$destroy", function() {
                                        modelCtrl.$$parentForm.$removeControl(modelCtrl)
                                    })
                                },
                                post: function(scope, element, attr, ctrls) {
                                    function setTouched() {
                                        modelCtrl.$setTouched()
                                    }
                                    var modelCtrl = ctrls[0];
                                    modelCtrl.$options.getOption("updateOn") && element.on(modelCtrl.$options.getOption("updateOn"), function(ev) {
                                        modelCtrl.$$debounceViewValueCommit(ev && ev.type)
                                    }),
                                    element.on("blur", function() {
                                        modelCtrl.$touched || ($rootScope.$$phase ? scope.$evalAsync(setTouched) : scope.$apply(setTouched))
                                    })
                                }
                            }
                        }
                    }
                }
                ], DEFAULT_REGEXP = /(\s+|^)default(\s+|$)/;
                ModelOptions.prototype = {
                    getOption: function(name) {
                        return this.$$options[name]
                    },
                    createChild: function(options) {
                        var inheritAll = !1;
                        return options = extend({}, options),
                        forEach(options, function(option, key) {
                            "$inherit" === option ? "*" === key ? inheritAll = !0 : (options[key] = this.$$options[key],
                            "updateOn" === key && (options.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === key && (options.updateOnDefault = !1,
                            options[key] = trim(option.replace(DEFAULT_REGEXP, function() {
                                return options.updateOnDefault = !0,
                                " "
                            })))
                        }, this),
                        inheritAll && (delete options["*"],
                        defaults(options, this.$$options)),
                        defaults(options, defaultModelOptions.$$options),
                        new ModelOptions(options)
                    }
                },
                defaultModelOptions = new ModelOptions({
                    updateOn: "",
                    updateOnDefault: !0,
                    debounce: 0,
                    getterSetter: !1,
                    allowInvalid: !1,
                    timezone: null
                });
                var ngModelOptionsDirective = function() {
                    function NgModelOptionsController($attrs, $scope) {
                        this.$$attrs = $attrs,
                        this.$$scope = $scope
                    }
                    return NgModelOptionsController.$inject = ["$attrs", "$scope"],
                    NgModelOptionsController.prototype = {
                        $onInit: function() {
                            var parentOptions = this.parentCtrl ? this.parentCtrl.$options : defaultModelOptions
                              , modelOptionsDefinition = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                            this.$options = parentOptions.createChild(modelOptionsDefinition)
                        }
                    },
                    {
                        restrict: "A",
                        priority: 10,
                        require: {
                            parentCtrl: "?^^ngModelOptions"
                        },
                        bindToController: !0,
                        controller: NgModelOptionsController
                    }
                }
                  , ngNonBindableDirective = ngDirective({
                    terminal: !0,
                    priority: 1e3
                })
                  , ngOptionsMinErr = minErr("ngOptions")
                  , NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/
                  , ngOptionsDirective = ["$compile", "$document", "$parse", function($compile, $document, $parse) {
                    function parseOptionsExpression(optionsExp, selectElement, scope) {
                        function Option(selectValue, viewValue, label, group, disabled) {
                            this.selectValue = selectValue,
                            this.viewValue = viewValue,
                            this.label = label,
                            this.group = group,
                            this.disabled = disabled
                        }
                        function getOptionValuesKeys(optionValues) {
                            var optionValuesKeys;
                            if (!keyName && isArrayLike(optionValues))
                                optionValuesKeys = optionValues;
                            else {
                                optionValuesKeys = [];
                                for (var itemKey in optionValues)
                                    optionValues.hasOwnProperty(itemKey) && "$" !== itemKey.charAt(0) && optionValuesKeys.push(itemKey)
                            }
                            return optionValuesKeys
                        }
                        var match = optionsExp.match(NG_OPTIONS_REGEXP);
                        if (!match)
                            throw ngOptionsMinErr("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", optionsExp, startingTag(selectElement));
                        var valueName = match[5] || match[7]
                          , keyName = match[6]
                          , selectAs = / as /.test(match[0]) && match[1]
                          , trackBy = match[9]
                          , valueFn = $parse(match[2] ? match[1] : valueName)
                          , selectAsFn = selectAs && $parse(selectAs)
                          , viewValueFn = selectAsFn || valueFn
                          , trackByFn = trackBy && $parse(trackBy)
                          , getTrackByValueFn = trackBy ? function(value, locals) {
                            return trackByFn(scope, locals)
                        }
                        : function(value) {
                            return hashKey(value)
                        }
                          , getTrackByValue = function(value, key) {
                            return getTrackByValueFn(value, getLocals(value, key))
                        }
                          , displayFn = $parse(match[2] || match[1])
                          , groupByFn = $parse(match[3] || "")
                          , disableWhenFn = $parse(match[4] || "")
                          , valuesFn = $parse(match[8])
                          , locals = {}
                          , getLocals = keyName ? function(value, key) {
                            return locals[keyName] = key,
                            locals[valueName] = value,
                            locals
                        }
                        : function(value) {
                            return locals[valueName] = value,
                            locals
                        }
                        ;
                        return {
                            trackBy: trackBy,
                            getTrackByValue: getTrackByValue,
                            getWatchables: $parse(valuesFn, function(optionValues) {
                                var watchedArray = [];
                                optionValues = optionValues || [];
                                for (var optionValuesKeys = getOptionValuesKeys(optionValues), optionValuesLength = optionValuesKeys.length, index = 0; index < optionValuesLength; index++) {
                                    var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index]
                                      , value = optionValues[key]
                                      , locals = getLocals(value, key)
                                      , selectValue = getTrackByValueFn(value, locals);
                                    if (watchedArray.push(selectValue),
                                    match[2] || match[1]) {
                                        var label = displayFn(scope, locals);
                                        watchedArray.push(label)
                                    }
                                    if (match[4]) {
                                        var disableWhen = disableWhenFn(scope, locals);
                                        watchedArray.push(disableWhen)
                                    }
                                }
                                return watchedArray
                            }),
                            getOptions: function() {
                                for (var optionItems = [], selectValueMap = {}, optionValues = valuesFn(scope) || [], optionValuesKeys = getOptionValuesKeys(optionValues), optionValuesLength = optionValuesKeys.length, index = 0; index < optionValuesLength; index++) {
                                    var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index]
                                      , value = optionValues[key]
                                      , locals = getLocals(value, key)
                                      , viewValue = viewValueFn(scope, locals)
                                      , selectValue = getTrackByValueFn(viewValue, locals)
                                      , label = displayFn(scope, locals)
                                      , group = groupByFn(scope, locals)
                                      , disabled = disableWhenFn(scope, locals)
                                      , optionItem = new Option(selectValue,viewValue,label,group,disabled);
                                    optionItems.push(optionItem),
                                    selectValueMap[selectValue] = optionItem
                                }
                                return {
                                    items: optionItems,
                                    selectValueMap: selectValueMap,
                                    getOptionFromViewValue: function(value) {
                                        return selectValueMap[getTrackByValue(value)]
                                    },
                                    getViewValueFromOption: function(option) {
                                        return trackBy ? copy(option.viewValue) : option.viewValue
                                    }
                                }
                            }
                        }
                    }
                    function ngOptionsPostLink(scope, selectElement, attr, ctrls) {
                        function addOptionElement(option, parent) {
                            var optionElement = optionTemplate.cloneNode(!1);
                            parent.appendChild(optionElement),
                            updateOptionElement(option, optionElement)
                        }
                        function getAndUpdateSelectedOption(viewValue) {
                            var option = options.getOptionFromViewValue(viewValue)
                              , element = option && option.element;
                            return element && !element.selected && (element.selected = !0),
                            option
                        }
                        function updateOptionElement(option, element) {
                            option.element = element,
                            element.disabled = option.disabled,
                            option.label !== element.label && (element.label = option.label,
                            element.textContent = option.label),
                            element.value = option.selectValue
                        }
                        function updateOptions() {
                            var previousValue = options && selectCtrl.readValue();
                            if (options)
                                for (var i = options.items.length - 1; i >= 0; i--) {
                                    var option = options.items[i];
                                    jqLiteRemove(isDefined(option.group) ? option.element.parentNode : option.element)
                                }
                            options = ngOptions.getOptions();
                            var groupElementMap = {};
                            if (options.items.forEach(function(option) {
                                var groupElement;
                                isDefined(option.group) ? (groupElement = groupElementMap[option.group],
                                groupElement || (groupElement = optGroupTemplate.cloneNode(!1),
                                listFragment.appendChild(groupElement),
                                groupElement.label = null === option.group ? "null" : option.group,
                                groupElementMap[option.group] = groupElement),
                                addOptionElement(option, groupElement)) : addOptionElement(option, listFragment)
                            }),
                            selectElement[0].appendChild(listFragment),
                            ngModelCtrl.$render(),
                            !ngModelCtrl.$isEmpty(previousValue)) {
                                var nextValue = selectCtrl.readValue();
                                (ngOptions.trackBy || multiple ? equals(previousValue, nextValue) : previousValue === nextValue) || (ngModelCtrl.$setViewValue(nextValue),
                                ngModelCtrl.$render())
                            }
                        }
                        for (var selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, i = 0, children = selectElement.children(), ii = children.length; i < ii; i++)
                            if ("" === children[i].value) {
                                selectCtrl.hasEmptyOption = !0,
                                selectCtrl.emptyOption = children.eq(i);
                                break
                            }
                        selectElement.empty();
                        var providedEmptyOption = !!selectCtrl.emptyOption;
                        jqLite(optionTemplate.cloneNode(!1)).val("?");
                        var options, ngOptions = parseOptionsExpression(attr.ngOptions, selectElement, scope), listFragment = $document[0].createDocumentFragment();
                        selectCtrl.generateUnknownOptionValue = function(val) {
                            return "?"
                        }
                        ,
                        multiple ? (selectCtrl.writeValue = function(values) {
                            if (options) {
                                var selectedOptions = values && values.map(getAndUpdateSelectedOption) || [];
                                options.items.forEach(function(option) {
                                    option.element.selected && !includes(selectedOptions, option) && (option.element.selected = !1)
                                })
                            }
                        }
                        ,
                        selectCtrl.readValue = function() {
                            var selectedValues = selectElement.val() || []
                              , selections = [];
                            return forEach(selectedValues, function(value) {
                                var option = options.selectValueMap[value];
                                option && !option.disabled && selections.push(options.getViewValueFromOption(option))
                            }),
                            selections
                        }
                        ,
                        ngOptions.trackBy && scope.$watchCollection(function() {
                            if (isArray(ngModelCtrl.$viewValue))
                                return ngModelCtrl.$viewValue.map(function(value) {
                                    return ngOptions.getTrackByValue(value)
                                })
                        }, function() {
                            ngModelCtrl.$render()
                        })) : (selectCtrl.writeValue = function(value) {
                            if (options) {
                                var selectedOption = selectElement[0].options[selectElement[0].selectedIndex]
                                  , option = options.getOptionFromViewValue(value);
                                selectedOption && selectedOption.removeAttribute("selected"),
                                option ? (selectElement[0].value !== option.selectValue && (selectCtrl.removeUnknownOption(),
                                selectElement[0].value = option.selectValue,
                                option.element.selected = !0),
                                option.element.setAttribute("selected", "selected")) : selectCtrl.selectUnknownOrEmptyOption(value)
                            }
                        }
                        ,
                        selectCtrl.readValue = function() {
                            var selectedOption = options.selectValueMap[selectElement.val()];
                            return selectedOption && !selectedOption.disabled ? (selectCtrl.unselectEmptyOption(),
                            selectCtrl.removeUnknownOption(),
                            options.getViewValueFromOption(selectedOption)) : null
                        }
                        ,
                        ngOptions.trackBy && scope.$watch(function() {
                            return ngOptions.getTrackByValue(ngModelCtrl.$viewValue)
                        }, function() {
                            ngModelCtrl.$render()
                        })),
                        providedEmptyOption && ($compile(selectCtrl.emptyOption)(scope),
                        selectElement.prepend(selectCtrl.emptyOption),
                        selectCtrl.emptyOption[0].nodeType === NODE_TYPE_COMMENT ? (selectCtrl.hasEmptyOption = !1,
                        selectCtrl.registerOption = function(optionScope, optionEl) {
                            "" === optionEl.val() && (selectCtrl.hasEmptyOption = !0,
                            selectCtrl.emptyOption = optionEl,
                            selectCtrl.emptyOption.removeClass("ng-scope"),
                            ngModelCtrl.$render(),
                            optionEl.on("$destroy", function() {
                                var needsRerender = selectCtrl.$isEmptyOptionSelected();
                                selectCtrl.hasEmptyOption = !1,
                                selectCtrl.emptyOption = void 0,
                                needsRerender && ngModelCtrl.$render()
                            }))
                        }
                        ) : selectCtrl.emptyOption.removeClass("ng-scope")),
                        scope.$watchCollection(ngOptions.getWatchables, updateOptions)
                    }
                    var optionTemplate = window.document.createElement("option")
                      , optGroupTemplate = window.document.createElement("optgroup");
                    return {
                        restrict: "A",
                        terminal: !0,
                        require: ["select", "ngModel"],
                        link: {
                            pre: function(scope, selectElement, attr, ctrls) {
                                ctrls[0].registerOption = noop
                            },
                            post: ngOptionsPostLink
                        }
                    }
                }
                ]
                  , ngPluralizeDirective = ["$locale", "$interpolate", "$log", function($locale, $interpolate, $log) {
                    var BRACE = /{}/g
                      , IS_WHEN = /^when(Minus)?(.+)$/;
                    return {
                        link: function(scope, element, attr) {
                            function updateElementText(newText) {
                                element.text(newText || "")
                            }
                            var lastCount, numberExp = attr.count, whenExp = attr.$attr.when && element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp) || {}, whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), braceReplacement = startSymbol + numberExp + "-" + offset + endSymbol, watchRemover = angular.noop;
                            forEach(attr, function(expression, attributeName) {
                                var tmpMatch = IS_WHEN.exec(attributeName);
                                if (tmpMatch) {
                                    var whenKey = (tmpMatch[1] ? "-" : "") + lowercase(tmpMatch[2]);
                                    whens[whenKey] = element.attr(attr.$attr[attributeName])
                                }
                            }),
                            forEach(whens, function(expression, key) {
                                whensExpFns[key] = $interpolate(expression.replace(BRACE, braceReplacement))
                            }),
                            scope.$watch(numberExp, function(newVal) {
                                var count = parseFloat(newVal)
                                  , countIsNaN = isNumberNaN(count);
                                if (countIsNaN || count in whens || (count = $locale.pluralCat(count - offset)),
                                !(count === lastCount || countIsNaN && isNumberNaN(lastCount))) {
                                    watchRemover();
                                    var whenExpFn = whensExpFns[count];
                                    isUndefined(whenExpFn) ? (null != newVal && $log.debug("ngPluralize: no rule defined for '" + count + "' in " + whenExp),
                                    watchRemover = noop,
                                    updateElementText()) : watchRemover = scope.$watch(whenExpFn, updateElementText),
                                    lastCount = count
                                }
                            })
                        }
                    }
                }
                ]
                  , ngRepeatDirective = ["$parse", "$animate", "$compile", function($parse, $animate, $compile) {
                    var ngRepeatMinErr = minErr("ngRepeat")
                      , updateScope = function(scope, index, valueIdentifier, value, keyIdentifier, key, arrayLength) {
                        scope[valueIdentifier] = value,
                        keyIdentifier && (scope[keyIdentifier] = key),
                        scope.$index = index,
                        scope.$first = 0 === index,
                        scope.$last = index === arrayLength - 1,
                        scope.$middle = !(scope.$first || scope.$last),
                        scope.$odd = !(scope.$even = 0 == (1 & index))
                    }
                      , getBlockStart = function(block) {
                        return block.clone[0]
                    }
                      , getBlockEnd = function(block) {
                        return block.clone[block.clone.length - 1]
                    };
                    return {
                        restrict: "A",
                        multiElement: !0,
                        transclude: "element",
                        priority: 1e3,
                        terminal: !0,
                        $$tlb: !0,
                        compile: function($element, $attr) {
                            var expression = $attr.ngRepeat
                              , ngRepeatEndComment = $compile.$$createComment("end ngRepeat", expression)
                              , match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                            if (!match)
                                throw ngRepeatMinErr("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
                            var lhs = match[1]
                              , rhs = match[2]
                              , aliasAs = match[3]
                              , trackByExp = match[4];
                            if (!(match = lhs.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/)))
                                throw ngRepeatMinErr("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", lhs);
                            var valueIdentifier = match[3] || match[1]
                              , keyIdentifier = match[2];
                            if (aliasAs && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(aliasAs)))
                                throw ngRepeatMinErr("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", aliasAs);
                            var trackByExpGetter, trackByIdExpFn, trackByIdArrayFn, trackByIdObjFn, hashFnLocals = {
                                $id: hashKey
                            };
                            return trackByExp ? trackByExpGetter = $parse(trackByExp) : (trackByIdArrayFn = function(key, value) {
                                return hashKey(value)
                            }
                            ,
                            trackByIdObjFn = function(key) {
                                return key
                            }
                            ),
                            function($scope, $element, $attr, ctrl, $transclude) {
                                trackByExpGetter && (trackByIdExpFn = function(key, value, index) {
                                    return keyIdentifier && (hashFnLocals[keyIdentifier] = key),
                                    hashFnLocals[valueIdentifier] = value,
                                    hashFnLocals.$index = index,
                                    trackByExpGetter($scope, hashFnLocals)
                                }
                                );
                                var lastBlockMap = createMap();
                                $scope.$watchCollection(rhs, function(collection) {
                                    var index, length, nextNode, collectionLength, key, value, trackById, trackByIdFn, collectionKeys, block, nextBlockOrder, elementsToRemove, previousNode = $element[0], nextBlockMap = createMap();
                                    if (aliasAs && ($scope[aliasAs] = collection),
                                    isArrayLike(collection))
                                        collectionKeys = collection,
                                        trackByIdFn = trackByIdExpFn || trackByIdArrayFn;
                                    else {
                                        trackByIdFn = trackByIdExpFn || trackByIdObjFn,
                                        collectionKeys = [];
                                        for (var itemKey in collection)
                                            hasOwnProperty.call(collection, itemKey) && "$" !== itemKey.charAt(0) && collectionKeys.push(itemKey)
                                    }
                                    for (collectionLength = collectionKeys.length,
                                    nextBlockOrder = new Array(collectionLength),
                                    index = 0; index < collectionLength; index++)
                                        if (key = collection === collectionKeys ? index : collectionKeys[index],
                                        value = collection[key],
                                        trackById = trackByIdFn(key, value, index),
                                        lastBlockMap[trackById])
                                            block = lastBlockMap[trackById],
                                            delete lastBlockMap[trackById],
                                            nextBlockMap[trackById] = block,
                                            nextBlockOrder[index] = block;
                                        else {
                                            if (nextBlockMap[trackById])
                                                throw forEach(nextBlockOrder, function(block) {
                                                    block && block.scope && (lastBlockMap[block.id] = block)
                                                }),
                                                ngRepeatMinErr("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", expression, trackById, value);
                                            nextBlockOrder[index] = {
                                                id: trackById,
                                                scope: void 0,
                                                clone: void 0
                                            },
                                            nextBlockMap[trackById] = !0
                                        }
                                    for (var blockKey in lastBlockMap) {
                                        if (block = lastBlockMap[blockKey],
                                        elementsToRemove = getBlockNodes(block.clone),
                                        $animate.leave(elementsToRemove),
                                        elementsToRemove[0].parentNode)
                                            for (index = 0,
                                            length = elementsToRemove.length; index < length; index++)
                                                elementsToRemove[index].$$NG_REMOVED = !0;
                                        block.scope.$destroy()
                                    }
                                    for (index = 0; index < collectionLength; index++)
                                        if (key = collection === collectionKeys ? index : collectionKeys[index],
                                        value = collection[key],
                                        block = nextBlockOrder[index],
                                        block.scope) {
                                            nextNode = previousNode;
                                            do {
                                                nextNode = nextNode.nextSibling
                                            } while (nextNode && nextNode.$$NG_REMOVED);
                                            getBlockStart(block) !== nextNode && $animate.move(getBlockNodes(block.clone), null, previousNode),
                                            previousNode = getBlockEnd(block),
                                            updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength)
                                        } else
                                            $transclude(function(clone, scope) {
                                                block.scope = scope;
                                                var endNode = ngRepeatEndComment.cloneNode(!1);
                                                clone[clone.length++] = endNode,
                                                $animate.enter(clone, null, previousNode),
                                                previousNode = endNode,
                                                block.clone = clone,
                                                nextBlockMap[block.id] = block,
                                                updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength)
                                            });
                                    lastBlockMap = nextBlockMap
                                })
                            }
                        }
                    }
                }
                ]
                  , ngShowDirective = ["$animate", function($animate) {
                    return {
                        restrict: "A",
                        multiElement: !0,
                        link: function(scope, element, attr) {
                            scope.$watch(attr.ngShow, function(value) {
                                $animate[value ? "removeClass" : "addClass"](element, "ng-hide", {
                                    tempClasses: "ng-hide-animate"
                                })
                            })
                        }
                    }
                }
                ]
                  , ngHideDirective = ["$animate", function($animate) {
                    return {
                        restrict: "A",
                        multiElement: !0,
                        link: function(scope, element, attr) {
                            scope.$watch(attr.ngHide, function(value) {
                                $animate[value ? "addClass" : "removeClass"](element, "ng-hide", {
                                    tempClasses: "ng-hide-animate"
                                })
                            })
                        }
                    }
                }
                ]
                  , ngStyleDirective = ngDirective(function(scope, element, attr) {
                    scope.$watch(attr.ngStyle, function(newStyles, oldStyles) {
                        oldStyles && newStyles !== oldStyles && forEach(oldStyles, function(val, style) {
                            element.css(style, "")
                        }),
                        newStyles && element.css(newStyles)
                    }, !0)
                })
                  , ngSwitchDirective = ["$animate", "$compile", function($animate, $compile) {
                    return {
                        require: "ngSwitch",
                        controller: ["$scope", function() {
                            this.cases = {}
                        }
                        ],
                        link: function(scope, element, attr, ngSwitchController) {
                            var watchExpr = attr.ngSwitch || attr.on
                              , selectedTranscludes = []
                              , selectedElements = []
                              , previousLeaveAnimations = []
                              , selectedScopes = []
                              , spliceFactory = function(array, index) {
                                return function(response) {
                                    !1 !== response && array.splice(index, 1)
                                }
                            };
                            scope.$watch(watchExpr, function(value) {
                                for (var i, ii; previousLeaveAnimations.length; )
                                    $animate.cancel(previousLeaveAnimations.pop());
                                for (i = 0,
                                ii = selectedScopes.length; i < ii; ++i) {
                                    var selected = getBlockNodes(selectedElements[i].clone);
                                    selectedScopes[i].$destroy();
                                    (previousLeaveAnimations[i] = $animate.leave(selected)).done(spliceFactory(previousLeaveAnimations, i))
                                }
                                selectedElements.length = 0,
                                selectedScopes.length = 0,
                                (selectedTranscludes = ngSwitchController.cases["!" + value] || ngSwitchController.cases["?"]) && forEach(selectedTranscludes, function(selectedTransclude) {
                                    selectedTransclude.transclude(function(caseElement, selectedScope) {
                                        selectedScopes.push(selectedScope);
                                        var anchor = selectedTransclude.element;
                                        caseElement[caseElement.length++] = $compile.$$createComment("end ngSwitchWhen");
                                        var block = {
                                            clone: caseElement
                                        };
                                        selectedElements.push(block),
                                        $animate.enter(caseElement, anchor.parent(), anchor)
                                    })
                                })
                            })
                        }
                    }
                }
                ]
                  , ngSwitchWhenDirective = ngDirective({
                    transclude: "element",
                    priority: 1200,
                    require: "^ngSwitch",
                    multiElement: !0,
                    link: function(scope, element, attrs, ctrl, $transclude) {
                        forEach(attrs.ngSwitchWhen.split(attrs.ngSwitchWhenSeparator).sort().filter(function(element, index, array) {
                            return array[index - 1] !== element
                        }), function(whenCase) {
                            ctrl.cases["!" + whenCase] = ctrl.cases["!" + whenCase] || [],
                            ctrl.cases["!" + whenCase].push({
                                transclude: $transclude,
                                element: element
                            })
                        })
                    }
                })
                  , ngSwitchDefaultDirective = ngDirective({
                    transclude: "element",
                    priority: 1200,
                    require: "^ngSwitch",
                    multiElement: !0,
                    link: function(scope, element, attr, ctrl, $transclude) {
                        ctrl.cases["?"] = ctrl.cases["?"] || [],
                        ctrl.cases["?"].push({
                            transclude: $transclude,
                            element: element
                        })
                    }
                })
                  , ngTranscludeMinErr = minErr("ngTransclude")
                  , ngTranscludeDirective = ["$compile", function($compile) {
                    return {
                        restrict: "EAC",
                        terminal: !0,
                        compile: function(tElement) {
                            var fallbackLinkFn = $compile(tElement.contents());
                            return tElement.empty(),
                            function($scope, $element, $attrs, controller, $transclude) {
                                function ngTranscludeCloneAttachFn(clone, transcludedScope) {
                                    clone.length && notWhitespace(clone) ? $element.append(clone) : (useFallbackContent(),
                                    transcludedScope.$destroy())
                                }
                                function useFallbackContent() {
                                    fallbackLinkFn($scope, function(clone) {
                                        $element.append(clone)
                                    })
                                }
                                function notWhitespace(nodes) {
                                    for (var i = 0, ii = nodes.length; i < ii; i++) {
                                        var node = nodes[i];
                                        if (node.nodeType !== NODE_TYPE_TEXT || node.nodeValue.trim())
                                            return !0
                                    }
                                }
                                if (!$transclude)
                                    throw ngTranscludeMinErr("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", startingTag($element));
                                $attrs.ngTransclude === $attrs.$attr.ngTransclude && ($attrs.ngTransclude = "");
                                var slotName = $attrs.ngTransclude || $attrs.ngTranscludeSlot;
                                $transclude(ngTranscludeCloneAttachFn, null, slotName),
                                slotName && !$transclude.isSlotFilled(slotName) && useFallbackContent()
                            }
                        }
                    }
                }
                ]
                  , scriptDirective = ["$templateCache", function($templateCache) {
                    return {
                        restrict: "E",
                        terminal: !0,
                        compile: function(element, attr) {
                            if ("text/ng-template" === attr.type) {
                                var templateUrl = attr.id
                                  , text = element[0].text;
                                $templateCache.put(templateUrl, text)
                            }
                        }
                    }
                }
                ]
                  , noopNgModelController = {
                    $setViewValue: noop,
                    $render: noop
                }
                  , SelectController = ["$element", "$scope", function($element, $scope) {
                    function scheduleRender() {
                        renderScheduled || (renderScheduled = !0,
                        $scope.$$postDigest(function() {
                            renderScheduled = !1,
                            self.ngModelCtrl.$render()
                        }))
                    }
                    function scheduleViewValueUpdate(renderAfter) {
                        updateScheduled || (updateScheduled = !0,
                        $scope.$$postDigest(function() {
                            $scope.$$destroyed || (updateScheduled = !1,
                            self.ngModelCtrl.$setViewValue(self.readValue()),
                            renderAfter && self.ngModelCtrl.$render())
                        }))
                    }
                    var self = this
                      , optionsMap = new NgMap;
                    self.selectValueMap = {},
                    self.ngModelCtrl = noopNgModelController,
                    self.multiple = !1,
                    self.unknownOption = jqLite(window.document.createElement("option")),
                    self.hasEmptyOption = !1,
                    self.emptyOption = void 0,
                    self.renderUnknownOption = function(val) {
                        var unknownVal = self.generateUnknownOptionValue(val);
                        self.unknownOption.val(unknownVal),
                        $element.prepend(self.unknownOption),
                        setOptionSelectedStatus(self.unknownOption, !0),
                        $element.val(unknownVal)
                    }
                    ,
                    self.updateUnknownOption = function(val) {
                        var unknownVal = self.generateUnknownOptionValue(val);
                        self.unknownOption.val(unknownVal),
                        setOptionSelectedStatus(self.unknownOption, !0),
                        $element.val(unknownVal)
                    }
                    ,
                    self.generateUnknownOptionValue = function(val) {
                        return "? " + hashKey(val) + " ?"
                    }
                    ,
                    self.removeUnknownOption = function() {
                        self.unknownOption.parent() && self.unknownOption.remove()
                    }
                    ,
                    self.selectEmptyOption = function() {
                        self.emptyOption && ($element.val(""),
                        setOptionSelectedStatus(self.emptyOption, !0))
                    }
                    ,
                    self.unselectEmptyOption = function() {
                        self.hasEmptyOption && setOptionSelectedStatus(self.emptyOption, !1)
                    }
                    ,
                    $scope.$on("$destroy", function() {
                        self.renderUnknownOption = noop
                    }),
                    self.readValue = function() {
                        var val = $element.val()
                          , realVal = val in self.selectValueMap ? self.selectValueMap[val] : val;
                        return self.hasOption(realVal) ? realVal : null
                    }
                    ,
                    self.writeValue = function(value) {
                        var currentlySelectedOption = $element[0].options[$element[0].selectedIndex];
                        if (currentlySelectedOption && setOptionSelectedStatus(jqLite(currentlySelectedOption), !1),
                        self.hasOption(value)) {
                            self.removeUnknownOption();
                            var hashedVal = hashKey(value);
                            $element.val(hashedVal in self.selectValueMap ? hashedVal : value);
                            var selectedOption = $element[0].options[$element[0].selectedIndex];
                            setOptionSelectedStatus(jqLite(selectedOption), !0)
                        } else
                            self.selectUnknownOrEmptyOption(value)
                    }
                    ,
                    self.addOption = function(value, element) {
                        if (element[0].nodeType !== NODE_TYPE_COMMENT) {
                            assertNotHasOwnProperty(value, '"option value"'),
                            "" === value && (self.hasEmptyOption = !0,
                            self.emptyOption = element);
                            var count = optionsMap.get(value) || 0;
                            optionsMap.set(value, count + 1),
                            scheduleRender()
                        }
                    }
                    ,
                    self.removeOption = function(value) {
                        var count = optionsMap.get(value);
                        count && (1 === count ? (optionsMap.delete(value),
                        "" === value && (self.hasEmptyOption = !1,
                        self.emptyOption = void 0)) : optionsMap.set(value, count - 1))
                    }
                    ,
                    self.hasOption = function(value) {
                        return !!optionsMap.get(value)
                    }
                    ,
                    self.$hasEmptyOption = function() {
                        return self.hasEmptyOption
                    }
                    ,
                    self.$isUnknownOptionSelected = function() {
                        return $element[0].options[0] === self.unknownOption[0]
                    }
                    ,
                    self.$isEmptyOptionSelected = function() {
                        return self.hasEmptyOption && $element[0].options[$element[0].selectedIndex] === self.emptyOption[0]
                    }
                    ,
                    self.selectUnknownOrEmptyOption = function(value) {
                        null == value && self.emptyOption ? (self.removeUnknownOption(),
                        self.selectEmptyOption()) : self.unknownOption.parent().length ? self.updateUnknownOption(value) : self.renderUnknownOption(value)
                    }
                    ;
                    var renderScheduled = !1
                      , updateScheduled = !1;
                    self.registerOption = function(optionScope, optionElement, optionAttrs, interpolateValueFn, interpolateTextFn) {
                        if (optionAttrs.$attr.ngValue) {
                            var oldVal, hashedVal = NaN;
                            optionAttrs.$observe("value", function(newVal) {
                                var removal, previouslySelected = optionElement.prop("selected");
                                isDefined(hashedVal) && (self.removeOption(oldVal),
                                delete self.selectValueMap[hashedVal],
                                removal = !0),
                                hashedVal = hashKey(newVal),
                                oldVal = newVal,
                                self.selectValueMap[hashedVal] = newVal,
                                self.addOption(newVal, optionElement),
                                optionElement.attr("value", hashedVal),
                                removal && previouslySelected && scheduleViewValueUpdate()
                            })
                        } else
                            interpolateValueFn ? optionAttrs.$observe("value", function(newVal) {
                                self.readValue();
                                var removal, previouslySelected = optionElement.prop("selected");
                                isDefined(oldVal) && (self.removeOption(oldVal),
                                removal = !0),
                                oldVal = newVal,
                                self.addOption(newVal, optionElement),
                                removal && previouslySelected && scheduleViewValueUpdate()
                            }) : interpolateTextFn ? optionScope.$watch(interpolateTextFn, function(newVal, oldVal) {
                                optionAttrs.$set("value", newVal);
                                var previouslySelected = optionElement.prop("selected");
                                oldVal !== newVal && self.removeOption(oldVal),
                                self.addOption(newVal, optionElement),
                                oldVal && previouslySelected && scheduleViewValueUpdate()
                            }) : self.addOption(optionAttrs.value, optionElement);
                        optionAttrs.$observe("disabled", function(newVal) {
                            ("true" === newVal || newVal && optionElement.prop("selected")) && (self.multiple ? scheduleViewValueUpdate(!0) : (self.ngModelCtrl.$setViewValue(null),
                            self.ngModelCtrl.$render()))
                        }),
                        optionElement.on("$destroy", function() {
                            var currentValue = self.readValue()
                              , removeValue = optionAttrs.value;
                            self.removeOption(removeValue),
                            scheduleRender(),
                            (self.multiple && currentValue && -1 !== currentValue.indexOf(removeValue) || currentValue === removeValue) && scheduleViewValueUpdate(!0)
                        })
                    }
                }
                ]
                  , selectDirective = function() {
                    function selectPreLink(scope, element, attr, ctrls) {
                        var selectCtrl = ctrls[0]
                          , ngModelCtrl = ctrls[1];
                        if (!ngModelCtrl)
                            return void (selectCtrl.registerOption = noop);
                        if (selectCtrl.ngModelCtrl = ngModelCtrl,
                        element.on("change", function() {
                            selectCtrl.removeUnknownOption(),
                            scope.$apply(function() {
                                ngModelCtrl.$setViewValue(selectCtrl.readValue())
                            })
                        }),
                        attr.multiple) {
                            selectCtrl.multiple = !0,
                            selectCtrl.readValue = function() {
                                var array = [];
                                return forEach(element.find("option"), function(option) {
                                    if (option.selected && !option.disabled) {
                                        var val = option.value;
                                        array.push(val in selectCtrl.selectValueMap ? selectCtrl.selectValueMap[val] : val)
                                    }
                                }),
                                array
                            }
                            ,
                            selectCtrl.writeValue = function(value) {
                                forEach(element.find("option"), function(option) {
                                    var shouldBeSelected = !!value && (includes(value, option.value) || includes(value, selectCtrl.selectValueMap[option.value]));
                                    shouldBeSelected !== option.selected && setOptionSelectedStatus(jqLite(option), shouldBeSelected)
                                })
                            }
                            ;
                            var lastView, lastViewRef = NaN;
                            scope.$watch(function() {
                                lastViewRef !== ngModelCtrl.$viewValue || equals(lastView, ngModelCtrl.$viewValue) || (lastView = shallowCopy(ngModelCtrl.$viewValue),
                                ngModelCtrl.$render()),
                                lastViewRef = ngModelCtrl.$viewValue
                            }),
                            ngModelCtrl.$isEmpty = function(value) {
                                return !value || 0 === value.length
                            }
                        }
                    }
                    function selectPostLink(scope, element, attrs, ctrls) {
                        var ngModelCtrl = ctrls[1];
                        if (ngModelCtrl) {
                            var selectCtrl = ctrls[0];
                            ngModelCtrl.$render = function() {
                                selectCtrl.writeValue(ngModelCtrl.$viewValue)
                            }
                        }
                    }
                    return {
                        restrict: "E",
                        require: ["select", "?ngModel"],
                        controller: SelectController,
                        priority: 1,
                        link: {
                            pre: selectPreLink,
                            post: selectPostLink
                        }
                    }
                }
                  , optionDirective = ["$interpolate", function($interpolate) {
                    return {
                        restrict: "E",
                        priority: 100,
                        compile: function(element, attr) {
                            var interpolateValueFn, interpolateTextFn;
                            return isDefined(attr.ngValue) || (isDefined(attr.value) ? interpolateValueFn = $interpolate(attr.value, !0) : (interpolateTextFn = $interpolate(element.text(), !0)) || attr.$set("value", element.text())),
                            function(scope, element, attr) {
                                var parent = element.parent()
                                  , selectCtrl = parent.data("$selectController") || parent.parent().data("$selectController");
                                selectCtrl && selectCtrl.registerOption(scope, element, attr, interpolateValueFn, interpolateTextFn)
                            }
                        }
                    }
                }
                ]
                  , requiredDirective = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(scope, elm, attr, ctrl) {
                            ctrl && (attr.required = !0,
                            ctrl.$validators.required = function(modelValue, viewValue) {
                                return !attr.required || !ctrl.$isEmpty(viewValue)
                            }
                            ,
                            attr.$observe("required", function() {
                                ctrl.$validate()
                            }))
                        }
                    }
                }
                  , patternDirective = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(scope, elm, attr, ctrl) {
                            if (ctrl) {
                                var regexp, patternExp = attr.ngPattern || attr.pattern;
                                attr.$observe("pattern", function(regex) {
                                    if (isString(regex) && regex.length > 0 && (regex = new RegExp("^" + regex + "$")),
                                    regex && !regex.test)
                                        throw minErr("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", patternExp, regex, startingTag(elm));
                                    regexp = regex || void 0,
                                    ctrl.$validate()
                                }),
                                ctrl.$validators.pattern = function(modelValue, viewValue) {
                                    return ctrl.$isEmpty(viewValue) || isUndefined(regexp) || regexp.test(viewValue)
                                }
                            }
                        }
                    }
                }
                  , maxlengthDirective = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(scope, elm, attr, ctrl) {
                            if (ctrl) {
                                var maxlength = -1;
                                attr.$observe("maxlength", function(value) {
                                    var intVal = toInt(value);
                                    maxlength = isNumberNaN(intVal) ? -1 : intVal,
                                    ctrl.$validate()
                                }),
                                ctrl.$validators.maxlength = function(modelValue, viewValue) {
                                    return maxlength < 0 || ctrl.$isEmpty(viewValue) || viewValue.length <= maxlength
                                }
                            }
                        }
                    }
                }
                  , minlengthDirective = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(scope, elm, attr, ctrl) {
                            if (ctrl) {
                                var minlength = 0;
                                attr.$observe("minlength", function(value) {
                                    minlength = toInt(value) || 0,
                                    ctrl.$validate()
                                }),
                                ctrl.$validators.minlength = function(modelValue, viewValue) {
                                    return ctrl.$isEmpty(viewValue) || viewValue.length >= minlength
                                }
                            }
                        }
                    }
                };
                if (window.angular.bootstrap)
                    return void window.console;
                !function() {
                    var originalCleanData;
                    if (!bindJQueryFired) {
                        var jqName = jq();
                        jQuery = isUndefined(jqName) ? __webpack_provided_window_dot_jQuery : jqName ? window[jqName] : void 0,
                        jQuery && jQuery.fn.on ? (jqLite = jQuery,
                        extend(jQuery.fn, {
                            scope: JQLitePrototype.scope,
                            isolateScope: JQLitePrototype.isolateScope,
                            controller: JQLitePrototype.controller,
                            injector: JQLitePrototype.injector,
                            inheritedData: JQLitePrototype.inheritedData
                        }),
                        originalCleanData = jQuery.cleanData,
                        jQuery.cleanData = function(elems) {
                            for (var events, elem, i = 0; null != (elem = elems[i]); i++)
                                (events = jQuery._data(elem, "events")) && events.$destroy && jQuery(elem).triggerHandler("$destroy");
                            originalCleanData(elems)
                        }
                        ) : jqLite = JQLite,
                        angular.element = jqLite,
                        bindJQueryFired = !0
                    }
                }(),
                function(angular) {
                    extend(angular, {
                        errorHandlingConfig: errorHandlingConfig,
                        bootstrap: bootstrap,
                        copy: copy,
                        extend: extend,
                        merge: merge,
                        equals: equals,
                        element: jqLite,
                        forEach: forEach,
                        injector: createInjector,
                        noop: noop,
                        bind: bind,
                        toJson: toJson,
                        fromJson: fromJson,
                        identity: identity,
                        isUndefined: isUndefined,
                        isDefined: isDefined,
                        isString: isString,
                        isFunction: isFunction,
                        isObject: isObject,
                        isNumber: isNumber,
                        isElement: isElement,
                        isArray: isArray,
                        version: version,
                        isDate: isDate,
                        lowercase: lowercase,
                        uppercase: uppercase,
                        callbacks: {
                            $$counter: 0
                        },
                        getTestability: getTestability,
                        reloadWithDebugInfo: reloadWithDebugInfo,
                        $$minErr: minErr,
                        $$csp: csp,
                        $$encodeUriSegment: encodeUriSegment,
                        $$encodeUriQuery: encodeUriQuery,
                        $$stringify: stringify
                    }),
                    angularModule = setupModuleLoader(window),
                    angularModule("ng", ["ngLocale"], ["$provide", function($provide) {
                        $provide.provider({
                            $$sanitizeUri: $$SanitizeUriProvider
                        }),
                        $provide.provider("$compile", $CompileProvider).directive({
                            a: htmlAnchorDirective,
                            input: inputDirective,
                            textarea: inputDirective,
                            form: formDirective,
                            script: scriptDirective,
                            select: selectDirective,
                            option: optionDirective,
                            ngBind: ngBindDirective,
                            ngBindHtml: ngBindHtmlDirective,
                            ngBindTemplate: ngBindTemplateDirective,
                            ngClass: ngClassDirective,
                            ngClassEven: ngClassEvenDirective,
                            ngClassOdd: ngClassOddDirective,
                            ngCloak: ngCloakDirective,
                            ngController: ngControllerDirective,
                            ngForm: ngFormDirective,
                            ngHide: ngHideDirective,
                            ngIf: ngIfDirective,
                            ngInclude: ngIncludeDirective,
                            ngInit: ngInitDirective,
                            ngNonBindable: ngNonBindableDirective,
                            ngPluralize: ngPluralizeDirective,
                            ngRepeat: ngRepeatDirective,
                            ngShow: ngShowDirective,
                            ngStyle: ngStyleDirective,
                            ngSwitch: ngSwitchDirective,
                            ngSwitchWhen: ngSwitchWhenDirective,
                            ngSwitchDefault: ngSwitchDefaultDirective,
                            ngOptions: ngOptionsDirective,
                            ngTransclude: ngTranscludeDirective,
                            ngModel: ngModelDirective,
                            ngList: ngListDirective,
                            ngChange: ngChangeDirective,
                            pattern: patternDirective,
                            ngPattern: patternDirective,
                            required: requiredDirective,
                            ngRequired: requiredDirective,
                            minlength: minlengthDirective,
                            ngMinlength: minlengthDirective,
                            maxlength: maxlengthDirective,
                            ngMaxlength: maxlengthDirective,
                            ngValue: ngValueDirective,
                            ngModelOptions: ngModelOptionsDirective
                        }).directive({
                            ngInclude: ngIncludeFillContentDirective
                        }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives),
                        $provide.provider({
                            $anchorScroll: $AnchorScrollProvider,
                            $animate: $AnimateProvider,
                            $animateCss: $CoreAnimateCssProvider,
                            $$animateJs: $$CoreAnimateJsProvider,
                            $$animateQueue: $$CoreAnimateQueueProvider,
                            $$AnimateRunner: $$AnimateRunnerFactoryProvider,
                            $$animateAsyncRun: $$AnimateAsyncRunFactoryProvider,
                            $browser: $BrowserProvider,
                            $cacheFactory: $CacheFactoryProvider,
                            $controller: $ControllerProvider,
                            $document: $DocumentProvider,
                            $$isDocumentHidden: $$IsDocumentHiddenProvider,
                            $exceptionHandler: $ExceptionHandlerProvider,
                            $filter: $FilterProvider,
                            $$forceReflow: $$ForceReflowProvider,
                            $interpolate: $InterpolateProvider,
                            $interval: $IntervalProvider,
                            $http: $HttpProvider,
                            $httpParamSerializer: $HttpParamSerializerProvider,
                            $httpParamSerializerJQLike: $HttpParamSerializerJQLikeProvider,
                            $httpBackend: $HttpBackendProvider,
                            $xhrFactory: $xhrFactoryProvider,
                            $jsonpCallbacks: $jsonpCallbacksProvider,
                            $location: $LocationProvider,
                            $log: $LogProvider,
                            $parse: $ParseProvider,
                            $rootScope: $RootScopeProvider,
                            $q: $QProvider,
                            $$q: $$QProvider,
                            $sce: $SceProvider,
                            $sceDelegate: $SceDelegateProvider,
                            $sniffer: $SnifferProvider,
                            $templateCache: $TemplateCacheProvider,
                            $templateRequest: $TemplateRequestProvider,
                            $$testability: $$TestabilityProvider,
                            $timeout: $TimeoutProvider,
                            $window: $WindowProvider,
                            $$rAF: $$RAFProvider,
                            $$jqLite: $$jqLiteProvider,
                            $$Map: $$MapProvider,
                            $$cookieReader: $$CookieReaderProvider
                        })
                    }
                    ]).info({
                        angularVersion: "1.6.5"
                    })
                }(angular),
                angular.module("ngLocale", [], ["$provide", function($provide) {
                    function getDecimals(n) {
                        n += "";
                        var i = n.indexOf(".");
                        return -1 == i ? 0 : n.length - i - 1
                    }
                    function getVF(n, opt_precision) {
                        var v = opt_precision;
                        void 0 === v && (v = Math.min(getDecimals(n), 3));
                        var base = Math.pow(10, v);
                        return {
                            v: v,
                            f: (n * base | 0) % base
                        }
                    }
                    var PLURAL_CATEGORY = {
                        ZERO: "zero",
                        ONE: "one",
                        TWO: "two",
                        FEW: "few",
                        MANY: "many",
                        OTHER: "other"
                    };
                    $provide.value("$locale", {
                        DATETIME_FORMATS: {
                            AMPMS: ["AM", "PM"],
                            DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            ERANAMES: ["Before Christ", "Anno Domini"],
                            ERAS: ["BC", "AD"],
                            FIRSTDAYOFWEEK: 6,
                            MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            WEEKENDRANGE: [5, 6],
                            fullDate: "EEEE, MMMM d, y",
                            longDate: "MMMM d, y",
                            medium: "MMM d, y h:mm:ss a",
                            mediumDate: "MMM d, y",
                            mediumTime: "h:mm:ss a",
                            short: "M/d/yy h:mm a",
                            shortDate: "M/d/yy",
                            shortTime: "h:mm a"
                        },
                        NUMBER_FORMATS: {
                            CURRENCY_SYM: "$",
                            DECIMAL_SEP: ".",
                            GROUP_SEP: ",",
                            PATTERNS: [{
                                gSize: 3,
                                lgSize: 3,
                                maxFrac: 3,
                                minFrac: 0,
                                minInt: 1,
                                negPre: "-",
                                negSuf: "",
                                posPre: "",
                                posSuf: ""
                            }, {
                                gSize: 3,
                                lgSize: 3,
                                maxFrac: 2,
                                minFrac: 2,
                                minInt: 1,
                                negPre: "-¤",
                                negSuf: "",
                                posPre: "¤",
                                posSuf: ""
                            }]
                        },
                        id: "en-us",
                        localeID: "en_US",
                        pluralCat: function(n, opt_precision) {
                            var i = 0 | n
                              , vf = getVF(n, opt_precision);
                            return 1 == i && 0 == vf.v ? PLURAL_CATEGORY.ONE : PLURAL_CATEGORY.OTHER
                        }
                    })
                }
                ]),
                jqLite(function() {
                    angularInit(window.document, bootstrap)
                })
            }(window),
            !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
        }
        ).call(exports, __webpack_require__(9))
    },
    171: function(module, exports, __webpack_require__) {
        (function(global) {
            module.exports = global.jQuery = __webpack_require__(172)
        }
        ).call(exports, __webpack_require__(55))
    },
    172: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !function(global, factory) {
            "use strict";
            "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
                if (!w.document)
                    throw new Error("jQuery requires a window with a document");
                return factory(w)
            }
            : factory(global)
        }("undefined" != typeof window ? window : this, function(window, noGlobal) {
            "use strict";
            function DOMEval(code, doc) {
                doc = doc || document;
                var script = doc.createElement("script");
                script.text = code,
                doc.head.appendChild(script).parentNode.removeChild(script)
            }
            function isArrayLike(obj) {
                var length = !!obj && "length"in obj && obj.length
                  , type = jQuery.type(obj);
                return "function" !== type && !jQuery.isWindow(obj) && ("array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj)
            }
            function nodeName(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
            }
            function winnow(elements, qualifier, not) {
                return jQuery.isFunction(qualifier) ? jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not
                }) : qualifier.nodeType ? jQuery.grep(elements, function(elem) {
                    return elem === qualifier !== not
                }) : "string" != typeof qualifier ? jQuery.grep(elements, function(elem) {
                    return indexOf.call(qualifier, elem) > -1 !== not
                }) : risSimple.test(qualifier) ? jQuery.filter(qualifier, elements, not) : (qualifier = jQuery.filter(qualifier, elements),
                jQuery.grep(elements, function(elem) {
                    return indexOf.call(qualifier, elem) > -1 !== not && 1 === elem.nodeType
                }))
            }
            function sibling(cur, dir) {
                for (; (cur = cur[dir]) && 1 !== cur.nodeType; )
                    ;
                return cur
            }
            function createOptions(options) {
                var object = {};
                return jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                    object[flag] = !0
                }),
                object
            }
            function Identity(v) {
                return v
            }
            function Thrower(ex) {
                throw ex
            }
            function adoptValue(value, resolve, reject, noValue) {
                var method;
                try {
                    value && jQuery.isFunction(method = value.promise) ? method.call(value).done(resolve).fail(reject) : value && jQuery.isFunction(method = value.then) ? method.call(value, resolve, reject) : resolve.apply(void 0, [value].slice(noValue))
                } catch (value) {
                    reject.apply(void 0, [value])
                }
            }
            function completed() {
                document.removeEventListener("DOMContentLoaded", completed),
                window.removeEventListener("load", completed),
                jQuery.ready()
            }
            function Data() {
                this.expando = jQuery.expando + Data.uid++
            }
            function getData(data) {
                return "true" === data || "false" !== data && ("null" === data ? null : data === +data + "" ? +data : rbrace.test(data) ? JSON.parse(data) : data)
            }
            function dataAttr(elem, key, data) {
                var name;
                if (void 0 === data && 1 === elem.nodeType)
                    if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(),
                    "string" == typeof (data = elem.getAttribute(name))) {
                        try {
                            data = getData(data)
                        } catch (e) {}
                        dataUser.set(elem, key, data)
                    } else
                        data = void 0;
                return data
            }
            function adjustCSS(elem, prop, valueParts, tween) {
                var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
                    return tween.cur()
                }
                : function() {
                    return jQuery.css(elem, prop, "")
                }
                , initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                if (initialInUnit && initialInUnit[3] !== unit) {
                    unit = unit || initialInUnit[3],
                    valueParts = valueParts || [],
                    initialInUnit = +initial || 1;
                    do {
                        scale = scale || ".5",
                        initialInUnit /= scale,
                        jQuery.style(elem, prop, initialInUnit + unit)
                    } while (scale !== (scale = currentValue() / initial) && 1 !== scale && --maxIterations)
                }
                return valueParts && (initialInUnit = +initialInUnit || +initial || 0,
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2],
                tween && (tween.unit = unit,
                tween.start = initialInUnit,
                tween.end = adjusted)),
                adjusted
            }
            function getDefaultDisplay(elem) {
                var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                return display || (temp = doc.body.appendChild(doc.createElement(nodeName)),
                display = jQuery.css(temp, "display"),
                temp.parentNode.removeChild(temp),
                "none" === display && (display = "block"),
                defaultDisplayMap[nodeName] = display,
                display)
            }
            function showHide(elements, show) {
                for (var display, elem, values = [], index = 0, length = elements.length; index < length; index++)
                    elem = elements[index],
                    elem.style && (display = elem.style.display,
                    show ? ("none" === display && (values[index] = dataPriv.get(elem, "display") || null,
                    values[index] || (elem.style.display = "")),
                    "" === elem.style.display && isHiddenWithinTree(elem) && (values[index] = getDefaultDisplay(elem))) : "none" !== display && (values[index] = "none",
                    dataPriv.set(elem, "display", display)));
                for (index = 0; index < length; index++)
                    null != values[index] && (elements[index].style.display = values[index]);
                return elements
            }
            function getAll(context, tag) {
                var ret;
                return ret = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [],
                void 0 === tag || tag && nodeName(context, tag) ? jQuery.merge([context], ret) : ret
            }
            function setGlobalEval(elems, refElements) {
                for (var i = 0, l = elems.length; i < l; i++)
                    dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
            }
            function buildFragment(elems, context, scripts, selection, ignored) {
                for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++)
                    if ((elem = elems[i]) || 0 === elem)
                        if ("object" === jQuery.type(elem))
                            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                        else if (rhtml.test(elem)) {
                            for (tmp = tmp || fragment.appendChild(context.createElement("div")),
                            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(),
                            wrap = wrapMap[tag] || wrapMap._default,
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2],
                            j = wrap[0]; j--; )
                                tmp = tmp.lastChild;
                            jQuery.merge(nodes, tmp.childNodes),
                            tmp = fragment.firstChild,
                            tmp.textContent = ""
                        } else
                            nodes.push(context.createTextNode(elem));
                for (fragment.textContent = "",
                i = 0; elem = nodes[i++]; )
                    if (selection && jQuery.inArray(elem, selection) > -1)
                        ignored && ignored.push(elem);
                    else if (contains = jQuery.contains(elem.ownerDocument, elem),
                    tmp = getAll(fragment.appendChild(elem), "script"),
                    contains && setGlobalEval(tmp),
                    scripts)
                        for (j = 0; elem = tmp[j++]; )
                            rscriptType.test(elem.type || "") && scripts.push(elem);
                return fragment
            }
            function returnTrue() {
                return !0
            }
            function returnFalse() {
                return !1
            }
            function safeActiveElement() {
                try {
                    return document.activeElement
                } catch (err) {}
            }
            function on(elem, types, selector, data, fn, one) {
                var origFn, type;
                if ("object" == typeof types) {
                    "string" != typeof selector && (data = data || selector,
                    selector = void 0);
                    for (type in types)
                        on(elem, type, selector, data, types[type], one);
                    return elem
                }
                if (null == data && null == fn ? (fn = selector,
                data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data,
                data = void 0) : (fn = data,
                data = selector,
                selector = void 0)),
                !1 === fn)
                    fn = returnFalse;
                else if (!fn)
                    return elem;
                return 1 === one && (origFn = fn,
                fn = function(event) {
                    return jQuery().off(event),
                    origFn.apply(this, arguments)
                }
                ,
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)),
                elem.each(function() {
                    jQuery.event.add(this, types, fn, data, selector)
                })
            }
            function manipulationTarget(elem, content) {
                return nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? jQuery(">tbody", elem)[0] || elem : elem
            }
            function disableScript(elem) {
                return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type,
                elem
            }
            function restoreScript(elem) {
                var match = rscriptTypeMasked.exec(elem.type);
                return match ? elem.type = match[1] : elem.removeAttribute("type"),
                elem
            }
            function cloneCopyEvent(src, dest) {
                var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
                if (1 === dest.nodeType) {
                    if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src),
                    pdataCur = dataPriv.set(dest, pdataOld),
                    events = pdataOld.events)) {
                        delete pdataCur.handle,
                        pdataCur.events = {};
                        for (type in events)
                            for (i = 0,
                            l = events[type].length; i < l; i++)
                                jQuery.event.add(dest, type, events[type][i])
                    }
                    dataUser.hasData(src) && (udataOld = dataUser.access(src),
                    udataCur = jQuery.extend({}, udataOld),
                    dataUser.set(dest, udataCur))
                }
            }
            function fixInput(src, dest) {
                var nodeName = dest.nodeName.toLowerCase();
                "input" === nodeName && rcheckableType.test(src.type) ? dest.checked = src.checked : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue)
            }
            function domManip(collection, args, callback, ignored) {
                args = concat.apply([], args);
                var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
                if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value))
                    return collection.each(function(index) {
                        var self = collection.eq(index);
                        isFunction && (args[0] = value.call(this, index, self.html())),
                        domManip(self, args, callback, ignored)
                    });
                if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored),
                first = fragment.firstChild,
                1 === fragment.childNodes.length && (fragment = first),
                first || ignored)) {
                    for (scripts = jQuery.map(getAll(fragment, "script"), disableScript),
                    hasScripts = scripts.length; i < l; i++)
                        node = fragment,
                        i !== iNoClone && (node = jQuery.clone(node, !0, !0),
                        hasScripts && jQuery.merge(scripts, getAll(node, "script"))),
                        callback.call(collection[i], node, i);
                    if (hasScripts)
                        for (doc = scripts[scripts.length - 1].ownerDocument,
                        jQuery.map(scripts, restoreScript),
                        i = 0; i < hasScripts; i++)
                            node = scripts[i],
                            rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : DOMEval(node.textContent.replace(rcleanScript, ""), doc))
                }
                return collection
            }
            function remove(elem, selector, keepData) {
                for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = nodes[i]); i++)
                    keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)),
                    node.parentNode && (keepData && jQuery.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, "script")),
                    node.parentNode.removeChild(node));
                return elem
            }
            function curCSS(elem, name, computed) {
                var width, minWidth, maxWidth, ret, style = elem.style;
                return computed = computed || getStyles(elem),
                computed && (ret = computed.getPropertyValue(name) || computed[name],
                "" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)),
                !support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width,
                minWidth = style.minWidth,
                maxWidth = style.maxWidth,
                style.minWidth = style.maxWidth = style.width = ret,
                ret = computed.width,
                style.width = width,
                style.minWidth = minWidth,
                style.maxWidth = maxWidth)),
                void 0 !== ret ? ret + "" : ret
            }
            function addGetHookIf(conditionFn, hookFn) {
                return {
                    get: function() {
                        return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments)
                    }
                }
            }
            function vendorPropName(name) {
                if (name in emptyStyle)
                    return name;
                for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--; )
                    if ((name = cssPrefixes[i] + capName)in emptyStyle)
                        return name
            }
            function finalPropName(name) {
                var ret = jQuery.cssProps[name];
                return ret || (ret = jQuery.cssProps[name] = vendorPropName(name) || name),
                ret
            }
            function setPositiveNumber(elem, value, subtract) {
                var matches = rcssNum.exec(value);
                return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
            }
            function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
                var i, val = 0;
                for (i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0; i < 4; i += 2)
                    "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)),
                    isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)),
                    "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles),
                    "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
                return val
            }
            function getWidthOrHeight(elem, name, extra) {
                var valueIsBorderBox, styles = getStyles(elem), val = curCSS(elem, name, styles), isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
                return rnumnonpx.test(val) ? val : (valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]),
                "auto" === val && (val = elem["offset" + name[0].toUpperCase() + name.slice(1)]),
                (val = parseFloat(val) || 0) + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px")
            }
            function Tween(elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem,options,prop,end,easing)
            }
            function schedule() {
                inProgress && (!1 === document.hidden && window.requestAnimationFrame ? window.requestAnimationFrame(schedule) : window.setTimeout(schedule, jQuery.fx.interval),
                jQuery.fx.tick())
            }
            function createFxNow() {
                return window.setTimeout(function() {
                    fxNow = void 0
                }),
                fxNow = jQuery.now()
            }
            function genFx(type, includeWidth) {
                var which, i = 0, attrs = {
                    height: type
                };
                for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth)
                    which = cssExpand[i],
                    attrs["margin" + which] = attrs["padding" + which] = type;
                return includeWidth && (attrs.opacity = attrs.width = type),
                attrs
            }
            function createTween(value, prop, animation) {
                for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++)
                    if (tween = collection[index].call(animation, prop, value))
                        return tween
            }
            function defaultPrefilter(elem, props, opts) {
                var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width"in props || "height"in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                opts.queue || (hooks = jQuery._queueHooks(elem, "fx"),
                null == hooks.unqueued && (hooks.unqueued = 0,
                oldfire = hooks.empty.fire,
                hooks.empty.fire = function() {
                    hooks.unqueued || oldfire()
                }
                ),
                hooks.unqueued++,
                anim.always(function() {
                    anim.always(function() {
                        hooks.unqueued--,
                        jQuery.queue(elem, "fx").length || hooks.empty.fire()
                    })
                }));
                for (prop in props)
                    if (value = props[prop],
                    rfxtypes.test(value)) {
                        if (delete props[prop],
                        toggle = toggle || "toggle" === value,
                        value === (hidden ? "hide" : "show")) {
                            if ("show" !== value || !dataShow || void 0 === dataShow[prop])
                                continue;
                            hidden = !0
                        }
                        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                    }
                if ((propTween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) {
                    isBox && 1 === elem.nodeType && (opts.overflow = [style.overflow, style.overflowX, style.overflowY],
                    restoreDisplay = dataShow && dataShow.display,
                    null == restoreDisplay && (restoreDisplay = dataPriv.get(elem, "display")),
                    display = jQuery.css(elem, "display"),
                    "none" === display && (restoreDisplay ? display = restoreDisplay : (showHide([elem], !0),
                    restoreDisplay = elem.style.display || restoreDisplay,
                    display = jQuery.css(elem, "display"),
                    showHide([elem]))),
                    ("inline" === display || "inline-block" === display && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (propTween || (anim.done(function() {
                        style.display = restoreDisplay
                    }),
                    null == restoreDisplay && (display = style.display,
                    restoreDisplay = "none" === display ? "" : display)),
                    style.display = "inline-block")),
                    opts.overflow && (style.overflow = "hidden",
                    anim.always(function() {
                        style.overflow = opts.overflow[0],
                        style.overflowX = opts.overflow[1],
                        style.overflowY = opts.overflow[2]
                    })),
                    propTween = !1;
                    for (prop in orig)
                        propTween || (dataShow ? "hidden"in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", {
                            display: restoreDisplay
                        }),
                        toggle && (dataShow.hidden = !hidden),
                        hidden && showHide([elem], !0),
                        anim.done(function() {
                            hidden || showHide([elem]),
                            dataPriv.remove(elem, "fxshow");
                            for (prop in orig)
                                jQuery.style(elem, prop, orig[prop])
                        })),
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim),
                        prop in dataShow || (dataShow[prop] = propTween.start,
                        hidden && (propTween.end = propTween.start,
                        propTween.start = 0))
                }
            }
            function propFilter(props, specialEasing) {
                var index, name, easing, value, hooks;
                for (index in props)
                    if (name = jQuery.camelCase(index),
                    easing = specialEasing[name],
                    value = props[index],
                    Array.isArray(value) && (easing = value[1],
                    value = props[index] = value[0]),
                    index !== name && (props[name] = value,
                    delete props[index]),
                    (hooks = jQuery.cssHooks[name]) && "expand"in hooks) {
                        value = hooks.expand(value),
                        delete props[name];
                        for (index in value)
                            index in props || (props[index] = value[index],
                            specialEasing[index] = easing)
                    } else
                        specialEasing[name] = easing
            }
            function Animation(elem, properties, options) {
                var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
                    delete tick.elem
                }), tick = function() {
                    if (stopped)
                        return !1;
                    for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; index < length; index++)
                        animation.tweens[index].run(percent);
                    return deferred.notifyWith(elem, [animation, percent, remaining]),
                    percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]),
                    deferred.resolveWith(elem, [animation]),
                    !1)
                }, animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(!0, {
                        specialEasing: {},
                        easing: jQuery.easing._default
                    }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        return animation.tweens.push(tween),
                        tween
                    },
                    stop: function(gotoEnd) {
                        var index = 0
                          , length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped)
                            return this;
                        for (stopped = !0; index < length; index++)
                            animation.tweens[index].run(1);
                        return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]),
                        deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]),
                        this
                    }
                }), props = animation.props;
                for (propFilter(props, animation.opts.specialEasing); index < length; index++)
                    if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts))
                        return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)),
                        result;
                return jQuery.map(props, createTween, animation),
                jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation),
                animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always),
                jQuery.fx.timer(jQuery.extend(tick, {
                    elem: elem,
                    anim: animation,
                    queue: animation.opts.queue
                })),
                animation
            }
            function stripAndCollapse(value) {
                return (value.match(rnothtmlwhite) || []).join(" ")
            }
            function getClass(elem) {
                return elem.getAttribute && elem.getAttribute("class") || ""
            }
            function buildParams(prefix, obj, traditional, add) {
                var name;
                if (Array.isArray(obj))
                    jQuery.each(obj, function(i, v) {
                        traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add)
                    });
                else if (traditional || "object" !== jQuery.type(obj))
                    add(prefix, obj);
                else
                    for (name in obj)
                        buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
            }
            function addToPrefiltersOrTransports(structure) {
                return function(dataTypeExpression, func) {
                    "string" != typeof dataTypeExpression && (func = dataTypeExpression,
                    dataTypeExpression = "*");
                    var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                    if (jQuery.isFunction(func))
                        for (; dataType = dataTypes[i++]; )
                            "+" === dataType[0] ? (dataType = dataType.slice(1) || "*",
                            (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
                }
            }
            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                function inspect(dataType) {
                    var selected;
                    return inspected[dataType] = !0,
                    jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                        return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport),
                        inspect(dataTypeOrTransport),
                        !1)
                    }),
                    selected
                }
                var inspected = {}
                  , seekingTransport = structure === transports;
                return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
            }
            function ajaxExtend(target, src) {
                var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                for (key in src)
                    void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
                return deep && jQuery.extend(!0, target, deep),
                target
            }
            function ajaxHandleResponses(s, jqXHR, responses) {
                for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0]; )
                    dataTypes.shift(),
                    void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
                if (ct)
                    for (type in contents)
                        if (contents[type] && contents[type].test(ct)) {
                            dataTypes.unshift(type);
                            break
                        }
                if (dataTypes[0]in responses)
                    finalDataType = dataTypes[0];
                else {
                    for (type in responses) {
                        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                            finalDataType = type;
                            break
                        }
                        firstDataType || (firstDataType = type)
                    }
                    finalDataType = finalDataType || firstDataType
                }
                if (finalDataType)
                    return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType),
                    responses[finalDataType]
            }
            function ajaxConvert(s, response, jqXHR, isSuccess) {
                var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                if (dataTypes[1])
                    for (conv in s.converters)
                        converters[conv.toLowerCase()] = s.converters[conv];
                for (current = dataTypes.shift(); current; )
                    if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response),
                    !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)),
                    prev = current,
                    current = dataTypes.shift())
                        if ("*" === current)
                            current = prev;
                        else if ("*" !== prev && prev !== current) {
                            if (!(conv = converters[prev + " " + current] || converters["* " + current]))
                                for (conv2 in converters)
                                    if (tmp = conv2.split(" "),
                                    tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                                        !0 === conv ? conv = converters[conv2] : !0 !== converters[conv2] && (current = tmp[0],
                                        dataTypes.unshift(tmp[1]));
                                        break
                                    }
                            if (!0 !== conv)
                                if (conv && s.throws)
                                    response = conv(response);
                                else
                                    try {
                                        response = conv(response)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: conv ? e : "No conversion from " + prev + " to " + current
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: response
                }
            }
            var arr = []
              , document = window.document
              , getProto = Object.getPrototypeOf
              , slice = arr.slice
              , concat = arr.concat
              , push = arr.push
              , indexOf = arr.indexOf
              , class2type = {}
              , toString = class2type.toString
              , hasOwn = class2type.hasOwnProperty
              , fnToString = hasOwn.toString
              , ObjectFunctionString = fnToString.call(Object)
              , support = {}
              , jQuery = function(selector, context) {
                return new jQuery.fn.init(selector,context)
            }
              , rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , rmsPrefix = /^-ms-/
              , rdashAlpha = /-([a-z])/g
              , fcamelCase = function(all, letter) {
                return letter.toUpperCase()
            };
            jQuery.fn = jQuery.prototype = {
                jquery: "3.2.1",
                constructor: jQuery,
                length: 0,
                toArray: function() {
                    return slice.call(this)
                },
                get: function(num) {
                    return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num]
                },
                pushStack: function(elems) {
                    var ret = jQuery.merge(this.constructor(), elems);
                    return ret.prevObject = this,
                    ret
                },
                each: function(callback) {
                    return jQuery.each(this, callback)
                },
                map: function(callback) {
                    return this.pushStack(jQuery.map(this, function(elem, i) {
                        return callback.call(elem, i, elem)
                    }))
                },
                slice: function() {
                    return this.pushStack(slice.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(i) {
                    var len = this.length
                      , j = +i + (i < 0 ? len : 0);
                    return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: push,
                sort: arr.sort,
                splice: arr.splice
            },
            jQuery.extend = jQuery.fn.extend = function() {
                var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
                for ("boolean" == typeof target && (deep = target,
                target = arguments[i] || {},
                i++),
                "object" == typeof target || jQuery.isFunction(target) || (target = {}),
                i === length && (target = this,
                i--); i < length; i++)
                    if (null != (options = arguments[i]))
                        for (name in options)
                            src = target[name],
                            copy = options[name],
                            target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1,
                            clone = src && Array.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {},
                            target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
                return target
            }
            ,
            jQuery.extend({
                expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(msg) {
                    throw new Error(msg)
                },
                noop: function() {},
                isFunction: function(obj) {
                    return "function" === jQuery.type(obj)
                },
                isWindow: function(obj) {
                    return null != obj && obj === obj.window
                },
                isNumeric: function(obj) {
                    var type = jQuery.type(obj);
                    return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj))
                },
                isPlainObject: function(obj) {
                    var proto, Ctor;
                    return !(!obj || "[object Object]" !== toString.call(obj)) && (!(proto = getProto(obj)) || "function" == typeof (Ctor = hasOwn.call(proto, "constructor") && proto.constructor) && fnToString.call(Ctor) === ObjectFunctionString)
                },
                isEmptyObject: function(obj) {
                    var name;
                    for (name in obj)
                        return !1;
                    return !0
                },
                type: function(obj) {
                    return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj
                },
                globalEval: function(code) {
                    DOMEval(code)
                },
                camelCase: function(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
                },
                each: function(obj, callback) {
                    var length, i = 0;
                    if (isArrayLike(obj))
                        for (length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++)
                            ;
                    else
                        for (i in obj)
                            if (!1 === callback.call(obj[i], i, obj[i]))
                                break;
                    return obj
                },
                trim: function(text) {
                    return null == text ? "" : (text + "").replace(rtrim, "")
                },
                makeArray: function(arr, results) {
                    var ret = results || [];
                    return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)),
                    ret
                },
                inArray: function(elem, arr, i) {
                    return null == arr ? -1 : indexOf.call(arr, elem, i)
                },
                merge: function(first, second) {
                    for (var len = +second.length, j = 0, i = first.length; j < len; j++)
                        first[i++] = second[j];
                    return first.length = i,
                    first
                },
                grep: function(elems, callback, invert) {
                    for (var matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++)
                        !callback(elems[i], i) !== callbackExpect && matches.push(elems[i]);
                    return matches
                },
                map: function(elems, callback, arg) {
                    var length, value, i = 0, ret = [];
                    if (isArrayLike(elems))
                        for (length = elems.length; i < length; i++)
                            null != (value = callback(elems[i], i, arg)) && ret.push(value);
                    else
                        for (i in elems)
                            null != (value = callback(elems[i], i, arg)) && ret.push(value);
                    return concat.apply([], ret)
                },
                guid: 1,
                proxy: function(fn, context) {
                    var tmp, args, proxy;
                    if ("string" == typeof context && (tmp = fn[context],
                    context = fn,
                    fn = tmp),
                    jQuery.isFunction(fn))
                        return args = slice.call(arguments, 2),
                        proxy = function() {
                            return fn.apply(context || this, args.concat(slice.call(arguments)))
                        }
                        ,
                        proxy.guid = fn.guid = fn.guid || jQuery.guid++,
                        proxy
                },
                now: Date.now,
                support: support
            }),
            "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]),
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase()
            });
            var Sizzle = function(window) {
                function Sizzle(selector, context, results, seed) {
                    var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                    if (results = results || [],
                    "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType)
                        return results;
                    if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context),
                    context = context || document,
                    documentIsHTML)) {
                        if (11 !== nodeType && (match = rquickExpr.exec(selector)))
                            if (m = match[1]) {
                                if (9 === nodeType) {
                                    if (!(elem = context.getElementById(m)))
                                        return results;
                                    if (elem.id === m)
                                        return results.push(elem),
                                        results
                                } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m)
                                    return results.push(elem),
                                    results
                            } else {
                                if (match[2])
                                    return push.apply(results, context.getElementsByTagName(selector)),
                                    results;
                                if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName)
                                    return push.apply(results, context.getElementsByClassName(m)),
                                    results
                            }
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (1 !== nodeType)
                                newContext = context,
                                newSelector = selector;
                            else if ("object" !== context.nodeName.toLowerCase()) {
                                for ((nid = context.getAttribute("id")) ? nid = nid.replace(rcssescape, fcssescape) : context.setAttribute("id", nid = expando),
                                groups = tokenize(selector),
                                i = groups.length; i--; )
                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                newSelector = groups.join(","),
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context
                            }
                            if (newSelector)
                                try {
                                    return push.apply(results, newContext.querySelectorAll(newSelector)),
                                    results
                                } catch (qsaError) {} finally {
                                    nid === expando && context.removeAttribute("id")
                                }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed)
                }
                function createCache() {
                    function cache(key, value) {
                        return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()],
                        cache[key + " "] = value
                    }
                    var keys = [];
                    return cache
                }
                function markFunction(fn) {
                    return fn[expando] = !0,
                    fn
                }
                function assert(fn) {
                    var el = document.createElement("fieldset");
                    try {
                        return !!fn(el)
                    } catch (e) {
                        return !1
                    } finally {
                        el.parentNode && el.parentNode.removeChild(el),
                        el = null
                    }
                }
                function addHandle(attrs, handler) {
                    for (var arr = attrs.split("|"), i = arr.length; i--; )
                        Expr.attrHandle[arr[i]] = handler
                }
                function siblingCheck(a, b) {
                    var cur = b && a
                      , diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                    if (diff)
                        return diff;
                    if (cur)
                        for (; cur = cur.nextSibling; )
                            if (cur === b)
                                return -1;
                    return a ? 1 : -1
                }
                function createDisabledPseudo(disabled) {
                    return function(elem) {
                        return "form"in elem ? elem.parentNode && !1 === elem.disabled ? "label"in elem ? "label"in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label"in elem && elem.disabled === disabled
                    }
                }
                function createPositionalPseudo(fn) {
                    return markFunction(function(argument) {
                        return argument = +argument,
                        markFunction(function(seed, matches) {
                            for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--; )
                                seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]))
                        })
                    })
                }
                function testContext(context) {
                    return context && void 0 !== context.getElementsByTagName && context
                }
                function setFilters() {}
                function toSelector(tokens) {
                    for (var i = 0, len = tokens.length, selector = ""; i < len; i++)
                        selector += tokens[i].value;
                    return selector
                }
                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir
                      , skip = combinator.next
                      , key = skip || dir
                      , checkNonElements = base && "parentNode" === key
                      , doneName = done++;
                    return combinator.first ? function(elem, context, xml) {
                        for (; elem = elem[dir]; )
                            if (1 === elem.nodeType || checkNonElements)
                                return matcher(elem, context, xml);
                        return !1
                    }
                    : function(elem, context, xml) {
                        var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                        if (xml) {
                            for (; elem = elem[dir]; )
                                if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml))
                                    return !0
                        } else
                            for (; elem = elem[dir]; )
                                if (1 === elem.nodeType || checkNonElements)
                                    if (outerCache = elem[expando] || (elem[expando] = {}),
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}),
                                    skip && skip === elem.nodeName.toLowerCase())
                                        elem = elem[dir] || elem;
                                    else {
                                        if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName)
                                            return newCache[2] = oldCache[2];
                                        if (uniqueCache[key] = newCache,
                                        newCache[2] = matcher(elem, context, xml))
                                            return !0
                                    }
                        return !1
                    }
                }
                function elementMatcher(matchers) {
                    return matchers.length > 1 ? function(elem, context, xml) {
                        for (var i = matchers.length; i--; )
                            if (!matchers[i](elem, context, xml))
                                return !1;
                        return !0
                    }
                    : matchers[0]
                }
                function multipleContexts(selector, contexts, results) {
                    for (var i = 0, len = contexts.length; i < len; i++)
                        Sizzle(selector, contexts[i], results);
                    return results
                }
                function condense(unmatched, map, filter, context, xml) {
                    for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++)
                        (elem = unmatched[i]) && (filter && !filter(elem, context, xml) || (newUnmatched.push(elem),
                        mapped && map.push(i)));
                    return newUnmatched
                }
                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)),
                    postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)),
                    markFunction(function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml), matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher && matcher(matcherIn, matcherOut, context, xml),
                        postFilter)
                            for (temp = condense(matcherOut, postMap),
                            postFilter(temp, [], context, xml),
                            i = temp.length; i--; )
                                (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    for (temp = [],
                                    i = matcherOut.length; i--; )
                                        (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                                    postFinder(null, matcherOut = [], temp, xml)
                                }
                                for (i = matcherOut.length; i--; )
                                    (elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem))
                            }
                        } else
                            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut),
                            postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
                    })
                }
                function matcherFromTokens(tokens) {
                    for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                        return elem === checkContext
                    }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                        return indexOf(checkContext, elem) > -1
                    }, implicitRelative, !0), matchers = [function(elem, context, xml) {
                        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                        return checkContext = null,
                        ret
                    }
                    ]; i < len; i++)
                        if (matcher = Expr.relative[tokens[i].type])
                            matchers = [addCombinator(elementMatcher(matchers), matcher)];
                        else {
                            if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches),
                            matcher[expando]) {
                                for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++)
                                    ;
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: " " === tokens[i - 2].type ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                            }
                            matchers.push(matcher)
                        }
                    return elementMatcher(matchers)
                }
                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var bySet = setMatchers.length > 0
                      , byElement = elementMatchers.length > 0
                      , superMatcher = function(seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                        for (outermost && (outermostContext = context === document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                            if (byElement && elem) {
                                for (j = 0,
                                context || elem.ownerDocument === document || (setDocument(elem),
                                xml = !documentIsHTML); matcher = elementMatchers[j++]; )
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break
                                    }
                                outermost && (dirruns = dirrunsUnique)
                            }
                            bySet && ((elem = !matcher && elem) && matchedCount--,
                            seed && unmatched.push(elem))
                        }
                        if (matchedCount += i,
                        bySet && i !== matchedCount) {
                            for (j = 0; matcher = setMatchers[j++]; )
                                matcher(unmatched, setMatched, context, xml);
                            if (seed) {
                                if (matchedCount > 0)
                                    for (; i--; )
                                        unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                setMatched = condense(setMatched)
                            }
                            push.apply(results, setMatched),
                            outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results)
                        }
                        return outermost && (dirruns = dirrunsUnique,
                        outermostContext = contextBackup),
                        unmatched
                    };
                    return bySet ? markFunction(superMatcher) : superMatcher
                }
                var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
                    return a === b && (hasDuplicate = !0),
                    0
                }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                    for (var i = 0, len = list.length; i < len; i++)
                        if (list[i] === elem)
                            return i;
                    return -1
                }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+","g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]","g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                    ID: new RegExp("^#(" + identifier + ")"),
                    CLASS: new RegExp("^\\.(" + identifier + ")"),
                    TAG: new RegExp("^(" + identifier + "|[*])"),
                    ATTR: new RegExp("^" + attributes),
                    PSEUDO: new RegExp("^" + pseudos),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + booleans + ")$","i"),
                    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)","i")
                }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)","ig"), funescape = function(_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 65536;
                    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
                }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                    return asCodePoint ? "\0" === ch ? "�" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch
                }, unloadHandler = function() {
                    setDocument()
                }, disabledAncestor = addCombinator(function(elem) {
                    return !0 === elem.disabled && ("form"in elem || "label"in elem)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes),
                    arr[preferredDoc.childNodes.length].nodeType
                } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) {
                            push_native.apply(target, slice.call(els))
                        }
                        : function(target, els) {
                            for (var j = target.length, i = 0; target[j++] = els[i++]; )
                                ;
                            target.length = j - 1
                        }
                    }
                }
                support = Sizzle.support = {},
                isXML = Sizzle.isXML = function(elem) {
                    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                    return !!documentElement && "HTML" !== documentElement.nodeName
                }
                ,
                setDocument = Sizzle.setDocument = function(node) {
                    var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                    return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc,
                    docElem = document.documentElement,
                    documentIsHTML = !isXML(document),
                    preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, !1) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)),
                    support.attributes = assert(function(el) {
                        return el.className = "i",
                        !el.getAttribute("className")
                    }),
                    support.getElementsByTagName = assert(function(el) {
                        return el.appendChild(document.createComment("")),
                        !el.getElementsByTagName("*").length
                    }),
                    support.getElementsByClassName = rnative.test(document.getElementsByClassName),
                    support.getById = assert(function(el) {
                        return docElem.appendChild(el).id = expando,
                        !document.getElementsByName || !document.getElementsByName(expando).length
                    }),
                    support.getById ? (Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    }
                    ,
                    Expr.find.ID = function(id, context) {
                        if (void 0 !== context.getElementById && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [elem] : []
                        }
                    }
                    ) : (Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    }
                    ,
                    Expr.find.ID = function(id, context) {
                        if (void 0 !== context.getElementById && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) {
                                if ((node = elem.getAttributeNode("id")) && node.value === id)
                                    return [elem];
                                for (elems = context.getElementsByName(id),
                                i = 0; elem = elems[i++]; )
                                    if ((node = elem.getAttributeNode("id")) && node.value === id)
                                        return [elem]
                            }
                            return []
                        }
                    }
                    ),
                    Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                        return void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0
                    }
                    : function(tag, context) {
                        var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                        if ("*" === tag) {
                            for (; elem = results[i++]; )
                                1 === elem.nodeType && tmp.push(elem);
                            return tmp
                        }
                        return results
                    }
                    ,
                    Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                        if (void 0 !== context.getElementsByClassName && documentIsHTML)
                            return context.getElementsByClassName(className)
                    }
                    ,
                    rbuggyMatches = [],
                    rbuggyQSA = [],
                    (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(el) {
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        el.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"),
                        el.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"),
                        el.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="),
                        el.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"),
                        el.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]")
                    }),
                    assert(function(el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden"),
                        el.appendChild(input).setAttribute("name", "D"),
                        el.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="),
                        2 !== el.querySelectorAll(":enabled").length && rbuggyQSA.push(":enabled", ":disabled"),
                        docElem.appendChild(el).disabled = !0,
                        2 !== el.querySelectorAll(":disabled").length && rbuggyQSA.push(":enabled", ":disabled"),
                        el.querySelectorAll("*,:x"),
                        rbuggyQSA.push(",.*:")
                    })),
                    (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
                        support.disconnectedMatch = matches.call(el, "*"),
                        matches.call(el, "[s!='']:x"),
                        rbuggyMatches.push("!=", pseudos)
                    }),
                    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")),
                    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")),
                    hasCompare = rnative.test(docElem.compareDocumentPosition),
                    contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                        var adown = 9 === a.nodeType ? a.documentElement : a
                          , bup = b && b.parentNode;
                        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
                    }
                    : function(a, b) {
                        if (b)
                            for (; b = b.parentNode; )
                                if (b === a)
                                    return !0;
                        return !1
                    }
                    ,
                    sortOrder = hasCompare ? function(a, b) {
                        if (a === b)
                            return hasDuplicate = !0,
                            0;
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return compare || (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                        1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1)
                    }
                    : function(a, b) {
                        if (a === b)
                            return hasDuplicate = !0,
                            0;
                        var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                        if (!aup || !bup)
                            return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                        if (aup === bup)
                            return siblingCheck(a, b);
                        for (cur = a; cur = cur.parentNode; )
                            ap.unshift(cur);
                        for (cur = b; cur = cur.parentNode; )
                            bp.unshift(cur);
                        for (; ap[i] === bp[i]; )
                            i++;
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                    }
                    ,
                    document) : document
                }
                ,
                Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements)
                }
                ,
                Sizzle.matchesSelector = function(elem, expr) {
                    if ((elem.ownerDocument || elem) !== document && setDocument(elem),
                    expr = expr.replace(rattributeQuotes, "='$1']"),
                    support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr)))
                        try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType)
                                return ret
                        } catch (e) {}
                    return Sizzle(expr, document, null, [elem]).length > 0
                }
                ,
                Sizzle.contains = function(context, elem) {
                    return (context.ownerDocument || context) !== document && setDocument(context),
                    contains(context, elem)
                }
                ,
                Sizzle.attr = function(elem, name) {
                    (elem.ownerDocument || elem) !== document && setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()]
                      , val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }
                ,
                Sizzle.escape = function(sel) {
                    return (sel + "").replace(rcssescape, fcssescape)
                }
                ,
                Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg)
                }
                ,
                Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [], j = 0, i = 0;
                    if (hasDuplicate = !support.detectDuplicates,
                    sortInput = !support.sortStable && results.slice(0),
                    results.sort(sortOrder),
                    hasDuplicate) {
                        for (; elem = results[i++]; )
                            elem === results[i] && (j = duplicates.push(i));
                        for (; j--; )
                            results.splice(duplicates[j], 1)
                    }
                    return sortInput = null,
                    results
                }
                ,
                getText = Sizzle.getText = function(elem) {
                    var node, ret = "", i = 0, nodeType = elem.nodeType;
                    if (nodeType) {
                        if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                            if ("string" == typeof elem.textContent)
                                return elem.textContent;
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                                ret += getText(elem)
                        } else if (3 === nodeType || 4 === nodeType)
                            return elem.nodeValue
                    } else
                        for (; node = elem[i++]; )
                            ret += getText(node);
                    return ret
                }
                ,
                Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(match) {
                            return match[1] = match[1].replace(runescape, funescape),
                            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape),
                            "~=" === match[2] && (match[3] = " " + match[3] + " "),
                            match.slice(0, 4)
                        },
                        CHILD: function(match) {
                            return match[1] = match[1].toLowerCase(),
                            "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]),
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])),
                            match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]),
                            match
                        },
                        PSEUDO: function(match) {
                            var excess, unquoted = !match[6] && match[2];
                            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess),
                            match[2] = unquoted.slice(0, excess)),
                            match.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return "*" === nodeNameSelector ? function() {
                                return !0
                            }
                            : function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                            }
                        },
                        CLASS: function(className) {
                            var pattern = classCache[className + " "];
                            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                                return pattern.test("string" == typeof elem.className && elem.className || void 0 !== elem.getAttribute && elem.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                return null == result ? "!=" === operator : !operator || (result += "",
                                "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-"))
                            }
                        },
                        CHILD: function(type, what, argument, first, last) {
                            var simple = "nth" !== type.slice(0, 3)
                              , forward = "last" !== type.slice(-4)
                              , ofType = "of-type" === what;
                            return 1 === first && 0 === last ? function(elem) {
                                return !!elem.parentNode
                            }
                            : function(elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1;
                                if (parent) {
                                    if (simple) {
                                        for (; dir; ) {
                                            for (node = elem; node = node[dir]; )
                                                if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType)
                                                    return !1;
                                            start = dir = "only" === type && !start && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (start = [forward ? parent.firstChild : parent.lastChild],
                                    forward && useCache) {
                                        for (node = parent,
                                        outerCache = node[expando] || (node[expando] = {}),
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}),
                                        cache = uniqueCache[type] || [],
                                        nodeIndex = cache[0] === dirruns && cache[1],
                                        diff = nodeIndex && cache[2],
                                        node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop(); )
                                            if (1 === node.nodeType && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break
                                            }
                                    } else if (useCache && (node = elem,
                                    outerCache = node[expando] || (node[expando] = {}),
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}),
                                    cache = uniqueCache[type] || [],
                                    nodeIndex = cache[0] === dirruns && cache[1],
                                    diff = nodeIndex),
                                    !1 === diff)
                                        for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && (outerCache = node[expando] || (node[expando] = {}),
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}),
                                        uniqueCache[type] = [dirruns, diff]),
                                        node !== elem)); )
                                            ;
                                    return (diff -= last) === first || diff % first == 0 && diff / first >= 0
                                }
                            }
                        },
                        PSEUDO: function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument],
                            Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                for (var idx, matched = fn(seed, argument), i = matched.length; i--; )
                                    idx = indexOf(seed, matched[i]),
                                    seed[idx] = !(matches[idx] = matched[i])
                            }) : function(elem) {
                                return fn(elem, 0, args)
                            }
                            ) : fn
                        }
                    },
                    pseudos: {
                        not: markFunction(function(selector) {
                            var input = []
                              , results = []
                              , matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                                for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--; )
                                    (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem))
                            }) : function(elem, context, xml) {
                                return input[0] = elem,
                                matcher(input, null, xml, results),
                                input[0] = null,
                                !results.pop()
                            }
                        }),
                        has: markFunction(function(selector) {
                            return function(elem) {
                                return Sizzle(selector, elem).length > 0
                            }
                        }),
                        contains: markFunction(function(text) {
                            return text = text.replace(runescape, funescape),
                            function(elem) {
                                return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                            }
                        }),
                        lang: markFunction(function(lang) {
                            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang),
                            lang = lang.replace(runescape, funescape).toLowerCase(),
                            function(elem) {
                                var elemLang;
                                do {
                                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))
                                        return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-")
                                } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                return !1
                            }
                        }),
                        target: function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id
                        },
                        root: function(elem) {
                            return elem === docElem
                        },
                        focus: function(elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                        },
                        enabled: createDisabledPseudo(!1),
                        disabled: createDisabledPseudo(!0),
                        checked: function(elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected
                        },
                        selected: function(elem) {
                            return elem.parentNode && elem.parentNode.selectedIndex,
                            !0 === elem.selected
                        },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                                if (elem.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(elem) {
                            return !Expr.pseudos.empty(elem)
                        },
                        header: function(elem) {
                            return rheader.test(elem.nodeName)
                        },
                        input: function(elem) {
                            return rinputs.test(elem.nodeName)
                        },
                        button: function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && "button" === elem.type || "button" === name
                        },
                        text: function(elem) {
                            var attr;
                            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase())
                        },
                        first: createPositionalPseudo(function() {
                            return [0]
                        }),
                        last: createPositionalPseudo(function(matchIndexes, length) {
                            return [length - 1]
                        }),
                        eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                            return [argument < 0 ? argument + length : argument]
                        }),
                        even: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 0; i < length; i += 2)
                                matchIndexes.push(i);
                            return matchIndexes
                        }),
                        odd: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 1; i < length; i += 2)
                                matchIndexes.push(i);
                            return matchIndexes
                        }),
                        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; --i >= 0; )
                                matchIndexes.push(i);
                            return matchIndexes
                        }),
                        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; ++i < length; )
                                matchIndexes.push(i);
                            return matchIndexes
                        })
                    }
                },
                Expr.pseudos.nth = Expr.pseudos.eq;
                for (i in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    Expr.pseudos[i] = function(type) {
                        return function(elem) {
                            return "input" === elem.nodeName.toLowerCase() && elem.type === type
                        }
                    }(i);
                for (i in {
                    submit: !0,
                    reset: !0
                })
                    Expr.pseudos[i] = function(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return ("input" === name || "button" === name) && elem.type === type
                        }
                    }(i);
                return setFilters.prototype = Expr.filters = Expr.pseudos,
                Expr.setFilters = new setFilters,
                tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                    if (cached)
                        return parseOnly ? 0 : cached.slice(0);
                    for (soFar = selector,
                    groups = [],
                    preFilters = Expr.preFilter; soFar; ) {
                        matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar),
                        groups.push(tokens = [])),
                        matched = !1,
                        (match = rcombinators.exec(soFar)) && (matched = match.shift(),
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        }),
                        soFar = soFar.slice(matched.length));
                        for (type in Expr.filter)
                            !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(),
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            }),
                            soFar = soFar.slice(matched.length));
                        if (!matched)
                            break
                    }
                    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
                }
                ,
                compile = Sizzle.compile = function(selector, match) {
                    var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                    if (!cached) {
                        for (match || (match = tokenize(selector)),
                        i = match.length; i--; )
                            cached = matcherFromTokens(match[i]),
                            cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)),
                        cached.selector = selector
                    }
                    return cached
                }
                ,
                select = Sizzle.select = function(selector, context, results, seed) {
                    var i, tokens, token, type, find, compiled = "function" == typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                    if (results = results || [],
                    1 === match.length) {
                        if (tokens = match[0] = match[0].slice(0),
                        tokens.length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                            if (!(context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0]))
                                return results;
                            compiled && (context = context.parentNode),
                            selector = selector.slice(tokens.shift().value.length)
                        }
                        for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i],
                        !Expr.relative[type = token.type]); )
                            if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                                if (tokens.splice(i, 1),
                                !(selector = seed.length && toSelector(tokens)))
                                    return push.apply(results, seed),
                                    results;
                                break
                            }
                    }
                    return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context),
                    results
                }
                ,
                support.sortStable = expando.split("").sort(sortOrder).join("") === expando,
                support.detectDuplicates = !!hasDuplicate,
                setDocument(),
                support.sortDetached = assert(function(el) {
                    return 1 & el.compareDocumentPosition(document.createElement("fieldset"))
                }),
                assert(function(el) {
                    return el.innerHTML = "<a href='#'></a>",
                    "#" === el.firstChild.getAttribute("href")
                }) || addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML)
                        return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2)
                }),
                support.attributes && assert(function(el) {
                    return el.innerHTML = "<input/>",
                    el.firstChild.setAttribute("value", ""),
                    "" === el.firstChild.getAttribute("value")
                }) || addHandle("value", function(elem, name, isXML) {
                    if (!isXML && "input" === elem.nodeName.toLowerCase())
                        return elem.defaultValue
                }),
                assert(function(el) {
                    return null == el.getAttribute("disabled")
                }) || addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML)
                        return !0 === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }),
                Sizzle
            }(window);
            jQuery.find = Sizzle,
            jQuery.expr = Sizzle.selectors,
            jQuery.expr[":"] = jQuery.expr.pseudos,
            jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort,
            jQuery.text = Sizzle.getText,
            jQuery.isXMLDoc = Sizzle.isXML,
            jQuery.contains = Sizzle.contains,
            jQuery.escapeSelector = Sizzle.escape;
            var dir = function(elem, dir, until) {
                for (var matched = [], truncate = void 0 !== until; (elem = elem[dir]) && 9 !== elem.nodeType; )
                    if (1 === elem.nodeType) {
                        if (truncate && jQuery(elem).is(until))
                            break;
                        matched.push(elem)
                    }
                return matched
            }
              , siblings = function(n, elem) {
                for (var matched = []; n; n = n.nextSibling)
                    1 === n.nodeType && n !== elem && matched.push(n);
                return matched
            }
              , rneedsContext = jQuery.expr.match.needsContext
              , rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
              , risSimple = /^.[^:#\[\.,]*$/;
            jQuery.filter = function(expr, elems, not) {
                var elem = elems[0];
                return not && (expr = ":not(" + expr + ")"),
                1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                    return 1 === elem.nodeType
                }))
            }
            ,
            jQuery.fn.extend({
                find: function(selector) {
                    var i, ret, len = this.length, self = this;
                    if ("string" != typeof selector)
                        return this.pushStack(jQuery(selector).filter(function() {
                            for (i = 0; i < len; i++)
                                if (jQuery.contains(self[i], this))
                                    return !0
                        }));
                    for (ret = this.pushStack([]),
                    i = 0; i < len; i++)
                        jQuery.find(selector, self[i], ret);
                    return len > 1 ? jQuery.uniqueSort(ret) : ret
                },
                filter: function(selector) {
                    return this.pushStack(winnow(this, selector || [], !1))
                },
                not: function(selector) {
                    return this.pushStack(winnow(this, selector || [], !0))
                },
                is: function(selector) {
                    return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
                }
            });
            var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (jQuery.fn.init = function(selector, context, root) {
                var match, elem;
                if (!selector)
                    return this;
                if (root = root || rootjQuery,
                "string" == typeof selector) {
                    if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector)) || !match[1] && context)
                        return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
                    if (match[1]) {
                        if (context = context instanceof jQuery ? context[0] : context,
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)),
                        rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                            for (match in context)
                                jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                        return this
                    }
                    return elem = document.getElementById(match[2]),
                    elem && (this[0] = elem,
                    this.length = 1),
                    this
                }
                return selector.nodeType ? (this[0] = selector,
                this.length = 1,
                this) : jQuery.isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this)
            }
            ).prototype = jQuery.fn,
            rootjQuery = jQuery(document);
            var rparentsprev = /^(?:parents|prev(?:Until|All))/
              , guaranteedUnique = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            jQuery.fn.extend({
                has: function(target) {
                    var targets = jQuery(target, this)
                      , l = targets.length;
                    return this.filter(function() {
                        for (var i = 0; i < l; i++)
                            if (jQuery.contains(this, targets[i]))
                                return !0
                    })
                },
                closest: function(selectors, context) {
                    var cur, i = 0, l = this.length, matched = [], targets = "string" != typeof selectors && jQuery(selectors);
                    if (!rneedsContext.test(selectors))
                        for (; i < l; i++)
                            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                                    matched.push(cur);
                                    break
                                }
                    return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
                },
                index: function(elem) {
                    return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(selector, context) {
                    return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
                },
                addBack: function(selector) {
                    return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
                }
            }),
            jQuery.each({
                parent: function(elem) {
                    var parent = elem.parentNode;
                    return parent && 11 !== parent.nodeType ? parent : null
                },
                parents: function(elem) {
                    return dir(elem, "parentNode")
                },
                parentsUntil: function(elem, i, until) {
                    return dir(elem, "parentNode", until)
                },
                next: function(elem) {
                    return sibling(elem, "nextSibling")
                },
                prev: function(elem) {
                    return sibling(elem, "previousSibling")
                },
                nextAll: function(elem) {
                    return dir(elem, "nextSibling")
                },
                prevAll: function(elem) {
                    return dir(elem, "previousSibling")
                },
                nextUntil: function(elem, i, until) {
                    return dir(elem, "nextSibling", until)
                },
                prevUntil: function(elem, i, until) {
                    return dir(elem, "previousSibling", until)
                },
                siblings: function(elem) {
                    return siblings((elem.parentNode || {}).firstChild, elem)
                },
                children: function(elem) {
                    return siblings(elem.firstChild)
                },
                contents: function(elem) {
                    return nodeName(elem, "iframe") ? elem.contentDocument : (nodeName(elem, "template") && (elem = elem.content || elem),
                    jQuery.merge([], elem.childNodes))
                }
            }, function(name, fn) {
                jQuery.fn[name] = function(until, selector) {
                    var matched = jQuery.map(this, fn, until);
                    return "Until" !== name.slice(-5) && (selector = until),
                    selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)),
                    this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(matched),
                    rparentsprev.test(name) && matched.reverse()),
                    this.pushStack(matched)
                }
            });
            var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
            jQuery.Callbacks = function(options) {
                options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
                var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                    for (locked = locked || options.once,
                    fired = firing = !0; queue.length; firingIndex = -1)
                        for (memory = queue.shift(); ++firingIndex < list.length; )
                            !1 === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse && (firingIndex = list.length,
                            memory = !1);
                    options.memory || (memory = !1),
                    firing = !1,
                    locked && (list = memory ? [] : "")
                }, self = {
                    add: function() {
                        return list && (memory && !firing && (firingIndex = list.length - 1,
                        queue.push(memory)),
                        function add(args) {
                            jQuery.each(args, function(_, arg) {
                                jQuery.isFunction(arg) ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== jQuery.type(arg) && add(arg)
                            })
                        }(arguments),
                        memory && !firing && fire()),
                        this
                    },
                    remove: function() {
                        return jQuery.each(arguments, function(_, arg) {
                            for (var index; (index = jQuery.inArray(arg, list, index)) > -1; )
                                list.splice(index, 1),
                                index <= firingIndex && firingIndex--
                        }),
                        this
                    },
                    has: function(fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
                    },
                    empty: function() {
                        return list && (list = []),
                        this
                    },
                    disable: function() {
                        return locked = queue = [],
                        list = memory = "",
                        this
                    },
                    disabled: function() {
                        return !list
                    },
                    lock: function() {
                        return locked = queue = [],
                        memory || firing || (list = memory = ""),
                        this
                    },
                    locked: function() {
                        return !!locked
                    },
                    fireWith: function(context, args) {
                        return locked || (args = args || [],
                        args = [context, args.slice ? args.slice() : args],
                        queue.push(args),
                        firing || fire()),
                        this
                    },
                    fire: function() {
                        return self.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!fired
                    }
                };
                return self
            }
            ,
            jQuery.extend({
                Deferred: function(func) {
                    var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]]
                      , state = "pending"
                      , promise = {
                        state: function() {
                            return state
                        },
                        always: function() {
                            return deferred.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(fn) {
                            return promise.then(null, fn)
                        },
                        pipe: function() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(i, tuple) {
                                    var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                    deferred[tuple[1]](function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        returned && jQuery.isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments)
                                    })
                                }),
                                fns = null
                            }).promise()
                        },
                        then: function(onFulfilled, onRejected, onProgress) {
                            function resolve(depth, deferred, handler, special) {
                                return function() {
                                    var that = this
                                      , args = arguments
                                      , mightThrow = function() {
                                        var returned, then;
                                        if (!(depth < maxDepth)) {
                                            if ((returned = handler.apply(that, args)) === deferred.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            then = returned && ("object" == typeof returned || "function" == typeof returned) && returned.then,
                                            jQuery.isFunction(then) ? special ? then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)) : (maxDepth++,
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith))) : (handler !== Identity && (that = void 0,
                                            args = [returned]),
                                            (special || deferred.resolveWith)(that, args))
                                        }
                                    }
                                      , process = special ? mightThrow : function() {
                                        try {
                                            mightThrow()
                                        } catch (e) {
                                            jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, process.stackTrace),
                                            depth + 1 >= maxDepth && (handler !== Thrower && (that = void 0,
                                            args = [e]),
                                            deferred.rejectWith(that, args))
                                        }
                                    }
                                    ;
                                    depth ? process() : (jQuery.Deferred.getStackHook && (process.stackTrace = jQuery.Deferred.getStackHook()),
                                    window.setTimeout(process))
                                }
                            }
                            var maxDepth = 0;
                            return jQuery.Deferred(function(newDefer) {
                                tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)),
                                tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity)),
                                tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower))
                            }).promise()
                        },
                        promise: function(obj) {
                            return null != obj ? jQuery.extend(obj, promise) : promise
                        }
                    }
                      , deferred = {};
                    return jQuery.each(tuples, function(i, tuple) {
                        var list = tuple[2]
                          , stateString = tuple[5];
                        promise[tuple[1]] = list.add,
                        stateString && list.add(function() {
                            state = stateString
                        }, tuples[3 - i][2].disable, tuples[0][2].lock),
                        list.add(tuple[3].fire),
                        deferred[tuple[0]] = function() {
                            return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments),
                            this
                        }
                        ,
                        deferred[tuple[0] + "With"] = list.fireWith
                    }),
                    promise.promise(deferred),
                    func && func.call(deferred, deferred),
                    deferred
                },
                when: function(singleValue) {
                    var remaining = arguments.length
                      , i = remaining
                      , resolveContexts = Array(i)
                      , resolveValues = slice.call(arguments)
                      , master = jQuery.Deferred()
                      , updateFunc = function(i) {
                        return function(value) {
                            resolveContexts[i] = this,
                            resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value,
                            --remaining || master.resolveWith(resolveContexts, resolveValues)
                        }
                    };
                    if (remaining <= 1 && (adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining),
                    "pending" === master.state() || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)))
                        return master.then();
                    for (; i--; )
                        adoptValue(resolveValues[i], updateFunc(i), master.reject);
                    return master.promise()
                }
            });
            var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            jQuery.Deferred.exceptionHook = function(error, stack) {
                window.console && window.console.warn && error && rerrorNames.test(error.name) && window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack)
            }
            ,
            jQuery.readyException = function(error) {
                window.setTimeout(function() {
                    throw error
                })
            }
            ;
            var readyList = jQuery.Deferred();
            jQuery.fn.ready = function(fn) {
                return readyList.then(fn).catch(function(error) {
                    jQuery.readyException(error)
                }),
                this
            }
            ,
            jQuery.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(wait) {
                    (!0 === wait ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0,
                    !0 !== wait && --jQuery.readyWait > 0 || readyList.resolveWith(document, [jQuery]))
                }
            }),
            jQuery.ready.then = readyList.then,
            "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed),
            window.addEventListener("load", completed));
            var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0
                  , len = elems.length
                  , bulk = null == key;
                if ("object" === jQuery.type(key)) {
                    chainable = !0;
                    for (i in key)
                        access(elems, fn, i, key[i], !0, emptyGet, raw)
                } else if (void 0 !== value && (chainable = !0,
                jQuery.isFunction(value) || (raw = !0),
                bulk && (raw ? (fn.call(elems, value),
                fn = null) : (bulk = fn,
                fn = function(elem, key, value) {
                    return bulk.call(jQuery(elem), value)
                }
                )),
                fn))
                    for (; i < len; i++)
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
            }
              , acceptData = function(owner) {
                return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType
            };
            Data.uid = 1,
            Data.prototype = {
                cache: function(owner) {
                    var value = owner[this.expando];
                    return value || (value = {},
                    acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: !0
                    }))),
                    value
                },
                set: function(owner, data, value) {
                    var prop, cache = this.cache(owner);
                    if ("string" == typeof data)
                        cache[jQuery.camelCase(data)] = value;
                    else
                        for (prop in data)
                            cache[jQuery.camelCase(prop)] = data[prop];
                    return cache
                },
                get: function(owner, key) {
                    return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)]
                },
                access: function(owner, key, value) {
                    return void 0 === key || key && "string" == typeof key && void 0 === value ? this.get(owner, key) : (this.set(owner, key, value),
                    void 0 !== value ? value : key)
                },
                remove: function(owner, key) {
                    var i, cache = owner[this.expando];
                    if (void 0 !== cache) {
                        if (void 0 !== key) {
                            Array.isArray(key) ? key = key.map(jQuery.camelCase) : (key = jQuery.camelCase(key),
                            key = key in cache ? [key] : key.match(rnothtmlwhite) || []),
                            i = key.length;
                            for (; i--; )
                                delete cache[key[i]]
                        }
                        (void 0 === key || jQuery.isEmptyObject(cache)) && (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando])
                    }
                },
                hasData: function(owner) {
                    var cache = owner[this.expando];
                    return void 0 !== cache && !jQuery.isEmptyObject(cache)
                }
            };
            var dataPriv = new Data
              , dataUser = new Data
              , rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , rmultiDash = /[A-Z]/g;
            jQuery.extend({
                hasData: function(elem) {
                    return dataUser.hasData(elem) || dataPriv.hasData(elem)
                },
                data: function(elem, name, data) {
                    return dataUser.access(elem, name, data)
                },
                removeData: function(elem, name) {
                    dataUser.remove(elem, name)
                },
                _data: function(elem, name, data) {
                    return dataPriv.access(elem, name, data)
                },
                _removeData: function(elem, name) {
                    dataPriv.remove(elem, name)
                }
            }),
            jQuery.fn.extend({
                data: function(key, value) {
                    var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                    if (void 0 === key) {
                        if (this.length && (data = dataUser.get(elem),
                        1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
                            for (i = attrs.length; i--; )
                                attrs[i] && (name = attrs[i].name,
                                0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)),
                                dataAttr(elem, name, data[name])));
                            dataPriv.set(elem, "hasDataAttrs", !0)
                        }
                        return data
                    }
                    return "object" == typeof key ? this.each(function() {
                        dataUser.set(this, key)
                    }) : access(this, function(value) {
                        var data;
                        if (elem && void 0 === value) {
                            if (void 0 !== (data = dataUser.get(elem, key)))
                                return data;
                            if (void 0 !== (data = dataAttr(elem, key)))
                                return data
                        } else
                            this.each(function() {
                                dataUser.set(this, key, value)
                            })
                    }, null, value, arguments.length > 1, null, !0)
                },
                removeData: function(key) {
                    return this.each(function() {
                        dataUser.remove(this, key)
                    })
                }
            }),
            jQuery.extend({
                queue: function(elem, type, data) {
                    var queue;
                    if (elem)
                        return type = (type || "fx") + "queue",
                        queue = dataPriv.get(elem, type),
                        data && (!queue || Array.isArray(data) ? queue = dataPriv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)),
                        queue || []
                },
                dequeue: function(elem, type) {
                    type = type || "fx";
                    var queue = jQuery.queue(elem, type)
                      , startLength = queue.length
                      , fn = queue.shift()
                      , hooks = jQuery._queueHooks(elem, type)
                      , next = function() {
                        jQuery.dequeue(elem, type)
                    };
                    "inprogress" === fn && (fn = queue.shift(),
                    startLength--),
                    fn && ("fx" === type && queue.unshift("inprogress"),
                    delete hooks.stop,
                    fn.call(elem, next, hooks)),
                    !startLength && hooks && hooks.empty.fire()
                },
                _queueHooks: function(elem, type) {
                    var key = type + "queueHooks";
                    return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                        empty: jQuery.Callbacks("once memory").add(function() {
                            dataPriv.remove(elem, [type + "queue", key])
                        })
                    })
                }
            }),
            jQuery.fn.extend({
                queue: function(type, data) {
                    var setter = 2;
                    return "string" != typeof type && (data = type,
                    type = "fx",
                    setter--),
                    arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                        var queue = jQuery.queue(this, type, data);
                        jQuery._queueHooks(this, type),
                        "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
                    })
                },
                dequeue: function(type) {
                    return this.each(function() {
                        jQuery.dequeue(this, type)
                    })
                },
                clearQueue: function(type) {
                    return this.queue(type || "fx", [])
                },
                promise: function(type, obj) {
                    var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                        --count || defer.resolveWith(elements, [elements])
                    };
                    for ("string" != typeof type && (obj = type,
                    type = void 0),
                    type = type || "fx"; i--; )
                        (tmp = dataPriv.get(elements[i], type + "queueHooks")) && tmp.empty && (count++,
                        tmp.empty.add(resolve));
                    return resolve(),
                    defer.promise(obj)
                }
            });
            var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i")
              , cssExpand = ["Top", "Right", "Bottom", "Left"]
              , isHiddenWithinTree = function(elem, el) {
                return elem = el || elem,
                "none" === elem.style.display || "" === elem.style.display && jQuery.contains(elem.ownerDocument, elem) && "none" === jQuery.css(elem, "display")
            }
              , swap = function(elem, options, callback, args) {
                var ret, name, old = {};
                for (name in options)
                    old[name] = elem.style[name],
                    elem.style[name] = options[name];
                ret = callback.apply(elem, args || []);
                for (name in options)
                    elem.style[name] = old[name];
                return ret
            }
              , defaultDisplayMap = {};
            jQuery.fn.extend({
                show: function() {
                    return showHide(this, !0)
                },
                hide: function() {
                    return showHide(this)
                },
                toggle: function(state) {
                    return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                        isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide()
                    })
                }
            });
            var rcheckableType = /^(?:checkbox|radio)$/i
              , rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
              , rscriptType = /^$|\/(?:java|ecma)script/i
              , wrapMap = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            wrapMap.optgroup = wrapMap.option,
            wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead,
            wrapMap.th = wrapMap.td;
            var rhtml = /<|&#?\w+;/;
            !function() {
                var fragment = document.createDocumentFragment()
                  , div = fragment.appendChild(document.createElement("div"))
                  , input = document.createElement("input");
                input.setAttribute("type", "radio"),
                input.setAttribute("checked", "checked"),
                input.setAttribute("name", "t"),
                div.appendChild(input),
                support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked,
                div.innerHTML = "<textarea>x</textarea>",
                support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue
            }();
            var documentElement = document.documentElement
              , rkeyEvent = /^key/
              , rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
            jQuery.event = {
                global: {},
                add: function(elem, types, handler, data, selector) {
                    var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                    if (elemData)
                        for (handler.handler && (handleObjIn = handler,
                        handler = handleObjIn.handler,
                        selector = handleObjIn.selector),
                        selector && jQuery.find.matchesSelector(documentElement, selector),
                        handler.guid || (handler.guid = jQuery.guid++),
                        (events = elemData.events) || (events = elemData.events = {}),
                        (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                            return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0
                        }
                        ),
                        types = (types || "").match(rnothtmlwhite) || [""],
                        t = types.length; t--; )
                            tmp = rtypenamespace.exec(types[t]) || [],
                            type = origType = tmp[1],
                            namespaces = (tmp[2] || "").split(".").sort(),
                            type && (special = jQuery.event.special[type] || {},
                            type = (selector ? special.delegateType : special.bindType) || type,
                            special = jQuery.event.special[type] || {},
                            handleObj = jQuery.extend({
                                type: type,
                                origType: origType,
                                data: data,
                                handler: handler,
                                guid: handler.guid,
                                selector: selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn),
                            (handlers = events[type]) || (handlers = events[type] = [],
                            handlers.delegateCount = 0,
                            special.setup && !1 !== special.setup.call(elem, data, namespaces, eventHandle) || elem.addEventListener && elem.addEventListener(type, eventHandle)),
                            special.add && (special.add.call(elem, handleObj),
                            handleObj.handler.guid || (handleObj.handler.guid = handler.guid)),
                            selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj),
                            jQuery.event.global[type] = !0)
                },
                remove: function(elem, types, handler, selector, mappedTypes) {
                    var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                    if (elemData && (events = elemData.events)) {
                        for (types = (types || "").match(rnothtmlwhite) || [""],
                        t = types.length; t--; )
                            if (tmp = rtypenamespace.exec(types[t]) || [],
                            type = origType = tmp[1],
                            namespaces = (tmp[2] || "").split(".").sort(),
                            type) {
                                for (special = jQuery.event.special[type] || {},
                                type = (selector ? special.delegateType : special.bindType) || type,
                                handlers = events[type] || [],
                                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                origCount = j = handlers.length; j--; )
                                    handleObj = handlers[j],
                                    !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1),
                                    handleObj.selector && handlers.delegateCount--,
                                    special.remove && special.remove.call(elem, handleObj));
                                origCount && !handlers.length && (special.teardown && !1 !== special.teardown.call(elem, namespaces, elemData.handle) || jQuery.removeEvent(elem, type, elemData.handle),
                                delete events[type])
                            } else
                                for (type in events)
                                    jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                        jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events")
                    }
                },
                dispatch: function(nativeEvent) {
                    var i, j, ret, matched, handleObj, handlerQueue, event = jQuery.event.fix(nativeEvent), args = new Array(arguments.length), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
                    for (args[0] = event,
                    i = 1; i < arguments.length; i++)
                        args[i] = arguments[i];
                    if (event.delegateTarget = this,
                    !special.preDispatch || !1 !== special.preDispatch.call(this, event)) {
                        for (handlerQueue = jQuery.event.handlers.call(this, event, handlers),
                        i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped(); )
                            for (event.currentTarget = matched.elem,
                            j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped(); )
                                event.rnamespace && !event.rnamespace.test(handleObj.namespace) || (event.handleObj = handleObj,
                                event.data = handleObj.data,
                                void 0 !== (ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) && !1 === (event.result = ret) && (event.preventDefault(),
                                event.stopPropagation()));
                        return special.postDispatch && special.postDispatch.call(this, event),
                        event.result
                    }
                },
                handlers: function(event, handlers) {
                    var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                    if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1))
                        for (; cur !== this; cur = cur.parentNode || this)
                            if (1 === cur.nodeType && ("click" !== event.type || !0 !== cur.disabled)) {
                                for (matchedHandlers = [],
                                matchedSelectors = {},
                                i = 0; i < delegateCount; i++)
                                    handleObj = handlers[i],
                                    sel = handleObj.selector + " ",
                                    void 0 === matchedSelectors[sel] && (matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length),
                                    matchedSelectors[sel] && matchedHandlers.push(handleObj);
                                matchedHandlers.length && handlerQueue.push({
                                    elem: cur,
                                    handlers: matchedHandlers
                                })
                            }
                    return cur = this,
                    delegateCount < handlers.length && handlerQueue.push({
                        elem: cur,
                        handlers: handlers.slice(delegateCount)
                    }),
                    handlerQueue
                },
                addProp: function(name, hook) {
                    Object.defineProperty(jQuery.Event.prototype, name, {
                        enumerable: !0,
                        configurable: !0,
                        get: jQuery.isFunction(hook) ? function() {
                            if (this.originalEvent)
                                return hook(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[name]
                        }
                        ,
                        set: function(value) {
                            Object.defineProperty(this, name, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: value
                            })
                        }
                    })
                },
                fix: function(originalEvent) {
                    return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== safeActiveElement() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === safeActiveElement() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && nodeName(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(event) {
                            return nodeName(event.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(event) {
                            void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result)
                        }
                    }
                }
            },
            jQuery.removeEvent = function(elem, type, handle) {
                elem.removeEventListener && elem.removeEventListener(type, handle)
            }
            ,
            jQuery.Event = function(src, props) {
                if (!(this instanceof jQuery.Event))
                    return new jQuery.Event(src,props);
                src && src.type ? (this.originalEvent = src,
                this.type = src.type,
                this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && !1 === src.returnValue ? returnTrue : returnFalse,
                this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target,
                this.currentTarget = src.currentTarget,
                this.relatedTarget = src.relatedTarget) : this.type = src,
                props && jQuery.extend(this, props),
                this.timeStamp = src && src.timeStamp || jQuery.now(),
                this[jQuery.expando] = !0
            }
            ,
            jQuery.Event.prototype = {
                constructor: jQuery.Event,
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = returnTrue,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = returnTrue,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = returnTrue,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            jQuery.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(event) {
                    var button = event.button;
                    return null == event.which && rkeyEvent.test(event.type) ? null != event.charCode ? event.charCode : event.keyCode : !event.which && void 0 !== button && rmouseEvent.test(event.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : event.which
                }
            }, jQuery.event.addProp),
            jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(orig, fix) {
                jQuery.event.special[orig] = {
                    delegateType: fix,
                    bindType: fix,
                    handle: function(event) {
                        var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                        return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType,
                        ret = handleObj.handler.apply(this, arguments),
                        event.type = fix),
                        ret
                    }
                }
            }),
            jQuery.fn.extend({
                on: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn)
                },
                one: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn, 1)
                },
                off: function(types, selector, fn) {
                    var handleObj, type;
                    if (types && types.preventDefault && types.handleObj)
                        return handleObj = types.handleObj,
                        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler),
                        this;
                    if ("object" == typeof types) {
                        for (type in types)
                            this.off(type, selector, types[type]);
                        return this
                    }
                    return !1 !== selector && "function" != typeof selector || (fn = selector,
                    selector = void 0),
                    !1 === fn && (fn = returnFalse),
                    this.each(function() {
                        jQuery.event.remove(this, types, fn, selector)
                    })
                }
            });
            var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
              , rnoInnerhtml = /<script|<style|<link/i
              , rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i
              , rscriptTypeMasked = /^true\/(.*)/
              , rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            jQuery.extend({
                htmlPrefilter: function(html) {
                    return html.replace(rxhtmlTag, "<$1></$2>")
                },
                clone: function(elem, dataAndEvents, deepDataAndEvents) {
                    var i, l, srcElements, destElements, clone = elem.cloneNode(!0), inPage = jQuery.contains(elem.ownerDocument, elem);
                    if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
                        for (destElements = getAll(clone),
                        srcElements = getAll(elem),
                        i = 0,
                        l = srcElements.length; i < l; i++)
                            fixInput(srcElements[i], destElements[i]);
                    if (dataAndEvents)
                        if (deepDataAndEvents)
                            for (srcElements = srcElements || getAll(elem),
                            destElements = destElements || getAll(clone),
                            i = 0,
                            l = srcElements.length; i < l; i++)
                                cloneCopyEvent(srcElements[i], destElements[i]);
                        else
                            cloneCopyEvent(elem, clone);
                    return destElements = getAll(clone, "script"),
                    destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")),
                    clone
                },
                cleanData: function(elems) {
                    for (var data, elem, type, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++)
                        if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events)
                                    for (type in data.events)
                                        special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                                elem[dataPriv.expando] = void 0
                            }
                            elem[dataUser.expando] && (elem[dataUser.expando] = void 0)
                        }
                }
            }),
            jQuery.fn.extend({
                detach: function(selector) {
                    return remove(this, selector, !0)
                },
                remove: function(selector) {
                    return remove(this, selector)
                },
                text: function(value) {
                    return access(this, function(value) {
                        return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = value)
                        })
                    }, null, value, arguments.length)
                },
                append: function() {
                    return domManip(this, arguments, function(elem) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            manipulationTarget(this, elem).appendChild(elem)
                        }
                    })
                },
                prepend: function() {
                    return domManip(this, arguments, function(elem) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var target = manipulationTarget(this, elem);
                            target.insertBefore(elem, target.firstChild)
                        }
                    })
                },
                before: function() {
                    return domManip(this, arguments, function(elem) {
                        this.parentNode && this.parentNode.insertBefore(elem, this)
                    })
                },
                after: function() {
                    return domManip(this, arguments, function(elem) {
                        this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var elem, i = 0; null != (elem = this[i]); i++)
                        1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)),
                        elem.textContent = "");
                    return this
                },
                clone: function(dataAndEvents, deepDataAndEvents) {
                    return dataAndEvents = null != dataAndEvents && dataAndEvents,
                    deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents,
                    this.map(function() {
                        return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                    })
                },
                html: function(value) {
                    return access(this, function(value) {
                        var elem = this[0] || {}
                          , i = 0
                          , l = this.length;
                        if (void 0 === value && 1 === elem.nodeType)
                            return elem.innerHTML;
                        if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                            value = jQuery.htmlPrefilter(value);
                            try {
                                for (; i < l; i++)
                                    elem = this[i] || {},
                                    1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)),
                                    elem.innerHTML = value);
                                elem = 0
                            } catch (e) {}
                        }
                        elem && this.empty().append(value)
                    }, null, value, arguments.length)
                },
                replaceWith: function() {
                    var ignored = [];
                    return domManip(this, arguments, function(elem) {
                        var parent = this.parentNode;
                        jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)),
                        parent && parent.replaceChild(elem, this))
                    }, ignored)
                }
            }),
            jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(name, original) {
                jQuery.fn[name] = function(selector) {
                    for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++)
                        elems = i === last ? this : this.clone(!0),
                        jQuery(insert[i])[original](elems),
                        push.apply(ret, elems.get());
                    return this.pushStack(ret)
                }
            });
            var rmargin = /^margin/
              , rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i")
              , getStyles = function(elem) {
                var view = elem.ownerDocument.defaultView;
                return view && view.opener || (view = window),
                view.getComputedStyle(elem)
            };
            !function() {
                function computeStyleTests() {
                    if (div) {
                        div.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        div.innerHTML = "",
                        documentElement.appendChild(container);
                        var divStyle = window.getComputedStyle(div);
                        pixelPositionVal = "1%" !== divStyle.top,
                        reliableMarginLeftVal = "2px" === divStyle.marginLeft,
                        boxSizingReliableVal = "4px" === divStyle.width,
                        div.style.marginRight = "50%",
                        pixelMarginRightVal = "4px" === divStyle.marginRight,
                        documentElement.removeChild(container),
                        div = null
                    }
                }
                var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                div.style && (div.style.backgroundClip = "content-box",
                div.cloneNode(!0).style.backgroundClip = "",
                support.clearCloneStyle = "content-box" === div.style.backgroundClip,
                container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                container.appendChild(div),
                jQuery.extend(support, {
                    pixelPosition: function() {
                        return computeStyleTests(),
                        pixelPositionVal
                    },
                    boxSizingReliable: function() {
                        return computeStyleTests(),
                        boxSizingReliableVal
                    },
                    pixelMarginRight: function() {
                        return computeStyleTests(),
                        pixelMarginRightVal
                    },
                    reliableMarginLeft: function() {
                        return computeStyleTests(),
                        reliableMarginLeftVal
                    }
                }))
            }();
            var rdisplayswap = /^(none|table(?!-c[ea]).+)/
              , rcustomProp = /^--/
              , cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , cssPrefixes = ["Webkit", "Moz", "ms"]
              , emptyStyle = document.createElement("div").style;
            jQuery.extend({
                cssHooks: {
                    opacity: {
                        get: function(elem, computed) {
                            if (computed) {
                                var ret = curCSS(elem, "opacity");
                                return "" === ret ? "1" : ret
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(elem, name, value, extra) {
                    if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                        var ret, type, hooks, origName = jQuery.camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        if (isCustomProp || (name = finalPropName(origName)),
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName],
                        void 0 === value)
                            return hooks && "get"in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                        type = typeof value,
                        "string" === type && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret),
                        type = "number"),
                        null != value && value === value && ("number" === type && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")),
                        support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"),
                        hooks && "set"in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (isCustomProp ? style.setProperty(name, value) : style[name] = value))
                    }
                },
                css: function(elem, name, extra, styles) {
                    var val, num, hooks, origName = jQuery.camelCase(name);
                    return rcustomProp.test(name) || (name = finalPropName(origName)),
                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName],
                    hooks && "get"in hooks && (val = hooks.get(elem, !0, extra)),
                    void 0 === val && (val = curCSS(elem, name, styles)),
                    "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]),
                    "" === extra || extra ? (num = parseFloat(val),
                    !0 === extra || isFinite(num) ? num || 0 : val) : val
                }
            }),
            jQuery.each(["height", "width"], function(i, name) {
                jQuery.cssHooks[name] = {
                    get: function(elem, computed, extra) {
                        if (computed)
                            return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, extra) : swap(elem, cssShow, function() {
                                return getWidthOrHeight(elem, name, extra)
                            })
                    },
                    set: function(elem, value, extra) {
                        var matches, styles = extra && getStyles(elem), subtract = extra && augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles);
                        return subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px") && (elem.style[name] = value,
                        value = jQuery.css(elem, name)),
                        setPositiveNumber(elem, value, subtract)
                    }
                }
            }),
            jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
                if (computed)
                    return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, function() {
                        return elem.getBoundingClientRect().left
                    })) + "px"
            }),
            jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                    expand: function(value) {
                        for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++)
                            expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                        return expanded
                    }
                },
                rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber)
            }),
            jQuery.fn.extend({
                css: function(name, value) {
                    return access(this, function(elem, name, value) {
                        var styles, len, map = {}, i = 0;
                        if (Array.isArray(name)) {
                            for (styles = getStyles(elem),
                            len = name.length; i < len; i++)
                                map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                            return map
                        }
                        return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                    }, name, value, arguments.length > 1)
                }
            }),
            jQuery.Tween = Tween,
            Tween.prototype = {
                constructor: Tween,
                init: function(elem, options, prop, end, easing, unit) {
                    this.elem = elem,
                    this.prop = prop,
                    this.easing = easing || jQuery.easing._default,
                    this.options = options,
                    this.start = this.now = this.cur(),
                    this.end = end,
                    this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
                },
                cur: function() {
                    var hooks = Tween.propHooks[this.prop];
                    return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
                },
                run: function(percent) {
                    var eased, hooks = Tween.propHooks[this.prop];
                    return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent,
                    this.now = (this.end - this.start) * eased + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this),
                    this
                }
            },
            Tween.prototype.init.prototype = Tween.prototype,
            Tween.propHooks = {
                _default: {
                    get: function(tween) {
                        var result;
                        return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (result = jQuery.css(tween.elem, tween.prop, ""),
                        result && "auto" !== result ? result : 0)
                    },
                    set: function(tween) {
                        jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop] ? tween.elem[tween.prop] = tween.now : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                    }
                }
            },
            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function(tween) {
                    tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
                }
            },
            jQuery.easing = {
                linear: function(p) {
                    return p
                },
                swing: function(p) {
                    return .5 - Math.cos(p * Math.PI) / 2
                },
                _default: "swing"
            },
            jQuery.fx = Tween.prototype.init,
            jQuery.fx.step = {};
            var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
            jQuery.Animation = jQuery.extend(Animation, {
                tweeners: {
                    "*": [function(prop, value) {
                        var tween = this.createTween(prop, value);
                        return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween),
                        tween
                    }
                    ]
                },
                tweener: function(props, callback) {
                    jQuery.isFunction(props) ? (callback = props,
                    props = ["*"]) : props = props.match(rnothtmlwhite);
                    for (var prop, index = 0, length = props.length; index < length; index++)
                        prop = props[index],
                        Animation.tweeners[prop] = Animation.tweeners[prop] || [],
                        Animation.tweeners[prop].unshift(callback)
                },
                prefilters: [defaultPrefilter],
                prefilter: function(callback, prepend) {
                    prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback)
                }
            }),
            jQuery.speed = function(speed, easing, fn) {
                var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
                    complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
                };
                return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default),
                null != opt.queue && !0 !== opt.queue || (opt.queue = "fx"),
                opt.old = opt.complete,
                opt.complete = function() {
                    jQuery.isFunction(opt.old) && opt.old.call(this),
                    opt.queue && jQuery.dequeue(this, opt.queue)
                }
                ,
                opt
            }
            ,
            jQuery.fn.extend({
                fadeTo: function(speed, to, easing, callback) {
                    return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                        opacity: to
                    }, speed, easing, callback)
                },
                animate: function(prop, speed, easing, callback) {
                    var empty = jQuery.isEmptyObject(prop)
                      , optall = jQuery.speed(speed, easing, callback)
                      , doAnimation = function() {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        (empty || dataPriv.get(this, "finish")) && anim.stop(!0)
                    };
                    return doAnimation.finish = doAnimation,
                    empty || !1 === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
                },
                stop: function(type, clearQueue, gotoEnd) {
                    var stopQueue = function(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop,
                        stop(gotoEnd)
                    };
                    return "string" != typeof type && (gotoEnd = clearQueue,
                    clearQueue = type,
                    type = void 0),
                    clearQueue && !1 !== type && this.queue(type || "fx", []),
                    this.each(function() {
                        var dequeue = !0
                          , index = null != type && type + "queueHooks"
                          , timers = jQuery.timers
                          , data = dataPriv.get(this);
                        if (index)
                            data[index] && data[index].stop && stopQueue(data[index]);
                        else
                            for (index in data)
                                data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                        for (index = timers.length; index--; )
                            timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd),
                            dequeue = !1,
                            timers.splice(index, 1));
                        !dequeue && gotoEnd || jQuery.dequeue(this, type)
                    })
                },
                finish: function(type) {
                    return !1 !== type && (type = type || "fx"),
                    this.each(function() {
                        var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                        for (data.finish = !0,
                        jQuery.queue(this, type, []),
                        hooks && hooks.stop && hooks.stop.call(this, !0),
                        index = timers.length; index--; )
                            timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0),
                            timers.splice(index, 1));
                        for (index = 0; index < length; index++)
                            queue[index] && queue[index].finish && queue[index].finish.call(this);
                        delete data.finish
                    })
                }
            }),
            jQuery.each(["toggle", "show", "hide"], function(i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) {
                    return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
                }
            }),
            jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(name, props) {
                jQuery.fn[name] = function(speed, easing, callback) {
                    return this.animate(props, speed, easing, callback)
                }
            }),
            jQuery.timers = [],
            jQuery.fx.tick = function() {
                var timer, i = 0, timers = jQuery.timers;
                for (fxNow = jQuery.now(); i < timers.length; i++)
                    (timer = timers[i])() || timers[i] !== timer || timers.splice(i--, 1);
                timers.length || jQuery.fx.stop(),
                fxNow = void 0
            }
            ,
            jQuery.fx.timer = function(timer) {
                jQuery.timers.push(timer),
                jQuery.fx.start()
            }
            ,
            jQuery.fx.interval = 13,
            jQuery.fx.start = function() {
                inProgress || (inProgress = !0,
                schedule())
            }
            ,
            jQuery.fx.stop = function() {
                inProgress = null
            }
            ,
            jQuery.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            jQuery.fn.delay = function(time, type) {
                return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time,
                type = type || "fx",
                this.queue(type, function(next, hooks) {
                    var timeout = window.setTimeout(next, time);
                    hooks.stop = function() {
                        window.clearTimeout(timeout)
                    }
                })
            }
            ,
            function() {
                var input = document.createElement("input")
                  , select = document.createElement("select")
                  , opt = select.appendChild(document.createElement("option"));
                input.type = "checkbox",
                support.checkOn = "" !== input.value,
                support.optSelected = opt.selected,
                input = document.createElement("input"),
                input.value = "t",
                input.type = "radio",
                support.radioValue = "t" === input.value
            }();
            var boolHook, attrHandle = jQuery.expr.attrHandle;
            jQuery.fn.extend({
                attr: function(name, value) {
                    return access(this, jQuery.attr, name, value, arguments.length > 1)
                },
                removeAttr: function(name) {
                    return this.each(function() {
                        jQuery.removeAttr(this, name)
                    })
                }
            }),
            jQuery.extend({
                attr: function(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType;
                    if (3 !== nType && 8 !== nType && 2 !== nType)
                        return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)),
                        void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set"in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""),
                        value) : hooks && "get"in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name),
                        null == ret ? void 0 : ret))
                },
                attrHooks: {
                    type: {
                        set: function(elem, value) {
                            if (!support.radioValue && "radio" === value && nodeName(elem, "input")) {
                                var val = elem.value;
                                return elem.setAttribute("type", value),
                                val && (elem.value = val),
                                value
                            }
                        }
                    }
                },
                removeAttr: function(elem, value) {
                    var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                    if (attrNames && 1 === elem.nodeType)
                        for (; name = attrNames[i++]; )
                            elem.removeAttribute(name)
                }
            }),
            boolHook = {
                set: function(elem, value, name) {
                    return !1 === value ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name),
                    name
                }
            },
            jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
                var getter = attrHandle[name] || jQuery.find.attr;
                attrHandle[name] = function(elem, name, isXML) {
                    var ret, handle, lowercaseName = name.toLowerCase();
                    return isXML || (handle = attrHandle[lowercaseName],
                    attrHandle[lowercaseName] = ret,
                    ret = null != getter(elem, name, isXML) ? lowercaseName : null,
                    attrHandle[lowercaseName] = handle),
                    ret
                }
            });
            var rfocusable = /^(?:input|select|textarea|button)$/i
              , rclickable = /^(?:a|area)$/i;
            jQuery.fn.extend({
                prop: function(name, value) {
                    return access(this, jQuery.prop, name, value, arguments.length > 1)
                },
                removeProp: function(name) {
                    return this.each(function() {
                        delete this[jQuery.propFix[name] || name]
                    })
                }
            }),
            jQuery.extend({
                prop: function(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType;
                    if (3 !== nType && 8 !== nType && 2 !== nType)
                        return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name,
                        hooks = jQuery.propHooks[name]),
                        void 0 !== value ? hooks && "set"in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get"in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name]
                },
                propHooks: {
                    tabIndex: {
                        get: function(elem) {
                            var tabindex = jQuery.find.attr(elem, "tabindex");
                            return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            support.optSelected || (jQuery.propHooks.selected = {
                get: function(elem) {
                    var parent = elem.parentNode;
                    return parent && parent.parentNode && parent.parentNode.selectedIndex,
                    null
                },
                set: function(elem) {
                    var parent = elem.parentNode;
                    parent && (parent.selectedIndex,
                    parent.parentNode && parent.parentNode.selectedIndex)
                }
            }),
            jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                jQuery.propFix[this.toLowerCase()] = this
            }),
            jQuery.fn.extend({
                addClass: function(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                    if (jQuery.isFunction(value))
                        return this.each(function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)))
                        });
                    if ("string" == typeof value && value)
                        for (classes = value.match(rnothtmlwhite) || []; elem = this[i++]; )
                            if (curValue = getClass(elem),
                            cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                                for (j = 0; clazz = classes[j++]; )
                                    cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                                finalValue = stripAndCollapse(cur),
                                curValue !== finalValue && elem.setAttribute("class", finalValue)
                            }
                    return this
                },
                removeClass: function(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                    if (jQuery.isFunction(value))
                        return this.each(function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof value && value)
                        for (classes = value.match(rnothtmlwhite) || []; elem = this[i++]; )
                            if (curValue = getClass(elem),
                            cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                                for (j = 0; clazz = classes[j++]; )
                                    for (; cur.indexOf(" " + clazz + " ") > -1; )
                                        cur = cur.replace(" " + clazz + " ", " ");
                                finalValue = stripAndCollapse(cur),
                                curValue !== finalValue && elem.setAttribute("class", finalValue)
                            }
                    return this
                },
                toggleClass: function(value, stateVal) {
                    var type = typeof value;
                    return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
                    }) : this.each(function() {
                        var className, i, self, classNames;
                        if ("string" === type)
                            for (i = 0,
                            self = jQuery(this),
                            classNames = value.match(rnothtmlwhite) || []; className = classNames[i++]; )
                                self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                        else
                            void 0 !== value && "boolean" !== type || (className = getClass(this),
                            className && dataPriv.set(this, "__className__", className),
                            this.setAttribute && this.setAttribute("class", className || !1 === value ? "" : dataPriv.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(selector) {
                    var className, elem, i = 0;
                    for (className = " " + selector + " "; elem = this[i++]; )
                        if (1 === elem.nodeType && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1)
                            return !0;
                    return !1
                }
            });
            var rreturn = /\r/g;
            jQuery.fn.extend({
                val: function(value) {
                    var hooks, ret, isFunction, elem = this[0];
                    {
                        if (arguments.length)
                            return isFunction = jQuery.isFunction(value),
                            this.each(function(i) {
                                var val;
                                1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value,
                                null == val ? val = "" : "number" == typeof val ? val += "" : Array.isArray(val) && (val = jQuery.map(val, function(value) {
                                    return null == value ? "" : value + ""
                                })),
                                (hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set"in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val))
                            });
                        if (elem)
                            return (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get"in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value,
                            "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret)
                    }
                }
            }),
            jQuery.extend({
                valHooks: {
                    option: {
                        get: function(elem) {
                            var val = jQuery.find.attr(elem, "value");
                            return null != val ? val : stripAndCollapse(jQuery.text(elem))
                        }
                    },
                    select: {
                        get: function(elem) {
                            var value, option, i, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type, values = one ? null : [], max = one ? index + 1 : options.length;
                            for (i = index < 0 ? max : one ? index : 0; i < max; i++)
                                if (option = options[i],
                                (option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                    if (value = jQuery(option).val(),
                                    one)
                                        return value;
                                    values.push(value)
                                }
                            return values
                        },
                        set: function(elem, value) {
                            for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--; )
                                option = options[i],
                                (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) && (optionSet = !0);
                            return optionSet || (elem.selectedIndex = -1),
                            values
                        }
                    }
                }
            }),
            jQuery.each(["radio", "checkbox"], function() {
                jQuery.valHooks[this] = {
                    set: function(elem, value) {
                        if (Array.isArray(value))
                            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1
                    }
                },
                support.checkOn || (jQuery.valHooks[this].get = function(elem) {
                    return null === elem.getAttribute("value") ? "on" : elem.value
                }
                )
            });
            var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
            jQuery.extend(jQuery.event, {
                trigger: function(event, data, elem, onlyHandlers) {
                    var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                    if (cur = tmp = elem = elem || document,
                    3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."),
                    type = namespaces.shift(),
                    namespaces.sort()),
                    ontype = type.indexOf(":") < 0 && "on" + type,
                    event = event[jQuery.expando] ? event : new jQuery.Event(type,"object" == typeof event && event),
                    event.isTrigger = onlyHandlers ? 2 : 3,
                    event.namespace = namespaces.join("."),
                    event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    event.result = void 0,
                    event.target || (event.target = elem),
                    data = null == data ? [event] : jQuery.makeArray(data, [event]),
                    special = jQuery.event.special[type] || {},
                    onlyHandlers || !special.trigger || !1 !== special.trigger.apply(elem, data))) {
                        if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                            for (bubbleType = special.delegateType || type,
                            rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode)
                                eventPath.push(cur),
                                tmp = cur;
                            tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                        }
                        for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); )
                            event.type = i > 1 ? bubbleType : special.bindType || type,
                            handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle"),
                            handle && handle.apply(cur, data),
                            (handle = ontype && cur[ontype]) && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data),
                            !1 === event.result && event.preventDefault());
                        return event.type = type,
                        onlyHandlers || event.isDefaultPrevented() || special._default && !1 !== special._default.apply(eventPath.pop(), data) || !acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype],
                        tmp && (elem[ontype] = null),
                        jQuery.event.triggered = type,
                        elem[type](),
                        jQuery.event.triggered = void 0,
                        tmp && (elem[ontype] = tmp)),
                        event.result
                    }
                },
                simulate: function(type, elem, event) {
                    var e = jQuery.extend(new jQuery.Event, event, {
                        type: type,
                        isSimulated: !0
                    });
                    jQuery.event.trigger(e, null, elem)
                }
            }),
            jQuery.fn.extend({
                trigger: function(type, data) {
                    return this.each(function() {
                        jQuery.event.trigger(type, data, this)
                    })
                },
                triggerHandler: function(type, data) {
                    var elem = this[0];
                    if (elem)
                        return jQuery.event.trigger(type, data, elem, !0)
                }
            }),
            jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(i, name) {
                jQuery.fn[name] = function(data, fn) {
                    return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
                }
            }),
            jQuery.fn.extend({
                hover: function(fnOver, fnOut) {
                    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
                }
            }),
            support.focusin = "onfocusin"in window,
            support.focusin || jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                var handler = function(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
                };
                jQuery.event.special[fix] = {
                    setup: function() {
                        var doc = this.ownerDocument || this
                          , attaches = dataPriv.access(doc, fix);
                        attaches || doc.addEventListener(orig, handler, !0),
                        dataPriv.access(doc, fix, (attaches || 0) + 1)
                    },
                    teardown: function() {
                        var doc = this.ownerDocument || this
                          , attaches = dataPriv.access(doc, fix) - 1;
                        attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0),
                        dataPriv.remove(doc, fix))
                    }
                }
            });
            var location = window.location
              , nonce = jQuery.now()
              , rquery = /\?/;
            jQuery.parseXML = function(data) {
                var xml;
                if (!data || "string" != typeof data)
                    return null;
                try {
                    xml = (new window.DOMParser).parseFromString(data, "text/xml")
                } catch (e) {
                    xml = void 0
                }
                return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data),
                xml
            }
            ;
            var rbracket = /\[\]$/
              , rCRLF = /\r?\n/g
              , rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
              , rsubmittable = /^(?:input|select|textarea|keygen)/i;
            jQuery.param = function(a, traditional) {
                var prefix, s = [], add = function(key, valueOrFunction) {
                    var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == value ? "" : value)
                };
                if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a))
                    jQuery.each(a, function() {
                        add(this.name, this.value)
                    });
                else
                    for (prefix in a)
                        buildParams(prefix, a[prefix], traditional, add);
                return s.join("&")
            }
            ,
            jQuery.fn.extend({
                serialize: function() {
                    return jQuery.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var elements = jQuery.prop(this, "elements");
                        return elements ? jQuery.makeArray(elements) : this
                    }).filter(function() {
                        var type = this.type;
                        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
                    }).map(function(i, elem) {
                        var val = jQuery(this).val();
                        return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            }
                        }) : {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        }
                    }).get()
                }
            });
            var r20 = /%20/g
              , rhash = /#.*$/
              , rantiCache = /([?&])_=[^&]*/
              , rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , rnoContent = /^(?:GET|HEAD)$/
              , rprotocol = /^\/\//
              , prefilters = {}
              , transports = {}
              , allTypes = "*/".concat("*")
              , originAnchor = document.createElement("a");
            originAnchor.href = location.href,
            jQuery.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: location.href,
                    type: "GET",
                    isLocal: rlocalProtocol.test(location.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": allTypes,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": jQuery.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(target, settings) {
                    return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
                },
                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports),
                ajax: function(url, options) {
                    function done(status, nativeStatusText, responses, headers) {
                        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                        completed || (completed = !0,
                        timeoutTimer && window.clearTimeout(timeoutTimer),
                        transport = void 0,
                        responseHeadersString = headers || "",
                        jqXHR.readyState = status > 0 ? 4 : 0,
                        isSuccess = status >= 200 && status < 300 || 304 === status,
                        responses && (response = ajaxHandleResponses(s, jqXHR, responses)),
                        response = ajaxConvert(s, response, jqXHR, isSuccess),
                        isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"),
                        modified && (jQuery.lastModified[cacheURL] = modified),
                        (modified = jqXHR.getResponseHeader("etag")) && (jQuery.etag[cacheURL] = modified)),
                        204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state,
                        success = response.data,
                        error = response.error,
                        isSuccess = !error)) : (error = statusText,
                        !status && statusText || (statusText = "error",
                        status < 0 && (status = 0))),
                        jqXHR.status = status,
                        jqXHR.statusText = (nativeStatusText || statusText) + "",
                        isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]),
                        jqXHR.statusCode(statusCode),
                        statusCode = void 0,
                        fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]),
                        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]),
                        fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]),
                        --jQuery.active || jQuery.event.trigger("ajaxStop")))
                    }
                    "object" == typeof url && (options = url,
                    url = void 0),
                    options = options || {};
                    var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (completed) {
                                if (!responseHeaders)
                                    for (responseHeaders = {}; match = rheaders.exec(responseHeadersString); )
                                        responseHeaders[match[1].toLowerCase()] = match[2];
                                match = responseHeaders[key.toLowerCase()]
                            }
                            return null == match ? null : match
                        },
                        getAllResponseHeaders: function() {
                            return completed ? responseHeadersString : null
                        },
                        setRequestHeader: function(name, value) {
                            return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name,
                            requestHeaders[name] = value),
                            this
                        },
                        overrideMimeType: function(type) {
                            return null == completed && (s.mimeType = type),
                            this
                        },
                        statusCode: function(map) {
                            var code;
                            if (map)
                                if (completed)
                                    jqXHR.always(map[jqXHR.status]);
                                else
                                    for (code in map)
                                        statusCode[code] = [statusCode[code], map[code]];
                            return this
                        },
                        abort: function(statusText) {
                            var finalText = statusText || strAbort;
                            return transport && transport.abort(finalText),
                            done(0, finalText),
                            this
                        }
                    };
                    if (deferred.promise(jqXHR),
                    s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"),
                    s.type = options.method || options.type || s.method || s.type,
                    s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""],
                    null == s.crossDomain) {
                        urlAnchor = document.createElement("a");
                        try {
                            urlAnchor.href = s.url,
                            urlAnchor.href = urlAnchor.href,
                            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host
                        } catch (e) {
                            s.crossDomain = !0
                        }
                    }
                    if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)),
                    inspectPrefiltersOrTransports(prefilters, s, options, jqXHR),
                    completed)
                        return jqXHR;
                    fireGlobals = jQuery.event && s.global,
                    fireGlobals && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"),
                    s.type = s.type.toUpperCase(),
                    s.hasContent = !rnoContent.test(s.type),
                    cacheURL = s.url.replace(rhash, ""),
                    s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(r20, "+")) : (uncached = s.url.slice(cacheURL.length),
                    s.data && (cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data,
                    delete s.data),
                    !1 === s.cache && (cacheURL = cacheURL.replace(rantiCache, "$1"),
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached),
                    s.url = cacheURL + uncached),
                    s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]),
                    jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])),
                    (s.data && s.hasContent && !1 !== s.contentType || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType),
                    jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                    for (i in s.headers)
                        jqXHR.setRequestHeader(i, s.headers[i]);
                    if (s.beforeSend && (!1 === s.beforeSend.call(callbackContext, jqXHR, s) || completed))
                        return jqXHR.abort();
                    if (strAbort = "abort",
                    completeDeferred.add(s.complete),
                    jqXHR.done(s.success),
                    jqXHR.fail(s.error),
                    transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                        if (jqXHR.readyState = 1,
                        fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]),
                        completed)
                            return jqXHR;
                        s.async && s.timeout > 0 && (timeoutTimer = window.setTimeout(function() {
                            jqXHR.abort("timeout")
                        }, s.timeout));
                        try {
                            completed = !1,
                            transport.send(requestHeaders, done)
                        } catch (e) {
                            if (completed)
                                throw e;
                            done(-1, e)
                        }
                    } else
                        done(-1, "No Transport");
                    return jqXHR
                },
                getJSON: function(url, data, callback) {
                    return jQuery.get(url, data, callback, "json")
                },
                getScript: function(url, callback) {
                    return jQuery.get(url, void 0, callback, "script")
                }
            }),
            jQuery.each(["get", "post"], function(i, method) {
                jQuery[method] = function(url, data, callback, type) {
                    return jQuery.isFunction(data) && (type = type || callback,
                    callback = data,
                    data = void 0),
                    jQuery.ajax(jQuery.extend({
                        url: url,
                        type: method,
                        dataType: type,
                        data: data,
                        success: callback
                    }, jQuery.isPlainObject(url) && url))
                }
            }),
            jQuery._evalUrl = function(url) {
                return jQuery.ajax({
                    url: url,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
            ,
            jQuery.fn.extend({
                wrapAll: function(html) {
                    var wrap;
                    return this[0] && (jQuery.isFunction(html) && (html = html.call(this[0])),
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && wrap.insertBefore(this[0]),
                    wrap.map(function() {
                        for (var elem = this; elem.firstElementChild; )
                            elem = elem.firstElementChild;
                        return elem
                    }).append(this)),
                    this
                },
                wrapInner: function(html) {
                    return jQuery.isFunction(html) ? this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i))
                    }) : this.each(function() {
                        var self = jQuery(this)
                          , contents = self.contents();
                        contents.length ? contents.wrapAll(html) : self.append(html)
                    })
                },
                wrap: function(html) {
                    var isFunction = jQuery.isFunction(html);
                    return this.each(function(i) {
                        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                    })
                },
                unwrap: function(selector) {
                    return this.parent(selector).not("body").each(function() {
                        jQuery(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            jQuery.expr.pseudos.hidden = function(elem) {
                return !jQuery.expr.pseudos.visible(elem)
            }
            ,
            jQuery.expr.pseudos.visible = function(elem) {
                return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
            }
            ,
            jQuery.ajaxSettings.xhr = function() {
                try {
                    return new window.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var xhrSuccessStatus = {
                0: 200,
                1223: 204
            }
              , xhrSupported = jQuery.ajaxSettings.xhr();
            support.cors = !!xhrSupported && "withCredentials"in xhrSupported,
            support.ajax = xhrSupported = !!xhrSupported,
            jQuery.ajaxTransport(function(options) {
                var callback, errorCallback;
                if (support.cors || xhrSupported && !options.crossDomain)
                    return {
                        send: function(headers, complete) {
                            var i, xhr = options.xhr();
                            if (xhr.open(options.type, options.url, options.async, options.username, options.password),
                            options.xhrFields)
                                for (i in options.xhrFields)
                                    xhr[i] = options.xhrFields[i];
                            options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType),
                            options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                            for (i in headers)
                                xhr.setRequestHeader(i, headers[i]);
                            callback = function(type) {
                                return function() {
                                    callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null,
                                    "abort" === type ? xhr.abort() : "error" === type ? "number" != typeof xhr.status ? complete(0, "error") : complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                                        binary: xhr.response
                                    } : {
                                        text: xhr.responseText
                                    }, xhr.getAllResponseHeaders()))
                                }
                            }
                            ,
                            xhr.onload = callback(),
                            errorCallback = xhr.onerror = callback("error"),
                            void 0 !== xhr.onabort ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
                                4 === xhr.readyState && window.setTimeout(function() {
                                    callback && errorCallback()
                                })
                            }
                            ,
                            callback = callback("abort");
                            try {
                                xhr.send(options.hasContent && options.data || null)
                            } catch (e) {
                                if (callback)
                                    throw e
                            }
                        },
                        abort: function() {
                            callback && callback()
                        }
                    }
            }),
            jQuery.ajaxPrefilter(function(s) {
                s.crossDomain && (s.contents.script = !1)
            }),
            jQuery.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(text) {
                        return jQuery.globalEval(text),
                        text
                    }
                }
            }),
            jQuery.ajaxPrefilter("script", function(s) {
                void 0 === s.cache && (s.cache = !1),
                s.crossDomain && (s.type = "GET")
            }),
            jQuery.ajaxTransport("script", function(s) {
                if (s.crossDomain) {
                    var script, callback;
                    return {
                        send: function(_, complete) {
                            script = jQuery("<script>").prop({
                                charset: s.scriptCharset,
                                src: s.url
                            }).on("load error", callback = function(evt) {
                                script.remove(),
                                callback = null,
                                evt && complete("error" === evt.type ? 404 : 200, evt.type)
                            }
                            ),
                            document.head.appendChild(script[0])
                        },
                        abort: function() {
                            callback && callback()
                        }
                    }
                }
            });
            var oldCallbacks = []
              , rjsonp = /(=)\?(?=&|$)|\?\?/;
            jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                    return this[callback] = !0,
                    callback
                }
            }),
            jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
                var callbackName, overwritten, responseContainer, jsonProp = !1 !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                if (jsonProp || "jsonp" === s.dataTypes[0])
                    return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback,
                    jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : !1 !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName),
                    s.converters["script json"] = function() {
                        return responseContainer || jQuery.error(callbackName + " was not called"),
                        responseContainer[0]
                    }
                    ,
                    s.dataTypes[0] = "json",
                    overwritten = window[callbackName],
                    window[callbackName] = function() {
                        responseContainer = arguments
                    }
                    ,
                    jqXHR.always(function() {
                        void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten,
                        s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback,
                        oldCallbacks.push(callbackName)),
                        responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]),
                        responseContainer = overwritten = void 0
                    }),
                    "script"
            }),
            support.createHTMLDocument = function() {
                var body = document.implementation.createHTMLDocument("").body;
                return body.innerHTML = "<form></form><form></form>",
                2 === body.childNodes.length
            }(),
            jQuery.parseHTML = function(data, context, keepScripts) {
                if ("string" != typeof data)
                    return [];
                "boolean" == typeof context && (keepScripts = context,
                context = !1);
                var base, parsed, scripts;
                return context || (support.createHTMLDocument ? (context = document.implementation.createHTMLDocument(""),
                base = context.createElement("base"),
                base.href = document.location.href,
                context.head.appendChild(base)) : context = document),
                parsed = rsingleTag.exec(data),
                scripts = !keepScripts && [],
                parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts),
                scripts && scripts.length && jQuery(scripts).remove(),
                jQuery.merge([], parsed.childNodes))
            }
            ,
            jQuery.fn.load = function(url, params, callback) {
                var selector, type, response, self = this, off = url.indexOf(" ");
                return off > -1 && (selector = stripAndCollapse(url.slice(off)),
                url = url.slice(0, off)),
                jQuery.isFunction(params) ? (callback = params,
                params = void 0) : params && "object" == typeof params && (type = "POST"),
                self.length > 0 && jQuery.ajax({
                    url: url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments,
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
                }).always(callback && function(jqXHR, status) {
                    self.each(function() {
                        callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
                    })
                }
                ),
                this
            }
            ,
            jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
                jQuery.fn[type] = function(fn) {
                    return this.on(type, fn)
                }
            }),
            jQuery.expr.pseudos.animated = function(elem) {
                return jQuery.grep(jQuery.timers, function(fn) {
                    return elem === fn.elem
                }).length
            }
            ,
            jQuery.offset = {
                setOffset: function(elem, options, i) {
                    var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                    "static" === position && (elem.style.position = "relative"),
                    curOffset = curElem.offset(),
                    curCSSTop = jQuery.css(elem, "top"),
                    curCSSLeft = jQuery.css(elem, "left"),
                    calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1,
                    calculatePosition ? (curPosition = curElem.position(),
                    curTop = curPosition.top,
                    curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0,
                    curLeft = parseFloat(curCSSLeft) || 0),
                    jQuery.isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))),
                    null != options.top && (props.top = options.top - curOffset.top + curTop),
                    null != options.left && (props.left = options.left - curOffset.left + curLeft),
                    "using"in options ? options.using.call(elem, props) : curElem.css(props)
                }
            },
            jQuery.fn.extend({
                offset: function(options) {
                    if (arguments.length)
                        return void 0 === options ? this : this.each(function(i) {
                            jQuery.offset.setOffset(this, options, i)
                        });
                    var doc, docElem, rect, win, elem = this[0];
                    if (elem)
                        return elem.getClientRects().length ? (rect = elem.getBoundingClientRect(),
                        doc = elem.ownerDocument,
                        docElem = doc.documentElement,
                        win = doc.defaultView,
                        {
                            top: rect.top + win.pageYOffset - docElem.clientTop,
                            left: rect.left + win.pageXOffset - docElem.clientLeft
                        }) : {
                            top: 0,
                            left: 0
                        }
                },
                position: function() {
                    if (this[0]) {
                        var offsetParent, offset, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(),
                        offset = this.offset(),
                        nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()),
                        parentOffset = {
                            top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", !0),
                            left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", !0)
                        }),
                        {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var offsetParent = this.offsetParent; offsetParent && "static" === jQuery.css(offsetParent, "position"); )
                            offsetParent = offsetParent.offsetParent;
                        return offsetParent || documentElement
                    })
                }
            }),
            jQuery.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(method, prop) {
                var top = "pageYOffset" === prop;
                jQuery.fn[method] = function(val) {
                    return access(this, function(elem, method, val) {
                        var win;
                        if (jQuery.isWindow(elem) ? win = elem : 9 === elem.nodeType && (win = elem.defaultView),
                        void 0 === val)
                            return win ? win[prop] : elem[method];
                        win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val
                    }, method, val, arguments.length)
                }
            }),
            jQuery.each(["top", "left"], function(i, prop) {
                jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                    if (computed)
                        return computed = curCSS(elem, prop),
                        rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
                })
            }),
            jQuery.each({
                Height: "height",
                Width: "width"
            }, function(name, type) {
                jQuery.each({
                    padding: "inner" + name,
                    content: type,
                    "": "outer" + name
                }, function(defaultExtra, funcName) {
                    jQuery.fn[funcName] = function(margin, value) {
                        var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin)
                          , extra = defaultExtra || (!0 === margin || !0 === value ? "margin" : "border");
                        return access(this, function(elem, type, value) {
                            var doc;
                            return jQuery.isWindow(elem) ? 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement,
                            Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                        }, type, chainable ? margin : void 0, chainable)
                    }
                })
            }),
            jQuery.fn.extend({
                bind: function(types, data, fn) {
                    return this.on(types, null, data, fn)
                },
                unbind: function(types, fn) {
                    return this.off(types, null, fn)
                },
                delegate: function(selector, types, data, fn) {
                    return this.on(types, selector, data, fn)
                },
                undelegate: function(selector, types, fn) {
                    return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn)
                }
            }),
            jQuery.holdReady = function(hold) {
                hold ? jQuery.readyWait++ : jQuery.ready(!0)
            }
            ,
            jQuery.isArray = Array.isArray,
            jQuery.parseJSON = JSON.parse,
            jQuery.nodeName = nodeName,
            __WEBPACK_AMD_DEFINE_ARRAY__ = [],
            void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return jQuery
            }
            .apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            var _jQuery = window.jQuery
              , _$ = window.$;
            return jQuery.noConflict = function(deep) {
                return window.$ === jQuery && (window.$ = _$),
                deep && window.jQuery === jQuery && (window.jQuery = _jQuery),
                jQuery
            }
            ,
            noGlobal || (window.jQuery = window.$ = jQuery),
            jQuery
        })
    },
    24: function(module, exports, __webpack_require__) {
        __webpack_require__(170),
        module.exports = angular
    },
    279: function(module, exports, __webpack_require__) {
        __webpack_require__(9),
        module.exports = __webpack_require__(24)
    },
    55: function(module, exports) {
        var g;
        g = function() {
            return this
        }();
        try {
            g = g || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (g = window)
        }
        module.exports = g
    },
    9: function(module, exports, __webpack_require__) {
        (function(global) {
            module.exports = global.$ = __webpack_require__(171)
        }
        ).call(exports, __webpack_require__(55))
    }
});
