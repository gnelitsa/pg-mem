(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asView = exports.asSelectable = exports.asTable = exports.asSeq = exports.asType = exports.asIndex = exports.NewColumn = exports.EmtpyTable = exports.setId = exports.getId = exports.GLOBAL_VARS = void 0;
const interfaces_1 = __webpack_require__(2);
const immutable_1 = __webpack_require__(16);
__exportStar(__webpack_require__(2), exports);
exports.GLOBAL_VARS = Symbol('_global_vars');
// export type PrimaryKey = string | number;
const ID = Symbol('_id');
function getId(item) {
    if (!item) {
        return '';
    }
    const got = item[ID];
    if (!got) {
        throw new Error('Unexpected: cannot get an ID of something which is not a record');
    }
    return got;
}
exports.getId = getId;
function setId(item, id) {
    const got = item[ID];
    if (got === id) {
        return item;
    }
    if (got) {
        throw new Error('Unexpected: Cannot update an ID');
    }
    item[ID] = id;
    return item;
}
exports.setId = setId;
exports.EmtpyTable = (0, immutable_1.Record)({
    serials: (0, immutable_1.Map)(),
    it: 0,
    indexByHash: (0, immutable_1.Map)(),
    indexByName: (0, immutable_1.Map)(),
    columnsByName: (0, immutable_1.Map)(),
});
exports.NewColumn = (0, immutable_1.Record)({
    default: null,
    notNull: false,
    usedInIndexes: (0, immutable_1.Set)(),
    type: null,
    name: null,
});
function asIndex(o) {
    if (!o) {
        return null;
    }
    if (o.type === 'index') {
        return o;
    }
    throw new interfaces_1.QueryError(`"${o.name}" is not an index`);
}
exports.asIndex = asIndex;
function asType(o) {
    if (!o) {
        return null;
    }
    if (o.type === 'type') {
        return o;
    }
    throw new interfaces_1.QueryError(`"${o.name}" is not a type`);
}
exports.asType = asType;
function asSeq(o) {
    if (!o) {
        return null;
    }
    if (o.type === 'sequence') {
        return o;
    }
    throw new interfaces_1.QueryError(`"${o.name}" is not a sequence`);
}
exports.asSeq = asSeq;
function asTable(o, nullIfNotType) {
    if (!o) {
        return null;
    }
    if (o.type === 'table') {
        return o;
    }
    if (nullIfNotType) {
        return null;
    }
    throw new interfaces_1.QueryError(`"${o.name}" is not a table`);
}
exports.asTable = asTable;
function asSelectable(o, nullIfNotType) {
    if (!o) {
        return null;
    }
    if (o.type === 'table' || o.type === 'view') {
        return o;
    }
    if (nullIfNotType) {
        return null;
    }
    throw new interfaces_1.QueryError(`"${o.name}" is not selectable`);
}
exports.asSelectable = asSelectable;
function asView(o, nullIfNotType) {
    if (!o) {
        return null;
    }
    if (o.type === 'view') {
        return o;
    }
    if (nullIfNotType) {
        return null;
    }
    throw new interfaces_1.QueryError({
        code: '42809',
        error: `"${o.name}" is not a view`,
    });
}
exports.asView = asView;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyIfNecessary = exports.notNil = exports.fromEntries = exports.IteratorHelper = exports.it = exports.errorMessage = exports.asSingleQName = exports.asSingleName = exports.qnameToStr = exports.colToStr = exports.colByName = exports.parseTime = exports.parseRegClass = exports.intervalToSec = exports.compareVersions = exports.findTemplate = exports.suggestColumnName = exports.isType = exports.schemaOf = exports.randomString = exports.indexHash = exports.pushExecutionCtx = exports.hasExecutionCtx = exports.executionCtx = exports.combineSubs = exports.ignore = exports.isSelectAllArgList = exports.deepCloneSimple = exports.sum = exports.hasNullish = exports.nullIsh = exports.buildLikeMatcher = exports.queryJson = exports.deepCompare = exports.deepEqual = exports.watchUse = exports.trimNullish = void 0;
const moment_1 = __importDefault(__webpack_require__(17));
const immutable_1 = __webpack_require__(16);
const interfaces_private_1 = __webpack_require__(0);
const pgsql_ast_parser_1 = __webpack_require__(12);
const interfaces_1 = __webpack_require__(2);
const buffer_node_1 = __webpack_require__(21);
function trimNullish(value, depth = 5) {
    if (depth < 0)
        return value;
    if (value instanceof Array) {
        value.forEach((x) => trimNullish(x, depth - 1));
    }
    if (typeof value !== "object" ||
        value instanceof Date ||
        moment_1.default.isMoment(value) ||
        moment_1.default.isDuration(value))
        return value;
    if (!value) {
        return value;
    }
    for (const k of Object.keys(value)) {
        const val = value[k];
        if (nullIsh(val))
            delete value[k];
        else
            trimNullish(val, depth - 1);
    }
    return value;
}
exports.trimNullish = trimNullish;
function watchUse(rootValue) {
    var _c, _d;
    if (!rootValue ||
        (typeof globalThis !== "undefined" &&
            ((_d = (_c = globalThis === null || globalThis === void 0 ? void 0 : globalThis.process) === null || _c === void 0 ? void 0 : _c.env) === null || _d === void 0 ? void 0 : _d["NOCHECKFULLQUERYUSAGE"]) === "true")) {
        return { checked: rootValue };
    }
    if (typeof rootValue !== "object") {
        throw new interfaces_private_1.NotSupported();
    }
    if (Array.isArray(rootValue)) {
        throw new interfaces_private_1.NotSupported();
    }
    const toUse = new Map();
    function recurse(value, stack = (0, immutable_1.List)()) {
        if (!value || typeof value !== "object") {
            return value;
        }
        if (Array.isArray(value)) {
            return value.map((x, i) => recurse(x, stack.push(`[${i}]`)));
        }
        // watch object
        const ret = {};
        for (const [k, _v] of Object.entries(value)) {
            if (k[0] === "_") {
                // ignore properties starting with '_'
                ret[k] = _v;
                continue;
            }
            const nstack = stack.push("." + k);
            let v = recurse(_v, nstack);
            const nstackKey = nstack.join("");
            toUse.set(nstackKey, _v);
            Object.defineProperty(ret, k, {
                get() {
                    toUse.delete(nstackKey);
                    return v;
                },
                enumerable: true,
            });
        }
        return ret;
    }
    const final = recurse(rootValue);
    const check = function () {
        if (toUse.size) {
            return (`The query you ran generated an AST which parts have not been read by the query planner. \
This means that those parts could be ignored:

    ⇨ ` +
                [...toUse.entries()]
                    .map(([k, v]) => k + " (" + JSON.stringify(v) + ")")
                    .join("\n    ⇨ "));
        }
        return null;
    };
    return { checked: final, check };
}
exports.watchUse = watchUse;
function deepEqual(a, b, strict, depth = 10, numberDelta = 0.0001) {
    return deepCompare(a, b, strict, depth, numberDelta) === 0;
}
exports.deepEqual = deepEqual;
function deepCompare(a, b, strict, depth = 10, numberDelta = 0.0001) {
    if (depth < 0) {
        throw new interfaces_private_1.NotSupported("Comparing too deep entities");
    }
    if (a === b) {
        return 0;
    }
    if (!strict) {
        // should not use '==' because it could call .toString() on objects when compared to strings.
        // ... which is not ok. Especially when working with translatable objects, which .toString() returns a transaltion (a string, thus)
        if (!a && !b) {
            return 0;
        }
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
            return -1; // [] < {}
        }
        if (a.length !== b.length) {
            return a.length > b.length ? 1 : -1;
        }
        for (let i = 0; i < a.length; i++) {
            const inner = deepCompare(a[i], b[i], strict, depth - 1, numberDelta);
            if (inner)
                return inner;
        }
        return 0;
    }
    if (Array.isArray(b)) {
        return 1;
    }
    if ((0, buffer_node_1.isBuf)(a) || (0, buffer_node_1.isBuf)(b)) {
        if (!(0, buffer_node_1.isBuf)(a)) {
            return 1;
        }
        if (!(0, buffer_node_1.isBuf)(b)) {
            return -1;
        }
        return (0, buffer_node_1.bufCompare)(a, b);
    }
    // handle dates
    if (a instanceof Date ||
        b instanceof Date ||
        moment_1.default.isMoment(a) ||
        moment_1.default.isMoment(b)) {
        let am;
        let bm;
        if (a instanceof Date || b instanceof Date) {
            am = (0, moment_1.default)(a);
            bm = (0, moment_1.default)(b);
        }
        else {
            am = (0, moment_1.default)(a);
            bm = (0, moment_1.default)(b);
        }
        if (am.isValid() !== bm.isValid()) {
            return am.isValid() ? -1 : 1;
        }
        const diff = am.diff(bm, "seconds");
        if (Math.abs(diff) < 0.001) {
            return 0;
        }
        return diff > 0 ? 1 : -1;
    }
    // handle durations
    if (moment_1.default.isDuration(a) || moment_1.default.isDuration(b)) {
        const da = moment_1.default.duration(a);
        const db = moment_1.default.duration(b);
        if (da.isValid() !== db.isValid()) {
            return da.isValid() ? -1 : 1;
        }
        const diff = da.asMilliseconds() - db.asMilliseconds();
        if (Math.abs(diff) < 1) {
            return 0;
        }
        return diff > 0 ? 1 : -1;
    }
    const fa = Number.isFinite(a);
    const fb = Number.isFinite(b);
    if (fa && fb) {
        if (Math.abs(a - b) <= numberDelta) {
            return 0;
        }
        return a > b ? 1 : -1;
    }
    else if (fa && b) {
        return -1;
    }
    else if (fb && a) {
        return 1;
    }
    // === handle plain objects
    if (typeof a !== "object") {
        return 1; // objects are at the end
    }
    if (typeof b !== "object") {
        return -1; // objects are at the end
    }
    if (!a || !b) {
        return 0; // nulls
    }
    const ak = Object.keys(a);
    const bk = Object.keys(b);
    if (strict && ak.length !== bk.length) {
        // longer objects at the end
        return ak.length > bk.length ? 1 : -1;
    }
    const set = strict
        ? Object.keys(a)
        : new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of set) {
        const inner = deepCompare(a[k], b[k], strict, depth - 1, numberDelta);
        if (inner) {
            return inner;
        }
    }
    return 0;
}
exports.deepCompare = deepCompare;
function queryJson(a, b) {
    if (!a || !b) {
        return (a !== null && a !== void 0 ? a : null) === (b !== null && b !== void 0 ? b : null);
    }
    if (a === b) {
        return true;
    }
    if (typeof a === "string" || typeof b === "string") {
        return false;
    }
    if (typeof a === "number" || typeof b === "number") {
        return false;
    }
    if (Array.isArray(a)) {
        // expecting array
        if (!Array.isArray(b)) {
            return false;
        }
        // => must match all those criteria
        const toMatch = [...a];
        for (const be of b) {
            for (let i = 0; i < toMatch.length; i++) {
                if (queryJson(toMatch[i], be)) {
                    // matched this criteria
                    toMatch.splice(i, 1);
                    break;
                }
            }
            if (!toMatch.length) {
                break;
            }
        }
        return !toMatch.length;
    }
    if (Array.isArray(b)) {
        return false;
    }
    if ((typeof a === "object") !== (typeof b === "object")) {
        return false;
    }
    const akeys = Object.keys(a);
    const bkeys = Object.keys(b);
    if (akeys.length > bkeys.length) {
        return false;
    }
    for (const ak of akeys) {
        if (!(ak in b)) {
            return false;
        }
        if (!queryJson(a[ak], b[ak])) {
            return false;
        }
    }
    return true;
}
exports.queryJson = queryJson;
function buildLikeMatcher(likeCondition, caseSensitive = true) {
    // Escape regex characters from likeCondition
    likeCondition = likeCondition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    let likeRegexString = likeCondition.replace(/\%/g, ".*").replace(/_/g, ".");
    likeRegexString = "^" + likeRegexString + "$";
    const reg = new RegExp(likeRegexString, caseSensitive ? "" : "i");
    return (stringToMatch) => {
        if (nullIsh(stringToMatch)) {
            return null;
        }
        if (typeof stringToMatch != "string") {
            stringToMatch = stringToMatch.toString();
        }
        return reg.test(stringToMatch);
    };
}
exports.buildLikeMatcher = buildLikeMatcher;
function nullIsh(v) {
    return v === null || v === undefined;
}
exports.nullIsh = nullIsh;
function hasNullish(...vals) {
    return vals.some((v) => nullIsh(v));
}
exports.hasNullish = hasNullish;
function sum(v) {
    return v.reduce((sum, el) => sum + el, 0);
}
exports.sum = sum;
function deepCloneSimple(v) {
    if (!v || typeof v !== "object" || v instanceof Date) {
        return v;
    }
    if (Array.isArray(v)) {
        return v.map((x) => deepCloneSimple(x));
    }
    if ((0, buffer_node_1.isBuf)(v)) {
        return (0, buffer_node_1.bufClone)(v);
    }
    const ret = {};
    for (const k of Object.keys(v)) {
        ret[k] = deepCloneSimple(v[k]);
    }
    for (const k of Object.getOwnPropertySymbols(v)) {
        ret[k] = v[k]; // no need to deep clone that
    }
    return ret;
}
exports.deepCloneSimple = deepCloneSimple;
function isSelectAllArgList(select) {
    const [first] = select;
    return (select.length === 1 &&
        first.type === "ref" &&
        first.name === "*" &&
        !first.table);
}
exports.isSelectAllArgList = isSelectAllArgList;
function ignore(...val) {
    for (const v of val) {
        if (!v) {
            continue;
        }
        if (Array.isArray(v)) {
            ignore(...v);
            continue;
        }
        if (typeof v !== "object") {
            continue;
        }
        ignore(...Object.values(v));
    }
}
exports.ignore = ignore;
function combineSubs(...vals) {
    return {
        unsubscribe: () => {
            vals.forEach((u) => u === null || u === void 0 ? void 0 : u.unsubscribe());
        },
    };
}
exports.combineSubs = combineSubs;
const curCtx = [];
function executionCtx() {
    if (!curCtx.length) {
        throw new Error("No execution context available");
    }
    return curCtx[curCtx.length - 1];
}
exports.executionCtx = executionCtx;
function hasExecutionCtx() {
    return curCtx.length > 0;
}
exports.hasExecutionCtx = hasExecutionCtx;
function pushExecutionCtx(ctx, act) {
    try {
        curCtx.push(ctx);
        return act();
    }
    finally {
        curCtx.pop();
    }
}
exports.pushExecutionCtx = pushExecutionCtx;
function indexHash(vals) {
    return vals
        .map((x) => (typeof x === "string" ? x : x.hash))
        .sort()
        .join("|");
}
exports.indexHash = indexHash;
function randomString(length = 8, chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    var result = "";
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
exports.randomString = randomString;
function schemaOf(t) {
    if (t.kind === "array") {
        return schemaOf(t.arrayOf);
    }
    return t.schema;
}
exports.schemaOf = schemaOf;
function isType(t) {
    return !!(t === null || t === void 0 ? void 0 : t[isType.TAG]);
}
exports.isType = isType;
isType.TAG = Symbol();
function suggestColumnName(expr) {
    if (!expr) {
        return null;
    }
    // suggest a column result name
    switch (expr.type) {
        case "call":
            return expr.function.name;
        case "ref":
            return expr.name;
        case "keyword":
            return expr.keyword;
        case "cast":
            return (0, interfaces_1.typeDefToStr)(expr.to);
    }
    return null;
}
exports.suggestColumnName = suggestColumnName;
function findTemplate(selection, t, template, columns) {
    // === Build an SQL AST expression that matches
    // this template
    let expr;
    for (const [k, v] of Object.entries(template !== null && template !== void 0 ? template : {})) {
        let right;
        if (nullIsh(v)) {
            // handle { myprop: null }
            right = {
                type: "unary",
                op: "IS NULL",
                operand: {
                    type: "ref",
                    name: k,
                },
            };
        }
        else {
            let value;
            let op = "=";
            switch (typeof v) {
                case "number":
                    // handle {myprop: 42}
                    value = Number.isInteger(v)
                        ? { type: "integer", value: v }
                        : { type: "numeric", value: v };
                    break;
                case "string":
                    // handle {myprop: 'blah'}
                    value = { type: "string", value: v };
                    break;
                case "object":
                    // handle {myprop: new Date()}
                    if (moment_1.default.isMoment(v)) {
                        value = { type: "string", value: v.toISOString() };
                    }
                    else if (v instanceof Date) {
                        value = { type: "string", value: (0, moment_1.default)(v).toISOString() };
                    }
                    else {
                        // handle {myprop: {obj: "test"}}
                        op = "@>";
                        value = {
                            type: "string",
                            value: JSON.stringify(v),
                        };
                    }
                    break;
                default:
                    throw new Error(`Object type of property "${k}" not supported in template`);
            }
            right = {
                type: "binary",
                op,
                left: {
                    type: "ref",
                    name: k,
                },
                right: value,
            };
        }
        expr = !expr
            ? right
            : {
                type: "binary",
                op: "AND",
                left: expr,
                right,
            };
    }
    // === perform filter
    let ret = selection.filter(expr);
    if (columns) {
        ret = ret.select(columns.map((x) => ({
            expr: { type: "ref", name: x },
        })));
    }
    return ret.enumerate(t);
}
exports.findTemplate = findTemplate;
function ver(v) {
    if (!v || !/^\d+(\.\d+)+$/.test(v)) {
        throw new Error("Invalid semver " + v);
    }
    return v.split(/\./g).map((x) => parseInt(x, 10));
}
function compareVersions(_a, _b) {
    const a = ver(_a);
    const b = ver(_b);
    const m = Math.max(a.length, b.length);
    for (let i = 0; i < m; i++) {
        const d = (b[i] || 0) - (a[i] || 0);
        if (d !== 0) {
            return d;
        }
    }
    return 0;
}
exports.compareVersions = compareVersions;
function intervalToSec(v) {
    var _c, _d, _e, _f, _g, _h, _j;
    return (((_c = v.milliseconds) !== null && _c !== void 0 ? _c : 0) / 1000 +
        ((_d = v.seconds) !== null && _d !== void 0 ? _d : 0) +
        ((_e = v.minutes) !== null && _e !== void 0 ? _e : 0) * 60 +
        ((_f = v.hours) !== null && _f !== void 0 ? _f : 0) * 3600 +
        ((_g = v.days) !== null && _g !== void 0 ? _g : 0) * 3600 * 24 +
        ((_h = v.months) !== null && _h !== void 0 ? _h : 0) * 3600 * 24 * 30 +
        ((_j = v.years) !== null && _j !== void 0 ? _j : 0) * 3600 * 24 * 30 * 12);
}
exports.intervalToSec = intervalToSec;
function parseRegClass(_reg) {
    let reg = _reg;
    if (typeof reg === "string" && /^\d+$/.test(reg)) {
        reg = parseInt(reg);
    }
    if (typeof reg === "number") {
        return reg;
    }
    // todo remove casts after next pgsql-ast-parser release
    try {
        const ret = (0, pgsql_ast_parser_1.parse)(reg, "qualified_name");
        return ret;
    }
    catch (e) {
        return { name: reg };
    }
}
exports.parseRegClass = parseRegClass;
const timeReg = /^(\d+):(\d+)(:(\d+))?(\.\d+)?$/;
function parseTime(str) {
    var _c;
    const [_, a, b, __, c, d] = (_c = timeReg.exec(str)) !== null && _c !== void 0 ? _c : [];
    if (!_) {
        throw new interfaces_1.QueryError(`Invalid time format: ` + str);
    }
    const ms = d ? parseFloat(d) * 1000 : undefined;
    let ret;
    if (c) {
        ret = moment_1.default.utc({
            h: parseInt(a, 10),
            m: parseInt(b, 10),
            s: parseInt(c, 10),
            ms,
        });
    }
    else {
        if (d) {
            ret = moment_1.default.utc({
                m: parseInt(a, 10),
                s: parseInt(b, 10),
                ms,
            });
        }
        else {
            ret = moment_1.default.utc({
                h: parseInt(a, 10),
                m: parseInt(b, 10),
                ms,
            });
        }
    }
    if (!ret.isValid()) {
        throw new interfaces_1.QueryError(`Invalid time format: ` + str);
    }
    return ret;
}
exports.parseTime = parseTime;
function colByName(refs, ref, nullIfNotFound) {
    const nm = typeof ref === "string" ? ref : !ref.table ? ref.name : null;
    const got = nm ? refs.get(nm) : null;
    if (!got && !nullIfNotFound) {
        throw new interfaces_1.ColumnNotFound(colToStr(ref));
    }
    return got;
}
exports.colByName = colByName;
function colToStr(col) {
    if (typeof col === "string") {
        return col;
    }
    if (!col.table) {
        return col.name;
    }
    return col.table.name + "." + col.name;
}
exports.colToStr = colToStr;
function qnameToStr(col) {
    if (typeof col === "string") {
        return col;
    }
    if (!col.schema) {
        return col.name;
    }
    return col.schema + "." + col.name;
}
exports.qnameToStr = qnameToStr;
function asSingleName(col) {
    if (typeof col === "string") {
        return col;
    }
    if (col.table) {
        return null;
    }
    return col.name;
}
exports.asSingleName = asSingleName;
function asSingleQName(col, allowedSchema) {
    if (typeof col === "string") {
        return col;
    }
    if (col.schema && col.schema !== allowedSchema) {
        return null;
    }
    return col.name;
}
exports.asSingleQName = asSingleQName;
function errorMessage(error) {
    if (typeof error === "string") {
        return error;
    }
    if (typeof error !== "object") {
        return "Unkown error message";
    }
    return error === null || error === void 0 ? void 0 : error.message;
}
exports.errorMessage = errorMessage;
function it(iterable) {
    return iterable instanceof IteratorHelper
        ? iterable
        : new IteratorHelper(() => iterable);
}
exports.it = it;
class IteratorHelper {
    constructor(underlying) {
        this.underlying = underlying;
    }
    [Symbol.iterator]() {
        return this.underlying()[Symbol.iterator]();
    }
    flatten() {
        const that = this;
        function* wrap() {
            var _c;
            for (const v of (_c = that.underlying()) !== null && _c !== void 0 ? _c : []) {
                for (const x of v) {
                    yield x;
                }
            }
        }
        return new IteratorHelper(wrap);
    }
    reduce(callbackfn, initialValue) {
        let acc = initialValue;
        let i = 0;
        for (const v of this.underlying()) {
            acc = callbackfn(acc, v, i);
            i++;
        }
        return acc;
    }
}
exports.IteratorHelper = IteratorHelper;
function fromEntries(iterable) {
    const ret = new Map();
    for (const [k, v] of iterable) {
        ret.set(k, v);
    }
    return ret;
}
exports.fromEntries = fromEntries;
function notNil(value) {
    return (value !== null && value !== void 0 ? value : []).filter((x) => !nullIsh(x));
}
exports.notNil = notNil;
/** Modify an array if necessary */
function modifyIfNecessary(values, mapper) {
    let ret;
    for (let i = 0; i < values.length; i++) {
        const mapped = mapper(values[i]);
        if (nullIsh(mapped)) {
            continue;
        }
        if (!ret) {
            ret = [...values];
        }
        ret[i] = mapped;
    }
    return ret !== null && ret !== void 0 ? ret : values;
}
exports.modifyIfNecessary = modifyIfNecessary;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefToStr = exports.PermissionDeniedError = exports.RecordExists = exports.TypeNotFound = exports.RelationNotFound = exports.AmbiguousColumn = exports.ColumnNotFound = exports.CastError = exports.QueryError = exports.NotSupported = exports.AdvancedResult = exports.DataType = void 0;
// todo support all types https://www.postgresql.org/docs/9.5/datatype.html
var DataType;
(function (DataType) {
    DataType["inet"] = "inet";
    DataType["record"] = "record";
    DataType["uuid"] = "uuid";
    DataType["text"] = "text";
    DataType["citext"] = "citext";
    DataType["array"] = "array";
    DataType["list"] = "list";
    DataType["bigint"] = "bigint";
    DataType["float"] = "float";
    DataType["decimal"] = "decimal";
    DataType["integer"] = "integer";
    DataType["jsonb"] = "jsonb";
    DataType["regtype"] = "regtype";
    DataType["regclass"] = "regclass";
    DataType["json"] = "json";
    DataType["bytea"] = "bytea";
    DataType["interval"] = "interval";
    DataType["timestamp"] = "timestamp";
    DataType["timestamptz"] = "timestamptz";
    DataType["date"] = "date";
    DataType["time"] = "time";
    DataType["timetz"] = "timetz";
    DataType["null"] = "null";
    DataType["bool"] = "bool";
    DataType["point"] = "point";
    DataType["line"] = "line";
    DataType["lseg"] = "lseg";
    DataType["box"] = "box";
    DataType["path"] = "path";
    DataType["polygon"] = "polygon";
    DataType["circle"] = "circle";
})(DataType = exports.DataType || (exports.DataType = {}));
class AdvancedResult {
    constructor(result, outArgs) {
        this.result = result;
    }
}
exports.AdvancedResult = AdvancedResult;
class NotSupported extends Error {
    constructor(what) {
        super('🔨 Not supported 🔨 ' + (what ? ': ' + what : ''));
    }
    static never(value, msg) {
        return new NotSupported(`${msg !== null && msg !== void 0 ? msg : ''} ${JSON.stringify(value)}`);
    }
}
exports.NotSupported = NotSupported;
class QueryError extends Error {
    constructor(err, code) {
        super(typeof err === 'string' ? err : errDataToStr(err));
        this.data = typeof err === 'string'
            ? { error: err, code }
            : err;
    }
}
exports.QueryError = QueryError;
function errDataToStr(data) {
    const ret = ['ERROR: ' + data.error];
    if (data.details) {
        ret.push('DETAIL: ' + data.details);
    }
    if (data.hint) {
        ret.push('HINT: ' + data.hint);
    }
    return ret.join('\n');
}
class CastError extends QueryError {
    constructor(from, to, inWhat) {
        super(`cannot cast type ${typeof from === 'string'
            ? from
            : from.name} to ${typeof to === 'string'
            ? to
            : to.name}`
            + (inWhat ? ' in ' + inWhat : ''));
    }
}
exports.CastError = CastError;
class ColumnNotFound extends QueryError {
    constructor(col) {
        super(`column "${col}" does not exist`);
    }
}
exports.ColumnNotFound = ColumnNotFound;
class AmbiguousColumn extends QueryError {
    constructor(col) {
        super(`column reference "${col}" is ambiguous`);
    }
}
exports.AmbiguousColumn = AmbiguousColumn;
class RelationNotFound extends QueryError {
    constructor(tableName) {
        super(`relation "${tableName}" does not exist`);
    }
}
exports.RelationNotFound = RelationNotFound;
class TypeNotFound extends QueryError {
    constructor(t) {
        super(`type "${typeof t !== 'object' ? t : typeDefToStr(t)}" does not exist`);
    }
}
exports.TypeNotFound = TypeNotFound;
class RecordExists extends QueryError {
    constructor() {
        super('Records already exists');
    }
}
exports.RecordExists = RecordExists;
class PermissionDeniedError extends QueryError {
    constructor(what) {
        super(what
            ? `permission denied: "${what}" is a system catalog`
            : 'permission denied');
    }
}
exports.PermissionDeniedError = PermissionDeniedError;
function typeDefToStr(t) {
    var _a;
    if (t.kind === 'array') {
        return typeDefToStr(t.arrayOf) + '[]';
    }
    let ret = t.name;
    if (t.schema) {
        ret = t.schema + '.' + ret;
    }
    if ((_a = t.config) === null || _a === void 0 ? void 0 : _a.length) {
        ret = ret + '(' + t.config.join(',') + ')';
    }
    return ret;
}
exports.typeDefToStr = typeDefToStr;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveName = exports.withNameResolver = exports.withParameters = exports.withBindingScope = exports.withStatement = exports.withSelection = exports.buildCtx = void 0;
const interfaces_private_1 = __webpack_require__(0);
class StackOf {
    constructor(name) {
        this.name = name;
        this.stack = [];
        this.usingValue = (value, act) => {
            this.stack.push(value);
            try {
                return act();
            }
            finally {
                this.stack.pop();
            }
        };
    }
    get current() {
        if (!this.stack.length) {
            throw new Error(`No ${this.name} available`);
        }
        return this.stack[this.stack.length - 1];
    }
    get currentOrNil() {
        return this.stack[this.stack.length - 1];
    }
}
const _selectionStack = new StackOf('build context');
const _statementStack = new StackOf('execution statement');
const _tempBindings = new StackOf('binding context');
const _parametersStack = new StackOf('parameter context');
const _nameResolver = new StackOf('name resolver');
class Context {
    constructor() {
        this.onFinishExecution = (callback) => {
            _statementStack.current.onExecuted(callback);
        };
        this.getTempBinding = (name) => {
            var _a;
            const ret = (_a = _tempBindings.currentOrNil) === null || _a === void 0 ? void 0 : _a.get(name);
            if (ret === 'no returning') {
                throw new interfaces_private_1.QueryError(`WITH query "${name}" does not have a RETURNING clause`);
            }
            return ret;
        };
        this.setTempBinding = (name, boundTo) => {
            if (_tempBindings.current.has(name)) {
                throw new interfaces_private_1.QueryError(`WITH query name "${name}" specified more than once`);
            }
            _tempBindings.current.set(name, boundTo.isExecutionWithNoResult ? 'no returning' : boundTo);
        };
        this.getParameter = (nameOrPosition) => {
            var _a, _b;
            const params = _parametersStack.currentOrNil;
            if (!params) {
                return null;
            }
            if (typeof nameOrPosition === 'number') {
                const ret = (_a = params[nameOrPosition]) === null || _a === void 0 ? void 0 : _a.value;
                if (!ret) {
                    // not ideal... (duplicated error message)
                    throw new interfaces_private_1.QueryError(`bind message supplies ${params.length} parameters, but prepared statement "" requires ${nameOrPosition}`, '08P01');
                }
                return ret;
            }
            return (_b = params.find(p => p.value.id === nameOrPosition)) === null || _b === void 0 ? void 0 : _b.value;
        };
    }
    get selection() {
        return _selectionStack.current;
    }
    get db() {
        return _selectionStack.current.db;
    }
    get schema() {
        // remove the concept of selection schema ?
        // (does not make much sens, if you think about it)
        return _selectionStack.current.ownerSchema;
    }
}
const _buildCtx = new Context();
function buildCtx() {
    return _buildCtx;
}
exports.buildCtx = buildCtx;
exports.withSelection = _selectionStack.usingValue;
exports.withStatement = _statementStack.usingValue;
function withBindingScope(act) {
    return _tempBindings.usingValue(new Map(), act);
}
exports.withBindingScope = withBindingScope;
exports.withParameters = _parametersStack.usingValue;
exports.withNameResolver = _nameResolver.usingValue;
function resolveName(name) {
    for (let i = _nameResolver.stack.length - 1; i >= 0; i--) {
        const resolver = _nameResolver.stack[i];
        const found = resolver.resolve(name);
        if (found) {
            return found;
        }
        if (resolver.isolated) {
            return null;
        }
    }
    return null;
}
exports.resolveName = resolveName;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterBase = exports.TransformBase = exports.DataSourceBase = exports.initialize = void 0;
const restrictive_index_1 = __webpack_require__(48);
let fns;
function initialize(init) {
    fns = init;
}
exports.initialize = initialize;
class DataSourceBase {
    constructor(ownerSchema) {
        this.ownerSchema = ownerSchema;
    }
    isAggregation() {
        return false;
    }
    // abstract get name(): string;
    get db() {
        return this.ownerSchema.db;
    }
    listColumns() {
        return this.columns;
    }
    listSelectableIdentities() {
        return this.columns;
    }
    select(select) {
        let sel;
        if (select === null || select === void 0 ? void 0 : select.some(v => typeof v === 'string')) {
            sel = select.map(v => typeof v !== 'string'
                ? v
                : {
                    expr: { type: 'ref', name: v },
                });
        }
        else {
            sel = select;
        }
        return fns.buildSelection(this, sel);
    }
    selectAlias(alias) {
        return null;
    }
    filter(filter) {
        if (!filter) {
            return this;
        }
        const plan = fns.buildFilter(this, filter, 'WHERE');
        return plan;
    }
    groupBy(grouping) {
        if (!(grouping === null || grouping === void 0 ? void 0 : grouping.length)) {
            return this;
        }
        const plan = fns.buildGroupBy(this, grouping);
        return plan;
    }
    setAlias(alias) {
        return fns.buildAlias(this, alias);
    }
    limit(limit) {
        if (!(limit === null || limit === void 0 ? void 0 : limit.limit) && !(limit === null || limit === void 0 ? void 0 : limit.offset)) {
            return this;
        }
        return fns.buildLimit(this, limit);
    }
    orderBy(orderBy) {
        if (!(orderBy === null || orderBy === void 0 ? void 0 : orderBy.length)) {
            return this;
        }
        return fns.buildOrderBy(this, orderBy);
    }
    distinct(exprs) {
        return fns.buildDistinct(this, exprs);
    }
    union(right) {
        return fns.buildUnion(this, right);
    }
}
exports.DataSourceBase = DataSourceBase;
class TransformBase extends DataSourceBase {
    constructor(base) {
        super(base.ownerSchema);
        this.base = base;
    }
    get isExecutionWithNoResult() {
        return false;
    }
    entropy(t) {
        return this.base.entropy(t);
    }
    isOriginOf(a) {
        var _a;
        return a.origin === this || ((_a = this.base) === null || _a === void 0 ? void 0 : _a.isOriginOf(a));
    }
}
exports.TransformBase = TransformBase;
class FilterBase extends TransformBase {
    isAggregation() {
        return false;
    }
    constructor(_base) {
        super(_base);
    }
    get columns() {
        return this.base.columns;
    }
    selectAlias(alias) {
        // this is a filter... that the alias returned by the unfiltered datasource will
        // be valid for the filtered datasource (aliases are only listing columns)
        return this.base.selectAlias(alias);
    }
    getColumn(column, nullIfNotFound) {
        if (!this.base) { // istanbul ignore next
            throw new Error('Should not call .getColumn() on join');
        }
        if (!('columns' in this.base)) { // istanbul ignore next
            throw new Error('Should not call getColumn() on table');
        }
        return this.base.getColumn(column, nullIfNotFound);
    }
    getIndex(...forValue) {
        const index = this.base.getIndex(...forValue);
        if (!index) {
            return null;
        }
        return new restrictive_index_1.RestrictiveIndex(index, this);
    }
}
exports.FilterBase = FilterBase;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlSubstring = exports.buildBinaryValue = exports.uncache = exports.buildValue = void 0;
const utils_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
const object_hash_1 = __importDefault(__webpack_require__(15));
const evaluator_1 = __webpack_require__(10);
const datatypes_1 = __webpack_require__(3);
const lru_cache_1 = __importDefault(__webpack_require__(22));
const aggregation_1 = __webpack_require__(23);
const moment_1 = __importDefault(__webpack_require__(17));
const clean_results_1 = __webpack_require__(18);
const context_1 = __webpack_require__(4);
const select_1 = __webpack_require__(13);
const builtLru = new lru_cache_1.default({
    max: 30,
});
function buildValue(val) {
    const ret = _buildValue(val);
    checkNotUntypedArray(ret);
    return ret;
}
exports.buildValue = buildValue;
function checkNotUntypedArray(value) {
    // A bit ugly: check that this is not a non typed array (empty array)
    // see https://github.com/oguimbal/pg-mem/issues/64
    // + corresponding UTs
    const type = value.type;
    if (type instanceof datatypes_1.ArrayType && type.of == datatypes_1.Types.null) {
        throw new interfaces_1.QueryError(`cannot determine type of empty array`);
    }
}
function uncache(data) {
    builtLru.del(data);
}
exports.uncache = uncache;
function _buildValue(val) {
    // cache expressions build (they almost are always rebuilt several times in a row)
    const data = (0, context_1.buildCtx)().selection;
    let selLru = builtLru.get(data !== null && data !== void 0 ? data : null);
    let got;
    if (selLru) {
        got = selLru.get(val);
        if (got) {
            return got;
        }
    }
    got = _buildValueReal(val);
    if (data.isAggregation()) {
        got = data.checkIfIsKey(got);
    }
    if (!selLru) {
        builtLru.set(data !== null && data !== void 0 ? data : null, selLru = new lru_cache_1.default({
            max: 50,
        }));
    }
    selLru.set(val, got);
    return got;
}
function _buildValueReal(val) {
    var _a;
    const { schema, getParameter, selection } = (0, context_1.buildCtx)();
    switch (val.type) {
        case 'binary':
            if (val.op === 'IN' || val.op === 'NOT IN') {
                return buildIn(val.left, val.right, val.op === 'IN');
            }
            return buildBinary(val);
        case 'unary':
            return buildUnary(val.op, val.operand);
        case 'ref':
            // try to get a column reference
            // todo refactor getColumn() to NameResolvers
            const found = selection.getColumn(val, true);
            if (found) {
                return found;
            }
            // try to get a parameter reference
            const arg = !val.table && getParameter(val.name);
            if (arg) {
                return arg;
            }
            // try to select an aliased record (= a table)
            const alias = !val.table && selection.selectAlias(val.name);
            if (alias) {
                return buildRecord(alias);
            }
            throw new interfaces_1.ColumnNotFound((0, utils_1.colToStr)(val));
        case 'string':
            return evaluator_1.Value.text(val.value);
        case 'null':
            return evaluator_1.Value.null();
        case 'list':
        case 'array':
            const vals = val.expressions.map(x => _buildValue(x));
            return val.type === 'list'
                ? evaluator_1.Value.list(vals)
                : evaluator_1.Value.array(vals);
        case 'numeric':
            return evaluator_1.Value.number(val.value);
        case 'integer':
            return evaluator_1.Value.number(val.value, datatypes_1.Types.integer);
        case 'call':
            return _buildCall(val);
        case 'cast':
            return _buildValue(val.operand)
                .cast(schema.getType(val.to));
        case 'case':
            return buildCase(val);
        case 'member':
            return buildMember(val);
        case 'arrayIndex':
            return buildArrayIndex(val);
        case 'boolean':
            return evaluator_1.Value.bool(val.value);
        case 'ternary':
            return buildTernary(val);
        case 'select':
        case 'union':
        case 'union all':
        case 'with':
        case 'with recursive':
        case 'values':
            return buildSelectAsArray(val);
        case 'array select':
            return buildSelectAsArray(val.select);
        case 'constant':
            return evaluator_1.Value.constant(val.dataType, val.value);
        case 'keyword':
            return buildKeyword(val, []);
        case 'parameter':
            const [_, n] = (_a = /^\$(\d+)$/.exec(val.name)) !== null && _a !== void 0 ? _a : [];
            if (!n) {
                throw new Error('Unexpected parameter ref shape: ' + val.name);
            }
            return getParameter(parseInt(n) - 1);
        case 'extract':
            return buildExtract(val);
        case 'overlay':
            return buildOverlay(val);
        case 'substring':
            return buildSubstring(val);
        case 'default':
            throw new interfaces_1.QueryError(`DEFAULT is not allowed in this context`, '42601');
        default:
            throw interfaces_1.NotSupported.never(val);
    }
}
function buildRecord(alias) {
    const cols = [...alias.listColumns()];
    return new evaluator_1.Evaluator(datatypes_1.Types.record(cols
        .map(x => ({
        name: x.id,
        type: x.type,
    }))), null, Math.random().toString() // must not be indexable => always different hash
    , [], (raw, t) => raw, { forceNotConstant: true });
}
function _buildCall(val) {
    // if (typeof val.function !== 'string') {
    //     return buildKeyword( val.function, val.args);
    // }
    if (val.over) {
        throw new interfaces_1.NotSupported('"OVER" clause is not implemented in pg-mem yet');
    }
    const nm = (0, utils_1.asSingleQName)(val.function, 'pg_catalog');
    if (nm && aggregation_1.aggregationFunctions.has(nm)) {
        const agg = (0, aggregation_1.getAggregator)();
        if (!agg) {
            throw new interfaces_1.QueryError(`aggregate functions are not allowed in WHERE`);
        }
        return agg.getAggregation(nm, val);
    }
    const args = val.args.map(x => _buildValue(x));
    return evaluator_1.Value.function(val.function, args);
}
function buildKeyword(kw, args) {
    if (args.length) {
        throw new interfaces_1.NotSupported(`usage of "${kw.keyword}" keyword with arguments, please file an issue in https://github.com/oguimbal/pg-mem if you need it !`);
    }
    if (kw.type !== 'keyword') {
        throw new Error('Invalid AST');
    }
    switch (kw.keyword) {
        case 'current_catalog':
        case 'current_role':
        case 'current_user':
        case 'session_user':
        case 'user':
            return evaluator_1.Value.constant(datatypes_1.Types.text(), 'pg_mem');
        case 'current_schema':
            return evaluator_1.Value.constant(datatypes_1.Types.text(), 'public');
        case 'current_date':
            return evaluator_1.Value.constant(datatypes_1.Types.date, new Date());
        case 'current_timestamp':
        case 'localtimestamp':
            return evaluator_1.Value.constant(datatypes_1.Types.timestamp(), new Date());
        case 'localtime':
        case 'current_time':
            throw new interfaces_1.NotSupported('"date" data type, please file an issue in https://github.com/oguimbal/pg-mem if you need it !');
        case 'distinct':
            throw new interfaces_1.NotSupported(kw.keyword);
        default:
            throw interfaces_1.NotSupported.never(kw.keyword);
    }
}
function buildUnary(op, operand) {
    const expr = _buildValue(operand);
    switch (op) {
        case 'IS NULL':
        case 'IS NOT NULL':
            return evaluator_1.Value.isNull(expr, op === 'IS NULL');
        case 'IS TRUE':
        case 'IS NOT TRUE':
            return evaluator_1.Value.isTrue(expr, op === 'IS TRUE');
        case 'IS FALSE':
        case 'IS NOT FALSE':
            return evaluator_1.Value.isFalse(expr, op === 'IS FALSE');
        case '+':
            if (!(0, datatypes_1.isNumeric)(expr.type)) {
                throw new interfaces_1.CastError(expr.type.primary, interfaces_1.DataType.float);
            }
            return expr;
        case 'NOT':
        case '-':
            return evaluator_1.Value.negate(expr);
        default:
            throw interfaces_1.NotSupported.never(op, 'Unary operator not supported');
    }
}
function buildIn(left, array, inclusive) {
    let leftValue = _buildValue(left);
    let rightValue = _buildValue(array);
    return evaluator_1.Value.in(leftValue, rightValue, inclusive);
}
function buildBinary(val) {
    let leftValue = _buildValue(val.left);
    let rightValue = _buildValue(val.right);
    return buildBinaryValue(leftValue, val.op, rightValue);
}
function buildBinaryValue(leftValue, op, rightValue) {
    function expectSame() {
        const ll = leftValue.type.primary === interfaces_1.DataType.list;
        const rl = rightValue.type.primary === interfaces_1.DataType.list;
        if (ll !== rl) {
            function doMap(v) {
                return v.map(x => {
                    if (!x) {
                        return x;
                    }
                    if (!Array.isArray(x)) {
                        // not supposed to happen
                        throw new Error(`Was expecting an array. Got instead ${x}`);
                    }
                    if (x.length > 1) {
                        throw new interfaces_1.QueryError('more than one row returned by a subquery used as an expression', '21000');
                    }
                    return x[0];
                }, v.type.of);
            }
            if (ll) {
                leftValue = doMap(leftValue);
            }
            else {
                rightValue = doMap(rightValue);
            }
        }
        const type = (0, datatypes_1.reconciliateTypes)([leftValue, rightValue]);
        leftValue = leftValue.cast(type);
        rightValue = rightValue.cast(type);
        return type;
    }
    function expectBoth(t) {
        leftValue = leftValue.cast(t);
        rightValue = rightValue.cast(t);
    }
    let getter;
    let returnType = datatypes_1.Types.bool;
    let commutative = true;
    let forcehash = null;
    let rejectNils = true;
    let impure = false;
    switch (op) {
        case '=': {
            const type = expectSame();
            getter = (a, b) => type.equals(a, b);
            break;
        }
        case '!=': {
            const type = expectSame();
            getter = (a, b) => {
                const ret = type.equals(a, b);
                return (0, utils_1.nullIsh)(ret) ? null : !ret;
            };
            break;
        }
        case '>': {
            const type = expectSame();
            getter = (a, b) => type.gt(a, b);
            forcehash = { op: '>', left: leftValue.hash, right: rightValue.hash };
            break;
        }
        case '<': {
            const type = expectSame();
            getter = (a, b) => type.lt(a, b);
            forcehash = { op: '>', left: rightValue.hash, right: leftValue.hash };
            break;
        }
        case '>=': {
            const type = expectSame();
            getter = (a, b) => type.ge(a, b);
            forcehash = { op: '>=', left: leftValue.hash, right: rightValue.hash };
            break;
        }
        case '<=': {
            const type = expectSame();
            getter = (a, b) => type.le(a, b);
            forcehash = { op: '>=', left: rightValue.hash, right: leftValue.hash };
            break;
        }
        case 'AND':
        case 'OR':
            expectBoth(datatypes_1.Types.bool);
            rejectNils = false;
            if (op === 'AND') {
                getter = (a, b) => a && b;
            }
            else {
                getter = (a, b) => a || b;
            }
            break;
        case '&&':
            if (leftValue.type.primary !== interfaces_1.DataType.array || !rightValue.canCast(leftValue.type)) {
                throw new interfaces_1.QueryError(`Operator does not exist: ${leftValue.type.name} && ${rightValue.type.name}`, '42883');
            }
            rightValue = rightValue.cast(leftValue.type);
            getter = (a, b) => a.some((element) => b.includes(element));
            break;
        case 'LIKE':
        case 'ILIKE':
        case 'NOT LIKE':
        case 'NOT ILIKE':
            expectBoth(datatypes_1.Types.text());
            const caseSenit = op === 'LIKE' || op === 'NOT LIKE';
            const not = op === 'NOT ILIKE' || op === 'NOT LIKE';
            if (rightValue.isConstant) {
                const pattern = rightValue.get();
                if ((0, utils_1.nullIsh)(pattern)) {
                    return evaluator_1.Value.null(datatypes_1.Types.bool);
                }
                let matcher;
                if (rightValue.isAny) {
                    // handle LIKE ANY()
                    if (!Array.isArray(pattern)) {
                        throw new interfaces_1.QueryError('Unsupported use of ANY()');
                    }
                    const patterns = pattern.map(x => (0, utils_1.buildLikeMatcher)(x, caseSenit));
                    matcher = v => patterns.some(x => x(v));
                }
                else {
                    matcher = (0, utils_1.buildLikeMatcher)(pattern, caseSenit);
                }
                getter = !not
                    ? a => (0, utils_1.nullIsh)(a) ? null : matcher(a)
                    : a => {
                        if ((0, utils_1.nullIsh)(a)) {
                            return null;
                        }
                        const val = matcher(a);
                        return (0, utils_1.nullIsh)(val) ? null : !val;
                    };
            }
            else {
                getter = !not
                    ? (a, b) => (0, utils_1.hasNullish)(a, b) ? null : (0, utils_1.buildLikeMatcher)(b, caseSenit)(a)
                    : (a, b) => {
                        if ((0, utils_1.hasNullish)(a, b)) {
                            return null;
                        }
                        const val = (0, utils_1.buildLikeMatcher)(b, caseSenit)(a);
                        return (0, utils_1.nullIsh)(val) ? null : !val;
                    };
            }
            break;
        default: {
            const { schema } = (0, context_1.buildCtx)();
            const resolved = schema.resolveOperator(op, leftValue, rightValue);
            if (!resolved) {
                throw new interfaces_1.QueryError(`operator does not exist: ${leftValue.type.name} ${op} ${rightValue.type.name}`, '42883');
            }
            leftValue = leftValue.cast(resolved.left);
            rightValue = rightValue.cast(resolved.right);
            commutative = resolved.commutative;
            returnType = resolved.returns;
            getter = resolved.implementation;
            rejectNils = !resolved.allowNullArguments;
            impure = !!resolved.impure;
            break;
        }
    }
    const hashed = (0, object_hash_1.default)(forcehash !== null && forcehash !== void 0 ? forcehash : (commutative
        ? { op, vals: [leftValue.hash, rightValue.hash].sort() }
        : { left: leftValue.hash, op, right: rightValue.hash }));
    // handle cases like:  blah = ANY(stuff)
    if (leftValue.isAny || rightValue.isAny) {
        return buildBinaryAny(leftValue, op, rightValue, returnType, getter, hashed);
    }
    return new evaluator_1.Evaluator(returnType, null, hashed, [leftValue, rightValue], (raw, t) => {
        const leftRaw = leftValue.get(raw, t);
        const rightRaw = rightValue.get(raw, t);
        if (rejectNils && ((0, utils_1.nullIsh)(leftRaw) || (0, utils_1.nullIsh)(rightRaw))) {
            return null;
        }
        return getter(leftRaw, rightRaw);
    }, impure ? { unpure: impure } : undefined);
}
exports.buildBinaryValue = buildBinaryValue;
function buildBinaryAny(leftValue, op, rightValue, returnType, getter, hashed) {
    if (leftValue.isAny && rightValue.isAny) {
        throw new interfaces_1.QueryError('ANY() cannot be compared to ANY()');
    }
    if (returnType !== datatypes_1.Types.bool) {
        throw new interfaces_1.QueryError('Invalid ANY() usage');
    }
    return new evaluator_1.Evaluator(returnType, null, hashed, [leftValue, rightValue], leftValue.isAny
        ? (raw, t) => {
            const leftRaw = leftValue.get(raw, t);
            if ((0, utils_1.nullIsh)(leftRaw)) {
                return null;
            }
            if (!Array.isArray(leftRaw)) {
                throw new interfaces_1.QueryError('Invalid ANY() usage: was expacting an array');
            }
            for (const lr of leftRaw) {
                const rightRaw = rightValue.get(raw, t);
                if (getter(lr, rightRaw)) {
                    return true;
                }
            }
            return false;
        }
        : (raw, t) => {
            const rightRaw = rightValue.get(raw, t);
            if ((0, utils_1.nullIsh)(rightRaw)) {
                return null;
            }
            if (!Array.isArray(rightRaw)) {
                throw new interfaces_1.QueryError('Invalid ANY() usage: was expacting an array');
            }
            for (const rr of rightRaw) {
                const leftRaw = leftValue.get(raw, t);
                if (getter(leftRaw, rr)) {
                    return true;
                }
            }
            return false;
        });
}
function buildCase(op) {
    const whens = !op.value
        ? op.whens
        : op.whens.map(v => ({
            when: {
                type: 'binary',
                op: '=',
                left: op.value,
                right: v.when,
            },
            value: v.value,
        }));
    if (op.else) {
        whens.push({
            when: { type: 'boolean', value: true },
            value: op.else,
        });
    }
    const whenExprs = whens.map(x => ({
        when: buildValue(x.when).cast(datatypes_1.Types.bool),
        then: buildValue(x.value)
    }));
    const valueType = (0, datatypes_1.reconciliateTypes)(whenExprs.map(x => x.then));
    for (const v of whenExprs) {
        v.then = v.then.cast(valueType);
    }
    return new evaluator_1.Evaluator(valueType, null, (0, object_hash_1.default)({ when: whenExprs.map(x => ({ when: x.when.hash, then: x.then.hash })) }), [
        ...whenExprs.map(x => x.when),
        ...whenExprs.map(x => x.then)
    ], (raw, t) => {
        for (const w of whenExprs) {
            const cond = w.when.get(raw, t);
            if (cond) {
                return w.then.get(raw, t);
            }
        }
        return null;
    });
}
function buildMember(op) {
    const oop = op.op;
    if (oop !== '->>' && oop !== '->') {
        throw interfaces_1.NotSupported.never(oop);
    }
    const onExpr = buildValue(op.operand);
    if (onExpr.type !== datatypes_1.Types.json && onExpr.type !== datatypes_1.Types.jsonb) {
        throw new interfaces_1.QueryError(`Cannot use member expression ${op.op} on type ${onExpr.type.primary}`);
    }
    const conv = op.op === '->'
        ? ((x) => x)
        : ((x) => {
            if ((0, utils_1.nullIsh)(x)) {
                return null;
            }
            if (typeof x === 'string') {
                return x;
            }
            return JSON.stringify(x);
        });
    return new evaluator_1.Evaluator(op.op === '->' ? onExpr.type : datatypes_1.Types.text(), null, (0, object_hash_1.default)([onExpr.hash, op.op, op.member]), onExpr, typeof op.member === 'string'
        ? (raw, t) => {
            const value = onExpr.get(raw, t);
            if (!value || typeof value !== 'object') {
                return null;
            }
            return conv(value[op.member]);
        }
        : (raw, t) => {
            const value = onExpr.get(raw, t);
            if (!Array.isArray(value)) {
                return null;
            }
            const i = op.member < 0
                ? value.length + op.member
                : op.member;
            return conv(value[i]);
        });
}
function buildArrayIndex(op) {
    const onExpr = _buildValue(op.array);
    if (onExpr.type.primary !== interfaces_1.DataType.array) {
        throw new interfaces_1.QueryError(`Cannot use [] expression on type ${onExpr.type.primary}`);
    }
    const index = _buildValue(op.index).cast(datatypes_1.Types.integer);
    return new evaluator_1.Evaluator(onExpr.type.of, null, (0, object_hash_1.default)({ array: onExpr.hash, index: index.hash }), [onExpr, index], (raw, t) => {
        const value = onExpr.get(raw, t);
        if (!Array.isArray(value)) {
            return null;
        }
        const i = index.get(raw, t);
        if (typeof i !== 'number' || i <= 0 || i > value.length) {
            return null;
        }
        const ret = value[i - 1]; // 1-base !
        if (Array.isArray(ret)) {
            // ugly hack.. see clean-results.ts
            ret[clean_results_1.IS_PARTIAL_INDEXING] = true;
        }
        return ret;
    });
}
function buildTernary(op) {
    const oop = op.op;
    if (oop !== 'NOT BETWEEN' && oop !== 'BETWEEN') {
        throw interfaces_1.NotSupported.never(oop);
    }
    let value = _buildValue(op.value);
    let hi = _buildValue(op.hi);
    let lo = _buildValue(op.lo);
    const type = (0, datatypes_1.reconciliateTypes)([value, hi, lo]);
    value = value.cast(type);
    hi = hi.cast(type);
    lo = lo.cast(type);
    const conv = oop === 'NOT BETWEEN'
        ? (x) => !x
        : (x) => x;
    return new evaluator_1.Evaluator(datatypes_1.Types.bool, null, (0, object_hash_1.default)({ value: value.hash, lo: lo.hash, hi: hi.hash }), [value, hi, lo], (raw, t) => {
        const v = value.get(raw, t);
        if ((0, utils_1.nullIsh)(v)) {
            return null;
        }
        const lov = lo.get(raw, t);
        if (!(0, utils_1.nullIsh)(lov) && type.lt(v, lov)) {
            return conv(false);
        }
        const hiv = hi.get(raw, t);
        if (!(0, utils_1.nullIsh)(hiv) && type.gt(v, hiv)) {
            return conv(false);
        }
        if ((0, utils_1.nullIsh)(lov) || (0, utils_1.nullIsh)(hiv)) {
            return null;
        }
        return conv(true);
    });
}
function buildSelectAsArray(op) {
    // todo: handle refs to 'data' in op statement.
    //  ... and refactor this. This is way too hacky to be maintainable
    //   (this wont allow the subrequest to access outer context, for instance)
    const onData = (0, select_1.buildSelect)(op);
    if (onData.columns.length !== 1) {
        throw new interfaces_1.QueryError('subquery must return only one column', '42601');
    }
    return new evaluator_1.Evaluator(onData.columns[0].type.asList(), null, Math.random().toString() // must not be indexable => always different hash
    , null // , onData.columns[0]
    , (raw, t) => {
        const ret = [];
        for (const v of onData.enumerate(t)) {
            ret.push(onData.columns[0].get(v, t));
        }
        return ret;
    }, {
        forceNotConstant: true
    });
}
function buildExtract(op) {
    const from = _buildValue(op.from);
    function extract(as, fn, result = datatypes_1.Types.integer) {
        const conv = from.cast(as);
        return new evaluator_1.Evaluator(result, null, (0, object_hash_1.default)({ extract: from.hash, field: op.field }), [conv], (raw, t) => {
            const got = conv.get(raw, t);
            if ((0, utils_1.nullIsh)(got)) {
                return null;
            }
            return fn(got);
        });
    }
    switch (op.field.name) {
        case 'millennium':
            return extract(datatypes_1.Types.date, x => Math.ceil(moment_1.default.utc(x).year() / 1000));
        case 'century':
            return extract(datatypes_1.Types.date, x => Math.ceil(moment_1.default.utc(x).year() / 100));
        case 'decade':
            return extract(datatypes_1.Types.date, x => Math.floor(moment_1.default.utc(x).year() / 10));
        case 'day':
            if (from.canCast(datatypes_1.Types.date)) {
                return extract(datatypes_1.Types.date, x => moment_1.default.utc(x).date());
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a; return (_a = x.days) !== null && _a !== void 0 ? _a : 0; });
        case 'second':
            if (from.canCast(datatypes_1.Types.time)) {
                return extract(datatypes_1.Types.time, x => {
                    const t = (0, utils_1.parseTime)(x);
                    return t.second() + t.milliseconds() / 1000;
                }, datatypes_1.Types.float);
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a, _b; return ((_a = x.seconds) !== null && _a !== void 0 ? _a : 0) + ((_b = x.milliseconds) !== null && _b !== void 0 ? _b : 0) / 1000; }, datatypes_1.Types.float);
        case 'minute':
            if (from.canCast(datatypes_1.Types.time)) {
                return extract(datatypes_1.Types.time, x => (0, utils_1.parseTime)(x).minute());
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a; return (_a = x.minutes) !== null && _a !== void 0 ? _a : 0; });
        case 'milliseconds':
            if (from.canCast(datatypes_1.Types.time)) {
                return extract(datatypes_1.Types.time, x => {
                    const t = (0, utils_1.parseTime)(x);
                    return t.seconds() * 1000 + t.milliseconds();
                });
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a, _b; return ((_a = x.seconds) !== null && _a !== void 0 ? _a : 0) * 1000 + ((_b = x.milliseconds) !== null && _b !== void 0 ? _b : 0); }, datatypes_1.Types.float);
        case 'month':
            if (from.canCast(datatypes_1.Types.date)) {
                return extract(datatypes_1.Types.date, x => moment_1.default.utc(x).month() + 1);
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a; return (_a = x.months) !== null && _a !== void 0 ? _a : 0; });
        case 'year':
            if (from.canCast(datatypes_1.Types.date)) {
                return extract(datatypes_1.Types.date, x => moment_1.default.utc(x).year());
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a; return (_a = x.years) !== null && _a !== void 0 ? _a : 0; });
        case 'dow':
            return extract(datatypes_1.Types.date, x => moment_1.default.utc(x).day());
        case 'isodow':
            return extract(datatypes_1.Types.date, x => {
                const dow = moment_1.default.utc(x).day();
                return dow ? dow : 7;
            });
        case 'doy':
            return extract(datatypes_1.Types.date, x => moment_1.default.utc(x).dayOfYear());
        case 'epoch':
            if (from.canCast(datatypes_1.Types.timestamp())) {
                return extract(datatypes_1.Types.timestamp(), x => moment_1.default.utc(x).unix(), datatypes_1.Types.float);
            }
            return extract(datatypes_1.Types.interval, (x) => (0, utils_1.intervalToSec)(x));
        case 'hour':
            if (from.canCast(datatypes_1.Types.timestamp())) {
                return extract(datatypes_1.Types.timestamp(), x => moment_1.default.utc(x).hour());
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a; return (_a = x.hours) !== null && _a !== void 0 ? _a : 0; });
        case 'isoyear':
            return extract(datatypes_1.Types.date, x => {
                const d = moment_1.default.utc(x);
                return d.dayOfYear() <= 1 ? d.year() - 1 : d.year();
            });
        case 'quarter':
            return extract(datatypes_1.Types.date, x => moment_1.default.utc(x).quarter());
        case 'week':
            return extract(datatypes_1.Types.date, x => moment_1.default.utc(x).week());
        case 'microseconds':
            if (from.canCast(datatypes_1.Types.time)) {
                return extract(datatypes_1.Types.time, x => {
                    const t = (0, utils_1.parseTime)(x);
                    return t.seconds() * 1000000 + t.milliseconds() * 1000;
                });
            }
            return extract(datatypes_1.Types.interval, (x) => { var _a, _b; return ((_a = x.seconds) !== null && _a !== void 0 ? _a : 0) * 1000000 + ((_b = x.milliseconds) !== null && _b !== void 0 ? _b : 0) * 1000; });
        default:
            throw new interfaces_1.NotSupported('Extract type "' + op.field + '"');
    }
}
function buildOverlay(op) {
    const value = _buildValue(op.value).cast(datatypes_1.Types.text());
    const placing = _buildValue(op.placing).cast(datatypes_1.Types.text());
    const from = _buildValue(op.from).cast(datatypes_1.Types.integer);
    const forr = op.for && _buildValue(op.for).cast(datatypes_1.Types.integer);
    return new evaluator_1.Evaluator(datatypes_1.Types.text(), null, (0, object_hash_1.default)({ overlay: value.hash, placing: placing.hash, from: from.hash, for: forr === null || forr === void 0 ? void 0 : forr.hash }), forr ? [value, placing, from, forr] : [value, placing, from], (raw, t) => {
        const _value = value.get(raw, t);
        if ((0, utils_1.nullIsh)(_value)) {
            return null;
        }
        const _placing = placing.get(raw, t);
        if ((0, utils_1.nullIsh)(_placing)) {
            return null;
        }
        const _from = from.get(raw, t);
        if ((0, utils_1.nullIsh)(_from)) {
            return null;
        }
        const before = sqlSubstring(_value, 0, _from - 1);
        let after;
        if (forr) {
            const _for = forr.get(raw, t);
            if ((0, utils_1.nullIsh)(_for)) {
                return null;
            }
            after = sqlSubstring(_value, _from + _for);
        }
        else {
            after = sqlSubstring(_value, _placing.length + _from);
        }
        if ((0, utils_1.nullIsh)(after)) {
            return null;
        }
        return before + _placing + after;
    });
}
function buildSubstring(op) {
    const value = _buildValue(op.value).cast(datatypes_1.Types.text());
    const vals = [value];
    const from = op.from && _buildValue(op.from).cast(datatypes_1.Types.integer);
    const forr = op.for && _buildValue(op.for).cast(datatypes_1.Types.integer);
    if (forr) {
        vals.push(forr);
    }
    if (from) {
        vals.push(from);
    }
    return new evaluator_1.Evaluator(datatypes_1.Types.text(), null, (0, object_hash_1.default)({ substr: value.hash, from: from === null || from === void 0 ? void 0 : from.hash, for: forr === null || forr === void 0 ? void 0 : forr.hash }), vals, (raw, t) => {
        const _value = value.get(raw, t);
        if ((0, utils_1.nullIsh)(_value)) {
            return null;
        }
        let start = 0;
        let len;
        if (from) {
            start = from.get(raw, t);
            if ((0, utils_1.nullIsh)(start)) {
                return null;
            }
        }
        if (forr) {
            len = forr.get(raw, t);
            if ((0, utils_1.nullIsh)(len)) {
                return null;
            }
        }
        return sqlSubstring(_value, start, len);
    });
}
function sqlSubstring(value, from = 0, len) {
    if ((0, utils_1.nullIsh)(from) || (0, utils_1.nullIsh)(value)) {
        return null;
    }
    // sql substring is base-1
    from--;
    if (from < 0) {
        from = 0;
    }
    if (!(0, utils_1.nullIsh)(len)) {
        if (len < 0) {
            throw new interfaces_1.QueryError('negative substring length not allowed');
        }
        return value.substr(from, len);
    }
    return value.substr(from);
}
exports.sqlSubstring = sqlSubstring;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecHelper = exports.locOf = exports.checkExistence = void 0;
const interfaces_private_1 = __webpack_require__(0);
function checkExistence(schema, name, ifNotExists, act) {
    // check if object exists
    const exists = schema.getObject(name, {
        skipSearch: true,
        nullIfNotFound: true
    });
    if (exists) {
        if (ifNotExists) {
            return false;
        }
        throw new interfaces_private_1.QueryError(`relation "${name.name}" already exists`);
    }
    // else, perform operation
    act();
    return true;
}
exports.checkExistence = checkExistence;
function locOf(p) {
    var _a;
    return (_a = p._location) !== null && _a !== void 0 ? _a : { start: 0, end: 0 };
}
exports.locOf = locOf;
class ExecHelper {
    constructor(statement) {
        this.statement = statement;
    }
    noData(t, name) {
        return {
            result: {
                command: name !== null && name !== void 0 ? name : this.statement.type.toUpperCase(),
                fields: [],
                rowCount: 0,
                rows: [],
                location: locOf(this.statement),
            },
            state: t,
        };
    }
}
exports.ExecHelper = ExecHelper;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadOnlyTable = void 0;
const interfaces_private_1 = __webpack_require__(0);
const transform_base_1 = __webpack_require__(5);
const alias_1 = __webpack_require__(25);
const selection_1 = __webpack_require__(11);
const utils_1 = __webpack_require__(1);
class ReadOnlyTable extends transform_base_1.DataSourceBase {
    constructor(schema) {
        super(schema);
        this.schema = schema;
        this.selection = (0, alias_1.buildAlias)(this);
        this.hidden = true;
        this.columnsById = new Map();
    }
    get isExecutionWithNoResult() {
        return false;
    }
    isOriginOf(v) {
        return v.origin === this || v.origin === this.selection;
    }
    get type() {
        return "table";
    }
    get name() {
        return this._schema.name;
    }
    register() {
        this.reg = this.schema._reg_register(this);
    }
    build() {
        if (this._columns) {
            return;
        }
        this._columns = [];
        for (const _col of this._schema.fields) {
            const newCol = (0, selection_1.columnEvaluator)(this, _col.name, _col.type);
            this._columns.push(newCol);
            this.columnsById.set(_col.name, newCol);
        }
    }
    get columns() {
        this.build();
        return this._columns;
    }
    getColumn(column, nullIfNotFound) {
        this.build();
        if (typeof column !== "string" && column.table) {
            if (!column.table.schema && column.table.name !== this.name) {
                return null;
            }
            column = column.name;
        }
        return (0, utils_1.colByName)(this.columnsById, column, nullIfNotFound);
    }
    explain(e) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    listIndices() {
        return [];
    }
    stats(t) {
        throw new interfaces_private_1.NotSupported("stats (count, ...) on information schema");
    }
    rename(to) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    update(t, toUpdate) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    addColumn(column) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    getColumnRef(column, nullIfNotFound) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    getConstraint(constraint) {
        return null;
    }
    addConstraint(constraint, t) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    insert(item) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    doInsert(toInsert) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    delete(t, toDelete) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    truncate(t) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    createIndex() {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    dropIndex(t, name) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    setHidden() {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    drop(t) {
        throw new interfaces_private_1.PermissionDeniedError(this.name);
    }
    setReadonly() {
        return this;
    }
    getIndex(...forValue) {
        return null;
    }
    on() {
        throw new interfaces_private_1.NotSupported("subscribing information schema");
    }
    onBeforeChange(columns, check) {
        // nop
        return { unsubscribe() { } };
    }
    onCheckChange(columns, check) {
        // nop
        return { unsubscribe() { } };
    }
    onTruncate(sub) {
        // nop
        return { unsubscribe() { } };
    }
    onDrop(sub) {
        // nop
        return { unsubscribe() { } };
    }
    onIndex(sub) {
        // nop
        return { unsubscribe() { } };
    }
    find(template, columns) {
        return (0, utils_1.findTemplate)(this.selection, this.db.data, template, columns);
    }
    make(table, i, t) {
        throw new Error("not implemented");
    }
    *itemsByTable(table, t) {
        if (typeof table === "string") {
            for (const s of this.db.listSchemas()) {
                const got = s.getTable(table, true);
                if (got) {
                    yield* this.itemsByTable(got, t);
                }
            }
        }
        else {
            let i = 0;
            for (const f of table.selection.columns) {
                yield this.make(table, ++i, f);
            }
        }
    }
}
exports.ReadOnlyTable = ReadOnlyTable;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeBase = exports.regGen = void 0;
const evaluator_1 = __webpack_require__(10);
const interfaces_private_1 = __webpack_require__(0);
const datatypes_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(1);
const object_hash_1 = __importDefault(__webpack_require__(15));
const interfaces_1 = __webpack_require__(2);
let regCnt = 0;
function regGen() {
    return {
        classId: ++regCnt,
        typeId: ++regCnt,
    };
}
exports.regGen = regGen;
class TypeBase {
    constructor() {
        this.reg = regGen();
    }
    get [utils_1.isType.TAG]() {
        return true;
    }
    get type() {
        return 'type';
    }
    get name() {
        return this.primary;
    }
    doEquals(a, b) {
        return a === b;
    }
    doGt(a, b) {
        return a > b;
    }
    doLt(a, b) {
        return a < b;
    }
    toString() {
        throw new Error('Method not implemented.');
    }
    equals(a, b) {
        if ((0, utils_1.nullIsh)(a) || (0, utils_1.nullIsh)(b)) {
            return null;
        }
        return this.doEquals(a, b);
    }
    gt(a, b) {
        if ((0, utils_1.nullIsh)(a) || (0, utils_1.nullIsh)(b)) {
            return null;
        }
        return this.doGt(a, b);
    }
    lt(a, b) {
        if ((0, utils_1.nullIsh)(a) || (0, utils_1.nullIsh)(b)) {
            return null;
        }
        return this.doLt(a, b);
    }
    ge(a, b) {
        return this.gt(a, b) || this.equals(a, b);
    }
    le(a, b) {
        return this.lt(a, b) || this.equals(a, b);
    }
    /**
     * When performing 'a+b', will be given 'b' type,
     * this returns the prefered resulting type, or null if they are not compatible
      */
    prefer(to) {
        var _b, _c;
        if (to === this) {
            return this;
        }
        if (this.doPrefer) {
            const ret = this.doPrefer(to);
            if (ret) {
                return ret;
            }
        }
        return (_c = (_b = to).doPrefer) === null || _c === void 0 ? void 0 : _c.call(_b, this);
    }
    /**
     * Can constant literals be converted implicitely
     * (without a cast... i.e. you can use both values as different values of a case expression, for instance)
     **/
    canConvertImplicit(to) {
        var _b;
        if (to === this) {
            return true;
        }
        return (_b = this.doCanConvertImplicit) === null || _b === void 0 ? void 0 : _b.call(this, to);
    }
    /** Can be explicitely casted to */
    canCast(to) {
        var _b, _c, _d, _e;
        if (to === this) {
            return true;
        }
        // ask the target type if it know how to build itself from this
        if ((_c = (_b = to).doCanBuildFrom) === null || _c === void 0 ? void 0 : _c.call(_b, this)) {
            return true;
        }
        // asks this type if it knows how to convert itself to target
        if (((_d = this.doCanConvertImplicit) === null || _d === void 0 ? void 0 : _d.call(this, to)) || ((_e = this.doCanCast) === null || _e === void 0 ? void 0 : _e.call(this, to))) {
            return true;
        }
        return false;
    }
    /** Perform cast */
    cast(_a, _to) {
        return this._convert(_a, _to, (a, to) => {
            var _b;
            if (!((_b = this.doCanCast) === null || _b === void 0 ? void 0 : _b.call(this, to)) || !this.doCast) {
                throw new interfaces_private_1.CastError(this, to);
            }
            return this.doCast(a, to);
        });
    }
    /** Perform implicit conversion */
    convertImplicit(_a, _to) {
        return this._convert(_a, _to, (a, to) => {
            var _b;
            if (!((_b = this.doCanConvertImplicit) === null || _b === void 0 ? void 0 : _b.call(this, to)) || !this.doCast) {
                throw new interfaces_private_1.CastError(this, to);
            }
            return this.doCast(a, to);
        });
    }
    _convert(a, _to, perform) {
        var _b;
        const to = _to;
        if (to === this) {
            return a;
        }
        if (!(a instanceof evaluator_1.Evaluator)) {
            throw new interfaces_private_1.CastError(this, to);
        }
        let converted;
        if ((_b = to.doCanBuildFrom) === null || _b === void 0 ? void 0 : _b.call(to, this)) {
            if (!to.doBuildFrom) {
                throw new interfaces_private_1.CastError(this, to);
            }
            converted = to.doBuildFrom(a, this);
        }
        else {
            converted = perform(a, to);
        }
        if (!converted) {
            throw new interfaces_private_1.CastError(this, to);
        }
        return converted.setType(to);
    }
    asArray() {
        if (this._asArray) {
            return this._asArray;
        }
        return this._asArray = new datatypes_1.ArrayType(this, false);
    }
    asList() {
        if (this._asList) {
            return this._asList;
        }
        return this._asList = new datatypes_1.ArrayType(this, true);
    }
    hash(value) {
        if ((0, utils_1.nullIsh)(value)) {
            return null;
        }
        if (this.doGetHash) {
            return this.doGetHash(value);
        }
        if (typeof value === 'number') {
            return value;
        }
        return (0, object_hash_1.default)(value);
    }
    drop(t) {
        throw new interfaces_1.QueryError('drop type not implemented');
    }
}
exports.TypeBase = TypeBase;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildParameterList = exports.Value = exports.Evaluator = void 0;
const interfaces_1 = __webpack_require__(2);
const object_hash_1 = __importDefault(__webpack_require__(15));
const datatypes_1 = __webpack_require__(3);
const function_call_1 = __webpack_require__(38);
const utils_1 = __webpack_require__(1);
class Evaluator {
    constructor(type, id, hash, dependencies, val, opts) {
        var _a;
        this.type = type;
        this.id = id;
        this.hash = hash;
        this.val = val;
        this.opts = opts;
        this.usedColumns = new Set();
        this.isConstantLiteral = typeof val !== 'function';
        if (opts === null || opts === void 0 ? void 0 : opts.forceNotConstant) {
            this.forceNotConstant = true;
        }
        // fetch columns to depend on
        let depArray = undefined;
        let hasNotConstant = false;
        if (dependencies) {
            if (!Array.isArray(dependencies)) {
                depArray = [dependencies];
                this.usedColumns = dependencies.usedColumns;
                hasNotConstant = !dependencies.isConstant;
                this.origin = dependencies.origin;
            }
            else {
                this.usedColumns = new Set();
                for (const d of dependencies) {
                    if (d.origin) {
                        if (this.origin && d.origin && this.origin !== d.origin) {
                            throw new Error('You cannot evaluate an expression which is coming from multiple origins');
                        }
                        this.origin = d.origin;
                    }
                    if (!d.isConstant) {
                        hasNotConstant = true;
                    }
                    for (const u of d.usedColumns) {
                        this.usedColumns.add(u);
                    }
                }
            }
        }
        if (opts === null || opts === void 0 ? void 0 : opts.isColumnOf) {
            this.usedColumns.add(this);
            this.origin = opts.isColumnOf;
            delete opts.isColumnOf;
        }
        if (hasNotConstant && !this.usedColumns.size) {
            this.forceNotConstant = true;
        }
        if (!this.usedColumns.size // no used columns
            && !this.origin
            && !((_a = this.opts) === null || _a === void 0 ? void 0 : _a.unpure)
            && !this.forceNotConstant
            && !(depArray === null || depArray === void 0 ? void 0 : depArray.some(x => !x.isConstantReal)) // all real constant dependencies
        ) {
            // no dependency => this is a real constant => evaluate it.
            if (typeof this.val === 'function') {
                this.val = this.val(null, null);
            }
        }
    }
    get index() {
        var _a;
        return (_a = this.origin) === null || _a === void 0 ? void 0 : _a.getIndex(this);
    }
    get isConstant() {
        return !this.usedColumns.size && !this.forceNotConstant;
    }
    get isConstantReal() {
        return typeof this.val !== 'function';
    }
    get isAny() {
        var _a, _b;
        return (_b = (_a = this.opts) === null || _a === void 0 ? void 0 : _a.isAny) !== null && _b !== void 0 ? _b : false;
    }
    setType(type) {
        if (this.type === type) {
            return this;
        }
        return new Evaluator(type, this.id, this.hash, this, this.val, this.opts);
    }
    setConversion(converter, hashConv) {
        return new Evaluator(this.type, this.id, (0, object_hash_1.default)(hashConv(this.hash)), this, (raw, t) => {
            let got = this.get(raw, t);
            if ((0, utils_1.nullIsh)(got)) {
                return null;
            }
            if (!this.isAny) {
                return converter(got, t);
            }
            if (!Array.isArray(got)) {
                throw new interfaces_1.QueryError('Unexpected use of ANY()');
            }
            return got.map(x => converter(x, t));
        }, this.opts);
    }
    setOrigin(origin) {
        const ret = this.clone();
        ret.origin = origin;
        return ret;
    }
    clone() {
        return new Evaluator(this.type, this.id, this.hash, this, this.val, this.opts);
    }
    map(mapper, newType) {
        if (this.isAny) {
            throw new interfaces_1.QueryError('Unexpected use of ANY()');
        }
        const ret = new Evaluator((newType !== null && newType !== void 0 ? newType : this.type), this.id, this.hash, this, (raw, t) => {
            const got = this.get(raw, t);
            if ((0, utils_1.nullIsh)(got)) {
                return null;
            }
            return mapper(got);
        }, this.opts);
        ret.origin = this.origin;
        return ret;
    }
    setWrapper(newOrigin, unwrap, newType) {
        if (this.isAny) {
            throw new interfaces_1.QueryError('Unexpected use of ANY()');
        }
        const ret = new Evaluator((newType !== null && newType !== void 0 ? newType : this.type), this.id, this.hash, this, (raw, t) => {
            const got = unwrap(raw);
            if ((0, utils_1.nullIsh)(got)) {
                return null;
            }
            return this.get(got, t);
        }, this.opts);
        ret.origin = newOrigin;
        return ret;
    }
    setId(newId) {
        if (this.id === newId) {
            return this;
        }
        return new Evaluator(this.type, newId, this.hash, this, this.val, this.opts);
    }
    get(raw, t) {
        if (((0, utils_1.nullIsh)(raw) || !t) && !this.isConstant) {
            throw new Error('Cannot be evaluated as constant');
        }
        if (typeof this.val !== 'function') {
            return this.val;
        }
        return this.val(raw, t);
    }
    canCast(to) {
        return !!this.type.canCast(to);
    }
    cast(to) {
        return this.type.cast(this, to);
    }
    convertImplicit(to) {
        return this.type.convertImplicit(this, to);
    }
    explain(e) {
        var _a;
        if (!this.origin) {
            return {
                constant: true,
            };
        }
        return {
            on: e.idFor(this.origin),
            col: (_a = this.id) !== null && _a !== void 0 ? _a : '<complex expression>',
        };
    }
}
exports.Evaluator = Evaluator;
// export class ArrayEvaluator<T> implements IValue {
//     constructor(
//         readonly type: _IType<T>
//         , readonly id: string
//         , readonly sql: string
//         , readonly hash: string
//         , readonly selection: _ISelection
//         , public val: T | ((raw: any) => T)) {
//     }
//     get index() {
//         return this.selection?.getIndex(this);
//     }
//     get isConstant(): boolean {
//         return typeof this.val !== 'function';
//     }
//     get(raw: any): T {
//         if (typeof this.val !== 'function') {
//             return this.val;
//         }
//         return (this.val as ((raw: any) => T))(raw);
//     }
//     asConstant(perform = true) {
//         if (!perform || typeof this.val !== 'function') {
//             return this;
//         }
//         return new Evaluator(this.type
//             , this.id
//             , this.sql
//             , this.hash
//             , this.selection
//             , this.get(null));
//     }
//     setId(newId: string): IValue {
//         if (this.id === newId) {
//             return this;
//         }
//         return new Evaluator<T>(
//             this.type
//             , newId
//             , this.sql
//             , this.hash
//             , this.selection
//             , this.val
//         );
//     }
//     canCast(to: DataType | _IType<T>): boolean {
//         return this.type.canCast(to);
//     }
//     cast<T = any>(to: DataType | _IType<T>): IValue<T> {
//         return this.type.cast(this, to);
//     }
// }
exports.Value = {
    null(ofType) {
        return new Evaluator(ofType !== null && ofType !== void 0 ? ofType : datatypes_1.Types.null, null, 'null', null, null, undefined);
    },
    text(value, length = null) {
        return new Evaluator(datatypes_1.Types.text(length), null, value, null, value);
    },
    number(value, type = datatypes_1.Types.float) {
        return new Evaluator(type, null, value.toString(10), null, value);
    },
    function(value, args) {
        return (0, function_call_1.buildCall)(value, args);
    },
    bool(value) {
        const str = value ? 'true' : 'false';
        return new Evaluator(datatypes_1.Types.bool, null, str, null, value);
    },
    /** @deprecated Use with care */
    constant(_type, value) {
        const type = (0, utils_1.nullIsh)(value)
            ? datatypes_1.Types.null
            : _type;
        return new Evaluator(type, null, null, null, value);
    },
    /** @deprecated Use with care */
    converter(type, to) {
        let last = null;
        const evaluator = new Evaluator(type, null, null, null, () => last, { forceNotConstant: true })
            .cast(to);
        return (val, t) => {
            if ((0, utils_1.nullIsh)(val)) {
                return null;
            }
            last = val;
            const ret = evaluator.get(val, t);
            last = null;
            return ret;
        };
    },
    in(value, array, inclusive) {
        if (!value) {
            throw new Error('Argument null');
        }
        if (array.type.primary !== interfaces_1.DataType.list && array.type) {
            array = exports.Value.list([array]);
        }
        const of = array.type.of;
        return new Evaluator(datatypes_1.Types.bool, null, (0, object_hash_1.default)({ val: value.hash, in: array.hash }), [value, array], (raw, t) => {
            const rawValue = value.get(raw, t);
            const rawArray = array.get(raw, t);
            if (!Array.isArray(rawArray)) {
                return false;
            }
            const has = rawArray.some(x => of.equals(rawValue, x));
            return inclusive ? has : !has;
        });
    },
    isNull(leftValue, expectNull) {
        return new Evaluator(datatypes_1.Types.bool, null, (0, object_hash_1.default)({ isNull: leftValue.hash, expectNull }), leftValue, (raw, t) => {
            const left = leftValue.get(raw, t);
            // check that result is null (will never return NULL)
            const ret = (0, utils_1.nullIsh)(left);
            return expectNull ? ret : !ret;
        });
    },
    isTrue(leftValue, expectTrue) {
        leftValue = leftValue.cast(datatypes_1.Types.bool);
        return new Evaluator(datatypes_1.Types.bool, null, (0, object_hash_1.default)({ isTrue: leftValue.hash, expectTrue }), leftValue, expectTrue ? ((raw, t) => {
            const left = leftValue.get(raw, t);
            return left === true; // never returns null
        }) : ((raw, t) => {
            const left = leftValue.get(raw, t);
            return !(left === true); //  never returns null
        }));
    },
    isFalse(leftValue, expectFalse) {
        leftValue = leftValue.cast(datatypes_1.Types.bool);
        return new Evaluator(datatypes_1.Types.bool, null, (0, object_hash_1.default)({ isFalse: leftValue.hash, expectFalse }), leftValue, expectFalse ? ((raw, t) => {
            const left = leftValue.get(raw, t);
            return left === false; // never returns null
        }) : ((raw, t) => {
            const left = leftValue.get(raw, t);
            return !(left === false); //  never returns null
        }));
    },
    negate(value) {
        if (value.type === datatypes_1.Types.bool) {
            return value
                .setConversion(x => !x, x => ({ not: x }));
        }
        if (!(0, datatypes_1.isNumeric)(value.type)) {
            throw new interfaces_1.QueryError('Can only apply "-" unary operator to numeric types');
        }
        return value
            .setConversion(x => -x, x => ({ neg: x }));
    },
    array(values) {
        return arrayOrList(values, false);
    },
    list(values) {
        return arrayOrList(values, true);
    }
};
function arrayOrList(values, list) {
    const type = values.reduce((t, v) => {
        if (v.canCast(t)) {
            return t;
        }
        if (!t.canCast(v.type)) {
            throw new interfaces_1.CastError(t.primary, v.type.primary);
        }
        return v.type;
    }, datatypes_1.Types.null);
    // const sel = values.find(x => !!x.selection)?.selection;
    const converted = values.map(x => x.cast(type));
    return new Evaluator(list ? type.asList() : type.asArray(), null, (0, object_hash_1.default)(converted.map(x => x.hash)), converted, (raw, t) => {
        const arr = values.map(x => x.get(raw, t));
        return arr;
    });
}
function buildParameterList(statementName, args) {
    return args.map(({ type, name }, i) => {
        const value = new Evaluator(type, name, (0, object_hash_1.default)({ param: name }), null, () => {
            var _a;
            const { parametersValues } = (0, utils_1.executionCtx)();
            if (!parametersValues || parametersValues.length <= i) {
                throw new interfaces_1.QueryError(`bind message supplies ${(_a = parametersValues === null || parametersValues === void 0 ? void 0 : parametersValues.length) !== null && _a !== void 0 ? _a : 0} parameters, but prepared statement "${statementName}" requires ${args.length}`, '08P01');
            }
            return parametersValues[i];
        }, {
            forceNotConstant: true,
        });
        return { value, index: i };
    });
}
exports.buildParameterList = buildParameterList;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionIndex = exports.Selection = exports.columnEvaluator = exports.buildSelection = void 0;
const interfaces_private_1 = __webpack_require__(0);
const interfaces_1 = __webpack_require__(2);
const expression_builder_1 = __webpack_require__(6);
const evaluator_1 = __webpack_require__(10);
const transform_base_1 = __webpack_require__(5);
const pgsql_ast_parser_1 = __webpack_require__(12);
const aggregation_1 = __webpack_require__(23);
const utils_1 = __webpack_require__(1);
const context_1 = __webpack_require__(4);
function buildSelection(on, select) {
    select = select !== null && select !== void 0 ? select : [];
    // if this is a "SELECT *" => just ignore
    if ((0, utils_1.isSelectAllArgList)(select.map(x => x.expr))) {
        if (!on.columns.length) {
            throw new interfaces_1.QueryError('SELECT * with no tables specified is not valid');
        }
        return on;
    }
    // if there is any aggregation function
    // check if there is any aggregation
    for (const col of select !== null && select !== void 0 ? select : []) {
        if (!on.isAggregation() && 'expr' in col && hasAggreg(col.expr)) {
            // yea, there is an aggregation somewhere in selection
            return (0, aggregation_1.buildGroupBy)(on, []).select(select);
        }
    }
    return new Selection(on, select);
}
exports.buildSelection = buildSelection;
function hasAggreg(e) {
    let has = false;
    (0, pgsql_ast_parser_1.astVisitor)(visitor => ({
        call: expr => {
            const nm = (0, utils_1.asSingleQName)(expr.function, 'pg_catalog');
            if (nm && aggregation_1.aggregationFunctions.has(nm)) {
                // yea, this is an aggregation
                has = true;
                return;
            }
            visitor.super().call(expr);
        }
    })).expr(e);
    return has;
}
function columnEvaluator(on, id, type) {
    if (!id) {
        throw new Error('Invalid column id');
    }
    const ret = new evaluator_1.Evaluator(type, id, id, null, raw => raw[id], {
        isColumnOf: on,
    });
    return ret;
}
exports.columnEvaluator = columnEvaluator;
function* buildCols(base, columns) {
    var _a;
    for (const s of columns) {
        if ('val' in s) {
            if (s.val.origin !== base) {
                throw new Error('Corrupted selection');
            }
            yield s;
            continue;
        }
        if (s.expr.type === 'ref' && s.expr.name === '*') {
            // handle select "*"
            if (s.alias) {
                throw new interfaces_1.QueryError('Cannot alias *');
            }
            let of = base;
            const alias = s.expr.table;
            if (alias) {
                // handle select "x.*"
                const sub = base.selectAlias(alias.name);
                if (!sub) {
                    throw new interfaces_1.QueryError(`Unknown alias "${alias.name}"`);
                }
                of = sub;
            }
            for (const val of of.listColumns()) {
                yield { val };
            }
        }
        else {
            const val = (0, expression_builder_1.buildValue)(s.expr);
            yield { val, as: (_a = s.alias) === null || _a === void 0 ? void 0 : _a.name, expr: s.expr };
        }
    }
}
class Selection extends transform_base_1.TransformBase {
    constructor(base, _columns) {
        var _a;
        super(base);
        this.columnIds = [];
        this.columnsOrigin = [];
        this.columnMapping = new Map();
        this.indexCache = new Map();
        this.columnsById = new Map();
        this.symbol = Symbol();
        this.columns = [];
        // build non-conflicting column ids based on existing ones
        const columns = (0, context_1.withSelection)(base, () => [...buildCols(base, _columns)]);
        this.columnIds = columns.map(x => { var _a; return (_a = x.as) !== null && _a !== void 0 ? _a : x.val.id; });
        // build column ids
        let anonymousBases = new Map();
        for (let i = 0; i < this.columnIds.length; i++) {
            if (!this.columnIds[i]) {
                let id = (_a = (0, utils_1.suggestColumnName)(columns[i].expr)) !== null && _a !== void 0 ? _a : 'column';
                // check no collision with an existing column
                let cnt = anonymousBases.get(id);
                this.columnIds[i] = id + (cnt ? cnt : '');
                anonymousBases.set(id, (cnt !== null && cnt !== void 0 ? cnt : 0) + 1);
            }
        }
        // build columns to select
        for (let i = 0; i < columns.length; i++) {
            this.refColumn(columns[i].val, this.columnIds[i]);
        }
        // ONLY ONCE COLUMNS HAVE BEEN REFERENCED BY ID,
        // rename ids for columns which have the same id
        // this allows yielding ambiguous columns data
        const has = new Map();
        for (let i = 0; i < columns.length; i++) {
            const orig = this.columnIds[i];
            const oi = has.get(orig);
            if (typeof oi !== 'number') {
                has.set(orig, i);
                continue;
            }
            let ret = orig;
            let k = 0;
            do {
                ret = orig + (++k);
            } while (this.columnIds.includes(ret));
            this.columnIds[i] = ret;
            has.set(ret, i);
        }
    }
    isAggregation() {
        return false;
    }
    refColumn(fromCol, alias) {
        const col = columnEvaluator(this, alias, fromCol.type);
        this.columns.push(col);
        this.columnMapping.set(col, fromCol);
        this.columnsOrigin.push(fromCol);
        if (!col.id) {
            return;
        }
        let ci = this.columnsById.get(col.id);
        if (!ci) {
            this.columnsById.set(col.id, ci = []);
        }
        ci.push(col);
    }
    stats(t) {
        return this.base.stats(t);
    }
    *enumerate(t) {
        for (const item of this.base.enumerate(t)) {
            yield this.build(item, t);
        }
    }
    build(item, t) {
        var _a;
        const ret = {};
        (0, interfaces_private_1.setId)(ret, (0, interfaces_private_1.getId)(item));
        ret[this.symbol] = this.symbol;
        for (let i = 0; i < this.columns.length; i++) {
            const col = this.columnsOrigin[i];
            ret[this.columnIds[i]] = (_a = col.get(item, t)) !== null && _a !== void 0 ? _a : null;
        }
        return ret;
    }
    hasItem(value, t) {
        return value[this.symbol] === this.symbol;
    }
    getColumn(column, nullIfNotFound) {
        const ret = (0, utils_1.colByName)(this.columnsById, column, true);
        if (!(ret === null || ret === void 0 ? void 0 : ret.length)) {
            if (nullIfNotFound) {
                return null;
            }
            throw new interfaces_1.ColumnNotFound((0, utils_1.colToStr)(column));
        }
        if (ret.length !== 1) {
            throw new interfaces_1.AmbiguousColumn((0, utils_1.colToStr)(column));
        }
        return ret[0];
    }
    getIndex(val) {
        if (this.indexCache.has(val)) {
            return this.indexCache.get(val);
        }
        const mapped = this.columnMapping.get(val);
        const originIndex = this.base.getIndex(mapped);
        const ret = originIndex && new SelectionIndex(this, originIndex);
        this.indexCache.set(val, ret);
        return ret;
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'map',
            of: this.base.explain(e),
            select: this.columnIds.map((x, i) => ({
                what: this.columnsOrigin[i].explain(e),
                as: x
            })),
        };
    }
}
exports.Selection = Selection;
class SelectionIndex {
    constructor(owner, base) {
        this.owner = owner;
        this.base = base;
    }
    stats(t, key) {
        return this.base.stats(t, key);
    }
    iterateKeys(t) {
        return this.base.iterateKeys(t);
    }
    get expressions() {
        return this.base.expressions;
    }
    entropy(op) {
        // same as source
        return this.base.entropy(op);
    }
    eqFirst(rawKey, t) {
        return this.base.eqFirst(rawKey, t);
    }
    *enumerate(op) {
        for (const i of this.base.enumerate(op)) {
            yield this.owner.build(i, op.t);
        }
    }
    explain(e) {
        return {
            _: 'indexMap',
            of: this.base.explain(e),
        };
    }
}
exports.SelectionIndex = SelectionIndex;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("pgsql-ast-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectExec = exports.buildWith = exports.buildSelect = exports.buildValues = void 0;
const interfaces_private_1 = __webpack_require__(0);
const deletion_1 = __webpack_require__(56);
const update_1 = __webpack_require__(57);
const insert_1 = __webpack_require__(58);
const values_table_1 = __webpack_require__(59);
const utils_1 = __webpack_require__(1);
const join_1 = __webpack_require__(24);
const clean_results_1 = __webpack_require__(18);
const mutation_base_1 = __webpack_require__(20);
const exec_utils_1 = __webpack_require__(7);
const context_1 = __webpack_require__(4);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const t_record_1 = __webpack_require__(19);
const function_call_table_1 = __webpack_require__(60);
function buildValues(p, acceptDefault) {
    const ret = new values_table_1.ValuesTable('', p.values, null, acceptDefault);
    return ret.selection;
}
exports.buildValues = buildValues;
function buildWithable(p) {
    switch (p.type) {
        case 'select':
        case 'union':
        case 'union all':
        case 'with':
        case 'with recursive':
        case 'values':
            return buildSelect(p);
        case 'delete':
            return new deletion_1.Deletion(p);
        case 'update':
            return new update_1.Update(p);
        case 'insert':
            return new insert_1.Insert(p);
        default:
            throw interfaces_private_1.NotSupported.never(p);
    }
}
function buildSelect(p) {
    switch (p.type) {
        case 'union':
        case 'union all':
            return buildUnion(p);
        case 'with':
            return buildWith(p, false);
        case 'select':
            return buildRawSelect(p);
        case 'values':
            return buildValues(p);
        case 'with recursive':
            throw new interfaces_private_1.NotSupported('recursirve with statements not implemented by pg-mem');
        default:
            throw interfaces_private_1.NotSupported.never(p);
    }
}
exports.buildSelect = buildSelect;
function buildUnion(p) {
    const left = buildSelect(p.left);
    const right = buildSelect(p.right);
    const ret = left.union(right);
    if (p.type === 'union all') {
        return ret;
    }
    return ret.distinct();
}
function buildWith(p, topLevel) {
    return (0, context_1.withBindingScope)(() => {
        const { setTempBinding } = (0, context_1.buildCtx)();
        // declare temp bindings
        for (const { alias, statement } of p.bind) {
            const prepared = (topLevel ? buildWithable(statement) : buildSelect(checkReadonlyWithable(statement)))
                .setAlias(alias.name);
            setTempBinding(alias.name, prepared);
        }
        return buildSelect(checkReadonlyWithable(p.in));
    });
}
exports.buildWith = buildWith;
function buildRawSelectSubject(p) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    // compute data source
    let sel = undefined;
    for (const from of (_a = p.from) !== null && _a !== void 0 ? _a : []) {
        // find what to select
        let newT;
        switch (from.type) {
            case 'table':
                newT = getSelectable(from.name);
                break;
            case 'statement':
                newT = mapColumns(from.alias, buildSelect(from.statement), from.columnNames, true)
                    .setAlias(from.alias);
                break;
            case 'call':
                const fnName = (_c = (_b = from.alias) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : (_d = from.function) === null || _d === void 0 ? void 0 : _d.name;
                const fromValue = (0, expression_builder_1.buildValue)(from);
                if (datatypes_1.ArrayType.matches(fromValue.type) && t_record_1.RecordType.matches(fromValue.type.of)) {
                    // if the function returns an array of records (= "a table"), then lets use it as a table
                    const cols = fromValue.type.of.columns;
                    newT = new function_call_table_1.FunctionCallTable(cols, fromValue);
                }
                else {
                    // if the function returns a single value, then lets transform this into a table
                    // nb: the function call will be re-built in here, but its OK (coz' of build cache)
                    newT = new values_table_1.ValuesTable(fnName, [[from]], [fnName])
                        .setAlias((_g = (_f = (_e = from.alias) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : (0, utils_1.suggestColumnName)(from)) !== null && _g !== void 0 ? _g : '');
                }
                break;
            default:
                throw interfaces_private_1.NotSupported.never(from);
        }
        if (!sel) {
            // first table to be selected
            sel = newT;
            continue;
        }
        switch ((_h = from.join) === null || _h === void 0 ? void 0 : _h.type) {
            case 'INNER JOIN':
                sel = new join_1.JoinSelection(sel, newT, from.join, true);
                break;
            case 'LEFT JOIN':
                sel = new join_1.JoinSelection(sel, newT, from.join, false);
                break;
            case 'RIGHT JOIN':
                sel = new join_1.JoinSelection(newT, sel, from.join, false);
                break;
            case null:
            case undefined:
                // cross join (equivalent to INNER JOIN ON TRUE)
                sel = new join_1.JoinSelection(sel, newT, {
                    type: 'INNER JOIN',
                    on: { type: 'boolean', value: true }
                }, true);
                break;
            default:
                throw new interfaces_private_1.NotSupported('Join type not supported ' + ((_k = (_j = from.join) === null || _j === void 0 ? void 0 : _j.type) !== null && _k !== void 0 ? _k : '<no join specified>'));
        }
    }
    return sel;
}
function buildRawSelect(p) {
    var _a, _b, _c;
    const distinct = !p.distinct || p.distinct === 'all'
        ? null
        : p.distinct;
    // ignore "for update" clause (not useful in non-concurrent environements)
    (0, utils_1.ignore)(p.for);
    let sel = buildRawSelectSubject(p);
    // filter & select
    sel = sel !== null && sel !== void 0 ? sel : (0, context_1.buildCtx)().schema.dualTable.selection;
    sel = sel.filter(p.where);
    // postgres helps users: you can use group-by & order-by on aliases.
    // ... but you cant use aliases in a computation (only in simple order by statements)
    // this hack reproduces this behaviour
    const aliases = new Map((0, utils_1.notNil)((_a = p.columns) === null || _a === void 0 ? void 0 : _a.filter(c => { var _a; return !!((_a = c.alias) === null || _a === void 0 ? void 0 : _a.name); })).map(c => [c.alias.name, c.expr]));
    const orderBy = (0, utils_1.modifyIfNecessary)((_b = p.orderBy) !== null && _b !== void 0 ? _b : [], o => {
        const by = o.by.type === 'ref' && !o.by.table && aliases.get(o.by.name);
        return by ? { ...o, by } : null;
    });
    if (p.groupBy) {
        const groupBy = (0, utils_1.modifyIfNecessary)((_c = p.groupBy) !== null && _c !== void 0 ? _c : [], o => {
            const group = o.type === 'ref' && !o.table && !(sel === null || sel === void 0 ? void 0 : sel.getColumn(o.name, true)) && aliases.get(o.name);
            return group || null;
        });
        sel = sel.groupBy(groupBy);
    }
    // order selection
    sel = sel.orderBy(orderBy);
    // when not grouping by, distinct is handled before
    // selection => can distinct on non selected values
    if (!p.groupBy && Array.isArray(p.distinct)) {
        sel = sel.distinct(p.distinct);
    }
    // select columns
    sel = sel.select(p.columns);
    // when grouping by, distinct is handled after selection
    //  => can distinct on key, or selected
    if (p.groupBy && Array.isArray(p.distinct)) {
        sel = sel.distinct(p.distinct);
    }
    // handle 'distinct' on result set
    if (distinct === 'distinct') {
        sel = sel.distinct();
    }
    if (p.limit) {
        sel = sel.limit(p.limit);
    }
    return sel;
}
function getSelectable(name) {
    const { schema, getTempBinding } = (0, context_1.buildCtx)();
    const temp = !name.schema
        && getTempBinding(name.name);
    let ret = temp || (0, interfaces_private_1.asSelectable)(schema.getObject(name)).selection;
    ret = mapColumns(name.name, ret, name.columnNames, false);
    if (name.alias) {
        ret = ret.setAlias(name.alias);
    }
    return ret;
}
function mapColumns(tableName, sel, columnNames, appendNonMapped) {
    if (!(columnNames === null || columnNames === void 0 ? void 0 : columnNames.length)) {
        return sel;
    }
    if (columnNames.length > sel.columns.length) {
        throw new interfaces_private_1.QueryError(`table "${tableName}" has ${sel.columns.length} columns available but ${columnNames.length} columns specified`, '42P10');
    }
    const mapped = new Set(columnNames.map(x => x.name));
    const cols = sel.columns.map((col, i) => {
        var _a;
        return ({
            expr: {
                type: 'ref',
                name: col.id,
            },
            // when realiasing table columns, columns which have not been mapped
            //  must not be removed
            // see ut "can map column names"
            alias: (_a = columnNames[i]) !== null && _a !== void 0 ? _a : {
                name: mapped.has(sel.columns[i].id)
                    ? `${sel.columns[i].id}1`
                    : sel.columns[i].id,
            },
        });
    });
    return sel.select(cols);
}
class SelectExec {
    constructor(statement, p) {
        this.statement = statement;
        this.p = p;
        // a bit of a special case for top level withs.
        this.selection = p.type === 'with' ? buildWith(p, true) : buildWithable(p);
    }
    get schema() {
        return this.statement.schema;
    }
    execute(t) {
        var _a;
        const rows = (0, clean_results_1.cleanResults)([...this.selection.enumerate(t)]);
        let unnamedFields = 0;
        const nextDefaultFieldName = () => {
            const unnamedField = `column${unnamedFields || ''}`;
            unnamedFields += 1;
            return unnamedField;
        };
        return {
            result: {
                rows,
                rowCount: (_a = t.getTransient(mutation_base_1.MutationDataSourceBase.affectedRows)) !== null && _a !== void 0 ? _a : rows.length,
                command: this.p.type.toUpperCase(),
                fields: this.selection.columns.map(c => { var _a; return ({ name: (_a = c.id) !== null && _a !== void 0 ? _a : nextDefaultFieldName(), type: c.type.primary }); }),
                location: (0, exec_utils_1.locOf)(this.p),
            },
            state: t,
        };
    }
}
exports.SelectExec = SelectExec;
function checkReadonlyWithable(st) {
    switch (st.type) {
        case 'delete':
        case 'insert':
        case 'update':
            throw new interfaces_private_1.NotSupported(`"WITH" nested statement with query type '${st.type}'`);
    }
    return st;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.reconciliateTypes = exports.typeSynonyms = exports.isGeometric = exports.isDateType = exports.dateTypes = exports.Types = exports.ArrayType = exports.isInteger = exports.isNumeric = exports.numberPriorities = exports.numbers = exports.floats = exports.integers = exports.DefaultType = void 0;
const interfaces_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(1);
const evaluator_1 = __webpack_require__(10);
const pgsql_ast_parser_1 = __webpack_require__(12);
const pgsql_ast_parser_2 = __webpack_require__(12);
const buffer_node_1 = __webpack_require__(21);
const datatype_base_1 = __webpack_require__(9);
const datatypes_geometric_1 = __webpack_require__(39);
const t_interval_1 = __webpack_require__(40);
const t_time_1 = __webpack_require__(41);
const t_timestamp_1 = __webpack_require__(42);
const t_jsonb_1 = __webpack_require__(43);
const t_regtype_1 = __webpack_require__(44);
const t_regclass_1 = __webpack_require__(45);
const t_record_1 = __webpack_require__(19);
const t_inet_1 = __webpack_require__(46);
const context_1 = __webpack_require__(4);
class UUIDtype extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.uuid;
    }
    doCanCast(to) {
        switch (to.primary) {
            case interfaces_1.DataType.text:
                return true;
        }
        return null;
    }
    doCast(value, to) {
        switch (to.primary) {
            case interfaces_1.DataType.text:
                return value;
        }
        throw new Error('Unexpected cast error');
    }
}
class NullType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.null;
    }
    doCast(value, to) {
        return new evaluator_1.Evaluator(to, null, 'null', null, null);
    }
    doCanCast(to) {
        return true;
    }
    doCanConvertImplicit() {
        return true;
    }
    doEquals(a, b) {
        return false;
    }
    doGt(a, b) {
        return false;
    }
    doLt(a, b) {
        return false;
    }
    doPrefer(type) {
        return type; // always prefer notnull types
    }
}
class DefaultType extends NullType {
}
exports.DefaultType = DefaultType;
exports.integers = new Set([interfaces_1.DataType.integer, interfaces_1.DataType.bigint]);
exports.floats = new Set([interfaces_1.DataType.decimal, interfaces_1.DataType.float]);
exports.numbers = new Set([...exports.integers, ...exports.floats]);
exports.numberPriorities = [interfaces_1.DataType.integer, interfaces_1.DataType.bigint, interfaces_1.DataType.decimal, interfaces_1.DataType.float]
    .reduce((a, x, i) => ({
    ...a,
    [x]: i
}), {});
function isNumeric(t) {
    const type = typeof t === 'string' ? t : t.primary;
    return exports.numbers.has(type);
}
exports.isNumeric = isNumeric;
function isInteger(t) {
    const type = typeof t === 'string' ? t : t.primary;
    return exports.integers.has(type);
}
exports.isInteger = isInteger;
class NumberType extends datatype_base_1.TypeBase {
    constructor(primary) {
        super();
        this.primary = primary;
    }
    doCanConvertImplicit(to) {
        switch (to.primary) {
            case interfaces_1.DataType.integer:
            case interfaces_1.DataType.bigint:
            case interfaces_1.DataType.float:
            case interfaces_1.DataType.decimal:
            case interfaces_1.DataType.regtype:
            case interfaces_1.DataType.regclass:
                return true;
            default:
                return false;
        }
    }
    doPrefer(type) {
        switch (type.primary) {
            case interfaces_1.DataType.integer:
            case interfaces_1.DataType.bigint:
                return this;
            case interfaces_1.DataType.float:
            case interfaces_1.DataType.decimal:
                return type;
        }
        return null;
    }
    doCanCast(to) {
        switch (to.primary) {
            case interfaces_1.DataType.integer:
            case interfaces_1.DataType.bigint:
            case interfaces_1.DataType.float:
            case interfaces_1.DataType.decimal:
            case interfaces_1.DataType.regtype:
            case interfaces_1.DataType.regclass:
                return true;
            case interfaces_1.DataType.text:
                return true;
            default:
                return false;
        }
    }
    doCast(value, to) {
        if (!exports.integers.has(value.type.primary) && exports.integers.has(to.primary)) {
            return new evaluator_1.Evaluator(to, value.id, value.hash, value, (raw, t) => {
                const got = value.get(raw, t);
                return typeof got === 'number'
                    ? Math.round(got)
                    : got;
            });
        }
        const { schema } = (0, context_1.buildCtx)();
        switch (to.primary) {
            case interfaces_1.DataType.regtype:
                return value
                    .setType(exports.Types.regtype)
                    .setConversion((int) => {
                    const got = schema.getType(int, { nullIfNotFound: true });
                    if (!got) {
                        throw new interfaces_1.CastError(interfaces_1.DataType.integer, interfaces_1.DataType.regtype);
                    }
                    return got.name;
                }, intToRegType => ({ intToRegType }));
            case interfaces_1.DataType.regclass:
                return value
                    .setType(exports.Types.regclass)
                    .setConversion((int) => {
                    var _a;
                    // === int -> regclass
                    const obj = schema.getObjectByRegOrName(int, { nullIfNotFound: true });
                    return (_a = obj === null || obj === void 0 ? void 0 : obj.reg.classId) !== null && _a !== void 0 ? _a : int;
                }, intToRegClass => ({ intToRegClass }));
            case interfaces_1.DataType.text:
                return value
                    .setType(to)
                    .setConversion((int) => int.toString(), toTxt => ({ toTxt }));
        }
        return value.setType(to);
    }
}
class ByteArrayType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.bytea;
    }
    doCanCast(to) {
        switch (to.primary) {
            case interfaces_1.DataType.text:
                return true;
        }
        return null;
    }
    doCast(value, to) {
        switch (to.primary) {
            case interfaces_1.DataType.text:
                return value
                    .setConversion(raw => (0, buffer_node_1.bufToString)(raw), toStr => ({ toStr }));
        }
        throw new Error('Unexpected cast error');
    }
    doEquals(a, b) {
        return (0, buffer_node_1.bufCompare)(a, b) === 0;
    }
    doGt(a, b) {
        return (0, buffer_node_1.bufCompare)(a, b) > 0;
    }
    doLt(a, b) {
        return (0, buffer_node_1.bufCompare)(a, b) < 0;
    }
}
class TextType extends datatype_base_1.TypeBase {
    constructor(len, citext) {
        super();
        this.len = len;
        this.citext = citext;
    }
    get name() {
        if (this.citext) {
            return 'citext';
        }
        return this.len ? 'character varying' : 'text';
    }
    get primary() {
        return this.citext
            ? interfaces_1.DataType.citext
            : interfaces_1.DataType.text;
    }
    doPrefer(to) {
        if (to instanceof TextType) {
            // returns the broader type
            if (!to.len) {
                return to;
            }
            if (!this.len) {
                return this;
            }
            return to.len > this.len ? to : this;
        }
        if (this.canCast(to)) {
            return to;
        }
        return null;
    }
    doCanConvertImplicit(to) {
        // text is implicitely convertible to dates
        switch (to.primary) {
            case interfaces_1.DataType.text:
            case interfaces_1.DataType.bool:
            case interfaces_1.DataType.uuid:
            case interfaces_1.DataType.bytea:
                return true;
        }
        return false;
    }
    doCanCast(to) {
        switch (to.primary) {
            case interfaces_1.DataType.text:
            case interfaces_1.DataType.citext:
                return true;
            case interfaces_1.DataType.text:
            case interfaces_1.DataType.uuid:
                return true;
            case interfaces_1.DataType.bool:
                return true;
            case interfaces_1.DataType.array:
                return this.canCast(to.of);
            case interfaces_1.DataType.bytea:
                return true;
        }
        if (exports.numbers.has(to.primary)) {
            return true;
        }
        if (isGeometric(to.primary)) {
            return true;
        }
        return undefined;
    }
    doCast(value, to) {
        var _a;
        switch (to.primary) {
            case interfaces_1.DataType.citext:
                return value.setType(to);
            case interfaces_1.DataType.bool:
                return value
                    .setConversion(rawStr => {
                    if ((0, utils_1.nullIsh)(rawStr)) {
                        return null;
                    }
                    if (rawStr === '0') {
                        return false;
                    }
                    else if (rawStr === '1') {
                        return true;
                    }
                    const str = rawStr.toLowerCase();
                    if ('true'.startsWith(str)) {
                        return true;
                    }
                    else if ('false'.startsWith(str)) {
                        return false;
                    }
                    if ('yes'.startsWith(str)) {
                        return true;
                    }
                    else if ('no'.startsWith(str)) {
                        return false;
                    }
                    throw new interfaces_1.CastError(interfaces_1.DataType.text, interfaces_1.DataType.bool, 'string ' + rawStr);
                }, toBool => ({ toBool }));
            case interfaces_1.DataType.uuid:
                return value
                    .setConversion((_rawStr) => {
                    var _a;
                    let rawStr = _rawStr;
                    if ((0, utils_1.nullIsh)(rawStr)) {
                        return null;
                    }
                    // check schema
                    if (rawStr[0] === '{') {
                        if (rawStr[rawStr.length - 1] !== '}') {
                            throw new interfaces_1.CastError(interfaces_1.DataType.text, interfaces_1.DataType.uuid, 'string: ' + JSON.stringify(_rawStr));
                        }
                        rawStr = rawStr.substr(1, rawStr.length - 2);
                    }
                    rawStr = rawStr.toLowerCase();
                    const [full, a, b, c, d, e] = (_a = /^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})$/.exec(rawStr)) !== null && _a !== void 0 ? _a : [];
                    if (!full) {
                        throw new interfaces_1.CastError(interfaces_1.DataType.text, interfaces_1.DataType.uuid, 'string: ' + JSON.stringify(_rawStr));
                    }
                    return `${a}-${b}-${c}-${d}-${e}`;
                }, toUuid => ({ toUuid }));
            case interfaces_1.DataType.text:
                const fromStr = to;
                const toStr = to;
                if (toStr.len === null || ((_a = fromStr.len) !== null && _a !== void 0 ? _a : -1) < toStr.len) {
                    // no need to truncate
                    return value;
                }
                return value
                    .setConversion(str => {
                    if ((str === null || str === void 0 ? void 0 : str.length) > toStr.len) {
                        throw new interfaces_1.QueryError(`value too long for type character varying(${toStr.len})`);
                    }
                    return str;
                }, truncate => ({ truncate, len: toStr.len }));
            case interfaces_1.DataType.array:
                return value
                    .setType(to)
                    .setConversion((str) => {
                    const array = (0, pgsql_ast_parser_1.parseArrayLiteral)(str);
                    to.convertLiteral(array);
                    return array;
                }, parseArray => ({ parseArray }));
            case interfaces_1.DataType.bytea:
                return value
                    .setConversion(str => {
                    return (0, buffer_node_1.bufFromString)(str);
                }, toBytea => ({ toBytea }));
        }
        if (exports.numbers.has(to.primary)) {
            const isInt = exports.integers.has(to.primary);
            return value
                .setConversion(str => {
                const val = Number.parseFloat(str);
                if (!Number.isFinite(val)) {
                    throw new interfaces_1.QueryError(`invalid input syntax for ${to.primary}: ${str}`);
                }
                if (isInt && Math.floor(val) !== val) {
                    throw new interfaces_1.QueryError(`invalid input syntax for ${to.primary}: ${str}`);
                }
                return val;
            }, castNum => ({ castNum, to: to.primary }));
        }
        if (isGeometric(to.primary)) {
            return value
                .setConversion(str => {
                const ret = (0, pgsql_ast_parser_2.parseGeometricLiteral)(str, to.primary);
                return ret;
            }, castGeo => ({ castGeo, to: to.primary }));
        }
        return undefined;
    }
    doEquals(a, b) {
        if (this.citext) {
            return a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0;
        }
        return super.doEquals(a, b);
    }
}
class BoolType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.bool;
    }
}
class ArrayType extends datatype_base_1.TypeBase {
    constructor(of, list) {
        super();
        this.of = of;
        this.list = list;
    }
    static matches(type) {
        return type.primary === interfaces_1.DataType.array;
    }
    get primary() {
        if (this.list) {
            return interfaces_1.DataType.list;
        }
        return interfaces_1.DataType.array;
    }
    get name() {
        return this.of.name + '[]';
    }
    doCanCast(to) {
        if (to instanceof ArrayType) {
            return this.of.canCast(to.of);
        }
        return this.of.canCast(to);
    }
    doCast(value, _to) {
        if (_to instanceof ArrayType) {
            const to = _to;
            const valueType = value.type;
            return new evaluator_1.Evaluator(to, value.id, value.hash, value, (raw, t) => {
                const arr = value.get(raw, t);
                return arr.map(x => evaluator_1.Value.constant(valueType.of, x).cast(to.of).get(raw, t));
            });
        }
        if (_to.primary === interfaces_1.DataType.text) {
            return this.toText(_to, value);
        }
        return this.toSingleColumn(_to, value);
    }
    toText(to, value) {
        const valueType = value.type;
        const converter = evaluator_1.Value.converter(valueType.of, exports.Types.text());
        return new evaluator_1.Evaluator(to, value.id, value.hash, value, (raw, t) => {
            const arr = value.get(raw, t);
            const strs = arr.map(x => converter(x, t));
            const data = strs.join(',');
            return this.list
                ? '(' + data + ')'
                : '{' + data + '}';
        }, { forceNotConstant: true });
    }
    toSingleColumn(to, value) {
        const valueType = value.type;
        const converter = evaluator_1.Value.converter(valueType.of, to);
        return new evaluator_1.Evaluator(to, value.id, value.hash, value, (raw, t) => {
            const arr = value.get(raw, t);
            return converter(arr[0], t);
        }, { forceNotConstant: true });
    }
    doEquals(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!this.of.equals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    doGt(a, b) {
        const len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (this.of.gt(a[i], b[i])) {
                return true;
            }
        }
        return a.length > b.length;
    }
    doLt(a, b) {
        const len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (this.of.lt(a[i], b[i])) {
                return true;
            }
        }
        return a.length < b.length;
    }
    convertLiteral(elts) {
        if ((0, utils_1.nullIsh)(elts)) {
            return;
        }
        if (!Array.isArray(elts)) {
            throw new interfaces_1.QueryError('Array depth mismatch: was expecting an array item.');
        }
        if (this.of instanceof ArrayType) {
            for (let i = 0; i < elts.length; i++) {
                this.of.convertLiteral(elts[i]);
            }
        }
        else {
            for (let i = 0; i < elts.length; i++) {
                if (Array.isArray(elts[i])) {
                    throw new interfaces_1.QueryError('Array depth mismatch: was not expecting an array item.');
                }
                elts[i] = evaluator_1.Value.text(elts[i])
                    .cast(this.of)
                    .get();
            }
        }
        return elts;
    }
}
exports.ArrayType = ArrayType;
/** Basic types */
exports.Types = {
    [interfaces_1.DataType.record]: (columns) => new t_record_1.RecordType(columns),
    [interfaces_1.DataType.bool]: new BoolType(),
    [interfaces_1.DataType.text]: (len = null) => makeText(len),
    [interfaces_1.DataType.citext]: new TextType(null, true),
    [interfaces_1.DataType.timestamp]: (len = null) => makeTimestamp(interfaces_1.DataType.timestamp, len),
    [interfaces_1.DataType.timestamptz]: (len = null) => makeTimestamp(interfaces_1.DataType.timestamptz, len),
    [interfaces_1.DataType.uuid]: new UUIDtype(),
    [interfaces_1.DataType.date]: new t_timestamp_1.TimestampType(interfaces_1.DataType.date),
    [interfaces_1.DataType.interval]: new t_interval_1.IntervalType(),
    [interfaces_1.DataType.time]: new t_time_1.TimeType(interfaces_1.DataType.time),
    [interfaces_1.DataType.timetz]: new t_time_1.TimeType(interfaces_1.DataType.timetz),
    [interfaces_1.DataType.jsonb]: new t_jsonb_1.JSONBType(interfaces_1.DataType.jsonb),
    [interfaces_1.DataType.regtype]: new t_regtype_1.RegTypeImpl(),
    [interfaces_1.DataType.regclass]: new t_regclass_1.RegClassImpl(),
    [interfaces_1.DataType.json]: new t_jsonb_1.JSONBType(interfaces_1.DataType.json),
    [interfaces_1.DataType.null]: new NullType(),
    [interfaces_1.DataType.float]: new NumberType(interfaces_1.DataType.float),
    [interfaces_1.DataType.integer]: new NumberType(interfaces_1.DataType.integer),
    [interfaces_1.DataType.bigint]: new NumberType(interfaces_1.DataType.bigint),
    [interfaces_1.DataType.bytea]: new ByteArrayType(),
    [interfaces_1.DataType.point]: new datatypes_geometric_1.PointType(),
    [interfaces_1.DataType.line]: new datatypes_geometric_1.LineType(),
    [interfaces_1.DataType.lseg]: new datatypes_geometric_1.LsegType(),
    [interfaces_1.DataType.box]: new datatypes_geometric_1.BoxType(),
    [interfaces_1.DataType.inet]: new t_inet_1.INetType(),
    [interfaces_1.DataType.path]: new datatypes_geometric_1.PathType(),
    [interfaces_1.DataType.polygon]: new datatypes_geometric_1.PolygonType(),
    [interfaces_1.DataType.circle]: new datatypes_geometric_1.CircleType(),
    default: new DefaultType(),
};
exports.dateTypes = new Set([
    interfaces_1.DataType.timestamp,
    interfaces_1.DataType.timestamptz,
    interfaces_1.DataType.date,
    interfaces_1.DataType.time
]);
function isDateType(_type) {
    const t = typeof _type === 'string' ? _type : _type.primary;
    return exports.dateTypes.has(t);
}
exports.isDateType = isDateType;
function isGeometric(dt) {
    switch (dt) {
        case interfaces_1.DataType.point:
        case interfaces_1.DataType.line:
        case interfaces_1.DataType.lseg:
        case interfaces_1.DataType.box:
        case interfaces_1.DataType.path:
        case interfaces_1.DataType.polygon:
        case interfaces_1.DataType.circle:
            return true;
    }
    return false;
}
exports.isGeometric = isGeometric;
const texts = new Map();
function makeText(len = null) {
    len = len !== null && len !== void 0 ? len : null;
    let got = texts.get(len);
    if (!got) {
        texts.set(len, got = new TextType(len));
    }
    return got;
}
const timestamps = new Map();
function makeTimestamp(primary, len = null) {
    len = len !== null && len !== void 0 ? len : null;
    const key = primary + '/' + len;
    let got = timestamps.get(key);
    if (!got) {
        timestamps.set(key, got = new t_timestamp_1.TimestampType(primary, len));
    }
    return got;
}
exports.typeSynonyms = {
    'varchar': interfaces_1.DataType.text,
    'char': interfaces_1.DataType.text,
    'character': interfaces_1.DataType.text,
    'character varying': interfaces_1.DataType.text,
    'int': interfaces_1.DataType.integer,
    'int4': interfaces_1.DataType.integer,
    'serial': interfaces_1.DataType.integer,
    'bigserial': interfaces_1.DataType.integer,
    'smallserial': interfaces_1.DataType.integer,
    'smallint': interfaces_1.DataType.integer,
    'bigint': interfaces_1.DataType.integer,
    'oid': interfaces_1.DataType.integer,
    'decimal': interfaces_1.DataType.float,
    'float': interfaces_1.DataType.float,
    'double precision': interfaces_1.DataType.float,
    'numeric': interfaces_1.DataType.float,
    'real': interfaces_1.DataType.float,
    'money': interfaces_1.DataType.float,
    'timestamp with time zone': interfaces_1.DataType.timestamptz,
    'timestamp without time zone': interfaces_1.DataType.timestamp,
    'boolean': interfaces_1.DataType.bool,
    'time with time zone': interfaces_1.DataType.timetz,
    'time without time zone': interfaces_1.DataType.time,
};
function reconciliateTypes(values, nullIfNoMatch) {
    // FROM  https://www.postgresql.org/docs/current/typeconv-union-case.html
    const nonNull = values
        .filter(x => x.type.primary !== interfaces_1.DataType.null);
    if (!nonNull.length) {
        // If all inputs are of type unknown, resolve as type text (the preferred type of the string category). Otherwise, unknown inputs are ignored for the purposes of the remaining rules.
        return exports.Types.text();
    }
    // If all inputs are of the same type, and it is not unknown, resolve as that type.
    const single = new Set(nonNull
        .map(v => v.type.reg.typeId));
    if (single.size === 1) {
        return nonNull[0].type;
    }
    return reconciliateTypesRaw(nonNull, nullIfNoMatch);
}
exports.reconciliateTypes = reconciliateTypes;
function reconciliateTypesRaw(values, nullIfNoMatch) {
    // find the matching type among non constants
    const foundType = values
        .reduce((final, c) => {
        var _a;
        if (c.type === exports.Types.null) {
            return final;
        }
        const pref = final.prefer(c.type);
        if (!pref) {
            throw new interfaces_1.CastError(c.type.primary, final.primary, (_a = c.id) !== null && _a !== void 0 ? _a : undefined);
        }
        return pref;
    }, exports.Types.null);
    // check that all constant literals are matching this.
    for (const x of values) {
        if (!x.isConstantLiteral && !x.type.canConvertImplicit(foundType)) {
            if (nullIfNoMatch) {
                return null;
            }
            throw new interfaces_1.CastError(x.type.primary, foundType.primary);
        }
    }
    return foundType;
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("object-hash");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanResults = exports.SELECT_ALL = exports.IS_PARTIAL_INDEXING = exports.JSON_NIL = void 0;
exports.JSON_NIL = Symbol('null');
exports.IS_PARTIAL_INDEXING = Symbol('partial_indexing');
exports.SELECT_ALL = Symbol('select *');
function cleanResults(results) {
    // ugly hack to turn jsonb nulls & partial indexed results into actual nulls
    // This will bite me someday ... but please dont judge me, I too try to have a life outside here 🤔
    // The sane thing to do would be to refactor things & introduce a DBNULL value in pgmem
    //   since the need of such DBNULL value could arise somehow on another type
    //   see:
    //   - `can select jsonb null` test in nulls.spec.ts
    //   - `executes array multiple index incomplete indexing` test in operators.queries.spec.ts
    function cleanObj(obj) {
        if (!obj || typeof obj !== 'object') {
            return;
        }
        for (const [k, v] of Object.entries(obj)) {
            if (v === exports.JSON_NIL) {
                obj[k] = null;
            }
            else if (Array.isArray(v)) {
                if (v[exports.IS_PARTIAL_INDEXING]) {
                    obj[k] = null;
                }
                else {
                    for (let i = 0; i < v.length; i++) {
                        if (obj[i] === exports.JSON_NIL) {
                            obj[i] = null;
                        }
                        else {
                            cleanObj(v);
                        }
                    }
                }
            }
            else {
                cleanObj(v);
            }
        }
    }
    for (let i = 0; i < results.length; i++) {
        const sel = results[i][exports.SELECT_ALL];
        if (sel) {
            results[i] = sel();
        }
        cleanObj(results[i]);
    }
    return results;
}
exports.cleanResults = cleanResults;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordType = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatype_base_1 = __webpack_require__(9);
class RecordType extends datatype_base_1.TypeBase {
    constructor(columns) {
        super();
        this.columns = columns;
    }
    static matches(type) {
        return type.primary === interfaces_private_1.DataType.record;
    }
    get primary() {
        return interfaces_private_1.DataType.record;
    }
    doEquals(a, b) {
        return (0, interfaces_private_1.getId)(a) === (0, interfaces_private_1.getId)(b);
    }
    static from(selection) {
        const recordCols = selection.columns
            .filter(c => !!c.id)
            .map(x => ({ name: x.id, type: x.type }));
        return new RecordType(recordCols);
    }
    /** Build a function that will transform a record of this type to a record of the target type  */
    transformItemFrom(source) {
        if (source.columns.length !== this.columns.length) {
            return null;
        }
        const setters = [];
        for (let i = 0; i < this.columns.length; i++) {
            const to = this.columns[i];
            const from = source.columns[i];
            if (!from.type.canConvertImplicit(to.type)) {
                return null;
            }
            const casted = from.cast(to.type);
            setters.push((old, neu, t) => neu[to.name] = casted.get(old, t));
        }
        return (raw, t, execId) => {
            const ret = {};
            // alter the items id, so each execution will have a different id
            (0, interfaces_private_1.setId)(ret, execId + (0, interfaces_private_1.getId)(raw));
            for (const s of setters) {
                s(raw, ret, t);
            }
            return ret;
        };
    }
    doCanCast(to) {
        // lets say that any type can cast to a record with no columns
        // this is a hack ... see row_to_json() UT
        return to instanceof RecordType && !to.columns.length;
    }
    doCast(value, to) {
        return value;
    }
}
exports.RecordType = RecordType;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createSetter = exports.MutationDataSourceBase = void 0;
const transform_base_1 = __webpack_require__(5);
const array_filter_1 = __webpack_require__(29);
const clean_results_1 = __webpack_require__(18);
const selection_1 = __webpack_require__(11);
const expression_builder_1 = __webpack_require__(6);
const context_1 = __webpack_require__(4);
const utils_1 = __webpack_require__(1);
class MutationDataSourceBase extends transform_base_1.DataSourceBase {
    constructor(table, mutatedSel, p) {
        super(table.ownerSchema);
        this.table = table;
        this.mutatedSel = mutatedSel;
        this.mutationResult = Symbol('mutationResult');
        // prepare "returning" statement
        if (p.returning) {
            this.returningRows = new array_filter_1.ArrayFilter(this.mutatedSel, []);
            this.returning = (0, selection_1.buildSelection)(this.returningRows, p.returning);
        }
        const { onFinishExecution } = (0, context_1.buildCtx)();
        // force execution if it has not yet been executed once the current statement finishes its execution.
        // see "only inserts once with statement is executed" test
        onFinishExecution(t => {
            this._doExecuteOnce(t);
        });
    }
    get isExecutionWithNoResult() {
        return !this.returning;
    }
    isAggregation() {
        return false;
    }
    get columns() {
        var _a, _b;
        return (_b = (_a = this.returning) === null || _a === void 0 ? void 0 : _a.columns) !== null && _b !== void 0 ? _b : [];
    }
    _doExecuteOnce(t) {
        // check if this mutation has already been executed in the statement being executed
        // and get the result from cache to avoid re-excuting it
        // see unit test "can use delete result multiple times in select"
        let affected = t.getTransient(this.mutationResult);
        if (!affected) {
            // execute mutation if nescessary
            affected = this.performMutation(t);
            t.setTransient(this.mutationResult, affected);
        }
        // set the result count
        t.setTransient(MutationDataSourceBase.affectedRows, affected.length);
        return affected;
    }
    *enumerate(t) {
        const affected = this._doExecuteOnce(t);
        if (!this.returning) {
            return;
        }
        // handle "returning" statement
        try {
            (0, clean_results_1.cleanResults)(affected);
            this.returningRows.rows = affected;
            yield* this.returning.enumerate(t);
        }
        finally {
            this.returningRows.rows = [];
        }
    }
    entropy(t) {
        // To ensure that a muation will always be prioritary
        //  on a join, then just return 0.
        return 0;
    }
    getColumn(column, nullIfNotFound) {
        if (!this.returning) {
            throw new Error(`Cannot get column "${(0, utils_1.colToStr)(column)}" from a mutation that has no returning statement`);
        }
        return this.returning.getColumn(column, nullIfNotFound);
    }
    hasItem(value, t) {
        throw new Error('To fix: Joins cannot call hasItem on a mutation');
    }
    getIndex(forValue) {
        return null;
    }
    explain(e) {
        throw new Error('not implemented');
    }
    isOriginOf(a) {
        return !!this.returning && a.origin === this.returning;
    }
    stats(t) {
        return null;
    }
}
exports.MutationDataSourceBase = MutationDataSourceBase;
MutationDataSourceBase.affectedRows = Symbol('affectedRows');
function createSetter(setTable, setSelection, _sets) {
    return (0, context_1.withSelection)(setSelection, () => {
        const sets = _sets.map(x => {
            const col = setTable.getColumnRef(x.column.name);
            return {
                col,
                value: x.value,
                getter: x.value.type !== 'default'
                    ? (0, expression_builder_1.buildValue)(x.value).cast(col.expression.type)
                    : null,
            };
        });
        return (t, target, source) => {
            var _a, _b, _c, _d;
            for (const s of sets) {
                if (s.value.type === 'default') {
                    target[s.col.expression.id] = (_b = (_a = s.col.default) === null || _a === void 0 ? void 0 : _a.get()) !== null && _b !== void 0 ? _b : undefined;
                }
                else {
                    target[s.col.expression.id] = (_d = (_c = s.getter) === null || _c === void 0 ? void 0 : _c.get(source, t)) !== null && _d !== void 0 ? _d : null;
                }
            }
        };
    });
}
exports.createSetter = createSetter;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bufClone = exports.isBuf = exports.bufFromString = exports.bufCompare = exports.bufToString = void 0;
function bufToString(buf) {
    return buf === null || buf === void 0 ? void 0 : buf.toString('utf-8');
}
exports.bufToString = bufToString;
function bufCompare(a, b) {
    return Buffer.compare(a, b);
}
exports.bufCompare = bufCompare;
function bufFromString(str) {
    return Buffer.from(str);
}
exports.bufFromString = bufFromString;
function isBuf(v) {
    return Buffer.isBuffer(v);
}
exports.isBuf = isBuf;
function bufClone(buf) {
    const bufcopy = Buffer.alloc(buf.length);
    buf.copy(bufcopy);
    return bufcopy;
}
exports.bufClone = bufClone;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregation = exports.getAggregator = exports.buildGroupBy = exports.aggregationFunctions = void 0;
const transform_base_1 = __webpack_require__(5);
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const interfaces_1 = __webpack_require__(2);
const object_hash_1 = __importDefault(__webpack_require__(15));
const evaluator_1 = __webpack_require__(10);
const count_1 = __webpack_require__(49);
const max_min_1 = __webpack_require__(50);
const sum_1 = __webpack_require__(51);
const array_agg_1 = __webpack_require__(52);
const avg_1 = __webpack_require__(53);
const selection_1 = __webpack_require__(11);
const context_1 = __webpack_require__(4);
const json_aggs_1 = __webpack_require__(54);
const utils_1 = __webpack_require__(1);
const bool_aggregs_1 = __webpack_require__(55);
exports.aggregationFunctions = new Set([
    'array_agg',
    'avg',
    'bit_and',
    'bit_or',
    'bool_and',
    'bool_or',
    'count',
    'every',
    'json_agg',
    'jsonb_agg',
    'json_object_agg',
    'jsonb_object_agg',
    'max',
    'min',
    'string_agg',
    'sum',
    'xmlagg',
]);
function buildGroupBy(on, groupBy) {
    const agg = new Aggregation(on, groupBy);
    return agg;
}
exports.buildGroupBy = buildGroupBy;
let idCnt = 0;
function getAggregator() {
    const on = (0, context_1.buildCtx)().selection;
    if (!on) {
        return null;
    }
    if (on.isAggregation()) {
        return on;
    }
    if (!(on instanceof selection_1.Selection)) {
        return null;
    }
    if (!(on.base.isAggregation())) {
        return null;
    }
    return on.base;
}
exports.getAggregator = getAggregator;
function isIntegralType(value) {
    return typeof value === 'number' || typeof value === 'string' || value instanceof Date;
}
class Aggregation extends transform_base_1.TransformBase {
    constructor(on, _groupedBy) {
        super(on);
        /**
         * Group-by values
         * - key: column in source hash
         * - value: column in this, evaluated against temporary entity.
         **/
        this.symbol = Symbol();
        this.aggId = idCnt++;
        this.aggregations = new Map();
        /** How to get the grouped values on "this.enumerate()" raw items output */
        this.groupByMapping = new Map();
        // === preassign columns that are reachable (grouped by)
        this.groupingValuesOnbase = (0, context_1.withSelection)(on, () => _groupedBy.map(x => (0, expression_builder_1.buildValue)(x)));
        for (let _i = 0; _i < this.groupingValuesOnbase.length; _i++) {
            const i = _i;
            const g = this.groupingValuesOnbase[i];
            this.groupByMapping.set(g.hash, new evaluator_1.Evaluator(g.type, g.id, g.hash, [g]
            // keys are stored wrapped in a symbol (because not necessarily selected)
            , v => v[this.symbol][i]));
        }
        // try to find an index matching our groupby clause
        this.groupIndex = on.getIndex(...this.groupingValuesOnbase);
        this.columns = [];
    }
    isAggregation() {
        return true;
    }
    getColumn(column, nullIfNotFound) {
        return this.base.getColumn(column, nullIfNotFound);
    }
    checkIfIsKey(got) {
        var _a;
        return (_a = this.groupByMapping.get(got.hash)) !== null && _a !== void 0 ? _a : got;
    }
    entropy(t) {
        return this.groupByMapping.size || 1;
    }
    stats() {
        // cannot be computed without iterating
        return null;
    }
    *enumerate(t) {
        for (const item of this._enumerateAggregationKeys(t)) {
            const sym = item[this.symbol];
            (0, interfaces_private_1.setId)(item, `agg_${this.aggId}_${(0, object_hash_1.default)(sym)}`);
            yield item;
        }
    }
    _enumerateAggregationKeys(t) {
        // ===== try to compute directly (will only succeed when no grouping, and simple statements like count(*))
        const ret = this.computeDirect(t);
        if (ret) {
            return [ret];
        }
        // ===== try to compute base on index
        const fromIndex = this.iterateFromIndex(t);
        if (fromIndex) {
            return fromIndex;
        }
        // ==== seq-scan computation
        return this.seqScan(t);
    }
    iterateFromIndex(t) {
        var _a, _b;
        if (!this.groupIndex) {
            return null;
        }
        const aggs = [...this.aggregations.values()];
        const allByGroup = !aggs.some(x => !x.computer.computeFromIndex);
        if (!allByGroup) {
            return null;
        }
        const indexKeys = this.groupIndex.iterateKeys(t);
        if (!indexKeys) {
            return null;
        }
        // iterate all index keys
        const computed = [];
        for (const k of indexKeys) {
            const ret = { [this.symbol]: k };
            // try to compute from index
            for (const agg of aggs) {
                const val = (_b = (_a = agg.computer).computeFromIndex) === null || _b === void 0 ? void 0 : _b.call(_a, k, this.groupIndex, t);
                if (typeof val === 'undefined') {
                    if (computed.length) {
                        throw new Error('Compute from index has succeeded on an index key, but failed on another (which must not happen)');
                    }
                    return null;
                }
                ret[agg.id] = val;
            }
            computed.push(ret);
        }
        return computed;
    }
    *seqScan(t) {
        var _a;
        const aggs = [...this.aggregations.values()];
        const groups = new Map();
        // === feed all items
        for (const item of this.base.enumerate(t)) {
            // get group-by values
            const key = this.groupingValuesOnbase.map(g => g.get(item, t));
            // add group if necessary
            const groupingKey = (0, object_hash_1.default)(key);
            let group = groups.get(groupingKey);
            if (!group) {
                groups.set(groupingKey, group = {
                    key,
                    aggs: aggs.map(x => ({
                        computer: x.computer.createGroup(t),
                        instance: x,
                        distinctHash: new Set(),
                    })),
                });
            }
            // process aggregators in group
            for (const g of group.aggs) {
                if (!g.computer) {
                    continue;
                }
                if (g.instance.distinct) {
                    const distinctValues = g.instance.distinct.map(x => x.get(item, t));
                    if (distinctValues.length === 1 && (0, utils_1.nullIsh)(distinctValues[0])) {
                        // ignore single nulls.
                        continue;
                    }
                    let valuesHash;
                    if (distinctValues.length === 1 && isIntegralType(distinctValues[0])) {
                        // optimization to avoid hashing on objects supported by "Set"
                        valuesHash = distinctValues[0];
                    }
                    else {
                        valuesHash = (0, object_hash_1.default)(distinctValues);
                    }
                    if (g.distinctHash.has(valuesHash)) {
                        continue;
                    }
                    g.distinctHash.add(valuesHash);
                }
                g.computer.feedItem(item);
            }
        }
        // if this.base is empty, and this is not a group by...
        //  👉 Must return a result.
        //   ex:
        //      - select max(a) from empty              👉 [{max: null}]
        //      - select max(a) from empty group by id  👉 []
        if (groups.size === 0 && !this.groupingValuesOnbase.length) {
            const key = [];
            const groupingKey = (0, object_hash_1.default)(key);
            groups.set(groupingKey, {
                key,
                aggs: aggs.map(x => ({
                    computer: x.computer.createGroup(t),
                    instance: x,
                    distinctHash: new Set(),
                })),
            });
        }
        // === return results
        for (const g of groups.values()) {
            const ret = {
                // specify the grouping key
                [this.symbol]: g.key
            };
            // fill aggregations values
            for (const { instance: { id }, computer } of g.aggs) {
                ret[id] = (_a = computer.finish()) !== null && _a !== void 0 ? _a : null;
            }
            yield ret;
        }
    }
    computeDirect(t) {
        var _a, _b;
        // When there is no grouping...
        if (this.groupByMapping.size) {
            return null;
        }
        // check if all selected aggregations can be computed directly (typically: count(*))
        const aggs = [...this.aggregations.values()];
        const allNoGroup = !aggs.some(x => !x.computer.computeNoGroup);
        if (!allNoGroup) {
            return null;
        }
        const ret = {
            [this.symbol]: [],
        };
        for (const agg of this.aggregations.values()) {
            const val = (_b = (_a = agg.computer).computeNoGroup) === null || _b === void 0 ? void 0 : _b.call(_a, t);
            if (typeof val === 'undefined') {
                return null;
            }
            ret[agg.id] = val;
        }
        return ret;
    }
    getAggregation(name, call) {
        const hashed = (0, object_hash_1.default)(call);
        const agg = this.aggregations.get(hashed);
        if (agg) {
            return agg.getter;
        }
        const got = this._getAggregation(name, call);
        const id = Symbol(name);
        const getter = new evaluator_1.Evaluator(got.type, null, hashed, [], raw => raw[id], {
            forceNotConstant: true,
        });
        let distinct = null;
        if (call.distinct === 'distinct') {
            if (call.args.length === 1 && call.args[0].type === 'list') {
                // hack in case we get a record-like thing - ex: select count(distinct (a,b))
                // cf UT behaves nicely with nulls on multiple count
                distinct = call.args[0].expressions.map(x => (0, expression_builder_1.buildValue)(x));
            }
            else {
                distinct = call.args.map(x => (0, expression_builder_1.buildValue)(x));
            }
        }
        this.aggregations.set(hashed, {
            id,
            getter,
            computer: got,
            distinct,
        });
        return getter;
    }
    _getAggregation(name, call) {
        switch (name) {
            case 'count':
                return (0, count_1.buildCount)(this.base, call);
            case 'max':
            case 'min':
                return (0, max_min_1.buildMinMax)(this.base, call.args, name);
            case 'sum':
                return (0, sum_1.buildSum)(this.base, call);
            case 'array_agg':
                return (0, array_agg_1.buildArrayAgg)(this.base, call);
            case 'avg':
                return (0, avg_1.buildAvg)(this.base, call);
            case 'jsonb_agg':
            case 'json_agg':
                return (0, json_aggs_1.buildJsonAgg)(this.base, call, name);
            case 'bool_and':
            case 'bool_or':
                return (0, bool_aggregs_1.buildBoolAgg)(this.base, call, name);
            default:
                throw new interfaces_1.NotSupported('aggregation function ' + name);
        }
    }
    hasItem(value, t) {
        return !!value[this.symbol];
    }
    getIndex(forValue) {
        // there is no index on aggregations
        return null;
    }
    explain(e) {
        return {
            _: 'aggregate',
            id: e.idFor(this),
            aggregator: null,
        };
    }
}
exports.Aggregation = Aggregation;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinIndex = exports.JoinSelection = void 0;
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const interfaces_1 = __webpack_require__(2);
const transform_base_1 = __webpack_require__(5);
const utils_1 = __webpack_require__(1);
const datatypes_1 = __webpack_require__(3);
const clean_results_1 = __webpack_require__(18);
const selection_1 = __webpack_require__(11);
const context_1 = __webpack_require__(4);
let jCnt = 0;
function* extractAnds(on) {
    if (on.type === 'binary' && on.op === 'AND') {
        yield* extractAnds(on.left);
        yield* extractAnds(on.right);
        return;
    }
    yield on;
}
function chooseStrategy(t, strategies) {
    strategies.sort((a, b) => a.iterate.entropy(t) > b.iterate.entropy(t) ? 1 : -1);
    return strategies[0];
}
class JoinSelection extends transform_base_1.DataSourceBase {
    constructor(restrictive, joined, on, innerJoin) {
        super((0, context_1.buildCtx)().schema);
        this.restrictive = restrictive;
        this.joined = joined;
        this.innerJoin = innerJoin;
        this._columns = [];
        this.columnsMappingParentToThis = new Map();
        this.columnsMappingThisToParent = new Map();
        this.indexCache = new Map();
        this.strategies = [];
        this.building = false;
        this.joinId = jCnt++;
        for (const c of this.restrictive.listSelectableIdentities()) {
            const nc = c.setWrapper(this, x => x['>restrictive']);
            this.columnsMappingParentToThis.set(c, nc);
            if (c.type.primary === interfaces_1.DataType.record) {
                continue;
            }
            this._columns.push(nc);
            this.columnsMappingThisToParent.set(nc, {
                col: c,
                side: 'restrictive'
            });
        }
        for (const c of this.joined.listSelectableIdentities()) {
            const nc = c.setWrapper(this, x => x['>joined']);
            this.columnsMappingParentToThis.set(c, nc);
            if (c.type.primary === interfaces_1.DataType.record) {
                continue;
            }
            this._columns.push(nc);
            this.columnsMappingThisToParent.set(nc, {
                col: c,
                side: 'joined',
            });
        }
        (0, context_1.withSelection)(this, () => {
            var _a;
            if (on.on) {
                this.fetchOnStrategies(on.on);
            }
            else if ((_a = on.using) === null || _a === void 0 ? void 0 : _a.length) {
                this.fetchUsingStrategies(on.using);
            }
            else {
                throw new Error('Unspecified join ON clause');
            }
        });
    }
    get isExecutionWithNoResult() {
        return false;
    }
    isOriginOf(a) {
        return this.joined.isOriginOf(a) || this.restrictive.isOriginOf(a);
    }
    get columns() {
        return this._columns;
    }
    entropy(t) {
        const strategy = chooseStrategy(t, this.strategies);
        if (!strategy) {
            // catastophic join... very high entropy...
            return this.restrictive.entropy(t) * this.joined.entropy(t);
        }
        // todo: multiply that by the mean count per keys in strategy.joinIndex ?
        const ret = strategy.iterate.entropy(t);
        return ret;
    }
    wrap(v) {
        const ret = this.columnsMappingParentToThis.get(v);
        if (!ret) {
            throw new Error('Corrupted join (unknown column)');
        }
        return ret;
    }
    listSelectableIdentities() {
        return this.columnsMappingParentToThis.values();
    }
    fetchOnStrategies(_on) {
        // build equalities eligible to a strategy
        const ands = [];
        const others = [];
        for (const on of extractAnds(_on)) {
            if (on.type !== 'binary' || on.op !== '=') {
                // join 'ON' clause not compatible with an indexed strategy
                others.push((0, expression_builder_1.buildValue)(on));
                continue;
            }
            this.building = true;
            const left = (0, expression_builder_1.buildValue)(on.left);
            const right = (0, expression_builder_1.buildValue)(on.right);
            this.building = false;
            // necessary because of the 'this.building' hack
            (0, expression_builder_1.uncache)(this);
            ands.push({
                left,
                right,
                eq: (0, expression_builder_1.buildValue)(on),
            });
        }
        // compute strategies
        this.fetchAndStrategies(ands, others);
        // build seq-scan expression
        this.seqScanExpression = (0, expression_builder_1.buildValue)(_on).cast(datatypes_1.Types.bool);
    }
    fetchUsingStrategies(_using) {
        // build equalities eligible to a strategy
        const ands = _using.map(n => {
            const left = this.restrictive.getColumn(n.name);
            const right = this.joined.getColumn(n.name);
            return {
                left,
                right,
                eq: (0, expression_builder_1.buildBinaryValue)(this.wrap(left), '=', this.wrap(right))
            };
        });
        this.ignoreDupes = new Set(ands.map(x => this.wrap(x.left)));
        // compute strategies
        this.fetchAndStrategies(ands, []);
        // build seq-scan expression
        this.seqScanExpression = ands.slice(1)
            .reduce((a, b) => (0, expression_builder_1.buildBinaryValue)(a, 'AND', b.eq), ands[0].eq);
    }
    fetchAndStrategies(ands, otherPredicates) {
        for (let i = 0; i < ands.length; i++) {
            const { left, right } = ands[i];
            const strats = [...this.fetchEqStrategyOn(left, right)];
            if (!strats.length) {
                continue;
            }
            const others = [
                ...ands.slice(0, i).map(x => x.eq),
                ...ands.slice(i + 1).map(x => x.eq),
                ...otherPredicates
            ];
            if (others.length) {
                const and = others.slice(1)
                    .reduce((v, c) => (0, expression_builder_1.buildBinaryValue)(c, 'AND', v), others[0]);
                for (const s of strats) {
                    s.othersPredicate = and;
                }
            }
            this.strategies.push(...strats);
        }
    }
    *fetchEqStrategyOn(a, b) {
        let restrictedVal = undefined;
        let joinedVal = undefined;
        // const aIndex = a.wrappedOrigin?.getIndex()
        if (this.restrictive.isOriginOf(a) && this.joined.isOriginOf(b)) {
            restrictedVal = a;
            joinedVal = b;
        }
        else if (this.restrictive.isOriginOf(b) && this.joined.isOriginOf(a)) {
            restrictedVal = b;
            joinedVal = a;
        }
        let processInner = this.innerJoin;
        let iterateSide = 'restrictive';
        while (restrictedVal && joinedVal) {
            // can always iterat on restricted value & use joined table foreign index
            const jindex = joinedVal.index;
            if (jindex && jindex.expressions.length === 1) {
                yield {
                    iterate: iterateSide === 'restrictive' ? this.restrictive : this.joined,
                    iterateSide,
                    onValue: restrictedVal,
                    joinIndex: jindex,
                };
            }
            if (!processInner) {
                break;
            }
            // if is an inner join, then both sides can be interverted
            processInner = false;
            const t = restrictedVal;
            restrictedVal = joinedVal;
            joinedVal = t;
            iterateSide = 'joined';
        }
    }
    getColumn(column, nullIfNotFound) {
        let onLeft = this.restrictive.getColumn(column, true);
        let onRight = this.joined.getColumn(column, true);
        if (!onLeft && !onRight) {
            if (nullIfNotFound) {
                return null;
            }
            throw new interfaces_1.ColumnNotFound((0, utils_1.colToStr)(column));
        }
        if (!!onLeft && !!onRight) {
            throw new interfaces_1.QueryError(`column reference "${(0, utils_1.colToStr)(column)}" is ambiguous`);
        }
        const on = onLeft !== null && onLeft !== void 0 ? onLeft : onRight;
        if (this.building) {
            return on;
        }
        const mapped = this.columnsMappingParentToThis.get(on);
        if (mapped) {
            return mapped;
        }
        throw new Error('Corrupted join');
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        const strategy = chooseStrategy(t, this.strategies);
        if (strategy) {
            // choose the iterator that has less values
            // find the right value using index
            for (const l of strategy.iterate.enumerate(t)) {
                yield* this.iterateStrategyItem(l, strategy, t);
            }
        }
        else {
            // perform a seq scan
            this.db.raiseGlobal('catastrophic-join-optimization');
            const others = [...this.joined.enumerate(t)];
            for (const l of this.restrictive.enumerate(t)) {
                yield* this.iterateCatastrophicItem(l, others, 'restrictive', t);
            }
        }
    }
    selectAlias(alias) {
        let onLeft = this.restrictive.selectAlias(alias);
        let onRight = this.joined.selectAlias(alias);
        if (!onLeft && !onRight) {
            return null;
        }
        if (!!onLeft && !!onRight) {
            throw new interfaces_1.QueryError(`alias "${alias}" is ambiguous`);
        }
        return new JoinMapAlias(this, onLeft !== null && onLeft !== void 0 ? onLeft : onRight, onLeft ? '>restrictive' : '>joined');
    }
    *iterateCatastrophicItem(item, others, side, t) {
        const { template, buildItem } = this.builder(item, side);
        let yielded = false;
        for (const cr of others) {
            const combined = buildItem(cr);
            const result = this.seqScanExpression.get(combined, t);
            if (result) {
                yielded = true;
                yield combined;
            }
        }
        if (!this.innerJoin && !yielded) {
            yield template;
        }
    }
    builder(item, side) {
        // if we're in an inner join, and the chosen strategy
        // has inverted join order, then invert built items
        let template;
        let buildItem;
        if (side === 'joined') {
            buildItem = x => this.buildItem(x, item);
            template = this.buildItem(null, item);
        }
        else {
            buildItem = x => this.buildItem(item, x);
            template = this.buildItem(item, null);
        }
        return { buildItem, template };
    }
    *iterateStrategyItem(item, strategy, t) {
        const { template, buildItem } = this.builder(item, strategy.iterateSide);
        const joinValue = strategy.onValue.get(item, t);
        let yielded = false;
        if (!(0, utils_1.nullIsh)(joinValue)) {
            // get corresponding right value(s)
            for (const o of strategy.joinIndex.enumerate({
                type: 'eq',
                key: [joinValue],
                t,
            })) {
                // build item
                const item = buildItem(o);
                // check othre predicates (in case the join has an AND statement)
                if (strategy.othersPredicate) {
                    const others = strategy.othersPredicate.get(item, t);
                    if (!others) {
                        continue;
                    }
                }
                // finally, yieldvalue
                yielded = true;
                yield item;
            }
        }
        if (!this.innerJoin && !yielded) {
            yield template;
        }
    }
    buildItem(l, r) {
        const ret = {
            '>joined': r,
            '>restrictive': l,
            [clean_results_1.SELECT_ALL]: () => this.merge(ret),
        };
        (0, interfaces_private_1.setId)(ret, `join${this.joinId}-${(0, interfaces_private_1.getId)(l)}-${(0, interfaces_private_1.getId)(r)}`);
        return ret;
    }
    merge(item) {
        if (!this.mergeSelect) {
            let sel = this.columns.map(val => ({ val }));
            if (this.ignoreDupes) {
                sel = sel.filter(t => { var _a; return !((_a = this.ignoreDupes) === null || _a === void 0 ? void 0 : _a.has(t.val)); });
            }
            this.mergeSelect = new selection_1.Selection(this, sel);
        }
        // nb: second argument is null... this is a hack : we KNOW it wont use the transaction.
        const ret = this.mergeSelect.build(item, Symbol('hack'));
        return ret;
    }
    hasItem(value) {
        throw new interfaces_1.NotSupported('lookups on joins');
    }
    getIndex(forValue) {
        if (this.indexCache.has(forValue)) {
            return this.indexCache.get(forValue);
        }
        // todo: filter using indexes of tables (index propagation)'
        const mapped = this.columnsMappingThisToParent.get(forValue);
        if (!mapped) {
            return null;
        }
        const originIndex = mapped.col.index;
        if (!originIndex) {
            return null;
        }
        const ret = new JoinIndex(this, originIndex, mapped.side);
        this.indexCache.set(forValue, ret);
        return ret;
    }
    explain(e) {
        const strategy = chooseStrategy(e.transaction, this.strategies);
        return {
            id: e.idFor(this),
            _: 'join',
            restrictive: this.restrictive.explain(e),
            joined: this.joined.explain(e),
            inner: this.innerJoin,
            on: strategy ? {
                iterate: e.idFor(strategy.iterate),
                iterateSide: strategy.iterateSide,
                joinIndex: strategy.joinIndex.explain(e),
                matches: strategy.onValue.explain(e),
                ...strategy.othersPredicate ? { filtered: true } : {},
            } : {
                seqScan: this.seqScanExpression.explain(e),
            },
        };
    }
}
exports.JoinSelection = JoinSelection;
class JoinMapAlias {
    constructor(owner, target, map) {
        this.owner = owner;
        this.target = target;
        this.map = map;
    }
    *listColumns() {
        for (const c of this.target.listColumns()) {
            yield c.setWrapper(this.owner, x => x[this.map]);
        }
    }
}
class JoinIndex {
    constructor(owner, base, side) {
        this.owner = owner;
        this.base = base;
        this.side = side;
    }
    get expressions() {
        return this.base.expressions;
    }
    stats(t, key) {
        return null;
    }
    iterateKeys() {
        return null;
    }
    entropy(op) {
        const strategy = this.chooseStrategy(op.t);
        if (!strategy) {
            // very high entropy (catastophic join)
            return this.base.entropy(op) * this.other.entropy(op.t);
        }
        // todo: multiply that by the mean count per keys in strategy.joinIndex ?
        return this.base.entropy(op);
    }
    eqFirst(rawKey, t) {
        for (const i of this.enumerate({
            type: 'eq',
            key: rawKey,
            t,
        })) {
            return i;
        }
        return null;
    }
    chooseStrategy(t) {
        const strats = this.owner.strategies.filter(x => x.iterateSide === this.side);
        if (!strats.length) {
            return null;
        }
        return chooseStrategy(t, strats);
    }
    get other() {
        return this.side === 'joined'
            ? this.owner.restrictive
            : this.owner.joined;
    }
    *enumerate(op) {
        const strategy = this.chooseStrategy(op.t);
        if (strategy) {
            for (const i of this.base.enumerate(op)) {
                yield* this.owner.iterateStrategyItem(i, strategy, op.t);
            }
        }
        else {
            this.owner.db.raiseGlobal('catastrophic-join-optimization');
            const all = [...this.other.enumerate(op.t)];
            for (const i of this.base.enumerate(op)) {
                yield* this.owner.iterateCatastrophicItem(i, all, this.side, op.t);
            }
        }
    }
    explain(e) {
        var _a, _b;
        const strat = this.chooseStrategy(e.transaction);
        return {
            _: 'indexOnJoin',
            index: this.base.explain(e),
            strategy: (_b = (_a = strat === null || strat === void 0 ? void 0 : strat.joinIndex) === null || _a === void 0 ? void 0 : _a.explain(e)) !== null && _b !== void 0 ? _b : 'catastrophic',
        };
    }
}
exports.JoinIndex = JoinIndex;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Alias = exports.buildAlias = void 0;
const transform_base_1 = __webpack_require__(5);
const evaluator_1 = __webpack_require__(10);
const utils_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
const t_record_1 = __webpack_require__(19);
function buildAlias(on, alias) {
    if (!alias) {
        return on;
    }
    if (on instanceof Alias && on.name === alias) {
        return on;
    }
    return new Alias(on, alias);
}
exports.buildAlias = buildAlias;
class Alias extends transform_base_1.TransformBase {
    constructor(sel, name) {
        super(sel);
        this.name = name;
        this.oldToThis = new Map();
        this.thisToOld = new Map();
        this._columns = null;
    }
    get isExecutionWithNoResult() {
        return this.base.isExecutionWithNoResult;
    }
    *listSelectableIdentities() {
        this.init();
        yield* super.listSelectableIdentities();
        yield this.asRecord;
    }
    rebuild() {
        this._columns = null;
        this.oldToThis.clear();
        this.thisToOld.clear();
    }
    selectAlias(alias) {
        if (this.name === alias) {
            return this;
        }
        return null;
    }
    listColumns() {
        return this.columns;
    }
    get debugId() {
        return this.base.debugId;
    }
    get columns() {
        this.init();
        return this._columns;
    }
    init() {
        if (this._columns) {
            return;
        }
        this._columns = this.base.columns.map(x => {
            const ret = x.setOrigin(this);
            this.oldToThis.set(x, ret);
            this.thisToOld.set(ret, x);
            return ret;
        });
        // how to build a record out of this alias?
        this.asRecord = new evaluator_1.Evaluator(t_record_1.RecordType.from(this), this.name, Math.random().toString(), this._columns, v => ({ ...v }), { forceNotConstant: true });
    }
    stats(t) {
        return this.base.stats(t);
    }
    enumerate(t) {
        return this.base.enumerate(t);
    }
    hasItem(value, t) {
        return this.base.hasItem(value, t);
    }
    getColumn(column, nullIfNotFound) {
        const col = this._getColumn(column);
        if (col) {
            return col;
        }
        if ((0, utils_1.asSingleName)(column) === this.name) {
            return this.asRecord;
        }
        if (nullIfNotFound) {
            return null;
        }
        throw new interfaces_1.ColumnNotFound((0, utils_1.colToStr)(column));
    }
    _getColumn(column) {
        if (typeof column !== 'string'
            && column.table) {
            if (!column.table.schema
                && column.table.name !== this.name) {
                return null;
            }
            column = column.name;
        }
        const got = this.base.getColumn(column, true);
        if (!got) {
            return got;
        }
        this.init();
        const ret = this.oldToThis.get(got);
        if (!ret) {
            throw new Error('Corrupted alias');
        }
        return ret;
    }
    explain(e) {
        // no need to explain an alias... it does nothing.
        return this.base.explain(e);
        // return {
        //     id: e.idFor(this),
        //     type: 'alias',
        //     alias: this.as,
        //     of: this.base.explain(e),
        // };
    }
    getIndex(...forValue) {
        return this.base.getIndex(...forValue.map(v => { var _a; return (_a = this.thisToOld.get(v)) !== null && _a !== void 0 ? _a : v; }));
    }
}
exports.Alias = Alias;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSql = exports.enableStatementLocationTracking = void 0;
const interfaces_1 = __webpack_require__(2);
const lru_cache_1 = __importDefault(__webpack_require__(22));
const object_hash_1 = __importDefault(__webpack_require__(15));
const pgsql_ast_parser_1 = __webpack_require__(12);
const utils_1 = __webpack_require__(1);
const astCache = new lru_cache_1.default({
    max: 1000,
});
let locationTracking = false;
function enableStatementLocationTracking() {
    locationTracking = true;
    astCache.reset();
}
exports.enableStatementLocationTracking = enableStatementLocationTracking;
function parseSql(sql, entry) {
    // when 'entry' is not specified, lets cache parsings
    // => better perf on repetitive requests
    const key = !entry && (0, object_hash_1.default)(sql);
    if (!entry) {
        const cached = astCache.get(key);
        if (cached) {
            return cached;
        }
    }
    try {
        let ret = (0, pgsql_ast_parser_1.parse)(sql, {
            entry,
            locationTracking,
        });
        // cache result
        if (!entry) {
            astCache.set(key, ret);
        }
        return ret;
    }
    catch (e) {
        const msg = (0, utils_1.errorMessage)(e);
        if (!/Syntax error/.test(msg)) {
            throw e;
        }
        // throw a nice parsing error.
        throw new interfaces_1.QueryError(`💔 Your query failed to parse.
This is most likely due to a SQL syntax error. However, you might also have hit a bug, or an unimplemented feature of pg-mem.
If this is the case, please file an issue at https://github.com/oguimbal/pg-mem along with a query that reproduces this syntax error.

👉 Failed query:

    ${sql}

💀 ${msg}`);
    }
}
exports.parseSql = parseSql;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TableIndex = void 0;
const interfaces_1 = __webpack_require__(2);
class TableIndex {
    constructor(onTable, col) {
        this.onTable = onTable;
        this.col = col;
        this.expressions = [col];
    }
    get hash() {
        throw new Error('not implemented');
    }
    explain(e) {
        throw new Error('not implemented');
    }
    stats(t, key) {
        return null;
    }
    iterateKeys() {
        return null;
    }
    get indexName() {
        return 'index_table_name_name';
    }
    entropy(op) {
        return this.onTable.db.listSchemas()
            .reduce((tot, s) => tot + s.tablesCount(op.t) * 10 * 3, 0);
    }
    add(raw) {
        throw new interfaces_1.PermissionDeniedError('tables');
    }
    eqFirst([key], t) {
        for (const its of this.onTable.itemsByTable(key, t)) {
            return its;
        }
    }
    *eq([rawKey], t) {
        for (const its of this.onTable.itemsByTable(rawKey, t)) {
            yield its;
        }
    }
    *nin(keys, t) {
        const raws = keys.map(x => x[0]);
        for (const i of this.onTable.selection.enumerate(t)) {
            if (raws.includes(i.table_name)) {
                continue;
            }
            yield i;
        }
    }
    *neq([rawKey], t) {
        for (const i of this.onTable.selection.enumerate(t)) {
            if (i.table_name !== rawKey) {
                yield i;
            }
        }
    }
    *gt(rawKey, t) {
        for (const i of this.onTable.selection.enumerate(t)) {
            if (i.table_name > rawKey) {
                yield i;
            }
        }
    }
    *lt(rawKey, t) {
        for (const i of this.onTable.selection.enumerate(t)) {
            if (i.table_name < rawKey) {
                yield i;
            }
        }
    }
    *ge(rawKey, t) {
        for (const i of this.onTable.selection.enumerate(t)) {
            if (i.table_name >= rawKey) {
                yield i;
            }
        }
    }
    *le(rawKey, t) {
        for (const i of this.onTable.selection.enumerate(t)) {
            if (i.table_name <= rawKey) {
                yield i;
            }
        }
    }
    enumerate(op) {
        switch (op.type) {
            case 'eq':
                return this.eq(op.key, op.t);
            case 'neq':
                return this.neq(op.key, op.t);
            case 'ge':
                return this.ge(op.key, op.t);
            case 'le':
                return this.le(op.key, op.t);
            case 'gt':
                return this.gt(op.key, op.t);
            case 'lt':
                return this.lt(op.key, op.t);
            case 'outside':
                return this.outside(op.lo, op.hi, op.t);
            case 'inside':
                return this.inside(op.lo, op.hi, op.t);
            case 'nin':
                return this.nin(op.keys, op.t);
            default:
                throw interfaces_1.NotSupported.never(op['type']);
        }
    }
    *outside(lo, hi, t) {
        yield* this.lt(lo, t);
        yield* this.gt(hi, t);
    }
    *inside(lo, hi, t) {
        throw new Error('Not implemented');
    }
}
exports.TableIndex = TableIndex;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("json-stable-stringify");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayFilter = void 0;
const transform_base_1 = __webpack_require__(5);
class ArrayFilter extends transform_base_1.FilterBase {
    constructor(fromTable, rows) {
        super(fromTable);
        this.rows = rows;
    }
    get index() {
        return null;
    }
    entropy() {
        return this.rows.length;
    }
    hasItem(raw) {
        return this.rows.includes(raw);
    }
    getIndex() {
        return null;
    }
    enumerate() {
        return this.rows;
    }
    stats(t) {
        return {
            count: this.rows.length,
        };
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'constantSet',
            rawArrayLen: this.rows.length,
        };
    }
}
exports.ArrayFilter = ArrayFilter;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// stolen from https://github.com/segmentio/pg-escape/blob/master/index.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.literal = void 0;
function literal(val) {
    if (null == val)
        return 'NULL';
    if (Array.isArray(val)) {
        var vals = val.map(literal);
        return "(" + vals.join(", ") + ")";
    }
    var backslash = ~val.indexOf('\\');
    var prefix = backslash ? 'E' : '';
    val = val.replace(/'/g, "''");
    val = val.replace(/\\/g, '\\\\');
    return prefix + "'" + val + "'";
}
exports.literal = literal;
;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteCreateSequence = void 0;
const interfaces_private_1 = __webpack_require__(0);
const sequence_1 = __webpack_require__(70);
const exec_utils_1 = __webpack_require__(7);
class ExecuteCreateSequence extends exec_utils_1.ExecHelper {
    constructor(inSchema, p, acceptTempSequences) {
        super(p);
        this.p = p;
        this.acceptTempSequences = acceptTempSequences;
        const name = p.name;
        this.schema = inSchema.getThisOrSiblingFor(name);
    }
    execute(t) {
        // commit pending data before making changes
        //  (because the index sequence creation does support further rollbacks)
        t = t.fullCommit();
        // create the sequence
        this.createSeq(t);
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
    createSeq(t) {
        const p = this.p;
        const name = p.name;
        // const ret = this.simple('CREATE', p);
        let ret = null;
        (0, exec_utils_1.checkExistence)(this.schema, name, p.ifNotExists, () => {
            if (p.temp && !this.acceptTempSequences) {
                throw new interfaces_private_1.NotSupported('temp sequences');
            }
            ret = new sequence_1.Sequence(name.name, this.schema)
                .alter(t, p.options);
            this.schema.db.onSchemaChange();
        });
        return ret;
    }
}
exports.ExecuteCreateSequence = ExecuteCreateSequence;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementExec = exports.SimpleExecutor = void 0;
const utils_1 = __webpack_require__(1);
const interfaces_private_1 = __webpack_require__(0);
const pgsql_ast_parser_1 = __webpack_require__(12);
const create_table_1 = __webpack_require__(71);
const create_sequence_1 = __webpack_require__(31);
const exec_utils_1 = __webpack_require__(7);
const create_index_1 = __webpack_require__(72);
const alter_1 = __webpack_require__(73);
const alter_sequence_1 = __webpack_require__(74);
const drop_index_1 = __webpack_require__(75);
const drop_table_1 = __webpack_require__(76);
const drop_sequence_1 = __webpack_require__(77);
const transaction_statements_1 = __webpack_require__(78);
const truncate_table_1 = __webpack_require__(79);
const show_1 = __webpack_require__(80);
const set_1 = __webpack_require__(81);
const create_enum_1 = __webpack_require__(82);
const create_view_1 = __webpack_require__(83);
const create_materialized_view_1 = __webpack_require__(84);
const create_schema_1 = __webpack_require__(85);
const create_function_1 = __webpack_require__(86);
const do_1 = __webpack_require__(87);
const select_1 = __webpack_require__(13);
const context_1 = __webpack_require__(4);
const drop_type_1 = __webpack_require__(88);
const detailsIncluded = Symbol('errorDetailsIncluded');
class SimpleExecutor extends exec_utils_1.ExecHelper {
    constructor(st, exec, opName) {
        super(st);
        this.exec = exec;
        this.opName = opName;
    }
    execute(t) {
        this.exec(t);
        return this.noData(t, this.opName);
    }
}
exports.SimpleExecutor = SimpleExecutor;
class MapNameResolver {
    constructor(map, isolated) {
        this.map = map;
        this.isolated = isolated;
    }
    resolve(name) {
        return this.map.get(name);
    }
}
class StatementExec {
    constructor(schema, statement, pAsSql, parameters) {
        this.schema = schema;
        this.statement = statement;
        this.pAsSql = pAsSql;
        this.parameters = parameters;
        this.onExecutedCallbacks = [];
    }
    onExecuted(callback) {
        this.onExecutedCallbacks.push(callback);
    }
    get db() {
        return this.schema.db;
    }
    _getExecutor(p) {
        switch (p.type) {
            case 'start transaction':
            case 'begin':
                return new transaction_statements_1.BeginStatementExec(p);
            case 'commit':
                return new transaction_statements_1.CommitExecutor(p);
            case 'rollback':
                return new transaction_statements_1.RollbackExecutor(p);
            case 'select':
            case 'delete':
            case 'update':
            case 'insert':
            case 'union':
            case 'union all':
            case 'values':
            case 'with recursive':
            case 'with':
                return new select_1.SelectExec(this, p);
            case 'truncate table':
                return new truncate_table_1.TruncateTable(p);
            case 'create table':
                return new create_table_1.ExecuteCreateTable(p);
            case 'create index':
                return new create_index_1.CreateIndexExec(this, p);
            case 'alter table':
                return new alter_1.Alter(this, p);
            case 'create extension':
                return new SimpleExecutor(p, () => this.schema.executeCreateExtension(p));
            case 'create sequence':
                return new create_sequence_1.ExecuteCreateSequence(this.schema, p, false);
            case 'alter sequence':
                return new alter_sequence_1.AlterSequence(this, p);
            case 'drop index':
                return new drop_index_1.DropIndex(this, p);
            case 'drop table':
                return new drop_table_1.DropTable(this, p);
            case 'drop sequence':
                return new drop_sequence_1.DropSequence(this, p);
            case 'drop type':
                return new drop_type_1.DropType(this, p);
            case 'show':
                return new show_1.ShowExecutor(p);
            case 'set':
            case 'set timezone':
                return new set_1.SetExecutor(p);
            case 'create enum':
                return new create_enum_1.CreateEnum(this, p);
            case 'create view':
                return new create_view_1.CreateView(this, p);
            case 'create materialized view':
                return new create_materialized_view_1.CreateMaterializedView(this, p);
            case 'create schema':
                return new create_schema_1.CreateSchema(this, p);
            case 'create function':
                return new create_function_1.CreateFunction(this, p);
            case 'drop function':
                return new SimpleExecutor(p, () => this.schema.dropFunction(p), 'DROP');
            case 'do':
                return new do_1.DoStatementExec(this, p);
            case 'comment':
            case 'raise':
            case 'deallocate':
                (0, utils_1.ignore)(p);
                return new SimpleExecutor(p, () => { });
            case 'refresh materialized view':
                // todo: a decent materialized view implementation
                (0, utils_1.ignore)(p);
                return new SimpleExecutor(p, () => { });
            case 'tablespace':
                throw new interfaces_private_1.NotSupported('"TABLESPACE" statement');
            case 'prepare':
                throw new interfaces_private_1.NotSupported('"PREPARE" statement');
            case 'create composite type':
                throw new interfaces_private_1.NotSupported('create composite type');
            default:
                throw interfaces_private_1.NotSupported.never(p, 'statement type');
        }
    }
    compile() {
        return this.niceErrors(() => {
            var _a, _b;
            if (this.executor) {
                return this.executor;
            }
            // build the AST coverage checker
            let p = this.statement;
            if (!this.db.options.noAstCoverageCheck) {
                const watched = (0, utils_1.watchUse)(p);
                p = watched.checked;
                this.checkAstCoverage = () => {
                    var _a;
                    const err = (_a = watched.check) === null || _a === void 0 ? void 0 : _a.call(watched);
                    if (err) {
                        throw new interfaces_private_1.NotSupported(err);
                    }
                };
            }
            // build parameters context
            const namedParams = (0, utils_1.fromEntries)((_b = (_a = this.parameters) === null || _a === void 0 ? void 0 : _a.filter(p => !!p.value.id).map(x => [x.value.id, x])) !== null && _b !== void 0 ? _b : []);
            const nameResolver = new MapNameResolver(namedParams, true);
            // parse the AST
            (0, context_1.withNameResolver)(nameResolver, () => (0, context_1.withStatement)(this, () => (0, context_1.withSelection)(this.schema.dualTable.selection, () => this.executor = this._getExecutor(p))));
            return this.executor;
        });
    }
    executeStatement(t) {
        return this.niceErrors(() => (0, utils_1.pushExecutionCtx)({
            transaction: t,
            schema: this.schema,
        }, () => {
            var _a;
            t.clearTransientData();
            // actual execution
            if (!this.executor) {
                throw new Error('Statement not prepared');
            }
            const result = this.executor.execute(t);
            // post-execution
            for (const s of this.onExecutedCallbacks) {
                s(t);
            }
            // check AST coverage if necessary
            (_a = this.checkAstCoverage) === null || _a === void 0 ? void 0 : _a.call(this);
            return result;
        }));
    }
    niceErrors(act) {
        try {
            return act();
        }
        catch (e) {
            // handle reeantrant calls (avoids including error tips twice)
            if (e && typeof e === 'object' && e[detailsIncluded]) {
                throw e;
            }
            // include error tips
            if (!this.db.options.noErrorDiagnostic && (e instanceof Error) || e instanceof interfaces_private_1.NotSupported) {
                // compute SQL
                const msgs = [e.message];
                if (e instanceof interfaces_private_1.QueryError) {
                    msgs.push(`🐜 This seems to be an execution error, which means that your request syntax seems okay,
    but the resulting statement cannot be executed → Probably not a pg-mem error.`);
                }
                else if (e instanceof interfaces_private_1.NotSupported) {
                    msgs.push(`👉 pg-mem is work-in-progress, and it would seem that you've hit one of its limits.`);
                }
                else {
                    msgs.push('💥 This is a nasty error, which was unexpected by pg-mem. Also known "a bug" 😁 Please file an issue !');
                }
                if (!this.db.options.noErrorDiagnostic) {
                    if (this.pAsSql) {
                        msgs.push(`*️⃣ Failed SQL statement: ${this.pAsSql}`);
                    }
                    else {
                        try {
                            msgs.push(`*️⃣ Reconsituted failed SQL statement: ${pgsql_ast_parser_1.toSql.statement(this.statement)}`);
                        }
                        catch (f) {
                            msgs.push(`*️⃣ <Failed to reconsitute SQL - ${(0, utils_1.errorMessage)(f)}>`);
                        }
                    }
                }
                msgs.push('👉 You can file an issue at https://github.com/oguimbal/pg-mem along with a way to reproduce this error (if you can), and  the stacktrace:');
                e.message = msgs.join('\n\n') + '\n\n';
            }
            // set error location
            if (e && typeof e === 'object') {
                e.location = (0, exec_utils_1.locOf)(this.statement);
                e[detailsIncluded] = true;
            }
            throw e;
        }
    }
}
exports.StatementExec = StatementExec;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const interfaces_private_1 = __webpack_require__(0);
const transform_base_1 = __webpack_require__(5);
class View extends transform_base_1.FilterBase {
    constructor(ownerSchema, name, selection) {
        super(selection);
        this.ownerSchema = ownerSchema;
        this.name = name;
        this.selection = selection;
    }
    get type() {
        return 'view';
    }
    get reg() {
        if (!this._reg) {
            throw new interfaces_private_1.QueryError(`relation "${this.name}" does not exist`);
        }
        return this._reg;
    }
    enumerate(t) {
        return this.selection.enumerate(t);
    }
    hasItem(value, t) {
        return this.selection.hasItem(value, t);
    }
    explain(e) {
        return this.selection.explain(e);
    }
    stats(t) {
        return this.selection.stats(t);
    }
    register() {
        // once fields registered,
        //  then register the table
        //  (column registrations need it not to be registered yet)
        this._reg = this.ownerSchema._reg_register(this);
        return this;
    }
    drop(t) {
        throw new Error('Method not implemented.');
    }
}
exports.View = View;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SeqScanFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const datatypes_1 = __webpack_require__(3);
class SeqScanFilter extends transform_base_1.FilterBase {
    constructor(selection, getter) {
        super(selection);
        this.selection = selection;
        this.getter = getter;
        this.getter = getter.cast(datatypes_1.Types.bool);
    }
    get index() {
        return null;
    }
    entropy(t) {
        // boost source entropy (in case an index has the same items count)
        return this.selection.entropy(t) * 1.5;
    }
    hasItem(raw, t) {
        return !!this.getter.get(raw, t);
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        for (const raw of this.selection.enumerate(t)) {
            const cond = this.getter.get(raw, t);
            if (cond) {
                yield raw;
            }
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'seqFilter',
            filtered: this.selection.explain(e),
        };
    }
}
exports.SeqScanFilter = SeqScanFilter;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableStatementLocationTracking = exports.newDb = void 0;
var db_1 = __webpack_require__(36);
Object.defineProperty(exports, "newDb", { enumerable: true, get: function () { return db_1.newDb; } });
var parse_cache_1 = __webpack_require__(26);
Object.defineProperty(exports, "enableStatementLocationTracking", { enumerable: true, get: function () { return parse_cache_1.enableStatementLocationTracking; } });
__exportStar(__webpack_require__(2), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.newDb = void 0;
const interfaces_1 = __webpack_require__(2);
const interfaces_private_1 = __webpack_require__(0);
const schema_1 = __webpack_require__(37);
const transform_base_1 = __webpack_require__(5);
const selection_1 = __webpack_require__(11);
const alias_1 = __webpack_require__(25);
const build_filter_1 = __webpack_require__(89);
const adapters_1 = __webpack_require__(99);
const transaction_1 = __webpack_require__(102);
const aggregation_1 = __webpack_require__(23);
const limit_1 = __webpack_require__(103);
const union_1 = __webpack_require__(104);
const distinct_1 = __webpack_require__(105);
const order_by_1 = __webpack_require__(106);
const pg_catalog_1 = __webpack_require__(107);
const information_schema_1 = __webpack_require__(123);
const utils_1 = __webpack_require__(1);
function newDb(opts) {
    (0, transform_base_1.initialize)({
        buildSelection: selection_1.buildSelection,
        buildAlias: alias_1.buildAlias,
        buildFilter: build_filter_1.buildFilter,
        buildGroupBy: aggregation_1.buildGroupBy,
        buildLimit: limit_1.buildLimit,
        buildUnion: union_1.buildUnion,
        buildOrderBy: order_by_1.buildOrderBy,
        buildDistinct: distinct_1.buildDistinct,
    });
    // root transaction
    const root = transaction_1.Transaction.root();
    const globals = root.getMap(interfaces_private_1.GLOBAL_VARS)
        .set('server_version', '12.2 (pg-mem)');
    root.set(interfaces_private_1.GLOBAL_VARS, globals);
    // create db
    return new MemoryDb(root, undefined, opts !== null && opts !== void 0 ? opts : {});
}
exports.newDb = newDb;
class MemoryDb {
    constructor(data, schemas, options = {}) {
        this.data = data;
        this.options = options;
        this.handlers = new Map();
        this.schemas = new Map();
        this.schemaVersion = 1;
        this.adapters = new adapters_1.Adapters(this);
        this.extensions = {};
        this.languages = {};
        this.searchPath = ['pg_catalog', 'public'];
        if (!schemas) {
            this.createSchema('public');
        }
        else {
            this.schemas = schemas;
        }
        (0, pg_catalog_1.setupPgCatalog)(this);
        (0, information_schema_1.setupInformationSchema)(this);
    }
    get public() {
        return this.getSchema(null);
    }
    onSchemaChange() {
        this.schemaVersion++;
        this.raiseGlobal('schema-change', this);
    }
    backup() {
        return new Backup(this);
    }
    registerExtension(name, install) {
        this.extensions[name] = install;
        return this;
    }
    registerLanguage(languageName, compiler) {
        this.languages[languageName.toLowerCase()] = compiler;
        return this;
    }
    getLanguage(name) {
        const ret = this.languages[name.toLowerCase()];
        if (!ret) {
            throw new interfaces_1.QueryError(`Unkonwn language "${name}". If you plan to use a script language, you must declare it to pg-mem via ".registerLanguage()"`);
        }
        return ret;
    }
    getExtension(name) {
        const ret = this.extensions[name];
        if (!ret) {
            throw new Error('Extension does not exist: ' + name);
        }
        return ret;
    }
    createSchema(name) {
        if (this.schemas.has(name)) {
            throw new Error('Schema exists: ' + name);
        }
        this.onSchemaChange();
        const ret = new schema_1.DbSchema(name, this);
        this.schemas.set(name, ret);
        return ret;
    }
    getTable(name, nullIfNotExists) {
        return this.public.getTable(name, nullIfNotExists);
    }
    resolveFunction(name, types) {
        const asSingle = (0, utils_1.asSingleQName)(name);
        if (asSingle) {
            for (const sp of this.searchPath) {
                const found = this.getSchema(sp).resolveFunction(name, types, true);
                if (found) {
                    return found;
                }
            }
            return null;
        }
        else {
            const q = name;
            return this.getSchema(q.schema).resolveFunction(q.name, types, true);
        }
    }
    resolveOperator(name, left, right) {
        for (const sp of this.searchPath) {
            const found = this.getSchema(sp).resolveOperator(name, left, right, true);
            if (found) {
                return found;
            }
        }
        return null;
    }
    on(event, handler) {
        let lst = this.handlers.get(event);
        if (!lst) {
            this.handlers.set(event, lst = new Set());
        }
        lst.add(handler);
        return {
            unsubscribe: () => lst === null || lst === void 0 ? void 0 : lst.delete(handler),
        };
    }
    raiseTable(table, event) {
        const got = this.handlers.get(event);
        for (const h of got !== null && got !== void 0 ? got : []) {
            h(table);
        }
    }
    raiseGlobal(event, ...data) {
        const got = this.handlers.get(event);
        for (const h of got !== null && got !== void 0 ? got : []) {
            h(...data);
        }
    }
    getSchema(db, nullIfNotFound) {
        db = db !== null && db !== void 0 ? db : 'public';
        const got = this.schemas.get(db);
        if (!got) {
            if (nullIfNotFound) {
                return null;
            }
            throw new interfaces_1.QueryError('schema not found: ' + db);
        }
        return got;
    }
    listSchemas() {
        return [...this.schemas.values()];
    }
}
class Backup {
    constructor(db) {
        this.db = db;
        this.data = db.data.clone();
        this.schemaVersion = db.schemaVersion;
    }
    restore() {
        if (this.schemaVersion !== this.db.schemaVersion) {
            throw new Error('You cannot restore this backup: schema has been changed since this backup has been created => prefer .clone() in this kind of cases.');
        }
        this.db.data = this.data.clone();
    }
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSchema = void 0;
const interfaces_1 = __webpack_require__(2);
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
const datatypes_1 = __webpack_require__(3);
const table_1 = __webpack_require__(47);
const parse_cache_1 = __webpack_require__(26);
const migrate_1 = __webpack_require__(66);
const t_custom_enum_1 = __webpack_require__(67);
const datatype_base_1 = __webpack_require__(9);
const t_equivalent_1 = __webpack_require__(68);
const overload_resolver_1 = __webpack_require__(69);
const create_sequence_1 = __webpack_require__(31);
const statement_exec_1 = __webpack_require__(32);
const select_1 = __webpack_require__(13);
class DbSchema {
    constructor(name, db) {
        this.name = name;
        this.db = db;
        this.relsByNameCas = new Map();
        this.relsByCls = new Map();
        this.relsByTyp = new Map();
        this._tables = new Set();
        this.fns = new overload_resolver_1.OverloadResolver(false);
        this.ops = new overload_resolver_1.OverloadResolver(false);
        this.installedExtensions = new Set();
        this.interceptors = new Set();
        this.simpleTypes = {};
        this.sizeableTypes = {};
        this.dualTable = new table_1.MemoryTable(this, this.db.data, { fields: [], name: 'dual' }).register();
        this.dualTable.insert({});
        this.dualTable.setReadonly();
        this._reg_unregister(this.dualTable);
    }
    setReadonly() {
        this.readonly = true;
        return this;
    }
    none(query) {
        this.query(query);
    }
    one(query) {
        const [result] = this.many(query);
        return result;
    }
    many(query) {
        return this.query(query).rows;
    }
    query(text) {
        // intercept ?
        if (typeof text === 'string') {
            for (const { intercept } of this.interceptors) {
                const ret = intercept(text);
                if (ret) {
                    return {
                        command: text,
                        fields: [],
                        location: { start: 0, end: text.length },
                        rowCount: 0,
                        rows: ret,
                    };
                }
            }
        }
        // execute.
        let last;
        for (const r of this.queries(text)) {
            last = r;
        }
        return last !== null && last !== void 0 ? last : {
            command: typeof text === 'string' ? text : '<custom ast>',
            fields: [],
            location: { start: 0, end: typeof text === 'string' ? text.length : 0 },
            rowCount: 0,
            rows: [],
        };
    }
    parse(query) {
        if (typeof query === 'string') {
            return (0, parse_cache_1.parseSql)(query);
        }
        return Array.isArray(query) ? query : [query];
    }
    *queries(query) {
        query = typeof query === 'string' ? query + ';' : query;
        try {
            // Parse statements
            let parsed = this.parse(query);
            if (!Array.isArray(parsed)) {
                parsed = [parsed];
            }
            const singleSql = typeof query === 'string' && parsed.length === 1 ? query : undefined;
            // Prepare statements
            const prepared = parsed
                .filter(s => !!s)
                .map(x => new statement_exec_1.StatementExec(this, x, singleSql));
            // Start an implicit transaction
            //  (to avoid messing global data if an operation fails mid-write)
            let t = this.db.data.fork();
            // Execute statements
            for (const p of prepared) {
                // Prepare statement
                const executor = p.compile();
                // store last select for debug purposes
                if (executor instanceof select_1.SelectExec) {
                    this.lastSelect = executor.selection;
                }
                // Execute statement
                const { state, result } = p.executeStatement(t);
                yield result;
                t = state;
            }
            // implicit final commit
            t.fullCommit();
            this.db.raiseGlobal('query', query);
        }
        catch (e) {
            this.db.raiseGlobal('query-failed', query);
            throw e;
        }
    }
    registerEnum(name, values) {
        new t_custom_enum_1.CustomEnumType(this, name, values).install();
    }
    getThisOrSiblingFor(name) {
        if (!(name === null || name === void 0 ? void 0 : name.schema) || name.schema === this.name) {
            return this;
        }
        return this.db.getSchema(name.schema);
    }
    parseType(native) {
        if (/\[\]$/.test(native)) {
            const inner = this.parseType(native.substr(0, native.length - 2));
            return inner.asArray();
        }
        return this.getType({ name: native });
    }
    getOwnType(t) {
        var _a, _b, _c, _d, _e, _f;
        if (t.kind === 'array') {
            const $of = this.getOwnType(t.arrayOf);
            if (!$of) {
                return null;
            }
            return $of.asArray();
        }
        const name = (_a = (t.doubleQuoted ? null : datatypes_1.typeSynonyms[t.name])) !== null && _a !== void 0 ? _a : t.name;
        const sizeable = this.sizeableTypes[name];
        if (sizeable) {
            const key = ((_b = t.config) === null || _b === void 0 ? void 0 : _b.length) === 1
                ? t.config[0]
                : (_d = (_c = t.config) === null || _c === void 0 ? void 0 : _c.join(',')) !== null && _d !== void 0 ? _d : undefined;
            let ret = sizeable.regs.get(key);
            if (!ret) {
                sizeable.regs.set(key, ret = sizeable.ctor(...(_e = t.config) !== null && _e !== void 0 ? _e : []));
            }
            return ret;
        }
        return (_f = this.simpleTypes[name]) !== null && _f !== void 0 ? _f : null;
    }
    getTypePub(t) {
        return this.getType(t);
    }
    getType(_t, opts) {
        if (typeof _t === 'number') {
            const byOid = this.relsByTyp.get(_t);
            if (byOid) {
                return (0, interfaces_private_1.asType)(byOid);
            }
            throw new interfaces_1.TypeNotFound(_t);
        }
        if (typeof _t === 'string') {
            return this.getType({ name: _t });
        }
        if ((0, utils_1.isType)(_t)) {
            return _t;
        }
        const t = _t;
        function chk(ret) {
            if (!ret && !(opts === null || opts === void 0 ? void 0 : opts.nullIfNotFound)) {
                throw new interfaces_1.TypeNotFound(t);
            }
            return ret;
        }
        const schema = (0, utils_1.schemaOf)(t);
        if (schema) {
            if (schema === this.name) {
                return chk(this.getOwnType(t));
            }
            else {
                return chk(this.db.getSchema(schema)
                    .getType(t, opts));
            }
        }
        if (opts === null || opts === void 0 ? void 0 : opts.skipSearch) {
            return chk(this.getOwnType(t));
        }
        for (const sp of this.db.searchPath) {
            const rel = this.db.getSchema(sp).getOwnType(t);
            if (rel) {
                return rel;
            }
        }
        return chk(this.getOwnType(t));
    }
    getObject(p, opts) {
        function chk(ret) {
            var _a;
            const bc = opts === null || opts === void 0 ? void 0 : opts.beingCreated;
            if (!ret && bc && (!p.schema || p.schema === ((_a = bc.ownerSchema) === null || _a === void 0 ? void 0 : _a.name)) && bc.name === p.name) {
                ret = bc;
            }
            if (!ret && !(opts === null || opts === void 0 ? void 0 : opts.nullIfNotFound)) {
                throw new interfaces_1.RelationNotFound(p.name);
            }
            return ret;
        }
        if (p.schema) {
            if (p.schema === this.name) {
                return chk(this.getOwnObject(p.name));
            }
            else {
                return chk(this.db.getSchema(p.schema)
                    .getObject(p, opts));
            }
        }
        if (opts === null || opts === void 0 ? void 0 : opts.skipSearch) {
            return chk(this.getOwnObject(p.name));
        }
        for (const sp of this.db.searchPath) {
            const rel = this.db.getSchema(sp).getOwnObject(p.name);
            if (rel) {
                return rel;
            }
        }
        return chk(this.getOwnObject(p.name));
    }
    getOwnObject(name) {
        var _a;
        return (_a = this.relsByNameCas.get(name)) !== null && _a !== void 0 ? _a : null;
    }
    getObjectByRegOrName(_reg, opts) {
        const reg = (0, utils_1.parseRegClass)(_reg);
        if (typeof reg === 'number') {
            return this.getObjectByRegClassId(reg, opts);
        }
        return this.getObject(reg, opts);
    }
    getObjectByRegClassId(reg, opts) {
        function chk(ret) {
            if (!ret && !(opts === null || opts === void 0 ? void 0 : opts.nullIfNotFound)) {
                throw new interfaces_1.RelationNotFound(reg.toString());
            }
            return ret;
        }
        if (opts === null || opts === void 0 ? void 0 : opts.skipSearch) {
            return chk(this.getOwnObjectByRegClassId(reg));
        }
        for (const sp of this.db.searchPath) {
            const rel = this.db.getSchema(sp).getOwnObjectByRegClassId(reg);
            if (rel) {
                return rel;
            }
        }
        return chk(this.getOwnObjectByRegClassId(reg));
    }
    getOwnObjectByRegClassId(reg) {
        var _a;
        return (_a = this.relsByCls.get(reg)) !== null && _a !== void 0 ? _a : null;
    }
    createSequence(t, opts, _name) {
        _name = _name !== null && _name !== void 0 ? _name : {
            name: (0, utils_1.randomString)(),
        };
        return new create_sequence_1.ExecuteCreateSequence(this, {
            type: 'create sequence',
            name: _name,
            options: opts !== null && opts !== void 0 ? opts : {},
        }, true).createSeq(t);
    }
    explainLastSelect() {
        var _a;
        return (_a = this.lastSelect) === null || _a === void 0 ? void 0 : _a.explain(new Explainer(this.db.data));
    }
    explainSelect(sql) {
        let parsed = this.parse(sql);
        if (parsed.length !== 1) {
            throw new Error('Expecting a single statement');
        }
        if (parsed[0].type !== 'select') {
            throw new Error('Expecting a select statement');
        }
        const prepared = new statement_exec_1.StatementExec(this, parsed[0], sql)
            .compile();
        if (!(prepared instanceof select_1.SelectExec)) {
            throw new Error('Can only explain selection executors');
        }
        return prepared
            .selection
            .explain(new Explainer(this.db.data));
    }
    executeCreateExtension(p) {
        const ext = this.db.getExtension(p.extension.name);
        const schema = p.schema
            ? this.db.getSchema(p.schema.name)
            : this;
        this.db.raiseGlobal('create-extension', p.extension, schema, p.version, p.from);
        const ne = p.ifNotExists; // evaluate outside
        if (this.installedExtensions.has(p.extension.name)) {
            if (ne) {
                return;
            }
            throw new interfaces_1.QueryError('Extension already created !');
        }
        ext(schema);
        this.installedExtensions.add(p.extension.name);
    }
    getTable(name, nullIfNotFound) {
        const ret = this.getOwnObject(name);
        if ((!ret || ret.type !== 'table')) {
            if (nullIfNotFound) {
                return null;
            }
            throw new interfaces_1.RelationNotFound(name);
        }
        return ret;
    }
    declareTable(table, noSchemaChange) {
        const trans = this.db.data.fork();
        const ret = new table_1.MemoryTable(this, trans, table).register();
        trans.commit();
        if (!noSchemaChange) {
            this.db.onSchemaChange();
        }
        return ret;
    }
    registerEquivalentType(type) {
        const ret = new t_equivalent_1.EquivalentType(type);
        this._registerType(ret);
        return ret;
    }
    _registerTypeSizeable(name, ctor) {
        if (this.simpleTypes[name] || this.sizeableTypes[name]) {
            throw new interfaces_1.QueryError(`type "${name}" already exists`);
        }
        this.sizeableTypes[name] = {
            ctor,
            regs: new Map(),
        };
        return this;
    }
    _registerType(type) {
        if (this.simpleTypes[type.primary] || this.sizeableTypes[type.primary] || this.getOwnObject(type.primary)) {
            throw new interfaces_1.QueryError(`type "${type.primary}" already exists`);
        }
        this.simpleTypes[type.primary] = type;
        this._reg_register(type);
        return this;
    }
    _unregisterType(type) {
        delete this.simpleTypes[type.primary];
        this._reg_unregister(type);
        return this;
    }
    _reg_register(rel) {
        if (this.readonly) {
            throw new interfaces_1.PermissionDeniedError();
        }
        if (this.relsByNameCas.has(rel.name)) {
            throw new Error(`relation "${rel.name}" already exists`);
        }
        const ret = (0, datatype_base_1.regGen)();
        this.relsByNameCas.set(rel.name, rel);
        this.relsByCls.set(ret.classId, rel);
        this.relsByTyp.set(ret.typeId, rel);
        if (rel.type === 'table') {
            this._tables.add(rel);
        }
        return ret;
    }
    _reg_unregister(rel) {
        if (this.readonly) {
            throw new interfaces_1.PermissionDeniedError();
        }
        this.relsByNameCas.delete(rel.name);
        this.relsByCls.delete(rel.reg.classId);
        this.relsByTyp.delete(rel.reg.typeId);
        if (rel.type === 'table') {
            this._tables.delete(rel);
        }
    }
    _reg_rename(rel, oldName, newName) {
        if (this.readonly) {
            throw new interfaces_1.PermissionDeniedError();
        }
        if (this.relsByNameCas.has(newName)) {
            throw new Error('relation exists: ' + newName);
        }
        if (this.relsByNameCas.get(oldName) !== rel) {
            throw new Error('consistency error while renaming relation');
        }
        this.relsByNameCas.delete(oldName);
        this.relsByNameCas.set(newName, rel);
    }
    tablesCount(t) {
        return this._tables.size;
    }
    *listTables() {
        for (const t of this._tables.values()) {
            if (!t.hidden) {
                yield t;
            }
        }
    }
    registerFunction(fn, replace) {
        var _a, _b;
        const def = {
            name: fn.name,
            args: ((_b = (_a = fn.args) === null || _a === void 0 ? void 0 : _a.map(x => {
                if (typeof x === 'string' || (0, utils_1.isType)(x)) {
                    return {
                        type: this.getTypePub(x),
                    };
                }
                return x;
            })) !== null && _b !== void 0 ? _b : []),
            argsVariadic: fn.argsVariadic && this.getTypePub(fn.argsVariadic),
            returns: fn.returns && this.getTypePub(fn.returns),
            impure: !!fn.impure,
            implementation: fn.implementation,
            allowNullArguments: fn.allowNullArguments,
        };
        this.fns.add(def, replace !== null && replace !== void 0 ? replace : true);
        return this;
    }
    registerOperator(op, replace) {
        this._registerOperator(op, replace !== null && replace !== void 0 ? replace : true);
        if (op.commutative && op.left !== op.right) {
            this._registerOperator({
                ...op,
                left: op.right,
                right: op.left,
                implementation: (a, b) => op.implementation(b, a),
            }, replace !== null && replace !== void 0 ? replace : true);
        }
        return this;
    }
    _registerOperator(fn, replace) {
        var _a;
        const args = [fn.left, fn.right].map(x => {
            if (typeof x === 'string' || (0, utils_1.isType)(x)) {
                return {
                    type: this.getTypePub(x),
                };
            }
            return x;
        });
        const def = {
            name: fn.operator,
            args,
            left: args[0].type,
            right: args[1].type,
            returns: fn.returns && this.getTypePub(fn.returns),
            impure: !!fn.impure,
            implementation: fn.implementation,
            allowNullArguments: fn.allowNullArguments,
            commutative: (_a = fn.commutative) !== null && _a !== void 0 ? _a : false,
        };
        this.ops.add(def, replace);
        return this;
    }
    resolveFunction(name, args, forceOwn) {
        const asSingle = (0, utils_1.asSingleQName)(name, this.name);
        if (!asSingle || !forceOwn) {
            return this.db.resolveFunction(name, args);
        }
        return this.fns.resolve(asSingle, args);
    }
    getFunction(name, args) {
        return this.fns.getExact(name, args);
    }
    dropFunction(fn) {
        if (fn.name.schema && fn.name.schema !== this.name) {
            return this.db.getSchema(fn.name.schema).dropFunction(fn);
        }
        const fns = this.fns.getOverloads(fn.name.name);
        // === determine which function to delete
        let toRemove;
        if (fn.arguments) {
            const targetArgs = fn.arguments;
            const match = fns === null || fns === void 0 ? void 0 : fns.filter(x => x.args.length === targetArgs.length
                && !x.args.some((a, i) => a.type !== this.getType(targetArgs[i].type)));
            if (!(match === null || match === void 0 ? void 0 : match.length)) {
                if (fn.ifExists) {
                    return;
                }
                throw new interfaces_1.QueryError(`function ${fn.name.name}(${targetArgs.map(t => (0, interfaces_1.typeDefToStr)(t.type)).join(',')}) does not exist`, '42883');
            }
            if (match.length > 1) {
                throw new interfaces_1.QueryError(`function name "${fn.name.name}" is ambiguous`, '42725');
            }
            toRemove = match[0];
        }
        else {
            if (!(fns === null || fns === void 0 ? void 0 : fns.length)) {
                if (fn.ifExists) {
                    return;
                }
                throw new interfaces_1.QueryError(`could not find a function named "${fn.name.name}"`, '42883');
            }
            if ((fns === null || fns === void 0 ? void 0 : fns.length) !== 1) {
                throw new interfaces_1.QueryError(`function name "${fn.name.name}" is not unique`, '42725');
            }
            toRemove = fns[0];
        }
        this.fns.remove(toRemove);
    }
    resolveOperator(name, left, right, forceOwn) {
        if (!forceOwn) {
            return this.db.resolveOperator(name, left, right);
        }
        return this.ops.resolve(name, [left, right]);
    }
    async migrate(config) {
        await (0, migrate_1.migrate)(this, config);
    }
    interceptQueries(intercept) {
        const qi = { intercept };
        this.interceptors.add(qi);
        return {
            unsubscribe: () => {
                this.interceptors.delete(qi);
            }
        };
    }
}
exports.DbSchema = DbSchema;
class Explainer {
    constructor(transaction) {
        this.transaction = transaction;
        this.sels = new Map();
    }
    idFor(sel) {
        if (sel.debugId) {
            return sel.debugId;
        }
        if (this.sels.has(sel)) {
            return this.sels.get(sel);
        }
        const id = this.sels.size + 1;
        this.sels.set(sel, id);
        return id;
    }
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCall = void 0;
const datatypes_1 = __webpack_require__(3);
const interfaces_1 = __webpack_require__(2);
const evaluator_1 = __webpack_require__(10);
const object_hash_1 = __importDefault(__webpack_require__(15));
const pgsql_ast_parser_1 = __webpack_require__(12);
const utils_1 = __webpack_require__(1);
const context_1 = __webpack_require__(4);
function buildCall(name, args) {
    let type = null;
    let get;
    let impure = false;
    let acceptNulls = false;
    const { schema } = (0, context_1.buildCtx)();
    // put your ugly hack here 😶 🏴‍☠️ ...
    switch ((0, utils_1.asSingleQName)(name)) {
        case 'any':
            return buildAnyCall(args);
        case 'current_schema':
            type = datatypes_1.Types.text();
            get = () => 'public';
            break;
        // a set of functions that are calledby Tyopeorm, but we dont needto support them yet
        // since there is not result (function never actually called)
        case 'pg_get_constraintdef':
        case 'pg_get_expr':
            type = datatypes_1.Types.text();
            get = () => {
                throw new interfaces_1.NotSupported((0, utils_1.qnameToStr)(name) + ' is not supported');
            };
            break;
        case 'unnest':
            if (args.length !== 1) {
                throw new interfaces_1.QueryError('unnest expects 1 arguments, given ' + args.length);
            }
            const utype = args[0].type;
            if (!(utype instanceof datatypes_1.ArrayType)) {
                throw new interfaces_1.QueryError('unnest expects enumerable argument ' + utype.primary);
            }
            type = utype.of;
            get = () => {
                throw new interfaces_1.NotSupported((0, utils_1.qnameToStr)(name) + ' is not supported');
            };
            break;
        case 'coalesce':
            acceptNulls = true;
            if (!args.length) {
                throw new interfaces_1.QueryError('coalesce expects at least 1 argument');
            }
            type = args.reduce((a, b) => {
                if (a === b.type) {
                    return a;
                }
                if (b.type.canCast(a)) {
                    return a;
                }
                if (a.canCast(b.type)) {
                    return b.type;
                }
                throw new interfaces_1.QueryError(`COALESCE types ${a.name} and ${b.type.name} cannot be matched`, '42804');
            }, args[0].type);
            args = args.map(x => x.cast(type));
            get = (...args) => args.find(x => !(0, utils_1.nullIsh)(x));
            break;
        default:
            // try to find a matching custom function overloads
            acceptNulls = true;
            const resolved = schema.resolveFunction(name, args);
            if (resolved) {
                args = args.map((x, i) => { var _a, _b; return x.cast((_b = (_a = resolved.args[i]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : resolved.argsVariadic); });
                type = resolved.returns;
                get = resolved.implementation;
                impure = !!resolved.impure;
                acceptNulls = !!resolved.allowNullArguments;
            }
            break;
    }
    if (!get) {
        throw new interfaces_1.QueryError({
            error: `function ${(0, utils_1.qnameToStr)(name)}(${args.map(a => a.type.name).join(',')}) does not exist`,
            hint: `🔨 Please note that pg-mem implements very few native functions.

            👉 You can specify the functions you would like to use via "db.public.registerFunction(...)"`
        });
    }
    return new evaluator_1.Evaluator(type !== null && type !== void 0 ? type : datatypes_1.Types.null, null, (0, object_hash_1.default)({ call: name, args: args.map(x => x.hash) }), args, (raw, t) => {
        const argRaw = args.map(x => x.get(raw, t));
        if (!acceptNulls && argRaw.some(utils_1.nullIsh)) {
            return null;
        }
        return get(...argRaw);
    }, impure ? { unpure: impure } : undefined);
}
exports.buildCall = buildCall;
function buildAnyCall(args) {
    if (args.length !== 1) {
        throw new interfaces_1.QueryError('ANY() expects 1 argument, given ' + args.length);
    }
    const array = args[0];
    // == if ANY(select something) ... get the element type
    if (array.type instanceof datatypes_1.ArrayType) {
        return new evaluator_1.Evaluator(array.type.of, null, (0, object_hash_1.default)({ any: array.hash }), args, (raw, t) => {
            return array.get(raw, t);
        }, { isAny: true } // <== isAny !
        );
    }
    // == if ANY('{elements}') ... will be an array of text => keep text
    if (array.type !== datatypes_1.Types.text() || !array.isConstantLiteral) {
        throw new interfaces_1.QueryError('ANY() expects either a selection, or an array literal');
    }
    // parse ANY() array literal
    const arrayValue = (0, pgsql_ast_parser_1.parseArrayLiteral)(array.get());
    return new evaluator_1.Evaluator(datatypes_1.Types.text(), null, (0, object_hash_1.default)({ any: array.hash }), args, arrayValue, { isAny: true } // <== isAny !
    );
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleType = exports.PolygonType = exports.PathType = exports.BoxType = exports.LsegType = exports.LineType = exports.PointType = exports.pointEq = exports.pointToStr = void 0;
const interfaces_1 = __webpack_require__(2);
const datatype_base_1 = __webpack_require__(9);
function pointToStr(p) {
    return `(${p.x},${p.y})`;
}
exports.pointToStr = pointToStr;
function pointEq(a, b) {
    return a.x === b.x && a.y === b.y;
}
exports.pointEq = pointEq;
class PointType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.point;
    }
    get name() {
        return 'point';
    }
    doCanCast(t) {
        return t.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        if (to.primary !== interfaces_1.DataType.text) {
            throw new interfaces_1.QueryError(`Invalid cast to: ` + to.primary);
        }
        return value
            .setConversion((p) => {
            return pointToStr(p);
        }, pointToTxt => ({ pointToTxt }));
    }
    doEquals(a, b) {
        return pointEq(a, b);
    }
    doGt(a, b) {
        if (a.x !== b.x) {
            return a.x > b.x;
        }
        return a.y > b.y;
    }
    doLt(a, b) {
        if (a.x !== b.x) {
            return a.x < b.x;
        }
        return a.y < b.y;
    }
}
exports.PointType = PointType;
class LineType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.line;
    }
    get name() {
        return 'line';
    }
    doCanCast(t) {
        return t.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        if (to.primary !== interfaces_1.DataType.text) {
            throw new interfaces_1.QueryError(`Invalid cast to: ` + to.primary);
        }
        return value
            .setConversion((l) => {
            return `{${l.a},${l.b},${l.c}}`;
        }, lineToTxt => ({ lineToTxt }));
    }
    doEquals(a, b) {
        return a.a === b.a && a.b === b.b && a.c === b.c;
    }
}
exports.LineType = LineType;
class LsegType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.lseg;
    }
    get name() {
        return 'lseg';
    }
    doCanCast(t) {
        return t.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        if (to.primary !== interfaces_1.DataType.text) {
            throw new interfaces_1.QueryError(`Invalid cast to: ` + to.primary);
        }
        return value
            .setConversion(([a, b]) => {
            return `[${pointToStr(a)},${pointToStr(b)}]`;
        }, SegmentToTxt => ({ SegmentToTxt }));
    }
    doEquals([as, ae], [bs, be]) {
        return pointEq(as, bs) && pointEq(ae, be);
    }
}
exports.LsegType = LsegType;
class BoxType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.box;
    }
    get name() {
        return 'box';
    }
    doCanCast(t) {
        return t.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        if (to.primary !== interfaces_1.DataType.text) {
            throw new interfaces_1.QueryError(`Invalid cast to: ` + to.primary);
        }
        return value
            .setConversion(([a, b]) => {
            return `${pointToStr(a)},${pointToStr(b)}`;
        }, BoxToTxt => ({ BoxToTxt }));
    }
    doEquals([as, ae], [bs, be]) {
        return pointEq(as, bs) && pointEq(ae, be);
    }
}
exports.BoxType = BoxType;
class PathType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.path;
    }
    get name() {
        return 'path';
    }
    doCanCast(t) {
        return t.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        if (to.primary !== interfaces_1.DataType.text) {
            throw new interfaces_1.QueryError(`Invalid cast to: ` + to.primary);
        }
        return value
            .setConversion((p) => {
            const vals = p.path.map(pointToStr).join(',');
            return p.closed
                ? '(' + vals + ')'
                : '[' + vals + ']';
        }, PathToTxt => ({ PathToTxt }));
    }
    doEquals(a, b) {
        // Yup, you read that right ...
        //  Try it... path equality always returns true (???)
        return true;
        // return !!a.closed === !!b.closed
        //     && a.path.length === b.path.length
        //     && a.path.every((x, i) => pointEq(x, b.path[i]));
    }
}
exports.PathType = PathType;
class PolygonType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.polygon;
    }
    get name() {
        return 'polygon';
    }
    doCanCast(t) {
        return t.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        if (to.primary !== interfaces_1.DataType.text) {
            throw new interfaces_1.QueryError(`Invalid cast to: ` + to.primary);
        }
        return value
            .setConversion((p) => {
            const vals = p.map(pointToStr).join(',');
            return '(' + vals + ')';
        }, PolygonToTxt => ({ PolygonToTxt }));
    }
    doEquals(a, b) {
        return a.length === b.length
            && a.every((x, i) => pointEq(x, b[i]));
    }
}
exports.PolygonType = PolygonType;
class CircleType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.circle;
    }
    get name() {
        return 'circle';
    }
    doCanCast(t) {
        return t.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        if (to.primary !== interfaces_1.DataType.text) {
            throw new interfaces_1.QueryError(`Invalid cast to: ` + to.primary);
        }
        return value
            .setConversion((p) => {
            return `<${pointToStr(p.c)},${p.r}>`;
        }, CircleToTxt => ({ CircleToTxt }));
    }
    doEquals(a, b) {
        return pointEq(a.c, b.c) && a.r === b.r;
    }
}
exports.CircleType = CircleType;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervalType = void 0;
const interfaces_private_1 = __webpack_require__(0);
const pgsql_ast_parser_1 = __webpack_require__(12);
const datatype_base_1 = __webpack_require__(9);
const utils_1 = __webpack_require__(1);
class IntervalType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_private_1.DataType.interval;
    }
    doCanBuildFrom(from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return true;
        }
        return false;
    }
    doBuildFrom(value, from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return value
                    .setConversion(str => {
                    const conv = (0, pgsql_ast_parser_1.normalizeInterval)((0, pgsql_ast_parser_1.parseIntervalLiteral)(str));
                    return conv;
                }, toInterval => ({ toInterval }));
        }
        return null;
    }
    doEquals(a, b) {
        return (0, utils_1.intervalToSec)(a) === (0, utils_1.intervalToSec)(b);
    }
    doGt(a, b) {
        return (0, utils_1.intervalToSec)(a) > (0, utils_1.intervalToSec)(b);
    }
    doLt(a, b) {
        return (0, utils_1.intervalToSec)(a) < (0, utils_1.intervalToSec)(b);
    }
}
exports.IntervalType = IntervalType;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeType = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatype_base_1 = __webpack_require__(9);
const utils_1 = __webpack_require__(1);
class TimeType extends datatype_base_1.TypeBase {
    constructor(primary) {
        super();
        this.primary = primary;
    }
    get name() {
        return this.primary === interfaces_private_1.DataType.timetz
            ? 'time with time zone'
            : 'time without time zone';
    }
    doCanCast(to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.text:
            case interfaces_private_1.DataType.timetz:
            case interfaces_private_1.DataType.time:
                return true;
        }
        return null;
    }
    doCanConvertImplicit(to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.timetz:
                return true;
            case interfaces_private_1.DataType.time:
                return this.primary === interfaces_private_1.DataType.time;
        }
        return false;
    }
    doCast(value, to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.text:
            case interfaces_private_1.DataType.time:
            case interfaces_private_1.DataType.timetz:
                return value
                    .setType(to);
        }
        throw new Error('Unexpected cast error');
    }
    doCanBuildFrom(from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return true;
        }
        return false;
    }
    doBuildFrom(value, from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return value
                    .setConversion(str => {
                    const conv = (0, utils_1.parseTime)(str);
                    const ret = conv.format('HH:mm:ss');
                    const ms = conv.milliseconds();
                    return ms
                        ? ret + (ms / 1000).toString(10).substr(1)
                        : ret;
                }, toTime => ({ toTime }));
        }
        return null;
    }
}
exports.TimeType = TimeType;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampType = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatype_base_1 = __webpack_require__(9);
const moment_1 = __importDefault(__webpack_require__(17));
const utils_1 = __webpack_require__(1);
class TimestampType extends datatype_base_1.TypeBase {
    constructor(primary, precision = null) {
        super();
        this.primary = primary;
        this.precision = precision;
    }
    get name() {
        if (!(0, utils_1.nullIsh)(this.precision)) {
            return `${this.primary}(${this.precision})`;
        }
        switch (this.primary) {
            case interfaces_private_1.DataType.timestamp:
                return 'timestamp without time zone';
            case interfaces_private_1.DataType.timestamptz:
                return 'timestamp with time zone';
            case interfaces_private_1.DataType.date:
                return 'date';
            case interfaces_private_1.DataType.time:
                return 'time without time zone';
            case interfaces_private_1.DataType.timetz:
                return 'time with time zone';
        }
        return this.primary;
    }
    doCanCast(to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.timestamp:
            case interfaces_private_1.DataType.timestamptz:
            case interfaces_private_1.DataType.date:
                return this.primary !== interfaces_private_1.DataType.time && this.primary !== interfaces_private_1.DataType.timetz;
            case interfaces_private_1.DataType.time:
                return this.primary !== interfaces_private_1.DataType.date;
            case interfaces_private_1.DataType.timetz:
                return this.primary !== interfaces_private_1.DataType.date && this.primary !== interfaces_private_1.DataType.timestamp;
        }
        return null;
    }
    doCanConvertImplicit(to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.timestamp:
                return this.primary === interfaces_private_1.DataType.timestamp
                    || this.primary === interfaces_private_1.DataType.date;
            case interfaces_private_1.DataType.timestamptz:
                return this.primary !== interfaces_private_1.DataType.time;
            case interfaces_private_1.DataType.date:
                return this.primary === interfaces_private_1.DataType.date;
            case interfaces_private_1.DataType.time:
                return this.primary === interfaces_private_1.DataType.time; // nothing can implicitly cast to time
        }
        return false;
    }
    doCast(value, to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.timestamp:
            case interfaces_private_1.DataType.timestamptz:
                return value;
            case interfaces_private_1.DataType.date:
                return value
                    .setConversion(raw => moment_1.default.utc(raw).startOf('day').toDate(), toDate => ({ toDate }));
            case interfaces_private_1.DataType.time:
            case interfaces_private_1.DataType.timetz:
                return value
                    .setConversion(raw => moment_1.default.utc(raw).format('HH:mm:ss') + '.000000', toDate => ({ toDate }));
        }
        throw new Error('Unexpected cast error');
    }
    doCanBuildFrom(from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return true;
        }
        return false;
    }
    doBuildFrom(value, from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                switch (this.primary) {
                    case interfaces_private_1.DataType.timestamp:
                    case interfaces_private_1.DataType.timestamptz:
                        return value
                            .setConversion(str => {
                            const conv = moment_1.default.utc(str);
                            if (!conv.isValid()) {
                                throw new interfaces_private_1.QueryError(`Invalid timestamp format: ` + str);
                            }
                            return conv.toDate();
                        }, toTs => ({ toTs, t: this.primary }));
                    case interfaces_private_1.DataType.date:
                        return value
                            .setConversion(str => {
                            const conv = moment_1.default.utc(str);
                            if (!conv.isValid()) {
                                throw new interfaces_private_1.QueryError(`Invalid timestamp format: ` + str);
                            }
                            return conv.startOf('day').toDate();
                        }, toDate => ({ toDate }));
                    case interfaces_private_1.DataType.time:
                    case interfaces_private_1.DataType.timetz:
                        return value
                            .setConversion(str => {
                            (0, utils_1.parseTime)(str); // will throw an error if invalid format
                            return str;
                        }, toTime => ({ toTime, t: this.primary }));
                }
        }
        return null;
    }
    doEquals(a, b) {
        return Math.abs((0, moment_1.default)(a).diff((0, moment_1.default)(b))) < 0.1;
    }
    doGt(a, b) {
        return (0, moment_1.default)(a).diff((0, moment_1.default)(b)) > 0;
    }
    doLt(a, b) {
        return (0, moment_1.default)(a).diff((0, moment_1.default)(b)) < 0;
    }
}
exports.TimestampType = TimestampType;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONBType = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatype_base_1 = __webpack_require__(9);
const utils_1 = __webpack_require__(1);
const datatypes_1 = __webpack_require__(14);
const clean_results_1 = __webpack_require__(18);
const interfaces_1 = __webpack_require__(2);
const json_stable_stringify_1 = __importDefault(__webpack_require__(28));
class JSONBType extends datatype_base_1.TypeBase {
    constructor(primary) {
        super();
        this.primary = primary;
    }
    doCanCast(_to) {
        switch (_to.primary) {
            case interfaces_private_1.DataType.text:
            case interfaces_private_1.DataType.json:
            case interfaces_private_1.DataType.jsonb:
            case interfaces_private_1.DataType.float:
            case interfaces_private_1.DataType.bool:
            case interfaces_private_1.DataType.integer:
                return true;
        }
        return null;
    }
    doCast(a, to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.text:
                return a
                    .setType(datatypes_1.Types.text())
                    .setConversion(json => (0, json_stable_stringify_1.default)(this.toResult(json)), toJsonB => ({ toJsonB }))
                    .cast(to); // <== might need truncation
            case interfaces_private_1.DataType.jsonb:
            case interfaces_private_1.DataType.json:
                return a.setType(to);
            case interfaces_private_1.DataType.float:
            case interfaces_private_1.DataType.integer:
                const isInt = to.primary === interfaces_private_1.DataType.integer;
                return a
                    .setType(to)
                    .setConversion(json => {
                    if (json === clean_results_1.JSON_NIL) {
                        throw new interfaces_1.QueryError('cannot cast jsonb null to type ' + (isInt ? 'integer' : 'double precision'), '22023');
                    }
                    if (typeof json !== 'number') {
                        throw new interfaces_1.QueryError('cannot cast jsonb string to type ' + (isInt ? 'integer' : 'double precision'), '22023');
                    }
                    return isInt ? Math.round(json) : json;
                }, toFloat => ({ toFloat }));
            case interfaces_private_1.DataType.bool:
                return a
                    .setType(to)
                    .setConversion(json => {
                    if (typeof json !== 'boolean') {
                        throw new interfaces_1.QueryError('cannot cast jsonb string to type boolean', '22023');
                    }
                    return json;
                }, toFloat => ({ toFloat }));
            default:
                return a.setType(to);
        }
    }
    doCanBuildFrom(from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return true;
        }
        return false;
    }
    doBuildFrom(value, from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return value
                    .setConversion(raw => {
                    var _a;
                    try {
                        return (_a = JSON.parse(raw, (_, x) => x !== null && x !== void 0 ? x : clean_results_1.JSON_NIL)) !== null && _a !== void 0 ? _a : clean_results_1.JSON_NIL;
                    }
                    catch (e) {
                        throw new interfaces_1.QueryError({
                            error: `invalid input syntax for type json`,
                            details: (0, utils_1.errorMessage)(e),
                            code: '22P02',
                        });
                    }
                }, toJsonb => ({ toJsonb }));
        }
        return null;
    }
    doEquals(a, b) {
        return (0, utils_1.deepEqual)(this.toResult(a), this.toResult(b), false);
    }
    doGt(a, b) {
        return (0, utils_1.deepCompare)(this.toResult(a), this.toResult(b)) > 0;
    }
    doLt(a, b) {
        return (0, utils_1.deepCompare)(this.toResult(a), this.toResult(b)) < 0;
    }
    toResult(result) {
        return result === clean_results_1.JSON_NIL
            ? null
            : result;
    }
}
exports.JSONBType = JSONBType;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RegTypeImpl = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatype_base_1 = __webpack_require__(9);
const datatypes_1 = __webpack_require__(14);
const context_1 = __webpack_require__(4);
class RegTypeImpl extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_private_1.DataType.regtype;
    }
    doCanCast(_to) {
        switch (_to.primary) {
            case interfaces_private_1.DataType.text:
            case interfaces_private_1.DataType.integer:
                return true;
        }
        return null;
    }
    doCast(a, to) {
        switch (to.primary) {
            case interfaces_private_1.DataType.text:
                return a
                    .setType(to)
                    .setConversion(raw => raw.toString(10), toText => ({ toText }));
            case interfaces_private_1.DataType.integer:
                const { schema } = (0, context_1.buildCtx)();
                return a
                    .setType(to)
                    .setConversion((raw) => {
                    if (typeof raw === 'number') {
                        return raw;
                    }
                    const t = schema.parseType(raw);
                    return t.reg.typeId;
                }, toText => ({ toText }));
        }
        throw new Error('failed to cast');
    }
    doCanBuildFrom(from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return true;
        }
        return false;
    }
    doBuildFrom(value, from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                const { schema } = (0, context_1.buildCtx)();
                return value
                    .setType(datatypes_1.Types.regtype)
                    .setConversion((str) => {
                    let repl = str.replace(/["\s]+/g, '');
                    if (repl.startsWith('pg_catalog.')) {
                        repl = repl.substr('pg_catalog.'.length);
                    }
                    return schema.parseType(repl).name;
                }, strToRegType => ({ strToRegType }));
        }
        return null;
    }
}
exports.RegTypeImpl = RegTypeImpl;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RegClassImpl = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatype_base_1 = __webpack_require__(9);
const utils_1 = __webpack_require__(1);
const datatypes_1 = __webpack_require__(14);
const context_1 = __webpack_require__(4);
class RegClassImpl extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_private_1.DataType.regclass;
    }
    doCanCast(_to) {
        switch (_to.primary) {
            case interfaces_private_1.DataType.text:
            case interfaces_private_1.DataType.integer:
                return true;
        }
        return null;
    }
    doCast(a, to) {
        const { schema } = (0, context_1.buildCtx)();
        switch (to.primary) {
            case interfaces_private_1.DataType.text:
                return a
                    .setType(datatypes_1.Types.text())
                    .setConversion((raw) => {
                    return raw === null || raw === void 0 ? void 0 : raw.toString();
                }, toText => ({ toText }));
            case interfaces_private_1.DataType.integer:
                return a
                    .setType(datatypes_1.Types.text())
                    .setConversion((raw) => {
                    // === regclass -> int
                    var _a, _b;
                    const cls = (0, utils_1.parseRegClass)(raw);
                    // if its a number, then try to get it.
                    if (typeof cls === 'number') {
                        return (_b = (_a = schema.getObjectByRegOrName(cls)) === null || _a === void 0 ? void 0 : _a.reg.classId) !== null && _b !== void 0 ? _b : cls;
                    }
                    // get the object or throw
                    return schema.getObjectByRegOrName(raw)
                        .reg.classId;
                }, toText => ({ toText }));
        }
        throw new Error('failed to cast');
    }
    doCanBuildFrom(from) {
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return true;
        }
        return false;
    }
    doBuildFrom(value, from) {
        const { schema } = (0, context_1.buildCtx)();
        switch (from.primary) {
            case interfaces_private_1.DataType.text:
                return value
                    .setConversion((str) => {
                    // === text -> regclass
                    var _a, _b;
                    const cls = (0, utils_1.parseRegClass)(str);
                    // if its a number, then try to get it.
                    if (typeof cls === 'number') {
                        return (_b = (_a = schema.getObjectByRegOrName(cls)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : cls;
                    }
                    // else, get or throw.
                    return schema.getObject(cls)
                        .name;
                }, strToRegClass => ({ strToRegClass }));
        }
        return null;
    }
}
exports.RegClassImpl = RegClassImpl;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INetType = void 0;
const datatype_base_1 = __webpack_require__(9);
const interfaces_1 = __webpack_require__(2);
// https://www.postgresql.org/docs/13/datatype-net-types.html#DATATYPE-INET
class INetType extends datatype_base_1.TypeBase {
    get primary() {
        return interfaces_1.DataType.inet;
    }
    doCanCast(to) {
        return to.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        return value;
    }
    prefer(type) {
        return this;
    }
    doCanBuildFrom(from) {
        return from.primary === interfaces_1.DataType.text;
    }
    doBuildFrom(value, from) {
        return value
            .setConversion(x => {
            var _a;
            const [_, a, b, c, d, __, m] = (_a = /^(\d+)\.(\d+)\.(\d+)\.(\d+)(\/(\d+))?$/.exec(x)) !== null && _a !== void 0 ? _a : [];
            if ([a, b, c, d].some(notByte) || notMask(m)) {
                throw new interfaces_1.QueryError(`invalid input syntax for type inet: ${x}`);
            }
            return x;
        }, toInet => ({ toInet }));
    }
}
exports.INetType = INetType;
function notByte(b) {
    return !b
        || b.length > 1 && b[0] === '0'
        || parseInt(b, 10) > 255;
}
function notMask(b) {
    return b
        && (b.length > 1 && b[0] === '0'
            || parseInt(b, 10) > 32);
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryTable = void 0;
const interfaces_1 = __webpack_require__(2);
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const btree_index_1 = __webpack_require__(61);
const selection_1 = __webpack_require__(11);
const utils_1 = __webpack_require__(1);
const immutable_1 = __webpack_require__(16);
const column_1 = __webpack_require__(63);
const alias_1 = __webpack_require__(25);
const transform_base_1 = __webpack_require__(5);
const foreign_key_1 = __webpack_require__(65);
const datatypes_1 = __webpack_require__(3);
const context_1 = __webpack_require__(4);
const evaluator_1 = __webpack_require__(10);
class ColumnManager {
    constructor() {
        this.map = new Map();
        // Pass-through methods
        this.get = this.map.get.bind(this.map);
        this.has = this.map.has.bind(this.map);
        this.values = this.map.values.bind(this.map);
    }
    get columns() {
        if (!this._columns) {
            this._columns = Object.freeze(Array.from(this.map.values(), (c) => c.expression));
        }
        return this._columns;
    }
    invalidateColumns() {
        this._columns = undefined;
    }
    set(name, colDef) {
        this.invalidateColumns();
        return this.map.set(name, colDef);
    }
    delete(name) {
        this.invalidateColumns();
        return this.map.delete(name);
    }
}
class MemoryTable extends transform_base_1.DataSourceBase {
    constructor(schema, t, _schema) {
        var _a;
        super(schema);
        this.handlers = new Map();
        this.it = 0;
        this.cstGen = 0;
        this.hasPrimary = false;
        this.readonly = false;
        this.hidden = false;
        this.dataId = Symbol();
        this.serialsId = Symbol();
        this.constraintsByName = new Map();
        this.indexByHash = new Map();
        this.columnMgr = new ColumnManager();
        this.changeHandlers = new Map();
        this.truncateHandlers = new Set();
        this.drophandlers = new Set();
        this.indexHandlers = new Set();
        this.name = _schema.name;
        this.selection = (0, alias_1.buildAlias)(this, this.name);
        // fields
        for (const s of _schema.fields) {
            this.addColumn(s, t);
        }
        // other table constraints
        for (const c of (_a = _schema.constraints) !== null && _a !== void 0 ? _a : []) {
            this.addConstraint(c, t);
        }
    }
    get isExecutionWithNoResult() {
        return false;
    }
    get reg() {
        if (!this._reg) {
            throw new interfaces_1.QueryError(`relation "${this.name}" does not exist`);
        }
        return this._reg;
    }
    get columns() {
        return this.columnMgr.columns;
    }
    get type() {
        return "table";
    }
    get debugId() {
        return this.name;
    }
    entropy(t) {
        return this.bin(t).size;
    }
    isOriginOf(a) {
        return a.origin === this.selection;
    }
    register() {
        // once fields registered,
        //  then register the table
        //  (column registrations need it not to be registered yet)
        this._reg = this.ownerSchema._reg_register(this);
        return this;
    }
    stats(t) {
        return {
            count: this.bin(t).size,
        };
    }
    rename(name) {
        const on = this.name;
        if (on === name) {
            return this;
        }
        this.name = name;
        this.ownerSchema._reg_rename(this, on, name);
        this.selection.name = this.name;
        this.db.onSchemaChange();
        return this;
    }
    getColumn(column, nullIfNotFound) {
        var _a;
        return (_a = (0, utils_1.colByName)(this.columnMgr.map, column, nullIfNotFound)) === null || _a === void 0 ? void 0 : _a.expression;
    }
    explain(e) {
        return {
            _: "table",
            table: this.name,
        };
    }
    addColumn(column, t) {
        var _a, _b;
        if ("dataType" in column) {
            const tp = {
                ...column,
                name: column.name.name,
                type: this.ownerSchema.getType(column.dataType),
            };
            delete tp.dataType;
            return this.addColumn(tp, t);
        }
        if (this.columnMgr.has(column.name)) {
            throw new interfaces_1.QueryError(`Column "${column.name}" already exists`);
        }
        const type = typeof column.type === "string"
            ? this.ownerSchema.getType(column.type)
            : column.type;
        const cref = new column_1.ColRef(this, (0, selection_1.columnEvaluator)(this.selection, column.name, type), column, column.name);
        // auto increments
        if (column.serial) {
            t.set(this.serialsId, t.getMap(this.serialsId).set(column.name, 0));
        }
        this.columnMgr.set(column.name, cref);
        try {
            if ((_a = column.constraints) === null || _a === void 0 ? void 0 : _a.length) {
                cref.addConstraints(column.constraints, t);
            }
            const hasDefault = (_b = column.constraints) === null || _b === void 0 ? void 0 : _b.some((x) => x.type === "default");
            if (!hasDefault) {
                this.remapData(t, (x) => { var _a; return (x[column.name] = (_a = x[column.name]) !== null && _a !== void 0 ? _a : null); });
            }
        }
        catch (e) {
            this.columnMgr.delete(column.name);
            throw e;
        }
        // once constraints created, reference them. (constraint creation might have thrown)m
        this.db.onSchemaChange();
        this.selection.rebuild();
        return cref;
    }
    getColumnRef(column, nullIfNotFound) {
        const got = this.columnMgr.get(column);
        if (!got) {
            if (nullIfNotFound) {
                return null;
            }
            throw new interfaces_1.QueryError(`Column "${column}" not found`);
        }
        return got;
    }
    bin(t) {
        return t.getMap(this.dataId);
    }
    setBin(t, val) {
        return t.set(this.dataId, val);
    }
    on(event, handler) {
        let lst = this.handlers.get(event);
        if (!lst) {
            this.handlers.set(event, (lst = new Set()));
        }
        lst.add(handler);
        return {
            unsubscribe: () => lst.delete(handler),
        };
    }
    raise(event) {
        const got = this.handlers.get(event);
        for (const h of got !== null && got !== void 0 ? got : []) {
            h();
        }
        this.db.raiseTable(this.name, event);
    }
    setReadonly() {
        this.readonly = true;
        return this;
    }
    setHidden() {
        this.hidden = true;
        return this;
    }
    *enumerate(t) {
        this.raise("seq-scan");
        for (const v of this.bin(t).values()) {
            yield (0, utils_1.deepCloneSimple)(v); // copy the original data to prevent it from being mutated.
        }
    }
    find(template, columns) {
        return (0, utils_1.findTemplate)(this.selection, this.db.data, template, columns);
    }
    remapData(t, modify) {
        // convert raw data (⚠ must copy the whole thing,
        // because it can throw in the middle of this process !)
        //  => this would result in partially converted tables.
        const converted = this.bin(t).map((x) => {
            const copy = { ...x };
            modify(copy);
            return copy;
        });
        this.setBin(t, converted);
    }
    insert(toInsert) {
        const ret = this.doInsert(this.db.data, (0, utils_1.deepCloneSimple)(toInsert));
        return (0, utils_1.deepCloneSimple)(ret);
    }
    doInsert(t, toInsert, opts) {
        if (this.readonly) {
            throw new interfaces_1.PermissionDeniedError(this.name);
        }
        // get ID of this item
        const newId = this.name + "_" + this.it++;
        (0, interfaces_private_1.setId)(toInsert, newId);
        // serial (auto increments) columns
        let serials = t.getMap(this.serialsId);
        for (const [k, v] of serials.entries()) {
            if (!(0, utils_1.nullIsh)(toInsert[k])) {
                continue;
            }
            toInsert[k] = v + 1;
            serials = serials.set(k, v + 1);
        }
        t.set(this.serialsId, serials);
        // set default values
        for (const c of this.columnMgr.values()) {
            c.setDefaults(toInsert, t);
        }
        // check change handlers (foreign keys)
        const changePlan = this.changePlan(t, null, toInsert, opts);
        changePlan.before();
        // check "on conflict"
        const onConflict = opts === null || opts === void 0 ? void 0 : opts.onConflict;
        if (onConflict) {
            if ("ignore" in onConflict) {
                if (onConflict.ignore === "all") {
                    for (const k of this.indexByHash.values()) {
                        if (!k.index.unique) {
                            continue;
                        }
                        const key = k.index.buildKey(toInsert, t);
                        const found = k.index.eqFirst(key, t);
                        if (found) {
                            return found; // ignore.
                        }
                    }
                }
                else {
                    const index = onConflict.ignore;
                    const key = index.buildKey(toInsert, t);
                    const found = index.eqFirst(key, t);
                    if (found) {
                        return found; // ignore.
                    }
                }
            }
            else {
                const index = onConflict.onIndex;
                const key = index.buildKey(toInsert, t);
                const got = index.eqFirst(key, t);
                if (got) {
                    // update !
                    onConflict.update(got, toInsert, t);
                    return this.update(t, got);
                }
            }
        }
        // check constraints
        for (const c of this.columnMgr.values()) {
            c.checkConstraints(toInsert, t);
        }
        // check change handlers (foreign keys)
        changePlan.after();
        // index & check indx contrainsts
        this.indexElt(t, toInsert);
        this.setBin(t, this.bin(t).set(newId, toInsert));
        return toInsert;
    }
    changePlan(t, old, neu, _opts) {
        const opts = _opts !== null && _opts !== void 0 ? _opts : {};
        let iter;
        if (!old || !neu) {
            iter = () => this.changeHandlers.values();
        }
        else {
            const ret = [];
            const global = this.changeHandlers.get(null);
            if (global) {
                ret.push(global);
            }
            for (const def of this.columnMgr.values()) {
                const h = this.changeHandlers.get(def);
                if (!h) {
                    continue;
                }
                const oldVal = old[def.expression.id];
                const neuVal = neu[def.expression.id];
                if (def.expression.type.equals(oldVal, neuVal)) {
                    continue;
                }
                ret.push(h);
            }
            iter = ret[Symbol.iterator].bind(ret);
        }
        return {
            before: () => {
                const ran = new Set();
                for (const { before } of iter()) {
                    for (const b of before) {
                        if (!b || ran.has(b)) {
                            continue;
                        }
                        b(old, neu, t, opts);
                        ran.add(b);
                    }
                }
            },
            after: () => {
                const ran = new Set();
                for (const { after } of iter()) {
                    for (const a of after) {
                        if (!a || ran.has(a)) {
                            continue;
                        }
                        a(old, neu, t, opts);
                        ran.add(a);
                    }
                }
            },
        };
    }
    update(t, toUpdate) {
        var _a;
        if (this.readonly) {
            throw new interfaces_1.PermissionDeniedError(this.name);
        }
        const bin = this.bin(t);
        const id = (0, interfaces_private_1.getId)(toUpdate);
        const exists = (_a = bin.get(id)) !== null && _a !== void 0 ? _a : null;
        // set default values
        for (const c of this.columnMgr.values()) {
            c.setDefaults(toUpdate, t);
        }
        // check change handlers (foreign keys)
        const changePlan = this.changePlan(t, exists, toUpdate, null);
        changePlan.before();
        changePlan.after();
        // check constraints
        for (const c of this.columnMgr.values()) {
            c.checkConstraints(toUpdate, t);
        }
        // remove old version from index
        if (exists) {
            for (const k of this.indexByHash.values()) {
                k.index.delete(exists, t);
            }
        }
        // add new version to index
        this.indexElt(t, toUpdate);
        // store raw
        this.setBin(t, bin.delete(id).set(id, toUpdate));
        return toUpdate;
    }
    delete(t, toDelete) {
        const id = (0, interfaces_private_1.getId)(toDelete);
        const bin = this.bin(t);
        const got = bin.get(id);
        if (!id || !got) {
            throw new Error("Unexpected error: an operation has been asked on an item which does not belong to this table");
        }
        // check change handlers (foreign keys)
        const changePlan = this.changePlan(t, toDelete, null, null);
        changePlan.before();
        changePlan.after();
        // remove from indices
        for (const k of this.indexByHash.values()) {
            k.index.delete(got, t);
        }
        this.setBin(t, bin.delete(id));
        return got;
    }
    truncate(t, _opts) {
        const opts = _opts !== null && _opts !== void 0 ? _opts : {};
        // call truncate handlers
        for (const h of this.truncateHandlers) {
            h(t, opts);
        }
        // truncate indices
        for (const k of this.indexByHash.values()) {
            k.index.truncate(t);
        }
        this.setBin(t, (0, immutable_1.Map)());
    }
    indexElt(t, toInsert) {
        for (const k of this.indexByHash.values()) {
            k.index.add(toInsert, t);
        }
    }
    hasItem(item, t) {
        const id = (0, interfaces_private_1.getId)(item);
        return this.bin(t).has(id);
    }
    getIndex(...forValues) {
        var _a;
        if (!forValues.length || forValues.some((x) => !x || !this.isOriginOf(x))) {
            return null;
        }
        const ihash = (0, utils_1.indexHash)(forValues);
        const got = this.indexByHash.get(ihash);
        return (_a = got === null || got === void 0 ? void 0 : got.index) !== null && _a !== void 0 ? _a : null;
    }
    constraintNameGen(constraintName) {
        return constraintName !== null && constraintName !== void 0 ? constraintName : this.name + "_constraint_" + ++this.cstGen;
    }
    addCheck(_t, check, constraintName, notNull) {
        constraintName = this.constraintNameGen(constraintName);
        this.checkNoConstraint(constraintName);
        const nullGetter = (0, context_1.withSelection)(this.selection, () => {
            if (!notNull && check.type == "binary") {
                return (0, expression_builder_1.buildValue)(check.left);
            }
            return evaluator_1.Value.bool(false);
        });
        const getter = (0, context_1.withSelection)(this.selection, () => {
            return (0, expression_builder_1.buildValue)(check).cast(datatypes_1.Types.bool);
        });
        const checkVal = (t, v) => {
            const isNull = nullGetter.get(v, t) === null;
            if (!isNull) {
                const value = getter.get(v, t);
                if (value === false) {
                    throw new interfaces_1.QueryError(`check constraint "${constraintName}" is violated by some row`);
                }
            }
        };
        // check that everything matches (before adding check)
        for (const v of this.enumerate(_t)) {
            checkVal(_t, v);
        }
        // add a check for future updates
        const sub = this.onBeforeChange("all", (old, neu, ct) => {
            if (!neu) {
                return;
            }
            checkVal(ct, neu);
        });
        const ret = new SubscriptionConstraint(constraintName, () => sub.unsubscribe());
        return new ConstraintWrapper(this.constraintsByName, ret);
    }
    createIndex(t, expressions, _type, _indexName) {
        var _a;
        if (this.readonly) {
            throw new interfaces_1.PermissionDeniedError(this.name);
        }
        if (Array.isArray(expressions)) {
            const keys = [];
            for (const e of expressions) {
                const getter = this.selection.getColumn(e.name);
                keys.push({
                    value: getter,
                });
            }
            return this.createIndex(t, {
                columns: keys,
                primary: _type === "primary",
                notNull: _type === "primary",
                unique: !!_type,
                indexName: _indexName,
            });
        }
        if (!((_a = expressions === null || expressions === void 0 ? void 0 : expressions.columns) === null || _a === void 0 ? void 0 : _a.length)) {
            throw new interfaces_1.QueryError("Empty index");
        }
        if (expressions.primary && this.hasPrimary) {
            throw new interfaces_1.QueryError("Table " + this.name + " already has a primary key");
        }
        if (expressions.primary) {
            expressions.notNull = true;
            expressions.unique = true;
        }
        const ihash = (0, utils_1.indexHash)(expressions.columns.map((x) => x.value));
        const indexName = this.determineIndexRelName(expressions.indexName, ihash, expressions.ifNotExists, "idx");
        if (!indexName) {
            return null;
        }
        this.checkNoConstraint(indexName);
        const index = new btree_index_1.BIndex(t, indexName, expressions.columns, this, ihash, !!expressions.unique, !!expressions.notNull, expressions.predicate);
        // fill index (might throw if constraint not respected)
        const bin = this.bin(t);
        for (const e of bin.values()) {
            index.add(e, t);
        }
        // =========== reference index ============
        this.indexHandlers.forEach((h) => h("create", index));
        // ⚠⚠ This must be done LAST, to avoid throwing an execption if index population failed
        for (const col of index.expressions) {
            for (const used of col.usedColumns) {
                this.getColumnRef(used.id).usedInIndexes.add(index);
            }
        }
        this.indexByHash.set(ihash, { index, expressions: index.expressions });
        if (expressions.primary) {
            this.hasPrimary = true;
        }
        const ret = new SubscriptionConstraint(indexName, (t) => this.dropIndex(t, indexName));
        return new ConstraintWrapper(this.constraintsByName, ret);
    }
    determineIndexRelName(indexName, ihash, ifNotExists, sufix) {
        if (indexName) {
            if (this.ownerSchema.getOwnObject(indexName)) {
                if (ifNotExists) {
                    return null;
                }
                throw new interfaces_1.QueryError(`relation "${indexName}" already exists`);
            }
            return indexName;
        }
        else {
            const baseName = (indexName = `${this.name}_${ihash}_${sufix}`);
            let i = 1;
            while (this.ownerSchema.getOwnObject(indexName)) {
                indexName = baseName + i++;
            }
            return indexName;
        }
    }
    dropIndex(t, uName) {
        const u = (0, interfaces_private_1.asIndex)(this.ownerSchema.getOwnObject(uName));
        if (!u || !this.indexByHash.has(u.hash)) {
            throw new interfaces_1.QueryError("Cannot drop index that does not belong to this table: " + uName);
        }
        this.indexHandlers.forEach((h) => h("drop", u));
        this.indexByHash.delete(u.hash);
        u.dropFromData(t);
        this.ownerSchema._reg_unregister(u);
        this.constraintsByName.delete(uName);
    }
    onIndex(sub) {
        this.indexHandlers.add(sub);
        return {
            unsubscribe: () => this.indexHandlers.delete(sub),
        };
    }
    listIndices() {
        return [...this.indexByHash.values()].map((x) => ({
            name: x.index.name,
            expressions: x.expressions.map((x) => x.id),
        }));
    }
    addForeignKey(cst, t) {
        var _a;
        const ihash = (0, utils_1.indexHash)(cst.localColumns.map((x) => x.name));
        const constraintName = this.determineIndexRelName((_a = cst.constraintName) === null || _a === void 0 ? void 0 : _a.name, ihash, false, "fk");
        if (!constraintName) {
            return null;
        }
        const ret = new foreign_key_1.ForeignKey(constraintName).install(t, cst, this);
        return new ConstraintWrapper(this.constraintsByName, ret);
    }
    getConstraint(constraint) {
        return this.constraintsByName.get(constraint);
    }
    addConstraint(cst, t) {
        var _a, _b, _c;
        switch (cst.type) {
            case "foreign key":
                return this.addForeignKey(cst, t);
            case "primary key":
                return this.createIndex(t, cst.columns, "primary", (_a = cst.constraintName) === null || _a === void 0 ? void 0 : _a.name);
            case "unique":
                return this.createIndex(t, cst.columns, "unique", (_b = cst.constraintName) === null || _b === void 0 ? void 0 : _b.name);
            case "check":
                return this.addCheck(t, cst.expr, (_c = cst.constraintName) === null || _c === void 0 ? void 0 : _c.name);
            default:
                throw interfaces_1.NotSupported.never(cst, "constraint type");
        }
    }
    checkNoConstraint(name) {
        if (this.constraintsByName.has(name)) {
            throw new interfaces_1.QueryError(`relation "${name}" already exists`, "42P07");
        }
    }
    onBeforeChange(columns, check) {
        return this._subChange("before", columns, check);
    }
    onCheckChange(columns, check) {
        return this._subChange("before", columns, check);
    }
    _subChange(key, columns, check) {
        const unsubs = [];
        const add = (ref) => {
            let ch = this.changeHandlers.get(ref);
            if (!ch) {
                this.changeHandlers.set(ref, (ch = {
                    after: new Set(),
                    before: new Set(),
                }));
            }
            ch[key].add(check);
            unsubs.push(() => ch[key].delete(check));
        };
        if (columns === "all") {
            add(null);
        }
        else {
            for (const c of columns) {
                const ref = typeof c === "string" ? this.getColumnRef(c) : c;
                add(ref);
            }
        }
        return {
            unsubscribe: () => {
                for (const u of unsubs) {
                    u();
                }
            },
        };
    }
    drop(t, cascade) {
        this.drophandlers.forEach((d) => d(t, cascade));
        t.delete(this.dataId);
        for (const i of this.indexByHash.values()) {
            i.index.dropFromData(t);
        }
        // todo should also check foreign keys, cascade, ...
        return this.ownerSchema._reg_unregister(this);
    }
    onDrop(sub) {
        this.drophandlers.add(sub);
        return {
            unsubscribe: () => {
                this.drophandlers.delete(sub);
            },
        };
    }
    onTruncate(sub) {
        this.truncateHandlers.add(sub);
        return {
            unsubscribe: () => {
                this.truncateHandlers.delete(sub);
            },
        };
    }
}
exports.MemoryTable = MemoryTable;
class SubscriptionConstraint {
    constructor(name, uninstall) {
        this.name = name;
        this.uninstall = uninstall;
    }
}
class ConstraintWrapper {
    constructor(refs, inner) {
        this.refs = refs;
        this.inner = inner;
        if (inner.name) {
            refs.set(inner.name, this);
        }
    }
    get name() {
        return this.inner.name;
    }
    uninstall(t) {
        this.inner.uninstall(t);
        if (this.name) {
            this.refs.delete(this.name);
        }
    }
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictiveIndex = void 0;
class RestrictiveIndex {
    constructor(base, filter) {
        this.base = base;
        this.filter = filter;
    }
    match(raw, t) {
        return this.filter.hasItem(raw, t);
    }
    get expressions() {
        return this.base.expressions;
    }
    stats(t, key) {
        // cannot comput without iterating
        return null;
    }
    iterateKeys() {
        // cannot comput without iterating
        // (we know underlying keys, but we dont know which have items that match our filter)
        return null;
    }
    eqFirst(rawKey, t) {
        for (const i of this.base.enumerate({
            key: rawKey,
            t: t,
            type: 'eq',
        })) {
            if (this.match(i, t)) {
                return i;
            }
        }
        return null;
    }
    entropy(t) {
        return this.base.entropy(t);
    }
    *enumerate(op) {
        for (const i of this.base.enumerate(op)) {
            if (this.match(i, op.t)) {
                yield i;
            }
        }
    }
    explain(e) {
        return {
            _: 'indexRestriction',
            lookup: this.base.explain(e),
            for: this.filter.explain(e),
            // criteria: this.restrict.explain(e),
        };
    }
}
exports.RestrictiveIndex = RestrictiveIndex;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCount = void 0;
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const context_1 = __webpack_require__(4);
function buildCount(base, call) {
    return (0, context_1.withSelection)(base, () => {
        const args = call.args;
        if ((0, utils_1.isSelectAllArgList)(args)) {
            return new CountStar(base);
        }
        if (args.length !== 1) {
            throw new interfaces_private_1.QueryError('COUNT expects one argument, given ' + args.length);
        }
        const what = (0, expression_builder_1.buildValue)(args[0]);
        return new CountExpr(what);
    });
}
exports.buildCount = buildCount;
class CountStar {
    constructor(on) {
        this.on = on;
    }
    get type() {
        return datatypes_1.Types.bigint;
    }
    computeFromIndex(key, index, t) {
        const stats = index.stats(t, key);
        return stats === null || stats === void 0 ? void 0 : stats.count;
    }
    computeNoGroup(t) {
        var _a;
        return (_a = this.on.stats(t)) === null || _a === void 0 ? void 0 : _a.count;
    }
    createGroup() {
        let cnt = 0;
        return {
            feedItem: () => cnt++,
            finish: () => cnt,
        };
    }
}
class CountExpr {
    constructor(exp) {
        this.exp = exp;
    }
    get type() {
        return datatypes_1.Types.bigint;
    }
    createGroup(t) {
        let cnt = 0;
        return {
            feedItem: (item) => {
                const value = this.exp.get(item, t);
                if (!(0, utils_1.nullIsh)(value)) {
                    cnt++;
                }
            },
            finish: () => cnt,
        };
    }
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMinMax = void 0;
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const utils_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
const context_1 = __webpack_require__(4);
class MinMax {
    constructor(exp, isMax) {
        this.exp = exp;
        this.isMax = isMax;
    }
    get type() {
        return this.exp.type;
    }
    createGroup(t) {
        let val = null;
        return {
            feedItem: (item) => {
                const value = this.exp.get(item, t);
                if (!(0, utils_1.nullIsh)(value) && ((0, utils_1.nullIsh)(val) || (this.isMax
                    ? val < value
                    : val > value))) {
                    val = value;
                }
            },
            finish: () => val,
        };
    }
}
function buildMinMax(base, args, op) {
    return (0, context_1.withSelection)(base, () => {
        if (args.length !== 1) {
            throw new interfaces_private_1.QueryError(op.toUpperCase() + ' expects one argument, given ' + args.length);
        }
        const what = (0, expression_builder_1.buildValue)(args[0]);
        switch (what.type.primary) {
            case interfaces_1.DataType.bigint:
            case interfaces_1.DataType.integer:
            case interfaces_1.DataType.decimal:
            case interfaces_1.DataType.date:
            case interfaces_1.DataType.float:
            case interfaces_1.DataType.text:
            case interfaces_1.DataType.time:
            case interfaces_1.DataType.timetz:
            case interfaces_1.DataType.timestamp:
            case interfaces_1.DataType.timestamptz:
                break;
            default:
                throw new interfaces_private_1.QueryError(`function min(${what.type.primary}) does not exist`, '42883');
        }
        return new MinMax(what, op === 'max');
    });
}
exports.buildMinMax = buildMinMax;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSum = void 0;
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const utils_1 = __webpack_require__(1);
const context_1 = __webpack_require__(4);
class SumExpr {
    constructor(exp) {
        this.exp = exp;
    }
    get type() {
        return datatypes_1.Types.bigint;
    }
    createGroup(t) {
        let val = null;
        return {
            feedItem: (item) => {
                const value = this.exp.get(item, t);
                if (!(0, utils_1.nullIsh)(value)) {
                    val = (0, utils_1.nullIsh)(val) ? value : val + value;
                }
            },
            finish: () => val,
        };
    }
}
function buildSum(base, call) {
    return (0, context_1.withSelection)(base, () => {
        const args = call.args;
        if (args.length !== 1) {
            throw new interfaces_private_1.QueryError('SUM expects one argument, given ' + args.length);
        }
        const what = (0, expression_builder_1.buildValue)(args[0]);
        return new SumExpr(what);
    });
}
exports.buildSum = buildSum;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildArrayAgg = void 0;
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const context_1 = __webpack_require__(4);
class ArrayAggExpr {
    constructor(exp) {
        this.exp = exp;
    }
    get type() {
        return datatypes_1.Types.integer.asArray();
    }
    createGroup(t) {
        let val = [];
        return {
            feedItem: (item) => {
                const value = this.exp.get(item, t);
                val = [...val, value];
            },
            finish: () => val,
        };
    }
}
function buildArrayAgg(base, call) {
    return (0, context_1.withSelection)(base, () => {
        const args = call.args;
        if (args.length !== 1) {
            throw new interfaces_private_1.QueryError('ARRAY_AGG expects one argument, given ' + args.length);
        }
        const what = (0, expression_builder_1.buildValue)(args[0]);
        return new ArrayAggExpr(what);
    });
}
exports.buildArrayAgg = buildArrayAgg;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAvg = void 0;
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const utils_1 = __webpack_require__(1);
const context_1 = __webpack_require__(4);
class AvgExpr {
    constructor(exp) {
        this.exp = exp;
    }
    get type() {
        return datatypes_1.Types.bigint;
    }
    createGroup(t) {
        let full = [];
        return {
            feedItem: (item) => {
                const value = this.exp.get(item, t);
                if (!(0, utils_1.nullIsh)(value)) {
                    full.push(value);
                }
            },
            finish: () => full.length === 0 ? null : (0, utils_1.sum)(full) / full.length,
        };
    }
}
function buildAvg(base, call) {
    return (0, context_1.withSelection)(base, () => {
        const args = call.args;
        if (args.length !== 1) {
            throw new interfaces_private_1.QueryError('AVG expects one argument, given ' + args.length);
        }
        const what = (0, expression_builder_1.buildValue)(args[0]);
        return new AvgExpr(what);
    });
}
exports.buildAvg = buildAvg;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildJsonAgg = void 0;
const interfaces_private_1 = __webpack_require__(0);
const context_1 = __webpack_require__(4);
const expression_builder_1 = __webpack_require__(6);
const utils_1 = __webpack_require__(1);
const datatypes_1 = __webpack_require__(3);
class JsonAggExpr {
    constructor(exp, type) {
        this.exp = exp;
        this.type = type;
    }
    createGroup(t) {
        let full = [];
        return {
            feedItem: (item) => {
                const value = this.exp.get(item, t);
                if (!(0, utils_1.nullIsh)(value)) {
                    full.push(value);
                }
            },
            finish: () => full.length === 0 ? null : full,
        };
    }
}
function buildJsonAgg(base, call, fn) {
    return (0, context_1.withSelection)(base, () => {
        const args = call.args;
        if (args.length !== 1) {
            throw new interfaces_private_1.QueryError(fn + ' expects one argument, given ' + args.length);
        }
        const type = fn === 'json_agg' ? datatypes_1.Types.json : datatypes_1.Types.jsonb;
        const what = (0, expression_builder_1.buildValue)(args[0]);
        return new JsonAggExpr(what, type);
    });
}
exports.buildJsonAgg = buildJsonAgg;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBoolAgg = void 0;
const interfaces_private_1 = __webpack_require__(0);
const context_1 = __webpack_require__(4);
const expression_builder_1 = __webpack_require__(6);
const utils_1 = __webpack_require__(1);
const datatypes_1 = __webpack_require__(3);
class BoolAgg {
    constructor(exp, isOr) {
        this.exp = exp;
        this.isOr = isOr;
    }
    get type() {
        return datatypes_1.Types.bool;
    }
    createGroup(t) {
        let result = null;
        return {
            feedItem: (item) => {
                if (result === this.isOr) {
                    // no need to compute it further
                    return;
                }
                const value = this.exp.get(item, t);
                if ((0, utils_1.nullIsh)(value)) {
                    return;
                }
                result = !!value;
            },
            finish: () => result,
        };
    }
}
function buildBoolAgg(base, call, fn) {
    return (0, context_1.withSelection)(base, () => {
        const args = call.args;
        if (args.length !== 1) {
            throw new interfaces_private_1.QueryError(fn + ' expects one argument, given ' + args.length);
        }
        const what = (0, expression_builder_1.buildValue)(args[0]).cast(datatypes_1.Types.bool);
        return new BoolAgg(what, fn === 'bool_or');
    });
}
exports.buildBoolAgg = buildBoolAgg;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Deletion = void 0;
const interfaces_private_1 = __webpack_require__(0);
const mutation_base_1 = __webpack_require__(20);
const context_1 = __webpack_require__(4);
class Deletion extends mutation_base_1.MutationDataSourceBase {
    constructor(ast) {
        const { schema } = (0, context_1.buildCtx)();
        const table = (0, interfaces_private_1.asTable)(schema.getObject(ast.from));
        const mutatedSel = table
            .selection
            .filter(ast.where);
        super(table, mutatedSel, ast);
    }
    performMutation(t) {
        // perform deletion
        const rows = [];
        for (const item of this.mutatedSel.enumerate(t)) {
            this.table.delete(t, item);
            rows.push(item);
        }
        return rows;
    }
}
exports.Deletion = Deletion;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
const interfaces_private_1 = __webpack_require__(0);
const mutation_base_1 = __webpack_require__(20);
const context_1 = __webpack_require__(4);
const select_1 = __webpack_require__(13);
const selection_1 = __webpack_require__(11);
const join_1 = __webpack_require__(24);
class Update extends mutation_base_1.MutationDataSourceBase {
    constructor(ast) {
        const { schema } = (0, context_1.buildCtx)();
        const into = (0, interfaces_private_1.asTable)(schema.getObject(ast.table));
        let mutatedSel;
        let fetchObjectToUpdate;
        if (ast.from) {
            //  => UPDATE-FROM-SELECT
            // build a join that selects the full record to update,
            // based on the data from the original selection
            mutatedSel = (0, select_1.buildSelect)({
                type: 'select',
                // join from:
                from: [
                    ast.from,
                    {
                        type: 'table',
                        name: ast.table,
                        join: {
                            type: 'INNER JOIN',
                            on: ast.where,
                        }
                    }
                ],
                // // select the whole updated record
                columns: [{
                        expr: {
                            type: 'ref',
                            table: ast.table,
                            name: '*',
                        }
                    }]
            });
            // this should have built a selection on a join statement
            if (!(mutatedSel instanceof selection_1.Selection)) {
                throw new Error('Invalid select-from statement');
            }
            mutatedSel = mutatedSel.base;
            if (!(mutatedSel instanceof join_1.JoinSelection)) {
                // should not happen
                throw new Error('Invalid select-from statement');
            }
            // use hack to get the full joined source in the selection
            fetchObjectToUpdate = x => x['>joined'];
        }
        else {
            //  => REGULAR UPDATE
            mutatedSel = into
                .selection
                .filter(ast.where);
        }
        super(into, mutatedSel, ast);
        this.setter = (0, mutation_base_1.createSetter)(this.table, this.mutatedSel, ast.sets);
        this.fetchObjectToUpdate = fetchObjectToUpdate;
    }
    performMutation(t) {
        // perform update
        const rows = [];
        for (const i of this.mutatedSel.enumerate(t)) {
            const data = this.fetchObjectToUpdate
                ? this.fetchObjectToUpdate(i)
                : i;
            this.setter(t, data, i);
            rows.push(this.table.update(t, data));
        }
        return rows;
    }
}
exports.Update = Update;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Insert = void 0;
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const join_1 = __webpack_require__(24);
const mutation_base_1 = __webpack_require__(20);
const array_filter_1 = __webpack_require__(29);
const context_1 = __webpack_require__(4);
const select_1 = __webpack_require__(13);
class Insert extends mutation_base_1.MutationDataSourceBase {
    constructor(ast) {
        const { schema } = (0, context_1.buildCtx)();
        // get table to insert into
        const table = (0, interfaces_private_1.asTable)(schema.getObject(ast.into));
        const selection = table
            .selection
            .setAlias(ast.into.alias);
        // init super
        super(table, selection, ast);
        // get data to insert
        this.valueRawSource = ast.insert.type === 'values'
            ? (0, select_1.buildValues)(ast.insert, true)
            : (0, select_1.buildSelect)(ast.insert);
        (0, context_1.withSelection)(this, () => this.visit(ast));
    }
    visit(ast) {
        var _a, _b;
        // check not inserting too many values
        this.insertColumns = (_b = (_a = ast.columns) === null || _a === void 0 ? void 0 : _a.map(x => x.name)) !== null && _b !== void 0 ? _b : this.table.selection.columns.map(x => x.id)
            .slice(0, this.valueRawSource.columns.length);
        if (this.valueRawSource.columns.length > this.insertColumns.length) {
            throw new interfaces_private_1.QueryError(`INSERT has more expressions than target columns`);
        }
        // check insert types
        this.valueConvertedSource = this.insertColumns.map((col, i) => {
            const value = this.valueRawSource.columns[i];
            const insertInto = this.table.selection.getColumn(col);
            // It seems that the explicit conversion is only performed when inserting values.
            const canConvert = ast.insert.type === 'values'
                ? value.type.canCast(insertInto.type)
                : value.type.canConvertImplicit(insertInto.type);
            if (!canConvert) {
                throw new interfaces_private_1.QueryError(`column "${col}" is of type ${insertInto.type.name} but expression is of type ${value.type.name}`);
            }
            return value.type === datatypes_1.Types.default
                ? value // handle "DEFAULT" values
                : value.cast(insertInto.type);
        });
        // build 'on conflict' strategy
        let ignoreConflicts = undefined;
        if (ast.onConflict) {
            // find the targeted index
            const _on = ast.onConflict.on;
            const on = _on && (0, context_1.withSelection)(this.table.selection, () => _on === null || _on === void 0 ? void 0 : _on.map(x => (0, expression_builder_1.buildValue)(x)));
            let onIndex = null;
            if (on) {
                onIndex = this.table.getIndex(...on);
                if (!(onIndex === null || onIndex === void 0 ? void 0 : onIndex.unique)) {
                    throw new interfaces_private_1.QueryError(`There is no unique or exclusion constraint matching the ON CONFLICT specification`);
                }
            }
            // check if 'do nothing'
            if (ast.onConflict.do === 'do nothing') {
                ignoreConflicts = { ignore: onIndex !== null && onIndex !== void 0 ? onIndex : 'all' };
            }
            else {
                if (!onIndex) {
                    throw new interfaces_private_1.QueryError(`ON CONFLICT DO UPDATE requires inference specification or constraint name`);
                }
                const subject = new join_1.JoinSelection(this.mutatedSel
                // fake data... we're only using this to get the multi table column resolution:
                , new array_filter_1.ArrayFilter(this.table.selection, []).setAlias('excluded'), {
                    type: 'LEFT JOIN',
                    on: { type: 'boolean', value: false }
                }, false);
                const setter = (0, mutation_base_1.createSetter)(this.table, subject, ast.onConflict.do.sets);
                const _where = ast.onConflict.where;
                const where = _where && (0, context_1.withSelection)(subject, () => (0, expression_builder_1.buildValue)(_where));
                ignoreConflicts = {
                    onIndex,
                    update: (item, excluded, t) => {
                        // build setter context
                        const jitem = subject.buildItem(item, excluded);
                        // check "WHERE" clause on conflict
                        if (where) {
                            const whereClause = where.get(jitem, t);
                            if (whereClause !== true) {
                                return;
                            }
                        }
                        // execute set
                        setter(t, item, jitem);
                    },
                };
            }
        }
        this.opts = {
            onConflict: ignoreConflicts,
            overriding: ast.overriding
        };
    }
    performMutation(t) {
        // enumerate & get
        const values = [];
        for (const o of this.valueRawSource.enumerate(t)) {
            const nv = [];
            for (let i = 0; i < this.insertColumns.length; i++) {
                const _custom = this.valueConvertedSource[i].get(o, t);
                nv.push(_custom);
            }
            values.push(nv);
        }
        // insert values
        const ret = [];
        for (const val of values) {
            if (val.length !== this.insertColumns.length) {
                throw new interfaces_private_1.QueryError('Insert columns / values count mismatch');
            }
            const toInsert = {};
            for (let i = 0; i < val.length; i++) {
                const v = val[i];
                const col = this.valueConvertedSource[i];
                if (col.type === datatypes_1.Types.default) {
                    continue; // insert a 'DEFAULT' value
                }
                toInsert[this.insertColumns[i]] = v;
                // if ('_custom' in v) {
                //      toInsert[columns[i]] = v._custom;
                // } else {
                //     const notConv = buildValue(table.selection, v);
                //     const converted = notConv.cast(col.type);
                //     if (!converted.isConstant) {
                //         throw new QueryError('Cannot insert non constant expression');
                //     }
                //     toInsert[columns[i]] = converted.get();
                // }
            }
            ret.push(this.table.doInsert(t, toInsert, this.opts));
        }
        return ret;
    }
}
exports.Insert = Insert;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValuesTable = void 0;
const interfaces_1 = __webpack_require__(2);
const interfaces_private_1 = __webpack_require__(0);
const readonly_table_1 = __webpack_require__(8);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const context_1 = __webpack_require__(4);
let cnt = 0;
class ValuesTable extends readonly_table_1.ReadOnlyTable {
    constructor(alias, items, columnNames, acceptDefault) {
        super((0, context_1.buildCtx)().schema);
        this.symbol = Symbol();
        (0, context_1.withSelection)((0, context_1.buildCtx)().schema.dualTable.selection, () => {
            const len = new Set(items.map(x => x.length));
            if (len.size !== 1) {
                throw new interfaces_1.QueryError('VALUES lists must all be the same length');
            }
            if (columnNames && columnNames.length > items[0].length) {
                throw new interfaces_1.QueryError(`table "${alias}" has ${items[0].length} columns available but ${columnNames.length} columns specified`);
            }
            let builtVals = items.map(vals => vals.map(e => {
                if (acceptDefault && e.type === 'default') {
                    return 'default';
                }
                return (0, expression_builder_1.buildValue)(e);
            }));
            const types = items[0].map((_, i) => {
                return preferedType(builtVals.map(x => {
                    const v = x[i];
                    return v === 'default'
                        ? null
                        : v.type;
                }));
            });
            this._schema = {
                name: alias,
                fields: types.map((type, i) => {
                    var _a;
                    return {
                        type: type !== null && type !== void 0 ? type : datatypes_1.Types.default,
                        name: (_a = columnNames === null || columnNames === void 0 ? void 0 : columnNames[i]) !== null && _a !== void 0 ? _a : `column${i + 1}`,
                    };
                })
            };
            this.assignments = builtVals.map(vals => vals.map((v, i) => v === 'default' ? v : v.cast(types[i])));
        });
    }
    entropy(t) {
        return 0;
    }
    enumerate(t) {
        const ret = this.assignments.map(vals => {
            const ret = { [this.symbol]: true };
            (0, interfaces_private_1.setId)(ret, 'vtbl' + (++cnt));
            for (let i = 0; i < vals.length; i++) {
                const v = vals[i];
                ret[this._schema.fields[i].name] = v === 'default'
                    ? null
                    : v.get({}, t);
            }
            return ret;
        });
        return ret;
    }
    hasItem(value, t) {
        return !!value[this.symbol];
    }
}
exports.ValuesTable = ValuesTable;
function preferedType(types) {
    return types.reduce((a, b) => {
        if (!a) {
            return b;
        }
        if (!b) {
            return a;
        }
        const ret = a.prefer(b);
        if (!ret) {
            throw new interfaces_1.QueryError('Incompatible value types');
        }
        return ret;
    }, types[0]);
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionCallTable = void 0;
const context_1 = __webpack_require__(4);
const transform_base_1 = __webpack_require__(5);
const selection_1 = __webpack_require__(11);
const utils_1 = __webpack_require__(1);
class FunctionCallTable extends transform_base_1.DataSourceBase {
    constructor(cols, evaluator) {
        super((0, context_1.buildCtx)().schema);
        this.evaluator = evaluator;
        this.symbol = Symbol();
        this.columns = cols.map(c => (0, selection_1.columnEvaluator)(this, c.name, c.type).setOrigin(this));
        this.colsByName = (0, utils_1.fromEntries)(this.columns.map(c => [c.id, c]));
    }
    get isExecutionWithNoResult() {
        return false;
    }
    entropy(t) {
        return 0;
    }
    enumerate(t) {
        const results = this.evaluator.get(null, t);
        for (const result of results !== null && results !== void 0 ? results : []) {
            result[this.symbol] = true;
        }
        return results;
    }
    hasItem(value, t) {
        return !!value[this.symbol];
    }
    getColumn(column, nullIfNotFound) {
        return (0, utils_1.colByName)(this.colsByName, column, nullIfNotFound);
    }
    getIndex(forValue) {
        return null;
    }
    isOriginOf(value) {
        return value.origin === this;
    }
    explain(e) {
        throw new Error('Method not implemented.');
    }
    stats(t) {
        throw new Error('Method not implemented.');
    }
}
exports.FunctionCallTable = FunctionCallTable;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIndex = void 0;
const interfaces_private_1 = __webpack_require__(0);
// @ts-ignore
const functional_red_black_tree_1 = __importDefault(__webpack_require__(62));
const interfaces_1 = __webpack_require__(2);
const immutable_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(1);
class BIndex {
    constructor(t, name, cols, onTable, hash, unique, notNull, predicate) {
        this.name = name;
        this.cols = cols;
        this.onTable = onTable;
        this.hash = hash;
        this.unique = unique;
        this.notNull = notNull;
        this.predicate = predicate;
        this.treeBinId = Symbol();
        this.treeCountId = Symbol();
        this.reg = onTable.ownerSchema._reg_register(this);
        this.truncate(t);
        this.expressions = cols.map((x) => x.value);
    }
    get type() {
        return "index";
    }
    get ownerSchema() {
        return this.onTable.ownerSchema;
    }
    drop(t) {
        this.onTable.dropIndex(t, this.name);
    }
    compare(_a, _b) {
        for (let i = 0; i < this.expressions.length; i++) {
            const k = this.cols[i];
            const a = _a[i];
            const b = _b[i];
            const an = (0, utils_1.nullIsh)(a);
            const bn = (0, utils_1.nullIsh)(b);
            if (an || bn) {
                if (an === bn) {
                    continue;
                }
                return (an ? -1 : 1) * (k.nullsLast ? 1 : -1);
            }
            if (k.value.type.equals(a, b)) {
                continue;
            }
            return k.value.type.gt(a, b) ? 1 : -1; // * (k.desc ? -1 : 1);
        }
        return 0;
    }
    buildKey(raw, t) {
        return this.expressions.map((k) => k.get(raw, t));
    }
    truncate(t) {
        const asBinary = (0, functional_red_black_tree_1.default)((a, b) => {
            return this.compare(a, b);
        });
        this.setBin(t, asBinary);
    }
    dropFromData(t) {
        t.delete(this.treeBinId);
    }
    bin(t) {
        return t.get(this.treeBinId);
    }
    setBin(t, val) {
        return t.set(this.treeBinId, val);
    }
    setCount(t, val) {
        return t.set(this.treeCountId, val);
    }
    getCount(t) {
        var _c;
        return (_c = t.get(this.treeCountId)) !== null && _c !== void 0 ? _c : 0;
    }
    hasKey(key, t) {
        const it = this.bin(t).find(key);
        return it.valid;
    }
    add(raw, t) {
        // check that predicate is OK
        if (this.predicate) {
            const val = this.predicate.get(raw, t);
            if ((0, utils_1.nullIsh)(val) || val === false) {
                return;
            }
        }
        // build key and object id
        const id = (0, interfaces_private_1.getId)(raw);
        const key = this.buildKey(raw, t);
        const hasNil = (0, utils_1.hasNullish)(...key);
        if (this.notNull && hasNil) {
            throw new interfaces_1.QueryError("Cannot add a null record in index " + this.name);
        }
        if (this.unique && !hasNil && this.hasKey(key, t)) {
            const idCols = this.cols.map((it) => it.value.id);
            throw new interfaces_1.QueryError({
                error: `insert into "${this.onTable.name}" (${Object.keys(raw).join(", ")}) ` +
                    `values (${Object.keys(raw)
                        .map((_, i) => `$${i + 1}`)
                        .join(", ")}) returning "${idCols}" ` +
                    `- duplicate key value violates unique constraint "${this.onTable.name}_pkey"`,
                details: `Key (${idCols})=(${key}) already exists.`,
                code: "23505",
            });
        }
        // get tree
        let tree = this.bin(t);
        // get key in tree
        let keyValues = tree.find(key);
        if (keyValues.valid) {
            if (keyValues.value.has(id)) {
                return; // already exists
            }
            tree = keyValues.update(keyValues.value.set(id, raw));
        }
        else {
            tree = tree.insert(key, (0, immutable_1.Map)().set(id, raw));
        }
        this.setBin(t, tree);
        this.setCount(t, this.getCount(t) + 1);
    }
    delete(raw, t) {
        const key = this.buildKey(raw, t);
        let tree = this.bin(t);
        let keyValues = tree.find(key);
        if (!keyValues.valid) {
            return; // key does not exists
        }
        const id = (0, interfaces_private_1.getId)(raw);
        if (!keyValues.value.has(id)) {
            return; // element does not exists
        }
        const newKeyValues = keyValues.value.delete(id);
        if (!newKeyValues.size) {
            tree = keyValues.remove();
        }
        else {
            tree = keyValues.update(newKeyValues);
        }
        this.setBin(t, tree);
        this.setCount(t, this.getCount(t) - 1);
    }
    eqFirst(rawKey, t) {
        for (const r of this.eq(rawKey, t, false)) {
            return (0, utils_1.deepCloneSimple)(r);
        }
        return null;
    }
    *nin(rawKey, t) {
        rawKey.sort((a, b) => this.compare(a, b));
        const kit = rawKey[Symbol.iterator]();
        let cur = kit.next();
        const bin = this.bin(t);
        let it = bin.begin;
        while (!cur.done) {
            // yield previous
            while (it.valid && this.compare(it.key, cur.value) < 0) {
                yield* it.value.values();
                it.next();
            }
            // skip equals
            if (this.compare(it.key, cur.value) === 0) {
                it = bin.gt(cur.value);
            }
            cur = kit.next();
        }
        // finish
        while (it.valid) {
            yield* it.value.values();
            it.next();
        }
    }
    entropy(op) {
        var _c;
        const bin = this.bin(op.t);
        if (!bin.length) {
            return 0;
        }
        const all = (_c = op.t.get(this.treeCountId)) !== null && _c !== void 0 ? _c : 0;
        // evaluate number of keys included in this operation
        const e = this._keyCount(op);
        // multiply by average values per key
        return (e * all) / bin.length;
    }
    stats(t, key) {
        var _c, _d;
        if (!key) {
            return {
                count: (_c = t.get(this.treeCountId)) !== null && _c !== void 0 ? _c : 0,
            };
        }
        const found = this.bin(t).get(key);
        return {
            count: (_d = found === null || found === void 0 ? void 0 : found.size) !== null && _d !== void 0 ? _d : 0,
        };
    }
    iterateKeys(t) {
        const bin = this.bin(t);
        return bin.keys;
    }
    _keyCount(op) {
        const bin = this.bin(op.t);
        switch (op.type) {
            case "eq": {
                const begin = bin.find(op.key);
                if (!begin.valid) {
                    return 0;
                }
                const end = bin.gt(op.key);
                if (!end.valid) {
                    return bin.length - begin.index;
                }
                return end.index - begin.index + 1;
            }
            case "neq": {
                let cnt = 0;
                const first = bin.find(op.key);
                if (!first.valid) {
                    return bin.length;
                }
                cnt += first.valid ? first.index : 0;
                const end = bin.gt(op.key);
                cnt += end.valid ? bin.length - end.index : 0;
                return cnt;
            }
            case "ge": {
                const found = bin.ge(op.key);
                return found.valid ? bin.length - found.index : 0;
            }
            case "gt": {
                const found = bin.gt(op.key);
                return found.valid ? bin.length - found.index : 0;
            }
            case "le": {
                const found = bin.gt(op.key);
                return found.valid ? found.index : bin.length;
            }
            case "lt": {
                const found = bin.ge(op.key);
                return found.valid ? found.index : bin.length;
            }
            case "inside": {
                const begin = bin.ge(op.lo);
                if (!begin.valid) {
                    return 0;
                }
                const end = bin.gt(op.hi);
                if (!end.valid) {
                    return bin.length - begin.index;
                }
                return end.index - begin.index;
            }
            case "outside": {
                let cnt = 0;
                const first = bin.lt(op.lo);
                cnt += first.valid ? first.index + 1 : 0;
                const end = bin.gt(op.hi);
                cnt += end.valid ? bin.length - end.index : 0;
                return cnt;
            }
            case "nin": {
                let cnt = bin.length;
                for (const e of op.keys) {
                    const f = bin.find(e);
                    if (f.valid) {
                        cnt--;
                    }
                }
                return cnt;
            }
            default:
                throw interfaces_1.NotSupported.never(op["type"]);
        }
    }
    *enumerate(op) {
        for (const x of this._enumerate(op)) {
            yield (0, utils_1.deepCloneSimple)(x);
        }
    }
    _enumerate(op) {
        switch (op.type) {
            case "eq":
                return this.eq(op.key, op.t, op.matchNull);
            case "neq":
                return this.neq(op.key, op.t, op.matchNull);
            case "ge":
                return this.ge(op.key, op.t);
            case "le":
                return this.le(op.key, op.t);
            case "gt":
                return this.gt(op.key, op.t);
            case "lt":
                return this.lt(op.key, op.t);
            case "outside":
                return this.outside(op.lo, op.hi, op.t);
            case "inside":
                return this.inside(op.lo, op.hi, op.t);
            case "nin":
                return this.nin(op.keys, op.t);
            default:
                throw interfaces_1.NotSupported.never(op["type"]);
        }
    }
    *eq(key, t, matchNull) {
        if (!matchNull && key.some(utils_1.nullIsh)) {
            return;
        }
        const it = this.bin(t).find(key);
        while (it.valid && this.compare(it.key, key) === 0) {
            yield* it.value.values();
            it.next();
        }
    }
    *neq(key, t, matchNull) {
        if (!matchNull && key.some(utils_1.nullIsh)) {
            return;
        }
        // yield before
        const bin = this.bin(t);
        let it = bin.begin;
        while (it.valid && this.compare(it.key, key) < 0) {
            yield* it.value.values();
            it.next();
        }
        // yield after
        it = bin.gt(key);
        while (it.valid) {
            yield* it.value.values();
            it.next();
        }
    }
    *gt(key, t) {
        const it = this.bin(t).gt(key);
        while (it.valid) {
            yield* it.value.values();
            it.next();
        }
    }
    *ge(key, t) {
        const it = this.bin(t).ge(key);
        while (it.valid) {
            yield* it.value.values();
            it.next();
        }
    }
    *lt(key, t) {
        const bin = this.bin(t);
        const limit = bin.lt(key);
        const it = bin.begin;
        if (!limit.valid) {
            // yield all
            while (it.valid) {
                yield* it.value.values();
                it.next();
            }
            return;
        }
        while (it.valid && limit.index >= it.index) {
            yield* it.value.values();
            it.next();
        }
        // const it = this.asBinary.lt(key);
        // while (it.valid) {
        //     yield* it.value.values();
        //     it.prev();
        // }
    }
    *le(key, t) {
        const bin = this.bin(t);
        const limit = bin.le(key);
        const it = bin.begin;
        if (!limit.valid) {
            // yield all
            while (it.valid) {
                yield* it.value.values();
                it.next();
            }
            return;
        }
        while (it.valid && limit.index >= it.index) {
            yield* it.value.values();
            it.next();
        }
        // const it = this.asBinary.le(key);
        // while (it.valid) {
        //     yield* it.value.values();
        //     it.prev();
        // }
    }
    *outside(lo, hi, t) {
        yield* this.lt(lo, t);
        yield* this.gt(hi, t);
    }
    *inside(lo, hi, t) {
        const it = this.bin(t).ge(lo);
        while (it.valid && this.compare(it.key, hi) <= 0) {
            yield* it.value.values();
            it.next();
        }
    }
    explain(e) {
        return {
            _: "btree",
            onTable: this.onTable.name,
            btree: this.expressions.map((x) => x.id),
        };
    }
}
exports.BIndex = BIndex;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("functional-red-black-tree");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColRef = void 0;
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
const selection_1 = __webpack_require__(11);
const generated_1 = __webpack_require__(64);
const expression_builder_1 = __webpack_require__(6);
const context_1 = __webpack_require__(4);
class ColRef {
    constructor(table, expression, _schema, name) {
        this.table = table;
        this.expression = expression;
        this.name = name;
        this.notNull = false;
        this.usedInIndexes = new Set();
        this.drophandlers = new Set();
    }
    addConstraints(clist, t) {
        var _a;
        const notNull = clist.some((x) => x.type === "not null");
        const acceptNil = clist.some((x) => x.type === "null");
        if (notNull && acceptNil) {
            throw new interfaces_private_1.QueryError(`conflicting NULL/NOT NULL declarations for column "${this.name}" of table "${this.table.name}"`);
        }
        for (const c of clist) {
            const cname = c.constraintName;
            switch (c.type) {
                case "not null":
                case "null":
                    // dealt with that above.
                    break;
                case "primary key":
                    this.table.createIndex(t, {
                        columns: [{ value: this.expression }],
                        primary: true,
                        indexName: cname === null || cname === void 0 ? void 0 : cname.name,
                    });
                    break;
                case "unique":
                    this.table.createIndex(t, {
                        columns: [{ value: this.expression }],
                        notNull: notNull,
                        unique: true,
                        indexName: cname === null || cname === void 0 ? void 0 : cname.name,
                    });
                    break;
                case "default":
                    this.alter({
                        type: "set default",
                        default: c.default,
                        updateExisting: true,
                    }, t);
                    break;
                case "check":
                    this.table.addCheck(t, c.expr, cname === null || cname === void 0 ? void 0 : cname.name, this.notNull);
                    break;
                case "add generated":
                    new generated_1.GeneratedIdentityConstraint((_a = c.constraintName) === null || _a === void 0 ? void 0 : _a.name, this).install(t, c);
                    break;
                case "reference":
                    this.table.addForeignKey({
                        ...c,
                        type: "foreign key",
                        localColumns: [{ name: this.name }],
                    }, t);
                    break;
                default:
                    throw interfaces_private_1.NotSupported.never(c, "add constraint type");
            }
        }
        if (notNull) {
            this.addNotNullConstraint(t);
        }
        this.table.db.onSchemaChange();
        return this;
    }
    addNotNullConstraint(t) {
        // check has no null value
        const bin = this.table.bin(t);
        for (const e of bin.values()) {
            const val = this.expression.get(e, t);
            if ((0, utils_1.nullIsh)(val)) {
                throw new interfaces_private_1.QueryError(`Cannot add not null constraint on column "${this.expression.id}": it contains null values`);
            }
        }
        this.notNull = true;
        // just amend schema (for cloning)
        this.table.db.onSchemaChange();
    }
    rename(to, t) {
        if (this.table.getColumnRef(to, true)) {
            throw new interfaces_private_1.QueryError(`Column "${to}" already exists`);
        }
        // first, move data (this cannot throw => OK to modify mutable data)
        this.table.remapData(t, (v) => {
            const ov = v[this.expression.id];
            delete v[this.expression.id];
            v[to] = ov;
        });
        // for (const v of this.table.bin(t)) {
        //     const ov = v[this.expression.id];
        //     delete v[this.expression.id];
        //     v[to] = ov;
        // }
        // === do nasty things to rename column
        this.replaceExpression(to, this.expression.type);
        this.table.db.onSchemaChange();
        this.name = to;
        return this;
    }
    alter(alter, t) {
        var _a;
        switch (alter.type) {
            case "drop default":
                this.default = null;
                break;
            case "set default":
                if (alter.default.type === "null") {
                    this.default = null;
                    break;
                }
                const df = (0, context_1.withSelection)(this.table.selection, () => (0, expression_builder_1.buildValue)(alter.default));
                if (!df.isConstant) {
                    throw new interfaces_private_1.QueryError("cannot use column references in default expression");
                }
                if (alter.updateExisting) {
                    const defVal = df.get();
                    this.table.remapData(t, (x) => (x[this.expression.id] = defVal));
                }
                this.default = df;
                break;
            case "set not null":
                this.addNotNullConstraint(t);
                break;
            case "drop not null":
                this.notNull = false;
                break;
            case "set type":
                const newType = this.table.ownerSchema.getType(alter.dataType);
                const conv = this.expression.cast(newType);
                const eid = this.expression.id;
                this.table.remapData(t, (x) => (x[this.expression.id] = conv.get(x, t)));
                // once converted, do nasty things to change expression
                this.replaceExpression(eid, newType);
                break;
            case "add generated":
                new generated_1.GeneratedIdentityConstraint((_a = alter.constraintName) === null || _a === void 0 ? void 0 : _a.name, this).install(t, alter);
                break;
            default:
                throw interfaces_private_1.NotSupported.never(alter, "alter column type");
        }
        this.table.db.onSchemaChange();
        this.table.selection.rebuild();
        return this;
    }
    replaceExpression(newId, newType) {
        const on = this.expression.id;
        const nn = newId;
        this.expression = (0, selection_1.columnEvaluator)(this.table, newId, newType);
        // replace in table
        this.table.columnMgr.delete(on);
        this.table.columnMgr.set(nn, this);
    }
    drop(t) {
        const on = this.expression.id;
        if (!this.table.columnMgr.has(on)) {
            throw new Error("Corrupted table");
        }
        // remove indices
        for (const u of this.usedInIndexes) {
            this.table.dropIndex(t, u.name);
        }
        // remove associated data
        this.table.remapData(t, (x) => delete x[this.expression.id]);
        // nasty business to remove columns
        this.table.columnMgr.delete(on);
        this.table.selection.rebuild();
        this.drophandlers.forEach((d) => d(t, false));
        this.table.db.onSchemaChange();
    }
    checkConstraints(toInsert, t) {
        if (!this.notNull) {
            return;
        }
        const col = this.expression.get(toInsert, t);
        if ((0, utils_1.nullIsh)(col)) {
            throw new interfaces_private_1.QueryError(`null value in column "${this.expression.id}" violates not-null constraint`);
        }
    }
    setDefaults(toInsert, t) {
        const col = this.expression.get(toInsert, t);
        if (col !== undefined) {
            return;
        }
        if (!this.default) {
            toInsert[this.expression.id] = null;
        }
        else {
            toInsert[this.expression.id] = this.default.get();
        }
    }
    onDrop(sub) {
        this.drophandlers.add(sub);
        return {
            unsubscribe: () => {
                this.drophandlers.delete(sub);
            },
        };
    }
}
exports.ColRef = ColRef;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedIdentityConstraint = void 0;
const interfaces_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(1);
class GeneratedIdentityConstraint {
    constructor(name, column) {
        this.name = name;
        this.column = column;
        this.subs = [];
    }
    get table() {
        return this.column.table;
    }
    get schema() {
        return this.table.ownerSchema;
    }
    uninstall(t) {
        for (const s of this.subs) {
            s.unsubscribe();
        }
        ;
        this.subs = [];
    }
    install(ct, _c) {
        var _a, _b;
        if (!this.column.notNull) {
            // if it's a table creation, then force 'not null'
            const tableCreation = !this.schema.getTable(this.table.name, true);
            if (tableCreation) {
                this.column.alter({
                    type: 'set not null',
                }, ct);
            }
            else {
                // else, throw an error
                throw new interfaces_1.QueryError(`column "${this.column.name}" of relation "${this.table.name}" must be declared NOT NULL before identity can be added`);
            }
        }
        const seq = this.schema.createSequence(ct, _c.sequence, (_a = _c.sequence) === null || _a === void 0 ? void 0 : _a.name);
        // todo : Review this... it's a complete bluff (dont have time to check spec)
        const mode = (_b = _c.always) !== null && _b !== void 0 ? _b : 'always';
        this.subs.push(this.table.onBeforeChange([this.column], (old, neu, dt, opts) => {
            var _a;
            // only act on new things
            if (old) {
                return;
            }
            const gen = () => neu[this.column.name] = seq.nextValue(dt);
            if ((0, utils_1.nullIsh)(neu[this.column.name])) {
                // no value has been provided => generate one.
                gen();
                return;
            }
            // a value has been provided => check if must be overriden.
            switch (mode) {
                case 'by default':
                    switch ((_a = opts.overriding) !== null && _a !== void 0 ? _a : 'system') {
                        case 'system':
                            break;
                        default:
                            gen();
                            break;
                    }
                    break;
                case 'always':
                    // column is 'GENREATED ALWAYS'
                    // => must specify 'overriding system value'
                    if (opts.overriding !== 'system') {
                        throw new interfaces_1.QueryError({
                            error: `cannot insert into column "${this.column.name}"`,
                            details: ` Column "${this.column.name}" is an identity column defined as GENERATED ALWAYS.`,
                            hint: 'Use OVERRIDING SYSTEM VALUE to override.',
                        });
                    }
                    break;
                default:
                    throw interfaces_1.NotSupported.never(mode);
            }
        }));
        this.subs.push(this.table.onTruncate((t, { restartIdentity }) => {
            if (!restartIdentity) {
                return;
            }
            seq.restart(t);
        }));
    }
}
exports.GeneratedIdentityConstraint = GeneratedIdentityConstraint;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ForeignKey = void 0;
const interfaces_1 = __webpack_require__(2);
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
class ForeignKey {
    constructor(name) {
        this.name = name;
        this.unsubs = [];
    }
    get db() {
        return this.table.ownerSchema.db;
    }
    get schema() {
        return this.table.ownerSchema;
    }
    install(_t, cst, table) {
        var _a, _b, _c;
        const ftable = (0, interfaces_private_1.asTable)(table.ownerSchema.getObject(cst.foreignTable, { beingCreated: table }));
        const cols = cst.localColumns.map(x => table.getColumnRef(x.name));
        const fcols = cst.foreignColumns.map(x => ftable.getColumnRef(x.name));
        this.table = table;
        this.foreignTable = ftable;
        if (cols.length !== fcols.length) {
            throw new interfaces_1.QueryError('Foreign key count mismatch');
        }
        cols.forEach((c, i) => {
            if (fcols[i].expression.type !== c.expression.type) {
                throw new interfaces_1.QueryError(`Foreign key column type mismatch`);
            }
        });
        if (((_a = cst.match) !== null && _a !== void 0 ? _a : 'simple') !== 'simple' && cols.length !== 1) {
            throw new interfaces_1.NotSupported(`matching mode '${cst.match}' on mutliple columns foreign keys`);
        }
        // check that there is an unique index on this table for the given expressions
        const findex = ftable.getIndex(...fcols.map(x => x.expression));
        if (!(findex === null || findex === void 0 ? void 0 : findex.unique)) {
            throw new interfaces_1.QueryError(`there is no unique constraint matching given keys for referenced table "${ftable.name}"`);
        }
        // auto-create indices
        if (this.db.options.autoCreateForeignKeyIndices) {
            table.createIndex(_t, {
                ifNotExists: true,
                columns: cols.map(x => ({
                    value: x.expression,
                })),
            });
        }
        // ========================
        // when changing the foreign table key, check correspondances in this table
        // ========================
        const onUpdate = (_b = cst.onUpdate) !== null && _b !== void 0 ? _b : 'no action';
        const onDelete = (_c = cst.onDelete) !== null && _c !== void 0 ? _c : 'no action';
        this.unsubs.push(ftable.onBeforeChange(cst.foreignColumns.map(x => x.name), (old, neu, dt) => {
            if (!old) {
                return;
            }
            const oVals = fcols.map(x => old[x.expression.id]);
            if (oVals.some(utils_1.nullIsh)) {
                return;
            }
            // build foreign key equality expression
            const equals = cst.localColumns.map((x, i) => ({
                type: 'binary',
                op: '=',
                left: { type: 'ref', name: x.name, table: { name: table.name } },
                // hack, see #fkcheck
                right: {
                    type: 'constant',
                    value: oVals[i],
                    dataType: fcols[i].expression.type, // hack
                },
            }));
            const expr = equals.slice(1).reduce((a, b) => ({
                type: 'binary',
                op: 'AND',
                left: a,
                right: b,
            }), equals[0]);
            // check nothing matches
            for (const local of table.selection.filter(expr).enumerate(dt)) {
                // ====== ON DELETE
                switch (neu ? onUpdate : onDelete) {
                    case 'no action':
                    case 'restrict':
                        throw new interfaces_1.QueryError(`update or delete on table "${ftable.name}" violates foreign key constraint on table "${this.name}"`);
                    case 'cascade':
                        if (neu) {
                            for (let i = 0; i < fcols.length; i++) {
                                local[cst.localColumns[i].name] = neu[cst.foreignColumns[i].name];
                            }
                            table.update(dt, local);
                        }
                        else {
                            table.delete(dt, local);
                        }
                        break;
                    case 'set default':
                    case 'set null':
                        for (const c of cst.localColumns) {
                            local[c.name] = null;
                        }
                        table.update(dt, local);
                        break;
                }
            }
        }));
        // =====================
        //  when changing something in this table,
        //  then there must be a key match in the foreign table
        // =====================
        this.unsubs.push(table.onBeforeChange(cst.localColumns.map(x => x.name), (_, neu, dt) => {
            if (!neu) {
                return;
            }
            const vals = cols.map(x => neu[x.expression.id]);
            if (vals.some(utils_1.nullIsh)) {
                return;
            }
            // build foreign key equality expression
            const equals = cst.foreignColumns.map((x, i) => ({
                type: 'binary',
                op: '=',
                left: { type: 'ref', name: x.name, table: { name: ftable.name } },
                // hack, see #fkcheck
                right: {
                    type: 'constant',
                    value: vals[i],
                    dataType: cols[i].expression.type, // hack
                },
            }));
            const expr = equals.slice(1).reduce((a, b) => ({
                type: 'binary',
                op: 'AND',
                left: a,
                right: b,
            }), equals[0]);
            // check there is a match
            let yielded = false;
            for (const _ of ftable.selection.filter(expr).enumerate(dt)) {
                yielded = true;
            }
            if (!yielded) {
                throw new interfaces_1.QueryError(`insert or update on table "${ftable.name}" violates foreign key constraint on table "${this.name}"`);
            }
        }));
        // =====================
        //  prevent foreign table from being dropped
        // =====================
        this.unsubs.push(ftable.onDrop((t, cascade) => {
            //  (todo implement multiple drops)
            if (cascade) {
                this.uninstall(t);
            }
            else {
                throw new interfaces_1.QueryError({
                    error: `cannot drop table "${ftable.name}" because other objects depend on it`,
                    details: `constraint ${this.name} on table ${table.name} depends on table "${ftable.name}"`,
                    hint: `Use DROP ... CASCADE to drop the dependent objects too.`,
                });
            }
        }));
        // =====================
        //  prevent foreign table truncation
        // =====================
        this.unsubs.push(ftable.onTruncate((t, { cascade }) => {
            if (cascade) {
                this.table.truncate(t, { cascade: true });
                return;
            }
            throw new interfaces_1.QueryError({
                error: `cannot truncate a table referenced in a foreign key constraint`,
                details: `Table "${table.name}" references "${ftable.name}".`,
                hint: `HINT:  Truncate table "${table.name}" at the same time, or use TRUNCATE ... CASCADE.`,
            });
        }));
        // =====================
        //  when this table is dropped => remove hooks on foreign table
        // =====================
        table.onDrop(dt => {
            this.uninstall(dt);
        });
        return this;
    }
    uninstall(t) {
        this.unsubs.forEach(x => x.unsubscribe());
        this.unsubs = [];
    }
}
exports.ForeignKey = ForeignKey;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = exports.readMigrations = void 0;
const pg_escape_1 = __webpack_require__(30);
async function readMigrations(migrationPath) {
    const path = require('path');
    const fs = require('fs');
    const migrationsPath = migrationPath || path.join(process.cwd(), 'migrations');
    const location = path.resolve(migrationsPath);
    // Get the list of migration files, for example:
    //   { id: 1, name: 'initial', filename: '001-initial.sql' }
    //   { id: 2, name: 'feature', filename: '002-feature.sql' }
    const migrationFiles = await new Promise((resolve, reject) => {
        fs.readdir(location, (err, files) => {
            if (err) {
                return reject(err);
            }
            resolve(files
                .map(x => x.match(/^(\d+).(.*?)\.sql$/))
                .filter(x => x !== null)
                .map(x => ({ id: Number(x[1]), name: x[2], filename: x[0] }))
                .sort((a, b) => Math.sign(a.id - b.id)));
        });
    });
    if (!migrationFiles.length) {
        throw new Error(`No migration files found in '${location}'.`);
    }
    // Get the list of migrations, for example:
    //   { id: 1, name: 'initial', filename: '001-initial.sql', up: ..., down: ... }
    //   { id: 2, name: 'feature', filename: '002-feature.sql', up: ..., down: ... }
    return Promise.all(migrationFiles.map(migration => new Promise((resolve, reject) => {
        const filename = path.join(location, migration.filename);
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                return reject(err);
            }
            const [up, down] = data.split(/^--\s+?down\b/im);
            const migrationData = migration;
            migrationData.up = up.replace(/^-- .*?$/gm, '').trim(); // Remove comments
            migrationData.down = down ? down.trim() : ''; // and trim whitespaces
            resolve(migrationData);
        });
    })));
}
exports.readMigrations = readMigrations;
/**
 * Migrates database schema to the latest version
 */
async function migrate(db, config = {}) {
    config.force = config.force || false;
    config.table = config.table || 'migrations';
    const { force, table } = config;
    const migrations = config.migrations
        ? config.migrations
        : await readMigrations(config.migrationsPath);
    // Create a database table for migrations meta data if it doesn't exist
    await db.none(`CREATE TABLE IF NOT EXISTS "${table}" (
  id   INTEGER PRIMARY KEY,
  name TEXT    NOT NULL,
  up   TEXT    NOT NULL,
  down TEXT    NOT NULL
)`);
    // Get the list of already applied migrations
    let dbMigrations = await db.many(`SELECT id, name, up, down FROM "${table}" ORDER BY id ASC`);
    // Undo migrations that exist only in the database but not in files,
    // also undo the last migration if the `force` option is enabled.
    const lastMigration = migrations[migrations.length - 1];
    for (const migration of dbMigrations
        .slice()
        .sort((a, b) => Math.sign(b.id - a.id))) {
        if (!migrations.some(x => x.id === migration.id) ||
            (force && migration.id === lastMigration.id)) {
            // await db.run('BEGIN')
            try {
                await db.none(migration.down);
                await db.none(`DELETE FROM "${table}" WHERE id = ${migration.id}`);
                // await db.run('COMMIT')
                dbMigrations = dbMigrations.filter(x => x.id !== migration.id);
            }
            catch (err) {
                // await db.run('ROLLBACK')
                throw err;
            }
        }
        else {
            break;
        }
    }
    // Apply pending migrations
    const lastMigrationId = dbMigrations.length
        ? dbMigrations[dbMigrations.length - 1].id
        : 0;
    for (const migration of migrations) {
        if (migration.id > lastMigrationId) {
            // await db.run('BEGIN')
            try {
                await db.none(migration.up);
                await db.none(`INSERT INTO "${table}" (id, name, up, down) VALUES (
          ${migration.id},
          ${(0, pg_escape_1.literal)(migration.name)},
          ${(0, pg_escape_1.literal)(migration.up)},
          ${(0, pg_escape_1.literal)(migration.down)})`);
                // await db.run('COMMIT')
            }
            catch (err) {
                // await db.run('ROLLBACK')
                throw err;
            }
        }
    }
}
exports.migrate = migrate;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEnumType = void 0;
const datatype_base_1 = __webpack_require__(9);
const interfaces_1 = __webpack_require__(2);
class CustomEnumType extends datatype_base_1.TypeBase {
    constructor(schema, _name, values) {
        super();
        this.schema = schema;
        this._name = _name;
        this.values = values;
    }
    get primary() {
        return this.name;
    }
    get name() {
        return this._name;
    }
    install() {
        this.schema._registerType(this);
    }
    doCanCast(to) {
        return to.primary === interfaces_1.DataType.text;
    }
    doCast(value, to) {
        return value;
    }
    prefer(type) {
        return this;
    }
    doCanBuildFrom(from) {
        return from.primary === interfaces_1.DataType.text;
    }
    doBuildFrom(value, from) {
        return value
            .setConversion((raw) => {
            if (!this.values.includes(raw)) {
                throw new interfaces_1.QueryError(`invalid input value for enum ${this.name}: "${raw}"`);
            }
            return raw;
        }, conv => ({ conv, toCenum: this.name }));
    }
    drop(t) {
        this.schema._unregisterType(this);
    }
}
exports.CustomEnumType = CustomEnumType;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EquivalentType = void 0;
const datatype_base_1 = __webpack_require__(9);
const interfaces_1 = __webpack_require__(2);
const datatypes_1 = __webpack_require__(14);
class EquivalentType extends datatype_base_1.TypeBase {
    constructor(def) {
        super();
        this.def = def;
        if (typeof def.equivalentTo === 'string') {
            let eq = datatypes_1.Types[def.equivalentTo];
            if (typeof eq === 'function') {
                eq = eq();
            }
            this.equiv = eq;
        }
        else {
            this.equiv = def.equivalentTo;
        }
        if (!this.equiv) {
            throw new Error(`Invalid equilvalent type`);
        }
    }
    get primary() {
        return this.def.name;
    }
    doCanCast(to) {
        return to.primary === this.equiv.primary;
    }
    doCast(value, to) {
        return value;
    }
    prefer(type) {
        return this;
    }
    doCanBuildFrom(from) {
        return from.primary === this.equiv.primary;
    }
    doBuildFrom(value, from) {
        return value
            .setConversion(x => {
            if (!this.def.isValid(x)) {
                throw new interfaces_1.QueryError(`invalid input syntax for type ${(0, interfaces_1.typeDefToStr)(this)}: ${x}`);
            }
            return x;
        }, val => ({ val, to: this.equiv.primary }));
    }
}
exports.EquivalentType = EquivalentType;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OverloadResolver = void 0;
const datatypes_1 = __webpack_require__(3);
const utils_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
class OverloadResolver {
    constructor(implicitCastOnly) {
        this.implicitCastOnly = implicitCastOnly;
        this.byName = new Map();
    }
    add(value, replaceIfExists) {
        let ret = this.byName.get(value.name);
        if (!ret) {
            this.byName.set(value.name, ret = new OverloadNode(datatypes_1.Types.null, this.implicitCastOnly, 0));
        }
        ret.index(value, replaceIfExists);
    }
    getOverloads(name) {
        const ovr = this.byName.get(name);
        if (!ovr) {
            return [];
        }
        return [...ovr.all()];
    }
    remove(value) {
        var _a;
        (_a = this.byName.get(value.name)) === null || _a === void 0 ? void 0 : _a.unindex(value);
    }
    resolve(name, args) {
        var _a;
        return (_a = this.byName.get(name)) === null || _a === void 0 ? void 0 : _a.resolve(args);
    }
    getExact(name, types) {
        var _a;
        return (_a = this.byName.get(name)) === null || _a === void 0 ? void 0 : _a.getExact(types);
    }
}
exports.OverloadResolver = OverloadResolver;
class OverloadNode {
    constructor(type, implicitCastOnly, at) {
        this.type = type;
        this.implicitCastOnly = implicitCastOnly;
        this.at = at;
        this.nexts = new Map();
    }
    *all() {
        if (this.leaf) {
            yield this.leaf;
        }
        for (const children of this.nexts.values()) {
            for (const child of children) {
                yield* child.all();
            }
        }
    }
    index(value, replaceIfExists) {
        if (this.at >= value.args.length) {
            if (this.leaf && !replaceIfExists) {
                throw new interfaces_1.QueryError('Function already exists: ' + value.name);
            }
            this.leaf = value;
            return;
        }
        const arg = value.args[this.at];
        const primary = arg.type.primary;
        let lst = this.nexts.get(primary);
        if (!lst) {
            this.nexts.set(primary, lst = []);
        }
        // get or add corresponding node
        let node = lst.find(x => x.type === arg.type);
        if (!node) {
            lst.push(node = new OverloadNode(arg.type, this.implicitCastOnly, this.at + 1));
        }
        // process arg list
        node.index(value, replaceIfExists);
    }
    unindex(value) {
        if (this.leaf === value) {
            this.leaf = null;
            return;
        }
        for (const children of this.nexts.values()) {
            for (const child of children) {
                child.unindex(value);
            }
        }
    }
    getExact(types) {
        var _a;
        if (this.at >= types.length) {
            return this.leaf;
        }
        const target = types[this.at];
        const found = (_a = this.nexts.get(target.primary)) === null || _a === void 0 ? void 0 : _a.find(x => x.type == target);
        return found === null || found === void 0 ? void 0 : found.getExact(types);
    }
    resolve(args) {
        var _a;
        if (this.at >= args.length) {
            return this.leaf;
        }
        // gets the child which type matches the current arg better
        const arg = args[this.at];
        const sigsToCheck = (0, utils_1.it)((_a = this.nexts // perf tweak: search by primary type
            .get(arg.type.primary)) !== null && _a !== void 0 ? _a : (0, utils_1.it)(this.nexts.values()).flatten() // else, search all registered overloads
        );
        const match = sigsToCheck.reduce((acc, x) => {
            // check that arg can be converted to the target type
            if (!this.compatible(arg, x.type)) {
                return acc;
            }
            // first match
            if (!acc) {
                return x;
            }
            // returns the prefered type
            return acc.type.prefer(x.type) === x.type ? x : acc;
        }, null);
        if (match) {
            return match.resolve(args);
        }
        // handle variadic args
        if (this.leaf && this.leaf.argsVariadic && this.compatible(arg, this.leaf.argsVariadic)) {
            return this.leaf;
        }
        // not found
        return null;
    }
    compatible(givenArg, expectedArg) {
        var _a;
        if (givenArg.type === expectedArg) {
            return true;
        }
        return givenArg.isConstantLiteral
            ? givenArg.type.canCast(expectedArg)
            : (_a = givenArg.type.canConvertImplicit(expectedArg)) !== null && _a !== void 0 ? _a : givenArg.type.canCast(expectedArg);
    }
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = void 0;
const utils_1 = __webpack_require__(1);
const interfaces_private_1 = __webpack_require__(0);
const interfaces_1 = __webpack_require__(2);
const datatypes_1 = __webpack_require__(3);
class Sequence {
    constructor(name, ownerSchema) {
        this.name = name;
        this.ownerSchema = ownerSchema;
        this.symbol = Symbol();
        this.cfg = {};
        this.reg = ownerSchema._reg_register(this);
    }
    get type() {
        return 'sequence';
    }
    get cycle() {
        var _a;
        return (_a = this.cfg.cycle) !== null && _a !== void 0 ? _a : false;
    }
    get dataType() {
        var _a;
        return (_a = this.cfg.dataType) !== null && _a !== void 0 ? _a : datatypes_1.Types.integer;
    }
    get inc() {
        var _a;
        return (_a = this.cfg.inc) !== null && _a !== void 0 ? _a : 1;
    }
    get start() {
        var _a;
        return (_a = this.cfg.start) !== null && _a !== void 0 ? _a : (this.inc > 0
            ? this.min
            : this.max);
    }
    get max() {
        var _a;
        return (_a = this.cfg.max) !== null && _a !== void 0 ? _a : (this.inc > 0
            ? Number.MAX_SAFE_INTEGER - 1
            : -1);
    }
    get min() {
        var _a;
        return (_a = this.cfg.min) !== null && _a !== void 0 ? _a : (this.inc > 0
            ? 1
            : Number.MIN_SAFE_INTEGER + 1);
    }
    alter(t, opts) {
        var _a;
        if (!opts) {
            return this;
        }
        const oldCfg = { ...this.cfg };
        try {
            if (!('type' in opts)) {
                return this.alterOpts(t, opts);
            }
            switch (opts.type) {
                case 'set options':
                    this.alterOpts(t, opts);
                    if (opts.restart === true || typeof opts.restart === 'number') {
                        if (typeof opts.restart === 'number') {
                            if (opts.restart < this.min) {
                                throw new interfaces_1.QueryError(`RESTART value (${opts.restart}) cannot be less than MINVALUE (${this.min})`, '22023');
                            }
                            this.cfg.start = opts.restart;
                        }
                        const data = {
                            currval: (_a = t.get(this.symbol)) === null || _a === void 0 ? void 0 : _a.currval,
                            nextval: this.start,
                        };
                        t.set(this.symbol, data);
                    }
                    return this;
                case 'set schema':
                    if (opts.newSchema.name === this.ownerSchema.name) {
                        return this;
                    }
                    throw new interfaces_private_1.NotSupported('Sequence schema change');
                case 'rename':
                    const to = opts.newName.name.toLowerCase();
                    this.ownerSchema._reg_rename(this, this.name, to);
                    this.name = to;
                    return this;
                case 'owner to':
                    // todo: implement sequence owners ? ...ignored to support pg_dump exports.
                    (0, utils_1.ignore)(opts);
                    return this;
                default:
                    throw interfaces_private_1.NotSupported.never(opts);
            }
        }
        catch (e) {
            this.cfg = oldCfg;
            throw e;
        }
    }
    nextValue(t) {
        var _a;
        let v = (_a = t.get(this.symbol)) === null || _a === void 0 ? void 0 : _a.nextval;
        if (v === undefined) {
            v = this.start;
        }
        this.setValue(t, v);
        return v;
    }
    setValue(t, value) {
        if (value > this.max) {
            throw new interfaces_1.QueryError(`reached maximum value of sequence "${this.name}"`);
        }
        if (value < this.min) {
            throw new interfaces_1.QueryError(`reached minimum value of sequence "${this.name}"`);
        }
        const data = {
            currval: value,
            nextval: value + this.inc,
        };
        t.set(this.symbol, data);
    }
    restart(t) {
        t.delete(this.symbol);
    }
    currentValue(t) {
        var _a;
        const v = (_a = t.get(this.symbol)) === null || _a === void 0 ? void 0 : _a.currval;
        if (v === undefined) {
            throw new interfaces_1.QueryError(`currval of sequence "${this.name}" is not yet defined in this session`, '55000');
        }
        return v;
    }
    alterOpts(t, opts) {
        var _a, _b;
        if (opts.as) {
            (0, utils_1.ignore)(opts.as);
            this.cfg.dataType = this.ownerSchema.getType(opts.as);
        }
        (0, utils_1.ignore)(opts.cache);
        if (opts.cycle) {
            this.cfg.cycle = opts.cycle === 'cycle';
        }
        if (typeof opts.incrementBy === 'number') {
            this.cfg.inc = opts.incrementBy;
        }
        if (typeof opts.maxValue === 'number') {
            this.cfg.max = opts.maxValue;
        }
        else if (opts.maxValue) {
            this.cfg.max = undefined;
        }
        if (typeof opts.minValue === 'number') {
            this.cfg.min = opts.minValue;
        }
        else if (opts.maxValue) {
            this.cfg.min = undefined;
        }
        if (typeof opts.startWith === 'number') {
            this.cfg.start = opts.startWith;
        }
        if (opts.ownedBy === 'none') {
            (_a = this.owner) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
        else if (opts.ownedBy) {
            (_b = this.owner) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            const tbl = (0, interfaces_private_1.asTable)(this.ownerSchema.getObject({
                name: opts.ownedBy.table,
                schema: opts.ownedBy.schema
            }));
            const owner = tbl.getColumnRef(opts.ownedBy.column);
            this.owner = (0, utils_1.combineSubs)(owner.onDrop(dt => this.drop(dt)), tbl.onDrop(dt => this.drop(dt)));
        }
        // === validate
        if (this.max < this.min) {
            throw new interfaces_1.QueryError('Invalid squeuence min-max');
        }
        if (!this.inc) {
            throw new interfaces_1.QueryError('Invalid increment');
        }
        if (this.start > this.max || this.start < this.min) {
            throw new interfaces_1.QueryError('Invalid sequence starting value');
        }
        return this;
    }
    drop(t) {
        var _a;
        (_a = this.owner) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.owner = undefined;
        t.delete(this.symbol);
        this.ownerSchema._reg_unregister(this);
    }
}
exports.Sequence = Sequence;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteCreateTable = void 0;
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
const exec_utils_1 = __webpack_require__(7);
const context_1 = __webpack_require__(4);
class ExecuteCreateTable extends exec_utils_1.ExecHelper {
    constructor(p) {
        super(p);
        const { db } = (0, context_1.buildCtx)();
        this.schema = db.getSchema(p.name.schema);
        let fields = [];
        for (const f of p.columns) {
            switch (f.kind) {
                case 'column':
                    if (!f.dataType.kind && f.dataType.name === interfaces_private_1.DataType.record) {
                        throw new interfaces_private_1.QueryError(`column "${f.name.name}" has pseudo-type record`, '42P16');
                    }
                    // TODO: #collation
                    (0, utils_1.ignore)(f.collate);
                    const nf = {
                        ...f,
                        name: f.name.name,
                        type: this.schema.getType(f.dataType),
                        serial: !f.dataType.kind && (f.dataType.name === 'serial' || f.dataType.name === 'bigserial'),
                    };
                    delete nf.dataType;
                    fields.push(nf);
                    break;
                case 'like table':
                    throw new interfaces_private_1.NotSupported('"like table" statement');
                default:
                    throw interfaces_private_1.NotSupported.never(f);
            }
        }
        this.ifNotExists = !!p.ifNotExists;
        this.name = p.name;
        this.toDeclare = {
            name: p.name.name,
            constraints: p.constraints,
            fields,
        };
    }
    execute(t) {
        // commit pending data before making changes
        //  (because the creation does not support further rollbacks)
        t = t.fullCommit();
        // perform creation
        (0, exec_utils_1.checkExistence)(this.schema, this.name, this.ifNotExists, () => {
            this.schema.declareTable(this.toDeclare);
        });
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
}
exports.ExecuteCreateTable = ExecuteCreateTable;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndexExec = void 0;
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
const exec_utils_1 = __webpack_require__(7);
const expression_builder_1 = __webpack_require__(6);
const context_1 = __webpack_require__(4);
class CreateIndexExec extends exec_utils_1.ExecHelper {
    constructor({ schema }, p) {
        var _a;
        super(p);
        const indexName = (_a = p.indexName) === null || _a === void 0 ? void 0 : _a.name;
        this.onTable = (0, interfaces_private_1.asTable)(schema.getObject(p.table));
        // check that index algorithm is supported
        if (p.using && p.using.name.toLowerCase() !== 'btree') {
            if (schema.db.options.noIgnoreUnsupportedIndices) {
                throw new interfaces_private_1.NotSupported('index type: ' + p.using);
            }
            (0, utils_1.ignore)(p);
        }
        this.indexDef = (0, context_1.withSelection)(this.onTable.selection, () => {
            // index columns
            const columns = p.expressions
                .map(x => {
                return {
                    value: (0, expression_builder_1.buildValue)(x.expression),
                    nullsLast: x.nulls === 'last',
                    desc: x.order === 'desc',
                };
            });
            // compile predicate (if any)
            const predicate = p.where && (0, expression_builder_1.buildValue)(p.where);
            return {
                columns,
                indexName,
                unique: p.unique,
                ifNotExists: p.ifNotExists,
                predicate,
            };
        });
    }
    execute(t) {
        // commit pending data before making changes
        //  (because the index creation does not support further rollbacks)
        t = t.fullCommit();
        // create index
        this.onTable
            .createIndex(t, this.indexDef);
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
}
exports.CreateIndexExec = CreateIndexExec;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Alter = void 0;
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
const exec_utils_1 = __webpack_require__(7);
class Alter extends exec_utils_1.ExecHelper {
    constructor({ schema }, p) {
        super(p);
        this.p = p;
        this.table = (0, interfaces_private_1.asTable)(schema.getObject(p.table));
        (0, utils_1.ignore)(p.only);
    }
    execute(t) {
        let ignored = 0;
        // commit pending data before making changes
        //  (because  does not support further rollbacks)
        t = t.fullCommit();
        for (const change of this.p.changes) {
            function ignoreChange() {
                (0, utils_1.ignore)(change);
                ignored++;
            }
            switch (change.type) {
                case 'rename':
                    this.table.rename(change.to.name);
                    break;
                case 'add column': {
                    const col = this.table.selection.getColumn(change.column.name.name, true);
                    if (col) {
                        if (change.ifNotExists) {
                            ignoreChange();
                            break;
                        }
                        else {
                            throw new interfaces_private_1.QueryError('Column already exists: ' + col.id);
                        }
                    }
                    else {
                        (0, utils_1.ignore)(change.ifNotExists);
                    }
                    this.table.addColumn(change.column, t);
                    break;
                }
                case 'drop column':
                    const col = this.table.getColumnRef(change.column.name, change.ifExists);
                    if (!col) {
                        ignoreChange();
                    }
                    else {
                        col.drop(t);
                    }
                    break;
                case 'drop constraint':
                    const cst = this.table.getConstraint(change.constraint.name);
                    if (change.ifExists && !cst) {
                        ignoreChange();
                        break;
                    }
                    if (!cst) {
                        throw new interfaces_private_1.QueryError(`constraint "${change.constraint.name}" of relation "${this.table.name}" does not exist`, '42704');
                    }
                    cst.uninstall(t);
                    break;
                case 'rename column':
                    this.table.getColumnRef(change.column.name)
                        .rename(change.to.name, t);
                    break;
                case 'alter column':
                    this.table.getColumnRef(change.column.name)
                        .alter(change.alter, t);
                    break;
                case 'rename constraint':
                    throw new interfaces_private_1.NotSupported('rename constraint');
                case 'add constraint':
                    this;
                    this.table.addConstraint(change.constraint, t);
                    break;
                case 'owner':
                    // owner change statements are not supported.
                    // however, in order to support, pg_dump, we're just ignoring them.
                    ignoreChange();
                    break;
                default:
                    throw interfaces_private_1.NotSupported.never(change, 'alter request');
            }
        }
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'ALTER');
    }
}
exports.Alter = Alter;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterSequence = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
class AlterSequence extends exec_utils_1.ExecHelper {
    constructor({ schema }, p) {
        super(p);
        this.p = p;
        this.seq = (0, interfaces_private_1.asSeq)(schema.getObject(p.name, {
            nullIfNotFound: p.ifExists,
        }));
        if (!this.seq) {
            (0, utils_1.ignore)(this.p);
        }
    }
    execute(t) {
        var _a;
        // commit pending data before making changes
        //  (because the index sequence creation does support further rollbacks)
        t = t.fullCommit();
        // alter the sequence
        (_a = this.seq) === null || _a === void 0 ? void 0 : _a.alter(t, this.p.change);
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'ALTER');
    }
}
exports.AlterSequence = AlterSequence;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropIndex = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
class DropIndex extends exec_utils_1.ExecHelper {
    constructor({ schema }, statement) {
        super(statement);
        this.idx = (0, utils_1.notNil)(statement.names.map(x => (0, interfaces_private_1.asIndex)(schema.getObject(x, {
            nullIfNotFound: statement.ifExists,
        }))));
        if (this.idx.length) {
            (0, utils_1.ignore)(statement.concurrently);
        }
        else {
            (0, utils_1.ignore)(statement);
        }
    }
    execute(t) {
        // commit pending data before making changes
        //  (because the index sequence creation does support further rollbacks)
        t = t.fullCommit();
        // alter the sequence
        for (const idx of this.idx) {
            idx.onTable.dropIndex(t, idx.name);
        }
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'DROP');
    }
}
exports.DropIndex = DropIndex;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropTable = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
class DropTable extends exec_utils_1.ExecHelper {
    constructor({ schema }, statement) {
        super(statement);
        this.tables = (0, utils_1.notNil)(statement.names.map(x => (0, interfaces_private_1.asTable)(schema.getObject(x, {
            nullIfNotFound: statement.ifExists,
        }))));
        this.cascade = statement.cascade === 'cascade';
        if (!this.tables.length) {
            (0, utils_1.ignore)(statement);
        }
    }
    execute(t) {
        // commit pending data before making changes
        //  (because it does not support further rollbacks)
        t = t.fullCommit();
        // drop table
        for (const table of this.tables) {
            table.drop(t, this.cascade);
        }
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'DROP');
    }
}
exports.DropTable = DropTable;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropSequence = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
class DropSequence extends exec_utils_1.ExecHelper {
    constructor({ schema }, statement) {
        super(statement);
        this.seqs = (0, utils_1.notNil)(statement.names.map(x => (0, interfaces_private_1.asSeq)(schema.getObject(x, {
            nullIfNotFound: statement.ifExists,
        }))));
        if (!this.seqs.length) {
            (0, utils_1.ignore)(statement);
        }
    }
    execute(t) {
        // commit pending data before making changes
        //  (because the index sequence creation does support further rollbacks)
        t = t.fullCommit();
        // drop the sequence
        for (const seq of this.seqs) {
            seq.drop(t);
        }
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'DROP');
    }
}
exports.DropSequence = DropSequence;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginStatementExec = exports.RollbackExecutor = exports.CommitExecutor = void 0;
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
class CommitExecutor extends exec_utils_1.ExecHelper {
    constructor(statement) {
        super(statement);
    }
    execute(t) {
        t = t.commit();
        // recreate an implicit transaction if we're at root
        // (I can see how its usfull, but this is dubious...)
        if (!t.isChild) {
            t = t.fork();
        }
        return this.noData(t, 'COMMIT');
    }
}
exports.CommitExecutor = CommitExecutor;
class RollbackExecutor extends exec_utils_1.ExecHelper {
    constructor(statement) {
        super(statement);
        (0, utils_1.ignore)(statement);
    }
    execute(t) {
        t = t.rollback();
        return this.noData(t, 'ROLLBACK');
    }
}
exports.RollbackExecutor = RollbackExecutor;
class BeginStatementExec extends exec_utils_1.ExecHelper {
    constructor(statement) {
        super(statement);
        (0, utils_1.ignore)(statement);
    }
    execute(t) {
        t = t.fork();
        return this.noData(t, 'BEGIN');
    }
}
exports.BeginStatementExec = BeginStatementExec;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TruncateTable = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const context_1 = __webpack_require__(4);
class TruncateTable extends exec_utils_1.ExecHelper {
    constructor(statement) {
        super(statement);
        if (statement.tables.length !== 1) {
            throw new interfaces_private_1.NotSupported('Multiple truncations');
        }
        this.opts = {
            cascade: statement.cascade === 'cascade',
            restartIdentity: statement.identity === 'restart',
        };
        const { schema } = (0, context_1.buildCtx)();
        this.table = (0, interfaces_private_1.asTable)(schema.getObject(statement.tables[0]));
    }
    execute(t) {
        this.table.truncate(t, this.opts);
        return this.noData(t, 'TRUNCATE');
    }
}
exports.TruncateTable = TruncateTable;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowExecutor = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
class ShowExecutor {
    constructor(statement) {
        this.statement = statement;
    }
    execute(t) {
        const p = this.statement;
        const got = t.getMap(interfaces_private_1.GLOBAL_VARS);
        if (!got.has(p.variable.name)) {
            throw new interfaces_private_1.QueryError(`unrecognized configuration parameter "${p.variable.name}"`);
        }
        return {
            state: t,
            result: {
                rows: [{ [p.variable.name]: got.get(p.variable.name) }],
                rowCount: 1,
                command: 'SHOW',
                fields: [],
                location: (0, exec_utils_1.locOf)(p),
            },
        };
    }
}
exports.ShowExecutor = ShowExecutor;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SetExecutor = void 0;
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
const exec_utils_1 = __webpack_require__(7);
class SetExecutor extends exec_utils_1.ExecHelper {
    constructor(p) {
        super(p);
        this.p = p;
        // todo handle set statements timezone ?
        // They are just ignored as of today (in order to handle pg_dump exports)
        (0, utils_1.ignore)(p);
    }
    execute(t) {
        const p = this.p;
        if (p.type === 'set' && p.set.type === 'value') {
            t.set(interfaces_private_1.GLOBAL_VARS, t.getMap(interfaces_private_1.GLOBAL_VARS)
                .set(p.variable.name, p.set.value));
        }
        return this.noData(t, 'SET');
    }
}
exports.SetExecutor = SetExecutor;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEnum = void 0;
const exec_utils_1 = __webpack_require__(7);
class CreateEnum extends exec_utils_1.ExecHelper {
    constructor({ schema }, st) {
        super(st);
        this.onSchema = schema.getThisOrSiblingFor(st.name);
        this.values = st.values.map(x => x.value);
        this.name = st.name.name;
    }
    execute(t) {
        // commit pending data before making changes
        //  (because does not support further rollbacks)
        t = t.fullCommit();
        // register enum
        this.onSchema
            .registerEnum(this.name, this.values);
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
}
exports.CreateEnum = CreateEnum;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateView = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
const view_1 = __webpack_require__(33);
const select_1 = __webpack_require__(13);
class CreateView extends exec_utils_1.ExecHelper {
    constructor(st, p) {
        var _a;
        super(p);
        this.schema = st.schema.getThisOrSiblingFor(p.name);
        // check existence
        this.existing = (0, interfaces_private_1.asView)(this.schema.getObject(p.name, { nullIfNotFound: true }));
        (0, utils_1.ignore)(p.orReplace);
        this.drop = !!(p.orReplace && this.existing);
        let view = (0, select_1.buildSelect)(p.query);
        // optional column mapping
        if ((_a = p.columnNames) === null || _a === void 0 ? void 0 : _a.length) {
            if (p.columnNames.length > view.columns.length) {
                throw new interfaces_private_1.QueryError('CREATE VIEW specifies more column names than columns', '42601');
            }
            view = view.select(view.columns.map((x, i) => {
                var _a, _b;
                const alias = (_b = (_a = p.columnNames) === null || _a === void 0 ? void 0 : _a[i]) === null || _b === void 0 ? void 0 : _b.name;
                if (!alias) {
                    return x.id;
                }
                return {
                    expr: { type: 'ref', name: x.id },
                    alias: { name: alias },
                };
            }));
        }
        this.toRegister = new view_1.View(this.schema, p.name.name, view);
    }
    execute(t) {
        // commit pending data before making changes
        //  (because does not support further rollbacks)
        t = t.fullCommit();
        // drop if needed
        if (this.existing && this.drop) {
            this.existing.drop(t);
        }
        // view creation
        this.toRegister.register();
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
}
exports.CreateView = CreateView;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaterializedView = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const view_1 = __webpack_require__(33);
const select_1 = __webpack_require__(13);
class CreateMaterializedView extends exec_utils_1.ExecHelper {
    constructor(st, p) {
        super(p);
        this.schema = st.schema.getThisOrSiblingFor(p.name);
        // check existence
        const existing = this.schema.getObject(p.name, { nullIfNotFound: true });
        if (existing) {
            if (p.ifNotExists) {
                return;
            }
            throw new interfaces_private_1.QueryError(`Name already exists: ${p.name.name}`);
        }
        const view = (0, select_1.buildSelect)(p.query);
        // hack: materialized views are implemented as simple views :/  (todo ?)
        this.toRegister = new view_1.View(this.schema, p.name.name, view);
    }
    execute(t) {
        if (!this.toRegister) {
            return this.noData(t, 'CREATE');
        }
        // commit pending data before making changes
        //  (because does not support further rollbacks)
        t = t.fullCommit();
        // view creation
        this.toRegister.register();
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
}
exports.CreateMaterializedView = CreateMaterializedView;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchema = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
class CreateSchema extends exec_utils_1.ExecHelper {
    constructor(st, p) {
        super(p);
        this.st = st;
        const sch = this.st.schema.db.getSchema(p.name.name, true);
        if (!p.ifNotExists && sch) {
            throw new interfaces_private_1.QueryError('schema already exists! ' + p.name);
        }
        if (sch) {
            (0, utils_1.ignore)(p);
        }
        else {
            this.toCreate = p.name.name;
        }
    }
    execute(t) {
        // commit pending data before making changes
        //  (because does not support further rollbacks)
        t = t.fullCommit();
        // create schema
        if (this.toCreate) {
            this.st.schema.db.createSchema(this.toCreate);
        }
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
}
exports.CreateSchema = CreateSchema;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFunction = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const context_1 = __webpack_require__(4);
class CreateFunction extends exec_utils_1.ExecHelper {
    constructor({ schema }, fn) {
        var _a, _b;
        super(fn);
        if (!fn.language) {
            throw new interfaces_private_1.QueryError('Unspecified function language');
        }
        this.onSchema = schema.getThisOrSiblingFor(fn.name);
        const lang = schema.db.getLanguage(fn.language.name);
        // determine arg types
        const args = (0, context_1.withSelection)(schema.dualTable.selection, () => fn.arguments.map(a => {
            var _a;
            return ({
                name: (_a = a.name) === null || _a === void 0 ? void 0 : _a.name,
                type: schema.getType(a.type),
                default: a.default && (0, expression_builder_1.buildValue)(a.default),
                mode: a.mode,
            });
        }));
        // determine return type
        let returns = null;
        if (!fn.returns) {
            throw new interfaces_private_1.QueryError('Unspecified function return type');
        }
        if (typeof fn.code !== 'string') {
            throw new interfaces_private_1.QueryError('no function body specified');
        }
        switch (fn.returns.kind) {
            case 'table':
                const columns = fn.returns.columns.map(c => ({
                    name: c.name.name,
                    type: schema.getType(c.type),
                }));
                returns = datatypes_1.Types.record(columns).asArray();
                break;
            case 'array':
            case null:
            case undefined:
                returns = schema.getType(fn.returns);
                break;
            default:
                throw interfaces_private_1.NotSupported.never(fn.returns);
        }
        let argsVariadic;
        const variad = args.filter(x => x.mode === 'variadic');
        if (variad.length > 1) {
            throw new interfaces_private_1.QueryError(`Expected only one "VARIADIC" argument`);
        }
        else if (variad.length) {
            argsVariadic = variad[0].type;
        }
        // compile & register the associated function
        const compiled = lang({
            args,
            code: fn.code,
            returns,
            functioName: fn.name.name,
            schema: schema,
        });
        this.toRegister = {
            name: fn.name.name,
            returns,
            implementation: compiled,
            args: args.filter(x => x.mode !== 'variadic'),
            argsVariadic,
            impure: fn.purity !== 'immutable',
            allowNullArguments: fn.onNullInput === 'call',
        };
        this.replace = (_a = fn.orReplace) !== null && _a !== void 0 ? _a : false;
        // if the function exists
        const existing = this.onSchema.getFunction(this.toRegister.name, args.map(x => x.type));
        if (existing) {
            if (!this.replace) {
                throw new interfaces_private_1.QueryError(`function ${this.toRegister.name} lready exists with same argument types`, '42723');
            }
            //  ... it must be the same type
            if (existing.returns !== returns) {
                throw new interfaces_private_1.QueryError(`cannot change return type of existing function`, '42P13');
            }
            // ... argument names must be the same
            for (let i = 0; i < args.length; i++) {
                const exName = existing.args[i].name;
                if ((_b = exName !== null && exName !== void 0 ? exName : null !== args[i].name) !== null && _b !== void 0 ? _b : null) {
                    throw new interfaces_private_1.QueryError(`cannot change name of input parameter "${exName}"`, '42P13');
                }
            }
        }
    }
    execute(t) {
        // commit pending data before making changes
        //  (because does not support further rollbacks)
        t = t.fullCommit();
        this.onSchema.registerFunction(this.toRegister, this.replace);
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'CREATE');
    }
}
exports.CreateFunction = CreateFunction;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DoStatementExec = void 0;
const exec_utils_1 = __webpack_require__(7);
class DoStatementExec extends exec_utils_1.ExecHelper {
    constructor({ schema }, st) {
        var _a, _b;
        super(st);
        const lang = schema.db.getLanguage((_b = (_a = st.language) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'plpgsql');
        this.compiled = lang({
            args: [],
            code: st.code,
            schema: schema,
        });
    }
    execute(t) {
        this.compiled();
        return this.noData(t, 'DO');
    }
}
exports.DoStatementExec = DoStatementExec;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropType = void 0;
const interfaces_private_1 = __webpack_require__(0);
const exec_utils_1 = __webpack_require__(7);
const utils_1 = __webpack_require__(1);
class DropType extends exec_utils_1.ExecHelper {
    constructor({ schema }, statement) {
        super(statement);
        this.types = (0, utils_1.notNil)(statement.names.map(x => (0, interfaces_private_1.asType)(schema.getObject(x, {
            nullIfNotFound: statement.ifExists,
        }))));
        if (!this.types.length) {
            (0, utils_1.ignore)(statement);
        }
    }
    execute(t) {
        // commit pending data before making changes
        //  (because the index sequence creation does support further rollbacks)
        t = t.fullCommit();
        // drop the sequence
        for (const seq of this.types) {
            seq.drop(t);
        }
        // new implicit transaction
        t = t.fork();
        return this.noData(t, 'DROP');
    }
}
exports.DropType = DropType;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFilter = void 0;
const interfaces_private_1 = __webpack_require__(0);
const expression_builder_1 = __webpack_require__(6);
const datatypes_1 = __webpack_require__(3);
const eq_filter_1 = __webpack_require__(90);
const evaluator_1 = __webpack_require__(10);
const false_filter_1 = __webpack_require__(91);
const and_filter_1 = __webpack_require__(92);
const or_filter_1 = __webpack_require__(93);
const seq_scan_1 = __webpack_require__(34);
const in_filter_1 = __webpack_require__(94);
const not_in_filter_1 = __webpack_require__(95);
const startswith_filter_1 = __webpack_require__(96);
const ineq_filter_1 = __webpack_require__(97);
const utils_1 = __webpack_require__(1);
const between_filter_1 = __webpack_require__(98);
const interfaces_1 = __webpack_require__(2);
const context_1 = __webpack_require__(4);
function buildFilter(on, filter, parentName) {
    return (0, context_1.withSelection)(on, () => {
        var _a;
        const where = (0, expression_builder_1.buildValue)(filter);
        if (!where.type.canConvertImplicit(datatypes_1.Types.bool)) {
            throw new interfaces_1.QueryError(`argument of ${parentName} must be type boolean, not type jsonb`, '42804');
        }
        return (_a = _buildFilter(on, filter, where)) !== null && _a !== void 0 ? _a : new seq_scan_1.SeqScanFilter(on, where);
    });
}
exports.buildFilter = buildFilter;
function _buildFilter(on, filter, built) {
    // check if there is a direct index
    if (built.index) {
        if (built.index.expressions.length !== 1) {
            throw new Error('Was not expecing multiples expressions filter');
        }
        const itype = built.index.expressions[0].type;
        if (itype !== datatypes_1.Types.bool) {
            throw new interfaces_private_1.CastError(itype.primary, interfaces_private_1.DataType.bool);
        }
        return new eq_filter_1.EqFilter(built, true, 'eq', false);
    }
    // if this filter is a constant expression (ex: 1 = 1)
    // then return directly
    if (built.isConstant) {
        const val = built.cast(datatypes_1.Types.bool)
            .get();
        if (val) {
            return on;
        }
        return new false_filter_1.FalseFilter(on);
    }
    switch (filter.type) {
        case 'binary':
            return buildBinaryFilter(on, filter);
        case 'unary':
            return buildUnaryFilter(on, filter);
        case 'ternary':
            return buildTernaryFilter(on, filter);
        default:
            return null;
    }
}
function buildUnaryFilter(on, filter) {
    const { operand, op } = filter;
    switch (op) {
        case 'IS NULL':
        case 'IS NOT NULL': {
            const leftValue = (0, expression_builder_1.buildValue)(operand);
            if (leftValue.index) {
                return new eq_filter_1.EqFilter(leftValue, null, op === 'IS NULL' ? 'eq' : 'neq', true);
            }
            return new seq_scan_1.SeqScanFilter(on, evaluator_1.Value.isNull(leftValue, op === 'IS NULL'));
        }
    }
    return null;
}
function buildBinaryFilter(on, filter) {
    var _a;
    const { left, right, op } = filter;
    switch (op) {
        case '=':
        case '!=':
        case '>':
        case '<':
        case '<=':
        case '>=':
            return buildComparison(on, filter);
        case 'AND':
        case 'OR': {
            const leftFilter = buildFilter(on, left, op);
            const rightFilter = buildFilter(on, right, op);
            if (op === 'OR' && (leftFilter instanceof seq_scan_1.SeqScanFilter || rightFilter instanceof seq_scan_1.SeqScanFilter)) {
                return null;
            }
            return op === 'AND'
                ? new and_filter_1.AndFilter([leftFilter, rightFilter])
                : new or_filter_1.OrFilter(leftFilter, rightFilter);
        }
        case 'IN':
        case 'NOT IN': {
            const value = (0, expression_builder_1.buildValue)(left);
            let arrayValue = (0, expression_builder_1.buildValue)(right);
            // to support things like: "col in (value)" - which RHS does not parse to an array
            if (arrayValue.type.primary !== interfaces_private_1.DataType.list) {
                arrayValue = evaluator_1.Value.list([arrayValue]);
            }
            const elementType = arrayValue.type.of.prefer(value.type);
            const array = arrayValue.cast(elementType.asList());
            // only support scanning indexes with one expression
            if (array.isConstant && ((_a = value.index) === null || _a === void 0 ? void 0 : _a.expressions.length) === 1) {
                const arrCst = array.get();
                if ((0, utils_1.nullIsh)(arrCst)) {
                    return new false_filter_1.FalseFilter(on);
                }
                return op === 'IN'
                    ? new in_filter_1.InFilter(value, arrCst)
                    : new not_in_filter_1.NotInFilter(value, arrCst);
            }
            // todo use indexes on queries like "WHERE 'whatever' in (indexedOne, indexedTwo)"
            //   => this is an OrFilter
            return new seq_scan_1.SeqScanFilter(on, evaluator_1.Value.in(value, array, op === 'IN'));
        }
        case 'LIKE': {
            const value = (0, expression_builder_1.buildValue)(left);
            if (value.index && value.index.expressions[0].hash === value.hash) {
                const valueToCompare = (0, expression_builder_1.buildValue)(right);
                if (valueToCompare.isConstant) {
                    const str = valueToCompare.get();
                    if ((0, utils_1.nullIsh)(str)) {
                        return new false_filter_1.FalseFilter(on);
                    }
                    const got = /^([^%_]+)([%_]?.+)$/.exec(str);
                    if (got) {
                        const start = got[1];
                        if (start.length === str) {
                            // that's a full string with no tokens => just an '='
                            return buildComparison(on, {
                                type: 'binary',
                                op: '=',
                                left: left,
                                right: right,
                            });
                        }
                        // yea, we can use an index
                        const indexed = new startswith_filter_1.StartsWithFilter(value, start);
                        if (got[2] === '%') {
                            // just a starsWith
                            return indexed;
                        }
                        // use index, but filter again on it.
                        return new seq_scan_1.SeqScanFilter(indexed, (0, expression_builder_1.buildValue)(filter));
                    }
                }
            }
        }
    }
    return null;
}
function buildComparison(on, filter) {
    const { op, left, right } = filter;
    let leftValue = (0, expression_builder_1.buildValue)(left);
    let rightValue = (0, expression_builder_1.buildValue)(right);
    if (leftValue.isConstant && rightValue.isConstant) {
        const global = (0, expression_builder_1.buildValue)(filter);
        const got = global.get();
        if (got) {
            return on;
        }
        return new false_filter_1.FalseFilter(on);
    }
    if (rightValue.isConstant) {
        rightValue = rightValue.cast(leftValue.type);
    }
    else if (leftValue.isConstant) {
        leftValue = leftValue.cast(rightValue.type);
    }
    switch (op) {
        case '=':
        case '!=': {
            if (leftValue.index && rightValue.isConstant) {
                return new eq_filter_1.EqFilter(leftValue, rightValue.get(), op === '=' ? 'eq' : 'neq', false);
            }
            if (rightValue.index && leftValue.isConstant) {
                return new eq_filter_1.EqFilter(rightValue, leftValue.get(), op === '=' ? 'eq' : 'neq', false);
            }
            break;
        }
        case '>':
        case '>=':
        case '<':
        case '<=':
            if (leftValue.index && leftValue.index.expressions[0].hash === leftValue.hash && rightValue.isConstant) {
                const fop = op === '>' ? 'gt'
                    : op === '>=' ? 'ge'
                        : op === '<' ? 'lt'
                            : 'le';
                return new ineq_filter_1.IneqFilter(leftValue, fop, rightValue.get());
            }
            if (rightValue.index && rightValue.index.expressions[0].hash === rightValue.hash && leftValue.isConstant) {
                const fop = op === '>' ? 'le'
                    : op === '>=' ? 'lt'
                        : op === '<' ? 'ge'
                            : 'gt';
                return new ineq_filter_1.IneqFilter(rightValue, fop, leftValue.get());
            }
            break;
    }
    return null;
}
function buildTernaryFilter(on, filter) {
    switch (filter.op) {
        case 'BETWEEN':
        case 'NOT BETWEEN': {
            const value = (0, expression_builder_1.buildValue)(filter.value);
            const lo = (0, expression_builder_1.buildValue)(filter.lo);
            const hi = (0, expression_builder_1.buildValue)(filter.hi);
            const valueIndex = value.index;
            if (valueIndex && valueIndex.expressions[0].hash === value.hash && lo.isConstant && hi.isConstant) {
                const lov = lo.get();
                const hiv = hi.get();
                if ((0, utils_1.hasNullish)(lov, hiv)) {
                    return new false_filter_1.FalseFilter(on);
                }
                return new between_filter_1.BetweenFilter(value, lov, hiv, filter.op === 'BETWEEN' ? 'inside' : 'outside');
            }
        }
    }
    return null;
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EqFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const utils_1 = __webpack_require__(1);
class EqFilter extends transform_base_1.FilterBase {
    constructor(onValue, equalsCst, op, matchNull) {
        super(onValue.origin);
        this.onValue = onValue;
        this.equalsCst = equalsCst;
        this.op = op;
        this.matchNull = matchNull;
        if (onValue.index.expressions.length !== 1) {
            throw new Error('Unexpected index equality expressions count mismatch');
        }
        this.index = this.onValue.index;
        this.opDef = {
            type: op,
            key: [equalsCst],
            t: null,
            matchNull: this.matchNull,
        };
    }
    entropy(t) {
        return this.index.entropy({ ...this.opDef, t });
    }
    stats(t) {
        const stats = this.index.stats(t, [this.equalsCst]);
        if (this.op === 'eq' || !stats) {
            return stats;
        }
        // if neq, then compute from eq and all
        const all = this.index.stats(t);
        if (!all) {
            return null;
        }
        return {
            count: all.count - stats.count,
        };
    }
    hasItem(item, t) {
        const val = this.onValue.get(item, t);
        if ((0, utils_1.nullIsh)(val)) {
            return false;
        }
        const eq = this.onValue.type.equals(val, this.equalsCst);
        if ((0, utils_1.nullIsh)(eq)) {
            return false;
        }
        return this.op === 'eq' ? !!eq : !eq;
    }
    *enumerate(t) {
        for (const item of this.index.enumerate({ ...this.opDef, t })) {
            yield item;
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: this.op,
            entropy: this.entropy(e.transaction),
            on: this.onValue.index.explain(e),
        };
    }
}
exports.EqFilter = EqFilter;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FalseFilter = void 0;
const transform_base_1 = __webpack_require__(5);
class FalseFilter extends transform_base_1.FilterBase {
    get index() {
        return null;
    }
    entropy() {
        return 0;
    }
    hasItem() {
        return false;
    }
    enumerate() {
        return [];
    }
    stats(t) {
        return {
            count: 0,
        };
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'empty',
        };
    }
}
exports.FalseFilter = FalseFilter;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AndFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const seq_scan_1 = __webpack_require__(34);
class AndFilter extends transform_base_1.FilterBase {
    constructor(filters) {
        var _a;
        super((_a = filters.find(x => !(x instanceof seq_scan_1.SeqScanFilter))) !== null && _a !== void 0 ? _a : filters[0]);
        this.filters = filters;
        if (filters.some(f => f.columns !== this.base.columns)) {
            throw new Error('Column set mismatch');
        }
    }
    get index() {
        return null;
    }
    entropy(t) {
        var _a;
        // just a bit of caching
        if (t === ((_a = this.prevEntropy) === null || _a === void 0 ? void 0 : _a.t)) {
            return this.prevEntropy.ret;
        }
        const { best } = this.plan(t);
        const ret = best.entropy(t);
        this.prevEntropy = {
            ret,
            t,
        };
        return ret;
    }
    hasItem(value, t) {
        return this.filters.every(x => x.hasItem(value, t));
    }
    plan(t) {
        const sorted = [...this.filters]
            .sort((a, b) => a.entropy(t) > b.entropy(t) ? 1 : -1);
        const [best] = sorted.splice(0, 1);
        return { best, sorted };
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        // sort them so the most restrictive filter is first
        const { best, sorted } = this.plan(t);
        for (const item of best.enumerate(t)) {
            if (!sorted.every(x => x.hasItem(item, t))) {
                continue;
            }
            yield item;
        }
    }
    explain(e) {
        const { best, sorted } = this.plan(e.transaction);
        return {
            id: e.idFor(this),
            _: 'and',
            enumerate: best.explain(e),
            andCheck: sorted.map(x => x.explain(e)),
        };
    }
}
exports.AndFilter = AndFilter;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OrFilter = void 0;
const interfaces_private_1 = __webpack_require__(0);
const transform_base_1 = __webpack_require__(5);
class OrFilter extends transform_base_1.FilterBase {
    constructor(left, right) {
        super(left);
        this.left = left;
        this.right = right;
        if (left.columns !== right.columns) { //  istanbul ignore next
            throw new Error('Column set mismatch');
        }
    }
    entropy(t) {
        return this.left.entropy(t) + this.right.entropy(t);
    }
    hasItem(value, t) {
        return this.left.hasItem(value, t) || this.right.hasItem(value, t);
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        const yielded = new Set();
        for (const item of this.left.enumerate(t)) {
            yield item;
            yielded.add((0, interfaces_private_1.getId)(item));
        }
        for (const item of this.right.enumerate(t)) {
            const id = (0, interfaces_private_1.getId)(item);
            if (!yielded.has(id)) {
                yield item;
            }
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'union',
            union: [
                this.left.explain(e),
                this.right.explain(e),
            ],
        };
    }
}
exports.OrFilter = OrFilter;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const interfaces_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(1);
class InFilter extends transform_base_1.FilterBase {
    constructor(onValue, elts) {
        super(onValue.origin);
        this.onValue = onValue;
        this.elts = elts;
        this.index = onValue.index;
        if (this.index.expressions.length !== 1) {
            throw new Error('Only supports IN with signle expressions index');
        }
        if (!Array.isArray(elts)) {
            throw new interfaces_1.QueryError('Cannot iterate element list');
        }
    }
    entropy(t) {
        let ret = 0;
        for (const a of this.elts) {
            ret += this.index.entropy({
                type: 'eq',
                key: [a],
                t,
            });
        }
        return ret;
    }
    hasItem(item, t) {
        const val = this.onValue.get(item, t);
        return !(0, utils_1.nullIsh)(val)
            && this.elts.some(x => this.onValue.type.equals(x, val));
    }
    stats(t) {
        const elts = this.elts.map(x => this.index.stats(t, [x]));
        if (elts.some(x => !x)) {
            return null;
        }
        // compute from elements
        const ret = {
            count: 0,
        };
        for (const i of elts) {
            ret.count += i.count;
        }
        return ret;
    }
    *enumerate(t) {
        for (const a of this.elts) {
            yield* this.index.enumerate({
                type: 'eq',
                key: [a],
                t,
            });
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'eq',
            entropy: this.entropy(e.transaction),
            on: this.index.explain(e),
        };
    }
}
exports.InFilter = InFilter;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NotInFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const interfaces_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(1);
class NotInFilter extends transform_base_1.FilterBase {
    constructor(onValue, elts) {
        super(onValue.origin);
        this.onValue = onValue;
        this.elts = elts;
        this.index = onValue.index;
        if (this.index.expressions.length !== 1) {
            throw new Error('Only supports IN with signle expressions index');
        }
        if (!Array.isArray(elts)) {
            throw new interfaces_1.QueryError('Cannot iterate element list');
        }
        this.keys = elts.map(x => [x]);
    }
    entropy(t) {
        return this.onValue.index.entropy({
            type: 'nin',
            keys: this.keys,
            t,
        });
    }
    hasItem(item, t) {
        const val = this.onValue.get(item, t);
        return !(0, utils_1.nullIsh)(val)
            && !this.elts.some(x => this.onValue.type.equals(x, val));
    }
    stats(t) {
        const all = this.base.stats(t);
        if (!all) {
            return null;
        }
        const elts = this.elts.map(x => this.index.stats(t, [x]));
        if (elts.some(x => !x)) {
            return null;
        }
        // compute based on 'all'
        for (const i of elts) {
            all.count -= i.count;
        }
        return all;
    }
    *enumerate(t) {
        yield* this.index.enumerate({
            type: 'nin',
            keys: this.keys,
            t,
        });
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'neq',
            entropy: this.entropy(e.transaction),
            on: this.onValue.index.explain(e),
        };
    }
}
exports.NotInFilter = NotInFilter;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartsWithFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const utils_1 = __webpack_require__(1);
class StartsWithFilter extends transform_base_1.FilterBase {
    constructor(onValue, startWith) {
        super(onValue.origin);
        this.onValue = onValue;
        this.startWith = startWith;
        if (onValue.index.expressions[0].hash !== this.onValue.hash) {
            throw new Error('Startwith must be the first component of the index');
        }
    }
    get index() {
        return null;
    }
    entropy(t) {
        return this.onValue.index.entropy({
            type: 'ge',
            key: [this.startWith],
            t,
        });
    }
    hasItem(item, t) {
        const get = this.onValue.get(item, t);
        return typeof get === 'string'
            && get.startsWith(this.startWith);
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        const index = this.onValue.index;
        for (const item of index.enumerate({
            type: 'ge',
            key: [this.startWith],
            t,
        })) {
            const got = this.onValue.get(item, t);
            if ((0, utils_1.nullIsh)(got) || !got.startsWith(this.startWith)) {
                break;
            }
            yield item;
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'ineq',
            entropy: this.entropy(e.transaction),
            on: this.onValue.index.explain(e),
        };
    }
}
exports.StartsWithFilter = StartsWithFilter;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IneqFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const utils_1 = __webpack_require__(1);
class IneqFilter extends transform_base_1.FilterBase {
    constructor(onValue, op, than) {
        super(onValue.origin);
        this.onValue = onValue;
        this.op = op;
        this.than = than;
        this.index = this.onValue.index;
        this.opDef = {
            type: op,
            key: [than],
            t: null,
        };
    }
    entropy(t) {
        return this.onValue.index.entropy({ ...this.opDef, t });
    }
    hasItem(item, t) {
        const val = this.onValue.get(item, t);
        if ((0, utils_1.nullIsh)(val)) {
            return false;
        }
        return !!this.onValue.type[this.op](val, this.than);
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        for (const item of this.index.enumerate({ ...this.opDef, t })) {
            if (!this.hasItem(item, t)) {
                break;
            }
            yield item;
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'ineq',
            entropy: this.entropy(e.transaction),
            on: this.onValue.index.explain(e),
        };
    }
}
exports.IneqFilter = IneqFilter;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BetweenFilter = void 0;
const transform_base_1 = __webpack_require__(5);
const utils_1 = __webpack_require__(1);
class BetweenFilter extends transform_base_1.FilterBase {
    constructor(onValue, lo, hi, op) {
        var _a;
        super(onValue.origin);
        this.onValue = onValue;
        this.lo = lo;
        this.hi = hi;
        this.op = op;
        if (((_a = onValue.index.expressions[0]) === null || _a === void 0 ? void 0 : _a.hash) !== onValue.hash) {
            throw new Error('Between index misuse');
        }
        this.opDef = {
            type: op,
            hi: [hi],
            lo: [lo],
            t: null,
        };
    }
    entropy(t) {
        return this.onValue.index.entropy({ ...this.opDef, t });
    }
    hasItem(value, t) {
        const v = this.onValue.get(value, t);
        if ((0, utils_1.nullIsh)(v)) {
            return false;
        }
        if (this.op === 'inside') {
            return !!this.onValue.type.ge(v, this.lo)
                && !!this.onValue.type.le(v, this.hi);
        }
        return !!this.onValue.type.lt(v, this.lo)
            || !!this.onValue.type.gt(v, this.lo);
    }
    enumerate(t) {
        return this.onValue.index.enumerate({ ...this.opDef, t });
    }
    stats(t) {
        return null;
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: this.op,
            entropy: this.entropy(e.transaction),
            on: this.onValue.index.explain(e),
        };
    }
}
exports.BetweenFilter = BetweenFilter;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(100), exports);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapters = void 0;
const interfaces_1 = __webpack_require__(2);
const lru_cache_1 = __importDefault(__webpack_require__(22));
const utils_1 = __webpack_require__(1);
const pg_utils_1 = __webpack_require__(101);
// see https://github.com/oguimbal/pg-mem/issues/170
function timeoutOrImmediate(fn, time) {
    if (time || typeof setImmediate === 'undefined') {
        return setTimeout(fn, time);
    }
    // nothing to wait for, but still executing "later"
    //  in case calling code relies on some actual async behavior
    return setImmediate(fn);
}
const delay = (time) => new Promise(done => timeoutOrImmediate(done, time !== null && time !== void 0 ? time : 0));
function replaceQueryArgs$(sql, values) {
    return sql.replace(/\$(\d+)/g, (str, istr) => {
        const i = Number.parseInt(istr);
        if (i > values.length) {
            throw new Error('Unmatched parameter in query ' + str);
        }
        const val = values[i - 1];
        return (0, pg_utils_1.toLiteral)(val);
    });
}
class Adapters {
    constructor(db) {
        this.db = db;
    }
    createPg(queryLatency) {
        const that = this;
        class MemPg {
            constructor() {
                this.connection = this;
            }
            on() {
                // nop
            }
            release() {
            }
            removeListener() {
            }
            once(what, handler) {
                if (what === 'connect') {
                    timeoutOrImmediate(handler, queryLatency !== null && queryLatency !== void 0 ? queryLatency : 0);
                }
            }
            end(callback) {
                if (callback) {
                    callback();
                    return null;
                }
                else {
                    return Promise.resolve();
                }
            }
            connect(callback) {
                if (callback) {
                    callback(null, this, () => { });
                    return null;
                }
                else {
                    return Promise.resolve(this);
                }
            }
            query(query, valuesOrCallback, callback) {
                let values = null;
                if (Array.isArray(valuesOrCallback)) {
                    values = valuesOrCallback;
                }
                if (callback == null && typeof valuesOrCallback === 'function') {
                    callback = valuesOrCallback;
                }
                // adapt results
                const pgquery = this.adaptQuery(query, values);
                try {
                    const result = this.adaptResults(query, that.db.public.query(pgquery.text));
                    if (callback) {
                        timeoutOrImmediate(() => callback(null, result), queryLatency !== null && queryLatency !== void 0 ? queryLatency : 0);
                        return null;
                    }
                    else {
                        return new Promise(res => timeoutOrImmediate(() => res(result), queryLatency !== null && queryLatency !== void 0 ? queryLatency : 0));
                    }
                }
                catch (e) {
                    if (callback) {
                        timeoutOrImmediate(() => callback(e), queryLatency !== null && queryLatency !== void 0 ? queryLatency : 0);
                        return null;
                    }
                    else {
                        return new Promise((_, rej) => timeoutOrImmediate(() => rej(e), queryLatency !== null && queryLatency !== void 0 ? queryLatency : 0));
                    }
                }
            }
            adaptResults(query, res) {
                if (query.rowMode) {
                    throw new interfaces_1.NotSupported('pg rowMode');
                }
                return {
                    ...res,
                    // clone rows to avoid leaking symbols
                    rows: res.rows.map(row => {
                        return Object.entries(row).reduce((obj, [key, val]) => {
                            obj[key] = val;
                            return obj;
                        }, {});
                    }),
                    get fields() {
                        // to implement if needed ? (never seen a lib that uses it)
                        return [];
                    }
                };
            }
            adaptQuery(query, values) {
                var _a, _b;
                if (typeof query === 'string') {
                    query = {
                        text: query,
                        values,
                    };
                }
                else {
                    // clean copy to avoid mutating things outside our scope
                    query = { ...query };
                }
                if (!((_a = query.values) === null || _a === void 0 ? void 0 : _a.length)) {
                    return query;
                }
                if ((_b = query.types) === null || _b === void 0 ? void 0 : _b.getTypeParser) {
                    throw new interfaces_1.NotSupported('getTypeParser is not supported');
                }
                // console.log(query);
                // console.log('\n');
                query.text = replaceQueryArgs$(query.text, query.values);
                return query;
            }
        }
        return {
            Pool: MemPg,
            Client: MemPg,
        };
    }
    /**
     * @deprecated Use `createTypeormDataSource` instead.
     */
    createTypeormConnection(postgresOptions, queryLatency) {
        var _a;
        const that = this;
        postgresOptions.postgres = that.createPg(queryLatency);
        if ((postgresOptions === null || postgresOptions === void 0 ? void 0 : postgresOptions.type) !== 'postgres') {
            throw new interfaces_1.NotSupported((_a = 'Only postgres supported, found ' + (postgresOptions === null || postgresOptions === void 0 ? void 0 : postgresOptions.type)) !== null && _a !== void 0 ? _a : '<null>');
        }
        const { getConnectionManager } = require('typeorm');
        const created = getConnectionManager().create(postgresOptions);
        created.driver.postgres = that.createPg(queryLatency);
        return created.connect();
    }
    createTypeormDataSource(postgresOptions, queryLatency) {
        var _a;
        const that = this;
        postgresOptions.postgres = that.createPg(queryLatency);
        if ((postgresOptions === null || postgresOptions === void 0 ? void 0 : postgresOptions.type) !== 'postgres') {
            throw new interfaces_1.NotSupported((_a = 'Only postgres supported, found ' + (postgresOptions === null || postgresOptions === void 0 ? void 0 : postgresOptions.type)) !== null && _a !== void 0 ? _a : '<null>');
        }
        const { DataSource } = require('typeorm');
        const created = new DataSource(postgresOptions);
        created.driver.postgres = that.createPg(queryLatency);
        return created;
    }
    createSlonik(queryLatency) {
        const { createMockPool, createMockQueryResult } = require('slonik');
        return createMockPool({
            query: async (sql, args) => {
                await delay(queryLatency !== null && queryLatency !== void 0 ? queryLatency : 0);
                const formatted = replaceQueryArgs$(sql, args);
                const ret = this.db.public.many(formatted);
                return createMockQueryResult(ret);
            },
        });
    }
    createPgPromise(queryLatency) {
        // https://vitaly-t.github.io/pg-promise/module-pg-promise.html
        // https://github.com/vitaly-t/pg-promise/issues/743#issuecomment-756110347
        const pgp = require('pg-promise')();
        pgp.pg = this.createPg(queryLatency);
        const db = pgp('pg-mem');
        if ((0, utils_1.compareVersions)('10.8.7', db.$config.version) < 0) {
            throw new Error(`💀 pg-mem cannot be used with pg-promise@${db.$config.version},

       👉 you must install version pg-promise@10.8.7 or newer:

                npm i pg-promise@latest -S

            See https://github.com/vitaly-t/pg-promise/issues/743 for details`);
        }
        return db;
    }
    createPgNative(queryLatency) {
        queryLatency = queryLatency !== null && queryLatency !== void 0 ? queryLatency : 0;
        const prepared = new lru_cache_1.default({
            max: 1000,
            maxAge: 5000,
        });
        function handlerFor(a, b) {
            return typeof a === 'function' ? a : b;
        }
        const that = this;
        return class Client {
            async connect(a, b) {
                const handler = handlerFor(a, b);
                await delay(queryLatency);
                handler === null || handler === void 0 ? void 0 : handler();
            }
            connectSync() {
                // nop
            }
            async prepare(name, sql, npar, callback) {
                await delay(queryLatency);
                this.prepareSync(name, sql, npar);
                callback();
            }
            prepareSync(name, sql, npar) {
                prepared.set(name, sql);
            }
            async execute(name, a, b) {
                const handler = handlerFor(a, b);
                const pars = Array.isArray(a) ? a : [];
                await delay(queryLatency);
                try {
                    const rows = this.executeSync(name, pars);
                    handler(null, rows);
                }
                catch (e) {
                    handler(e);
                }
            }
            executeSync(name, pars) {
                pars = Array.isArray(pars) ? pars : [];
                const prep = prepared.get(name);
                if (!prep) {
                    throw new Error('Unkown prepared statement ' + name);
                }
                return this.querySync(prep, pars);
            }
            async query(sql, b, c) {
                const handler = handlerFor(b, c);
                const params = Array.isArray(b) ? b : [];
                try {
                    await delay(queryLatency);
                    const result = this.querySync(sql, params);
                    handler(null, result);
                }
                catch (e) {
                    handler === null || handler === void 0 ? void 0 : handler(e);
                }
            }
            querySync(sql, params) {
                sql = replaceQueryArgs$(sql, params);
                const ret = that.db.public.many(sql);
                return ret;
            }
        };
    }
    createKnex(queryLatency, knexConfig) {
        const knex = require('knex')({
            connection: {},
            ...knexConfig,
            client: 'pg',
        });
        knex.client.driver = this.createPg(queryLatency);
        knex.client.version = 'pg-mem';
        return knex;
    }
    async createMikroOrm(mikroOrmOptions, queryLatency) {
        const { MikroORM } = require('@mikro-orm/core');
        const { AbstractSqlDriver, PostgreSqlConnection, PostgreSqlPlatform } = require('@mikro-orm/postgresql');
        const that = this;
        // see https://github.com/mikro-orm/mikro-orm/blob/aa71065d0727920db7da9bfdecdb33e6b8165cb5/packages/postgresql/src/PostgreSqlConnection.ts#L5
        class PgMemConnection extends PostgreSqlConnection {
            createKnexClient(type) {
                return that.createKnex();
            }
        }
        // see https://github.com/mikro-orm/mikro-orm/blob/master/packages/postgresql/src/PostgreSqlDriver.ts
        class PgMemDriver extends AbstractSqlDriver {
            constructor(config) {
                super(config, new PostgreSqlPlatform(), PgMemConnection, ['knex', 'pg']);
            }
        }
        // hack: this query is not supported by pgsql-ast-parser
        if (!this._mikroPatched) {
            this.db.public.interceptQueries(q => {
                if (q === `set names 'utf8';`) {
                    return [];
                }
                return null;
            });
            this._mikroPatched = true;
        }
        const orm = await MikroORM.init({
            ...mikroOrmOptions,
            dbName: 'public',
            driver: PgMemDriver,
        });
        return orm;
    }
}
exports.Adapters = Adapters;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ====== ALMOST A COPY-PASTE OF https://github.com/brianc/node-postgres/blob/4b229275cfe41ca17b7d69bd39f91ada0068a5d0/packages/pg/lib/utils.js#L71-L82
//   see https://github.com/oguimbal/pg-mem/issues/181
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeQueryConfig = exports.toLiteral = void 0;
const utils_1 = __webpack_require__(1);
const buffer_node_1 = __webpack_require__(21);
const pg_escape_1 = __webpack_require__(30);
const json_stable_stringify_1 = __importDefault(__webpack_require__(28));
function toLiteral(val) {
    return prepareValue(val);
}
exports.toLiteral = toLiteral;
// converts values from javascript types
// to their 'raw' counterparts for use as a postgres parameter
// note: you can override this function to provide your own conversion mechanism
// for complex types, etc...
var prepareValue = function (val, seen) {
    // null and undefined are both null for postgres
    if ((0, utils_1.nullIsh)(val)) {
        return 'null';
    }
    if ((0, buffer_node_1.isBuf)(val)) {
        return (0, pg_escape_1.literal)((0, buffer_node_1.bufToString)(val));
    }
    if (val instanceof Date) {
        // if (defaults.parseInputDatesAsUTC) {
        //   return dateToStringUTC(val)
        // } else {
        return (0, pg_escape_1.literal)(dateToString(val));
        // }
    }
    if (Array.isArray(val)) {
        if (val.length === 0)
            return `'{}'`;
        return `ARRAY[${val.map(x => toLiteral(x)).join(', ')}]`;
    }
    if (typeof val === 'object') {
        return prepareObject(val, seen);
    }
    return (0, pg_escape_1.literal)(val.toString());
};
function prepareObject(val, seen) {
    if (val && typeof val.toPostgres === 'function') {
        seen = seen || [];
        if (seen.indexOf(val) !== -1) {
            throw new Error('circular reference detected while preparing "' + val + '" for query');
        }
        seen.push(val);
        return prepareValue(val.toPostgres(prepareValue), seen);
    }
    return (0, pg_escape_1.literal)((0, json_stable_stringify_1.default)(val));
}
function pad(number, digits) {
    number = '' + number;
    while (number.length < digits) {
        number = '0' + number;
    }
    return number;
}
function dateToString(date) {
    var offset = -date.getTimezoneOffset();
    var year = date.getFullYear();
    var isBCYear = year < 1;
    if (isBCYear)
        year = Math.abs(year) + 1; // negative years are 1 off their BC representation
    var ret = pad(year, 4) +
        '-' +
        pad(date.getMonth() + 1, 2) +
        '-' +
        pad(date.getDate(), 2) +
        'T' +
        pad(date.getHours(), 2) +
        ':' +
        pad(date.getMinutes(), 2) +
        ':' +
        pad(date.getSeconds(), 2) +
        '.' +
        pad(date.getMilliseconds(), 3);
    if (offset < 0) {
        ret += '-';
        offset *= -1;
    }
    else {
        ret += '+';
    }
    ret += pad(Math.floor(offset / 60), 2) + ':' + pad(offset % 60, 2);
    if (isBCYear)
        ret += ' BC';
    return ret;
}
function dateToStringUTC(date) {
    var year = date.getUTCFullYear();
    var isBCYear = year < 1;
    if (isBCYear)
        year = Math.abs(year) + 1; // negative years are 1 off their BC representation
    var ret = pad(year, 4) +
        '-' +
        pad(date.getUTCMonth() + 1, 2) +
        '-' +
        pad(date.getUTCDate(), 2) +
        'T' +
        pad(date.getUTCHours(), 2) +
        ':' +
        pad(date.getUTCMinutes(), 2) +
        ':' +
        pad(date.getUTCSeconds(), 2) +
        '.' +
        pad(date.getUTCMilliseconds(), 3);
    ret += '+00:00';
    if (isBCYear)
        ret += ' BC';
    return ret;
}
function normalizeQueryConfig(config, values, callback) {
    // can take in strings or config objects
    config = typeof config === 'string' ? { text: config } : config;
    if (values) {
        if (typeof values === 'function') {
            config.callback = values;
        }
        else {
            config.values = values;
        }
    }
    if (callback) {
        config.callback = callback;
    }
    return config;
}
exports.normalizeQueryConfig = normalizeQueryConfig;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const immutable_1 = __webpack_require__(16);
const interfaces_1 = __webpack_require__(2);
class Transaction {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
        this.transientData = {};
        this.origData = data;
    }
    static root() {
        return new Transaction(null, (0, immutable_1.Map)());
    }
    get isChild() {
        return !!this.parent;
    }
    clone() {
        return new Transaction(null, this.data);
    }
    fork() {
        return new Transaction(this, this.data);
    }
    commit() {
        if (!this.parent) {
            return this;
        }
        if (this.parent.data !== this.origData) {
            throw new interfaces_1.NotSupported('Concurrent transactions');
        }
        this.parent.data = this.data;
        return this.parent;
    }
    delete(identity) {
        this.data = this.data.delete(identity);
    }
    set(identity, data) {
        this.data = this.data.set(identity, data);
        return data;
    }
    get(identity) {
        return this.data.get(identity);
    }
    getMap(identity) {
        let got = this.data.get(identity);
        if (!got) {
            this.data = this.data.set(identity, got = (0, immutable_1.Map)());
        }
        return got;
    }
    getSet(identity) {
        let got = this.data.get(identity);
        if (!got) {
            this.data = this.data.set(identity, got = (0, immutable_1.Set)());
        }
        return got;
    }
    fullCommit() {
        const ret = this.commit();
        return ret.isChild
            ? ret.fullCommit()
            : ret;
    }
    rollback() {
        var _a;
        return (_a = this.parent) !== null && _a !== void 0 ? _a : this;
    }
    setTransient(identity, data) {
        this.transientData[identity] = data;
        return data;
    }
    /** Set transient data, which will only exist within the scope of the current statement */
    getTransient(identity) {
        return this.transientData[identity];
    }
    clearTransientData() {
        this.transientData = {};
    }
}
exports.Transaction = Transaction;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLimit = void 0;
const transform_base_1 = __webpack_require__(5);
const expression_builder_1 = __webpack_require__(6);
const context_1 = __webpack_require__(4);
function buildLimit(on, limit) {
    return (0, context_1.withSelection)(on, () => {
        const l = limit.limit && (0, expression_builder_1.buildValue)(limit.limit);
        const o = limit.offset && (0, expression_builder_1.buildValue)(limit.offset);
        return new LimitFilter(on, l, o);
    });
}
exports.buildLimit = buildLimit;
class LimitFilter extends transform_base_1.FilterBase {
    constructor(selection, take, skip) {
        super(selection);
        this.selection = selection;
        this.take = take;
        this.skip = skip;
    }
    get index() {
        return null;
    }
    entropy(t) {
        return this.selection.entropy(t);
    }
    hasItem(raw, t) {
        return this.base.hasItem(raw, t);
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        var _a, _b, _c, _d;
        let skip = (_b = (_a = this.skip) === null || _a === void 0 ? void 0 : _a.get(null, t)) !== null && _b !== void 0 ? _b : 0;
        let take = (_d = (_c = this.take) === null || _c === void 0 ? void 0 : _c.get(null, t)) !== null && _d !== void 0 ? _d : Number.MAX_SAFE_INTEGER;
        if (take <= 0) {
            return;
        }
        for (const raw of this.selection.enumerate(t)) {
            if (skip > 0) {
                skip--;
                continue;
            }
            yield raw;
            take--;
            if (!take) {
                return;
            }
        }
    }
    explain(e) {
        var _a, _b;
        return {
            id: e.idFor(this),
            _: 'limit',
            take: (_a = this.take) === null || _a === void 0 ? void 0 : _a.explain(e),
            skip: (_b = this.skip) === null || _b === void 0 ? void 0 : _b.explain(e),
            on: this.selection.explain(e),
        };
    }
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUnion = void 0;
const interfaces_private_1 = __webpack_require__(0);
const transform_base_1 = __webpack_require__(5);
const interfaces_1 = __webpack_require__(2);
const selection_1 = __webpack_require__(11);
const datatypes_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(1);
// https://www.postgresql.org/docs/current/typeconv-union-case.html
function buildUnion(left, right) {
    var _a;
    if (left.columns.length !== right.columns.length) {
        throw new interfaces_1.QueryError('each UNION query must have the same number of columns');
    }
    const cols = Array(left.columns.length);
    for (let i = 0; i < left.columns.length; i++) {
        const l = left.columns[i];
        const r = right.columns[i];
        const type = (0, datatypes_1.reconciliateTypes)([l, r], true);
        if (!type) {
            throw new interfaces_1.QueryError(`UNION types ${l.type.name} and ${r.type.name} cannot be matched`);
        }
        cols[i] = {
            name: (_a = l.id) !== null && _a !== void 0 ? _a : ('column' + i),
            type,
            lval: l.cast(type),
            rval: r.cast(type),
        };
    }
    return new Union(cols, left, right);
}
exports.buildUnion = buildUnion;
class Union extends transform_base_1.DataSourceBase {
    constructor(cols, left, right) {
        super(left.ownerSchema);
        this.cols = cols;
        this.left = left;
        this.right = right;
        this.colsByName = new Map();
        this.columns = cols.map(x => (0, selection_1.columnEvaluator)(this, x.name, x.type));
        for (const c of this.columns) {
            this.colsByName.set(c.id, c);
        }
    }
    get isExecutionWithNoResult() {
        return false;
    }
    isAggregation() {
        return false;
    }
    entropy(t) {
        return this.left.entropy(t) + this.right.entropy(t);
    }
    hasItem(raw, t) {
        return this.left.hasItem(raw, t) || this.right.hasItem(raw, t);
    }
    stats(t) {
        return null;
    }
    *enumerate(t) {
        for (const raw of this.left.enumerate(t)) {
            const ret = {};
            (0, interfaces_private_1.setId)(ret, (0, interfaces_private_1.getId)(raw));
            for (const c of this.cols) {
                ret[c.name] = c.lval.get(raw, t);
            }
            yield ret;
        }
        for (const raw of this.right.enumerate(t)) {
            const ret = {};
            (0, interfaces_private_1.setId)(ret, (0, interfaces_private_1.getId)(raw));
            for (const c of this.cols) {
                ret[c.name] = c.rval.get(raw, t);
            }
            yield ret;
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'union',
            union: [this.left.explain(e),
                this.right.explain(e)],
        };
    }
    getColumn(column, nullIfNotFound) {
        return (0, utils_1.colByName)(this.colsByName, column, nullIfNotFound);
    }
    getIndex(...forValue) {
        // todo use indices on unions
        return null;
    }
    isOriginOf(a) {
        return a.origin === this || this.left.isOriginOf(a);
    }
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDistinct = void 0;
const expression_builder_1 = __webpack_require__(6);
const transform_base_1 = __webpack_require__(5);
const object_hash_1 = __importDefault(__webpack_require__(15));
const context_1 = __webpack_require__(4);
function buildDistinct(on, exprs) {
    return (0, context_1.withSelection)(on, () => {
        const vals = exprs && exprs.length > 0
            ? exprs.map(v => (0, expression_builder_1.buildValue)(v))
            : on.columns;
        return new Distinct(on, vals);
    });
}
exports.buildDistinct = buildDistinct;
// todo: use indices to optimize this (avoid iterating everything)
class Distinct extends transform_base_1.FilterBase {
    constructor(selection, exprs) {
        super(selection);
        this.exprs = exprs;
    }
    get index() {
        return null;
    }
    entropy(t) {
        // cant foresight how many items will be filtered
        //  => just asumme nothing will be.
        return this.base.entropy(t);
    }
    hasItem(raw, t) {
        return this.base.hasItem(raw, t);
    }
    stats(t) {
        return this.base.stats(t);
    }
    *enumerate(t) {
        const got = new Set();
        for (const i of this.base.enumerate(t)) {
            const vals = this.exprs.map(v => v.type.hash(v.get(i, t)));
            const hash = vals.length === 1 ? vals[0] : (0, object_hash_1.default)(vals);
            if (got.has(hash)) {
                continue;
            }
            got.add(hash);
            yield i;
        }
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'distinct',
            of: this.base.explain(e),
        };
    }
}


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOrderBy = void 0;
const transform_base_1 = __webpack_require__(5);
const expression_builder_1 = __webpack_require__(6);
const utils_1 = __webpack_require__(1);
const context_1 = __webpack_require__(4);
function buildOrderBy(on, order) {
    return new OrderBy(on, order);
}
exports.buildOrderBy = buildOrderBy;
class OrderBy extends transform_base_1.FilterBase {
    constructor(selection, order) {
        super(selection);
        this.selection = selection;
        this.order = (0, context_1.withSelection)(selection, () => order.map(x => {
            var _a;
            return ({
                by: (0, expression_builder_1.buildValue)(x.by),
                order: (_a = x.order) !== null && _a !== void 0 ? _a : 'ASC',
                nullsLast: x.nulls === 'LAST',
            });
        }));
    }
    get index() {
        return null;
    }
    isAggregation() {
        return this.selection.isAggregation();
    }
    getAggregation(name, call) {
        return this.asAggreg.getAggregation(name, call);
    }
    checkIfIsKey(got) {
        return this.asAggreg.checkIfIsKey(got);
    }
    get asAggreg() {
        if (!this.selection.isAggregation()) {
            throw new Error('Not an aggregation');
        }
        return this.selection;
    }
    entropy(t) {
        const ret = this.selection.entropy(t);
        // sort algorithm is n*log(n)
        return ret * Math.log(ret + 1);
    }
    hasItem(raw, t) {
        return this.base.hasItem(raw, t);
    }
    stats(t) {
        return this.base.stats(t);
    }
    getIndex(...forValue) {
        // same index as underlying selection, given that ordering does not modify indices.
        return this.base.getIndex(...forValue);
    }
    enumerate(t) {
        const all = [...this.base.enumerate(t)];
        all.sort((a, b) => {
            for (const o of this.order) {
                const aval = o.by.get(a, t);
                const bval = o.by.get(b, t);
                const na = (0, utils_1.nullIsh)(aval);
                const nb = (0, utils_1.nullIsh)(bval);
                if (na && nb) {
                    continue;
                }
                if (na || nb) {
                    return (o.order === 'ASC') === (nb === o.nullsLast) ? 1 : -1;
                }
                if (o.by.type.equals(aval, bval)) {
                    continue;
                }
                if (o.by.type.gt(aval, bval)) {
                    return o.order === 'ASC' ? 1 : -1;
                }
                return o.order === 'ASC' ? -1 : 1;
            }
            return 0;
        });
        return all;
    }
    explain(e) {
        return {
            id: e.idFor(this),
            _: 'orderBy',
            of: this.selection.explain(e),
        };
    }
}


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPgCatalog = void 0;
const datatypes_1 = __webpack_require__(3);
const interfaces_private_1 = __webpack_require__(0);
const pg_attribute_list_1 = __webpack_require__(108);
const pg_class_1 = __webpack_require__(109);
const pg_constraints_list_1 = __webpack_require__(110);
const pg_index_list_1 = __webpack_require__(111);
const pg_namespace_list_1 = __webpack_require__(112);
const pg_type_list_1 = __webpack_require__(113);
const functions_1 = __webpack_require__(114);
const pg_range_1 = __webpack_require__(119);
const expression_builder_1 = __webpack_require__(6);
const pg_database_1 = __webpack_require__(120);
const binary_operators_1 = __webpack_require__(121);
const sql_function_language_1 = __webpack_require__(122);
function setupPgCatalog(db) {
    const catalog = db.createSchema('pg_catalog');
    catalog._registerType(datatypes_1.Types.bool)
        ._registerType(datatypes_1.Types.citext)
        ._registerTypeSizeable(interfaces_private_1.DataType.timestamp, datatypes_1.Types.timestamp)
        ._registerTypeSizeable(interfaces_private_1.DataType.timestamptz, datatypes_1.Types.timestamptz)
        ._registerType(datatypes_1.Types.uuid)
        ._registerType(datatypes_1.Types.date)
        ._registerType(datatypes_1.Types.time)
        ._registerType(datatypes_1.Types.timetz)
        ._registerType(datatypes_1.Types.jsonb)
        ._registerType(datatypes_1.Types.regtype)
        ._registerType(datatypes_1.Types.regclass)
        ._registerType(datatypes_1.Types.json)
        ._registerType(datatypes_1.Types.null)
        ._registerType(datatypes_1.Types.float)
        ._registerType(datatypes_1.Types.integer)
        ._registerType(datatypes_1.Types.bigint)
        ._registerType(datatypes_1.Types.bytea)
        ._registerType(datatypes_1.Types.point)
        ._registerType(datatypes_1.Types.line)
        ._registerType(datatypes_1.Types.lseg)
        ._registerType(datatypes_1.Types.box)
        ._registerType(datatypes_1.Types.path)
        ._registerType(datatypes_1.Types.polygon)
        ._registerType(datatypes_1.Types.circle)
        ._registerType(datatypes_1.Types.interval)
        ._registerType(datatypes_1.Types.inet)
        ._registerType(datatypes_1.Types.record([])) // hack to support functions with record input (see row_to_json UT)
        ._registerTypeSizeable(interfaces_private_1.DataType.text, datatypes_1.Types.text);
    new pg_constraints_list_1.PgConstraintTable(catalog).register();
    new pg_class_1.PgClassListTable(catalog).register();
    new pg_namespace_list_1.PgNamespaceTable(catalog).register();
    new pg_attribute_list_1.PgAttributeTable(catalog).register();
    new pg_index_list_1.PgIndexTable(catalog).register();
    new pg_type_list_1.PgTypeTable(catalog).register();
    new pg_range_1.PgRange(catalog).register();
    new pg_database_1.PgDatabaseTable(catalog).register();
    // this is an ugly hack...
    const tbl = catalog.declareTable({
        name: 'current_schema',
        fields: [
            { name: 'current_schema', type: datatypes_1.Types.text() },
        ]
    }, true);
    tbl.insert({ current_schema: 'public' });
    tbl.setHidden().setReadonly();
    addFns(catalog, functions_1.allFunctions);
    catalog.registerFunction({
        name: 'set_config',
        args: [datatypes_1.Types.text(), datatypes_1.Types.text(), datatypes_1.Types.bool],
        returns: datatypes_1.Types.text(),
        impure: true,
        implementation: (cfg, val, is_local) => {
            // todo - implement this... used to override search_path in dumps.
            //       => have a dynamic search_path.
            //       => not trivial du to the "is_local" arg
            //  https://www.postgresql.org/docs/9.3/functions-admin.html
            return val;
        }
    });
    catalog.registerFunction({
        name: 'substring',
        args: [datatypes_1.Types.text(), datatypes_1.Types.integer],
        returns: datatypes_1.Types.text(),
        implementation: expression_builder_1.sqlSubstring,
    });
    catalog.registerFunction({
        name: 'substring',
        args: [datatypes_1.Types.text(), datatypes_1.Types.integer, datatypes_1.Types.integer],
        returns: datatypes_1.Types.text(),
        implementation: expression_builder_1.sqlSubstring,
    });
    catalog.registerFunction({
        // required for Sequelize introspection
        name: 'pg_get_indexdef',
        args: [datatypes_1.Types.integer],
        returns: datatypes_1.Types.text(),
        implementation: (indexId) => {
            throw new Error('This stub implementation of "pg_get_indexdef" should not be called');
        },
    });
    db.getSchema('pg_catalog').registerFunction({
        name: 'col_description',
        args: [interfaces_private_1.DataType.integer, interfaces_private_1.DataType.integer],
        returns: interfaces_private_1.DataType.text,
        implementation: x => 'Fake description provided by pg-mem',
    });
    (0, binary_operators_1.registerCommonOperators)(catalog);
    (0, sql_function_language_1.registerSqlFunctionLanguage)(db);
    catalog.setReadonly();
}
exports.setupPgCatalog = setupPgCatalog;
function addFns(catalog, fns) {
    for (const f of fns) {
        catalog.registerFunction(f);
    }
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgAttributeTable = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
class PgAttributeTable extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_attribute',
            fields: [
                { name: 'attrelid', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'attname', type: datatypes_1.Types.text() },
                { name: 'atttypid', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'attstattarget', type: datatypes_1.Types.integer },
                { name: 'attlen', type: datatypes_1.Types.integer },
                { name: 'attnum', type: datatypes_1.Types.integer },
                { name: 'attndims', type: datatypes_1.Types.integer },
                { name: 'attcacheoff', type: datatypes_1.Types.integer },
                { name: 'atttypmod', type: datatypes_1.Types.integer },
                { name: 'attbyval', type: datatypes_1.Types.bool },
                { name: 'attstorage', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'attalign', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'attnotnull', type: datatypes_1.Types.bool },
                { name: 'atthasdef', type: datatypes_1.Types.bool },
                { name: 'atthasmissing', type: datatypes_1.Types.bool },
                { name: 'attidntity', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'attisdropped', type: datatypes_1.Types.bool },
                { name: 'attislocal', type: datatypes_1.Types.bool },
                { name: 'attinhcount', type: datatypes_1.Types.integer },
                { name: 'attcollation', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'attacl', type: datatypes_1.Types.jsonb } // aclitem[]
                ,
                { name: 'attoptions', type: datatypes_1.Types.text().asArray() },
                { name: 'attfdwoptions', type: datatypes_1.Types.text().asArray() },
                { name: 'attmissingval', type: datatypes_1.Types.jsonb } // anyarray
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
    }
    hasItem(value) {
        return false;
    }
    getIndex(forValue) {
        return null;
    }
}
exports.PgAttributeTable = PgAttributeTable;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgClassListTable = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
// https://www.postgresql.org/docs/12/catalog-pg-class.html
const IS_SCHEMA = Symbol('_is_pg_classlist');
class PgClassListTable extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_class',
            fields: [
                { name: 'oid', type: datatypes_1.Types.integer } // hidden oid column
                ,
                { name: 'relname', type: datatypes_1.Types.text() },
                { name: 'relnamespace', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'reltype', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'reloftype', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'relowner', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'relam', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'relfilenode', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'reltablespace', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'relpages', type: datatypes_1.Types.integer },
                { name: 'reltyples', type: datatypes_1.Types.integer },
                { name: 'relallvisible', type: datatypes_1.Types.integer },
                { name: 'reltoastrelid', type: datatypes_1.Types.integer },
                { name: 'relhashindex', type: datatypes_1.Types.bool },
                { name: 'relisshared', type: datatypes_1.Types.bool },
                { name: 'relpersistence', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'relkind', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'relnatts', type: datatypes_1.Types.integer },
                { name: 'relchecks', type: datatypes_1.Types.integer },
                { name: 'relhasoids', type: datatypes_1.Types.bool },
                { name: 'relhasrules', type: datatypes_1.Types.bool },
                { name: 'relhastriggers', type: datatypes_1.Types.bool },
                { name: 'relhassubclass', type: datatypes_1.Types.bool },
                { name: 'relrowsecurity', type: datatypes_1.Types.bool },
                { name: 'relforcerowsecurity', type: datatypes_1.Types.bool },
                { name: 'relispopulated', type: datatypes_1.Types.bool },
                { name: 'relreplident', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'relispartition', type: datatypes_1.Types.bool },
                { name: 'relrewrite', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'relfrozenxid', type: datatypes_1.Types.integer } // xid
                ,
                { name: 'relminmxid', type: datatypes_1.Types.integer } // xid
                ,
                { name: 'relacl', type: datatypes_1.Types.text() } // alitem[]
                ,
                { name: 'reloptions', type: datatypes_1.Types.text().asArray() } // text[]
                ,
                { name: 'relpartbound', type: datatypes_1.Types.jsonb } // pg_nod_tr
            ]
        };
    }
    get ownSymbol() {
        return IS_SCHEMA;
    }
    // private indexes: { [key: string]: _IIndex } = {
    //     'oid': new CustomIndex(this, {
    //         get size() {
    //             return this.size
    //         },
    //         column: this.selection.getColumn('oid'),
    //         byColumnValue: (oid: string, t: _Transaction) => {
    //             return [this.byOid(oid, t)]
    //         }
    //     }),
    //     'relname': new CustomIndex(this, {
    //         get size() {
    //             return this.size
    //         },
    //         column: this.selection.getColumn('relname'),
    //         byColumnValue: (oid: string, t: _Transaction) => {
    //             return [this.byRelName(oid, t)];
    //         }
    //     }),
    // }
    // private byOid(oid: string, t: _Transaction) {
    //     const { type, id } = parseOid(oid);
    //     switch (type) {
    //         case 'table':
    //             return this.makeTable(this.schema.getTable(id, true)!);
    //         case 'index':
    //             return null;
    //         // return this.makeTable(this.db.getIndex(id, true));
    //         default:
    //             throw NotSupported.never(type);
    //     }
    // }
    // private byRelName(name: string, t: _Transaction) {
    //     return this.schema.getTable(name, true);
    //     // ?? this.db.getIndex(name, true);
    // }
    entropy(t) {
        return 0;
    }
    *enumerate() {
        // for (const t of this.db.listTables()) {
        //     yield this.makeTable(t);
        // }
    }
    makeInedx(t) {
        if (!t) {
            return null;
        }
        // relkind , i = index, S = sequence, t = TOAST table, v = view, m = materialized view, c = composite type, f = foreign table, p = partitioned table, I = partitioned index
        throw new Error('todo');
    }
    makeTable(t) {
        if (!t) {
            return null;
        }
        throw new Error('todo');
        // const ret = {
        //     relname: t.name,
        //     relnamespace: t instanceof MemoryTable
        //         ? MAIN_NAMESPACE
        //         : SCHEMA_NAMESPACE,
        //     relkind: 'r', //  r = ordinary table
        //     [IS_SCHEMA]: true,
        // };
        // return setId(ret, '/schema/pg_class/table/' + t.name);
    }
    hasItem(value) {
        return !!(value === null || value === void 0 ? void 0 : value[IS_SCHEMA]);
    }
}
exports.PgClassListTable = PgClassListTable;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgConstraintTable = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatypes_1 = __webpack_require__(3);
const table_index_1 = __webpack_require__(27);
const readonly_table_1 = __webpack_require__(8);
const IS_SCHEMA = Symbol('_is_pgconstraint');
class PgConstraintTable extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_constraint',
            fields: [
                { name: 'oid', type: datatypes_1.Types.integer } // hidden oid column
                ,
                { name: 'conname', type: datatypes_1.Types.text() } // <== 'name' type
                ,
                { name: 'connamespace', type: datatypes_1.Types.integer } // <== 'oid' type
                ,
                { name: 'contype', type: datatypes_1.Types.text(1) } // <== 'char(1)' type
                ,
                { name: 'condeferrable', type: datatypes_1.Types.bool },
                { name: 'condeferred', type: datatypes_1.Types.bool },
                { name: 'convalidated', type: datatypes_1.Types.bool },
                { name: 'conrelid', type: datatypes_1.Types.integer } // <== oid
                ,
                { name: 'contypid', type: datatypes_1.Types.integer } // <== oid
                ,
                { name: 'conindid', type: datatypes_1.Types.integer } // <== oid
                ,
                { name: 'conparentid', type: datatypes_1.Types.integer } // <== oid
                ,
                { name: 'confrelid', type: datatypes_1.Types.integer } // <== oid
                ,
                { name: 'confupdtype', type: datatypes_1.Types.text(1) } // <== 'char(1)' type
                ,
                { name: 'confdeltype', type: datatypes_1.Types.text(1) } // <== 'char(1)' type
                ,
                { name: 'confmatchtype', type: datatypes_1.Types.text(1) } // <== 'char(1)' type
                ,
                { name: 'conislocal', type: datatypes_1.Types.bool },
                { name: 'coninhcount', type: datatypes_1.Types.integer },
                { name: 'connoinherit', type: datatypes_1.Types.bool },
                { name: 'conkey', type: datatypes_1.Types.integer.asArray() },
                { name: 'confkey', type: datatypes_1.Types.integer.asArray() },
                { name: 'conpfeqop', type: datatypes_1.Types.integer.asArray() } // <== oid[]
                ,
                { name: 'conppeqop', type: datatypes_1.Types.integer.asArray() } // <== oid[]
                ,
                { name: 'conffeqop', type: datatypes_1.Types.integer.asArray() } // <== oid[]
                ,
                { name: 'conexclop', type: datatypes_1.Types.integer.asArray() } // <== oid[]
                ,
                { name: 'conbin', type: datatypes_1.Types.text() } // <== weird type
                ,
                { name: 'consrc', type: datatypes_1.Types.text() }
            ]
        };
    }
    get ownSymbol() {
        return IS_SCHEMA;
    }
    entropy(t) {
        return this.db.listSchemas()
            .reduce((tot, s) => tot + s.tablesCount(t) * 10 * 3, 0);
    }
    *enumerate(t) {
        for (const schema of this.db.listSchemas()) {
            for (const it of schema.listTables(t)) {
                yield* this.itemsByTable(it, t);
            }
        }
    }
    make(table, i, t) {
        if (!t) {
            return null;
        }
        let ret = {};
        for (const { name } of this._schema.fields) {
            ret[name] = null;
        }
        ret = {
            ...ret,
            // table_catalog: 'pgmem',
            [IS_SCHEMA]: true,
        };
        (0, interfaces_private_1.setId)(ret, `/schema/${table.ownerSchema.name}/pg_constraint/${table.name}/${i}`);
        return ret;
    }
    hasItem(value) {
        return !!(value === null || value === void 0 ? void 0 : value[IS_SCHEMA]);
    }
    getIndex(forValue) {
        if (forValue.id === 'table_name') {
            return new table_index_1.TableIndex(this, forValue);
        }
        return null;
    }
}
exports.PgConstraintTable = PgConstraintTable;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgIndexTable = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
class PgIndexTable extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_index',
            fields: [
                { name: 'indexrelid', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'indrelid', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'indnatts', type: datatypes_1.Types.integer },
                { name: 'indnkyatts', type: datatypes_1.Types.integer },
                { name: 'indisunique', type: datatypes_1.Types.bool },
                { name: 'indisprimary', type: datatypes_1.Types.bool },
                { name: 'indisxclusion', type: datatypes_1.Types.bool },
                { name: 'indimmediate', type: datatypes_1.Types.bool },
                { name: 'indisclustered', type: datatypes_1.Types.bool },
                { name: 'indisvalid', type: datatypes_1.Types.bool },
                { name: 'indcheckxmin', type: datatypes_1.Types.bool },
                { name: 'indisready', type: datatypes_1.Types.bool },
                { name: 'indisliv', type: datatypes_1.Types.bool },
                { name: 'indisreplident', type: datatypes_1.Types.bool },
                { name: 'indkey', type: datatypes_1.Types.integer.asArray() } // int2vector
                ,
                { name: 'indcollation', type: datatypes_1.Types.integer.asArray() } // oidvector
                ,
                { name: 'indclass', type: datatypes_1.Types.integer.asArray() } // oidvector
                ,
                { name: 'indoption', type: datatypes_1.Types.integer.asArray() } // int2vector
                ,
                { name: 'indeexprs', type: datatypes_1.Types.jsonb } // pg_node_tree
                ,
                { name: 'indpred', type: datatypes_1.Types.jsonb } // pg_node_tree
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
    }
    hasItem(value) {
        return false;
    }
}
exports.PgIndexTable = PgIndexTable;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgNamespaceTable = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
class PgNamespaceTable extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_namespace',
            fields: [
                { name: 'oid', type: datatypes_1.Types.integer } // hidden oid column
                ,
                { name: 'nspname', type: datatypes_1.Types.text() },
                { name: 'nspowner', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'nspacl', type: datatypes_1.Types.jsonb } // aclitem[]
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
        // yield {
        //     oid: MAIN_NAMESPACE,
        //     nspname: 'public',
        //     nspowner: null,
        //     nspacl: null,
        // };
        // yield {
        //     oid: MAIN_NAMESPACE,
        //     nspname: 'public',
        //     nspowner: null,
        //     nspacl: null,
        // };
    }
    hasItem(value) {
        return false;
    }
}
exports.PgNamespaceTable = PgNamespaceTable;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgTypeTable = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
class PgTypeTable extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_type',
            fields: [
                { name: 'oid', type: datatypes_1.Types.integer } // hiddn oid column
                ,
                { name: 'typname', type: datatypes_1.Types.text() },
                { name: 'typnamespace', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'typowner', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'typlen', type: datatypes_1.Types.integer },
                { name: 'typbyval', type: datatypes_1.Types.bool },
                { name: 'typtype', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'typispreferred', type: datatypes_1.Types.bool },
                { name: 'typisdefined', type: datatypes_1.Types.bool },
                { name: 'typdlim', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'typrelid', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'typelem', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'typarray', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'typinput', type: datatypes_1.Types.text() } // regproc
                ,
                { name: 'typoutput', type: datatypes_1.Types.text() } // regproc
                ,
                { name: 'typreceive', type: datatypes_1.Types.text() } // regproc
                ,
                { name: 'typsend', type: datatypes_1.Types.text() } // regproc
                ,
                { name: 'typmodin', type: datatypes_1.Types.text() } // regproc
                ,
                { name: 'typmodout', type: datatypes_1.Types.text() } // regproc
                ,
                { name: 'typanalyze', type: datatypes_1.Types.text() } // regproc
                ,
                { name: 'typalign', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'typstorage', type: datatypes_1.Types.text(1) } // char(1)
                ,
                { name: 'typnotnull', type: datatypes_1.Types.bool },
                { name: 'typbasetype', type: datatypes_1.Types.integer } //oid
                ,
                { name: 'typtypmod', type: datatypes_1.Types.integer },
                { name: 'typndims', type: datatypes_1.Types.integer },
                { name: 'typcollation', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'typdfaultbin', type: datatypes_1.Types.text() } // pg_nod_tree
                ,
                { name: 'typdefault', type: datatypes_1.Types.text() },
                { name: 'typacl', type: datatypes_1.Types.jsonb }
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
    }
    hasItem(value) {
        return false;
    }
}
exports.PgTypeTable = PgTypeTable;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.allFunctions = void 0;
const string_1 = __webpack_require__(115);
const date_1 = __webpack_require__(116);
const system_1 = __webpack_require__(117);
const sequence_fns_1 = __webpack_require__(118);
exports.allFunctions = [
    ...string_1.stringFunctions,
    ...date_1.dateFunctions,
    ...system_1.systemFunctions,
    ...sequence_fns_1.sequenceFunctions
];


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stringFunctions = void 0;
const interfaces_private_1 = __webpack_require__(0);
exports.stringFunctions = [
    {
        name: 'lower',
        args: [interfaces_private_1.DataType.text],
        returns: interfaces_private_1.DataType.text,
        implementation: (x) => x === null || x === void 0 ? void 0 : x.toLowerCase(),
    },
    {
        name: 'upper',
        args: [interfaces_private_1.DataType.text],
        returns: interfaces_private_1.DataType.text,
        implementation: (x) => x === null || x === void 0 ? void 0 : x.toUpperCase(),
    },
    {
        name: 'concat',
        args: [interfaces_private_1.DataType.text],
        argsVariadic: interfaces_private_1.DataType.text,
        returns: interfaces_private_1.DataType.text,
        allowNullArguments: true,
        implementation: (...x) => x === null || x === void 0 ? void 0 : x.join(''),
    },
];


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFunctions = void 0;
const moment_1 = __importDefault(__webpack_require__(17));
const interfaces_private_1 = __webpack_require__(0);
const utils_1 = __webpack_require__(1);
exports.dateFunctions = [
    {
        name: 'to_date',
        args: [interfaces_private_1.DataType.text, interfaces_private_1.DataType.text],
        returns: interfaces_private_1.DataType.date,
        implementation: (data, format) => {
            if ((0, utils_1.nullIsh)(data) || (0, utils_1.nullIsh)(format)) {
                return null; // if one argument is null => null
            }
            const ret = moment_1.default.utc(data, format);
            if (!ret.isValid()) {
                throw new interfaces_private_1.QueryError(`The text '${data}' does not match the date format ${format}`);
            }
            return ret.toDate();
        }
    },
    {
        name: 'now',
        returns: interfaces_private_1.DataType.timestamptz,
        impure: true,
        implementation: () => new Date(),
    },
];


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.systemFunctions = void 0;
const datatypes_1 = __webpack_require__(3);
exports.systemFunctions = [
    {
        // ugly hack...
        name: 'current_schema',
        returns: datatypes_1.Types.text(),
        implementation: () => 'public',
    },
];


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceFunctions = void 0;
const utils_1 = __webpack_require__(1);
const datatypes_1 = __webpack_require__(3);
const interfaces_1 = __webpack_require__(2);
const interfaces_private_1 = __webpack_require__(0);
// https://www.postgresql.org/docs/8.1/functions-sequence.html
function getSeq(id) {
    const { transaction, schema } = (0, utils_1.executionCtx)();
    if (!transaction) {
        throw new interfaces_1.QueryError('cannot query sequence value in this context');
    }
    return {
        t: transaction,
        seq: (0, interfaces_private_1.asSeq)(schema.getObjectByRegOrName(id)),
    };
}
const lastVal = Symbol();
exports.sequenceFunctions = [
    {
        name: 'nextval',
        args: [datatypes_1.Types.regclass],
        returns: datatypes_1.Types.integer,
        implementation: (seqId) => {
            const { seq, t } = getSeq(seqId);
            const ret = seq.nextValue(t);
            t.set(lastVal, ret);
            return ret;
        },
        impure: true,
    },
    {
        name: 'currval',
        args: [datatypes_1.Types.regclass],
        returns: datatypes_1.Types.integer,
        implementation: (seqId) => {
            const { seq, t } = getSeq(seqId);
            return seq.currentValue(t);
        },
        impure: true,
    },
    {
        name: 'lastval',
        returns: datatypes_1.Types.integer,
        implementation: (seqId) => {
            const { transaction } = (0, utils_1.executionCtx)();
            if (!transaction) {
                throw new interfaces_1.QueryError('cannot query lastval in this context');
            }
            return transaction.get(lastVal);
        },
        impure: true,
    },
    {
        name: 'setval',
        args: [datatypes_1.Types.regclass, datatypes_1.Types.integer],
        returns: datatypes_1.Types.integer,
        implementation: (seqId, val) => {
            const { seq, t } = getSeq(seqId);
            if (typeof val !== 'number') {
                throw new interfaces_1.QueryError('Invalid setval() value');
            }
            seq.setValue(t, val);
            return val;
        },
        impure: true,
    },
];


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgRange = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
// https://www.postgresql.org/docs/13/catalog-pg-range.html
class PgRange extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_range',
            fields: [
                { name: 'rngtypid', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'rngsubtype', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'rngcollation', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'rngsubopc', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'rngcanonical', type: datatypes_1.Types.integer } // oid
                ,
                { name: 'rngsubdiff', type: datatypes_1.Types.integer } // oid
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
    }
    hasItem(value) {
        return false;
    }
}
exports.PgRange = PgRange;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PgDatabaseTable = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
// https://www.postgresql.org/docs/12/catalog-pg-class.html
const IS_SCHEMA = Symbol('_is_pg_database');
class PgDatabaseTable extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'pg_database',
            fields: [
                { name: 'oid', type: datatypes_1.Types.integer } // hidden oid column
                ,
                { name: 'datname', type: datatypes_1.Types.text() },
                { name: 'datdba', type: datatypes_1.Types.integer },
                { name: 'encoding', type: datatypes_1.Types.integer },
                { name: 'datcollate', type: datatypes_1.Types.text() },
                { name: 'datctype', type: datatypes_1.Types.text() },
                { name: 'datistemplate', type: datatypes_1.Types.bool },
                { name: 'datlowconn', type: datatypes_1.Types.bool },
                { name: 'datconlimit', type: datatypes_1.Types.integer },
                { name: 'datlastsysoid', type: datatypes_1.Types.integer },
                { name: 'datfrozenxid', type: datatypes_1.Types.integer },
                { name: 'datminmxid', type: datatypes_1.Types.integer },
                { name: 'dattablespace', type: datatypes_1.Types.integer },
                { name: 'datacl', type: datatypes_1.Types.jsonb }
            ]
        };
    }
    get ownSymbol() {
        return IS_SCHEMA;
    }
    entropy(t) {
        return this.db.listSchemas().length;
    }
    *enumerate() {
        // this is 💩, whaterver...
        let i = 48593;
        for (const t of this.db.listSchemas()) {
            const ret = {
                oid: ++i,
                datname: t.name,
                [IS_SCHEMA]: true,
            };
            yield (0, interfaces_private_1.setId)(ret, '/schema/pg_database/' + t.name);
        }
    }
    hasItem(value) {
        return !!(value === null || value === void 0 ? void 0 : value[IS_SCHEMA]);
    }
}
exports.PgDatabaseTable = PgDatabaseTable;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommonOperators = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatypes_1 = __webpack_require__(3);
const utils_1 = __webpack_require__(1);
const moment_1 = __importDefault(__webpack_require__(17));
function registerCommonOperators(schema) {
    registerNumericOperators(schema);
    registerDatetimeOperators(schema);
    registerJsonOperators(schema);
    registerTextOperators(schema);
}
exports.registerCommonOperators = registerCommonOperators;
function* numberPairs() {
    for (const a of datatypes_1.numbers) {
        for (const b of datatypes_1.numbers) {
            yield [a, b, datatypes_1.numberPriorities[a] < datatypes_1.numberPriorities[b] ? b : a];
        }
    }
}
function registerNumericOperators(schema) {
    // ======= "+ - * /" on numeric types =======
    for (const [left, right, returns] of numberPairs()) {
        schema.registerOperator({
            operator: '+',
            commutative: true,
            left,
            right,
            returns,
            implementation: (a, b) => a + b,
        });
    }
    for (const [left, right, returns] of numberPairs()) {
        schema.registerOperator({
            operator: '-',
            commutative: true,
            left,
            right,
            returns,
            implementation: (a, b) => a - b,
        });
    }
    for (const [left, right, returns] of numberPairs()) {
        schema.registerOperator({
            operator: '*',
            commutative: true,
            left,
            right,
            returns,
            implementation: (a, b) => a * b,
        });
    }
    for (const [left, right, returns] of numberPairs()) {
        schema.registerOperator({
            operator: '/',
            commutative: false,
            left,
            right,
            returns,
            implementation: (0, datatypes_1.isInteger)(returns)
                ? ((a, b) => Math.trunc(a / b))
                : ((a, b) => a / b),
        });
    }
}
function registerDatetimeOperators(schema) {
    // ======= date/time "+ -" timestamp =======
    for (const dt of datatypes_1.dateTypes) {
        for (const [operator, f] of [['+', 1], ['-', -1]]) {
            schema.registerOperator({
                operator,
                commutative: operator === '+',
                left: dt,
                right: datatypes_1.Types.interval,
                returns: dt,
                implementation: (a, b) => (0, moment_1.default)(a).add(f * (0, utils_1.intervalToSec)(b), 'seconds').toDate(),
            });
        }
    }
    // ==== date "+ -" integer  (add days.. only works on dates, not timestamps)
    for (const [operator, f] of [['+', 1], ['-', -1]]) {
        schema.registerOperator({
            operator,
            commutative: operator === '+',
            left: datatypes_1.Types.date,
            right: datatypes_1.Types.integer,
            returns: datatypes_1.Types.date,
            implementation: (a, b) => (0, moment_1.default)(a).add(f * b, 'days').toDate(),
        });
    }
}
function registerJsonOperators(schema) {
    // ======= "json @> json" query operator
    schema.registerOperator({
        operator: '@>',
        left: datatypes_1.Types.jsonb,
        right: datatypes_1.Types.jsonb,
        returns: datatypes_1.Types.bool,
        implementation: (a, b) => (0, utils_1.queryJson)(b, a),
    });
    // ======= "json - text" (remove key)
    schema.registerOperator({
        operator: '-',
        left: datatypes_1.Types.jsonb,
        right: datatypes_1.Types.text(),
        returns: datatypes_1.Types.jsonb,
        implementation: (a, b) => {
            if (Array.isArray(a)) {
                return a.filter(x => x !== b);
            }
            if (typeof a === 'object') {
                const ret = { ...a };
                delete ret[b];
                return ret;
            }
            throw new interfaces_private_1.QueryError('cannot delete from scalar', '22023');
        },
    });
    // ======= "json - int" (remove index)
    schema.registerOperator({
        operator: '-',
        left: datatypes_1.Types.jsonb,
        right: datatypes_1.Types.integer,
        returns: datatypes_1.Types.jsonb,
        implementation: (a, b) => {
            if (Array.isArray(a)) {
                const ret = [...a];
                ret.splice(b, 1);
                return ret;
            }
            if (typeof a === 'object') {
                throw new interfaces_private_1.QueryError('cannot delete from object using integer index', '22023');
            }
            throw new interfaces_private_1.QueryError('cannot delete from scalar', '22023');
        },
    });
}
function registerTextOperators(schema) {
    // ======== "text || text" (concat text operator)
    schema.registerOperator({
        operator: '||',
        left: datatypes_1.Types.text(),
        right: datatypes_1.Types.text(),
        returns: datatypes_1.Types.text(),
        implementation: (a, b) => a + b,
    });
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSqlFunctionLanguage = void 0;
const parse_cache_1 = __webpack_require__(26);
const interfaces_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(1);
const select_1 = __webpack_require__(13);
const context_1 = __webpack_require__(4);
const evaluator_1 = __webpack_require__(10);
const statement_exec_1 = __webpack_require__(32);
const datatypes_1 = __webpack_require__(3);
const t_record_1 = __webpack_require__(19);
let execId = 0;
function registerSqlFunctionLanguage(db) {
    db.registerLanguage('sql', ({ code, schema: _schema, args, returns: _returns }) => {
        const schema = _schema;
        const returns = _returns;
        // parse SQL
        const _parsed = (0, parse_cache_1.parseSql)(code);
        let parsed;
        if (Array.isArray(_parsed)) {
            if (_parsed.length !== 1) {
                throw new interfaces_1.QueryError(`Expected 1 statement in function, got ${_parsed.length}`);
            }
            parsed = _parsed[0];
        }
        else {
            parsed = _parsed;
        }
        switch (parsed.type) {
            case 'select':
            case 'union':
            case 'union all':
            case 'with':
            case 'with recursive':
            case 'values':
                break;
            default:
                throw new interfaces_1.NotSupported(`Unsupported statement type in function: ${parsed.type}`);
        }
        // build parameter list
        const parameterList = (0, evaluator_1.buildParameterList)('', args);
        // push and push parameters, and a new build context, to avoid leaking parent context in function body
        // ... then, visit & compile tree
        const statement = new statement_exec_1.StatementExec(schema, parsed, code);
        const executor = (0, context_1.withParameters)(parameterList, () => statement.compile());
        if (!(executor instanceof select_1.SelectExec)) {
            throw new interfaces_1.NotSupported(`Unsupported statement type in function: ${parsed.type}`);
        }
        // todo: prepare statement here, to avoid optimization on each call.
        // get the result transformer, based on the expected function output type
        let transformResult;
        if (!returns || returns.primary === interfaces_1.DataType.null) {
            // returns null
            transformResult = () => null;
        }
        else if (datatypes_1.ArrayType.matches(returns) && t_record_1.RecordType.matches(returns.of)) {
            // returns a table
            const transformItem = returns.of.transformItemFrom(executor.selection);
            if (!transformItem) {
                throw new interfaces_1.QueryError(`return type mismatch in function declared to return record`, '42P13');
            }
            transformResult = (v, t, eid) => v === null || v === void 0 ? void 0 : v.map(x => {
                return transformItem(x, t, eid);
            });
        }
        else {
            // returns a single value
            const cols = executor.selection.columns;
            if (cols.length !== 1 || !cols[0].type.canConvertImplicit(returns)) {
                throw new interfaces_1.QueryError(`return type mismatch in function declared to return ${returns.name}`, '42P13');
            }
            const col = cols[0].cast(returns);
            transformResult = (v, t) => v[0] ? col.get(v[0], t) : null;
        }
        // return compiled function
        const implem = (...args) => {
            const exec = (0, utils_1.hasExecutionCtx)() ?
                {
                    // if we have a parent execution context, use it.
                    // except for parameter values, that will be re-bound.
                    ...(0, utils_1.executionCtx)(),
                    parametersValues: args,
                } : {
                // else, create a brand new execution context.
                // that is used when a pure function is called with constant arguments:
                //  => function call will be reduced to a constant based on the
                //    db state at the time of the statement begining.
                schema,
                transaction: db.data,
                parametersValues: args,
            };
            const eid = 'fne' + execId++;
            // push a new execution context, to avoid leaking parent paramters in the function
            return (0, utils_1.pushExecutionCtx)(exec, () => {
                const ret = executor.execute(exec.transaction);
                return transformResult(ret.result.rows, exec.transaction, eid);
            });
        };
        // hack to tell the expression visitor that
        // (implem as any)[fnAsSelectionColumns] = executor.selection.columns;
        return implem;
    });
}
exports.registerSqlFunctionLanguage = registerSqlFunctionLanguage;
// export const fnAsSelectionColumns = Symbol('asSelection');


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInformationSchema = void 0;
const columns_list_1 = __webpack_require__(124);
const table_list_1 = __webpack_require__(125);
const table_constraints_1 = __webpack_require__(126);
const key_column_usage_1 = __webpack_require__(127);
const constraint_column_usage_1 = __webpack_require__(128);
function setupInformationSchema(db) {
    const schema = db.createSchema('information_schema');
    // SELECT * FROM "information_schema"."tables" WHERE ("table_schema" = 'public' AND "table_name" = 'user')
    new table_list_1.TablesSchema(schema).register();
    new columns_list_1.ColumnsListSchema(schema).register();
    new table_constraints_1.TableConstraints(schema).register();
    new key_column_usage_1.KeyColumnUsage(schema).register();
    new constraint_column_usage_1.ConstraintColumnUsage(schema).register();
    schema.setReadonly();
}
exports.setupInformationSchema = setupInformationSchema;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsListSchema = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatypes_1 = __webpack_require__(3);
const table_index_1 = __webpack_require__(27);
const readonly_table_1 = __webpack_require__(8);
const IS_SCHEMA = Symbol('_is_colmun');
class ColumnsListSchema extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'columns',
            fields: [
                { name: 'table_catalog', type: datatypes_1.Types.text() },
                { name: 'table_schema', type: datatypes_1.Types.text() },
                { name: 'table_name', type: datatypes_1.Types.text() },
                { name: 'column_name', type: datatypes_1.Types.text() },
                { name: 'ordinal_position', type: datatypes_1.Types.integer },
                { name: 'column_default', type: datatypes_1.Types.text() },
                { name: 'is_nullable', type: datatypes_1.Types.text(3) },
                { name: 'data_type', type: datatypes_1.Types.text() },
                { name: 'character_maximum_length', type: datatypes_1.Types.integer },
                { name: 'character_octet_length', type: datatypes_1.Types.integer },
                { name: 'numeric_precision', type: datatypes_1.Types.integer },
                { name: 'numeric_precision_radix', type: datatypes_1.Types.integer },
                { name: 'numeric_scale', type: datatypes_1.Types.integer },
                { name: 'datetime_precision', type: datatypes_1.Types.integer },
                { name: 'interval_type', type: datatypes_1.Types.text() },
                { name: 'interval_precision', type: datatypes_1.Types.integer },
                { name: 'character_set_catalog', type: datatypes_1.Types.text() },
                { name: 'character_set_schema', type: datatypes_1.Types.text() },
                { name: 'character_set_name', type: datatypes_1.Types.text() },
                { name: 'collation_catalog', type: datatypes_1.Types.text() },
                { name: 'collation_schema', type: datatypes_1.Types.text() },
                { name: 'collation_name', type: datatypes_1.Types.text() },
                { name: 'domain_catalog', type: datatypes_1.Types.text() },
                { name: 'domain_schema', type: datatypes_1.Types.text() },
                { name: 'domain_name', type: datatypes_1.Types.text() },
                { name: 'udt_catalog', type: datatypes_1.Types.text() } // <====
                ,
                { name: 'udt_schema', type: datatypes_1.Types.text() } // <====
                ,
                { name: 'udt_name', type: datatypes_1.Types.text() } // <====
                ,
                { name: 'scope_catalog', type: datatypes_1.Types.text() } // <====
                ,
                { name: 'scope_schema', type: datatypes_1.Types.text() } // <====
                ,
                { name: 'scope_name', type: datatypes_1.Types.text() } // <====
                ,
                { name: 'maximum_cardinality', type: datatypes_1.Types.integer } // <====
                ,
                { name: 'dtd_identifier', type: datatypes_1.Types.integer } // <=== INDEX
                ,
                { name: 'is_self_referencing', type: datatypes_1.Types.text(3) },
                { name: 'is_identity', type: datatypes_1.Types.text(3) } // <==
                ,
                { name: 'identity_generation', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'identity_start', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'identity_document', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'identity_increment', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'identity_maximum', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'identity_minimum', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'identity_cycle', type: datatypes_1.Types.text(3) } // <==
                ,
                { name: 'is_generated', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'generation_expression', type: datatypes_1.Types.text() } // <==
                ,
                { name: 'is_updatable', type: datatypes_1.Types.text(3) } // <==
            ]
        };
    }
    get ownSymbol() {
        return IS_SCHEMA;
    }
    entropy(t) {
        return this.db.listSchemas()
            .reduce((tot, s) => tot + s.tablesCount(t) * 10, 0);
    }
    *enumerate(t) {
        for (const s of this.db.listSchemas()) {
            for (const it of s.listTables(t)) {
                yield* this.itemsByTable(it, t);
            }
        }
    }
    make(table, i, t) {
        if (!t) {
            return null;
        }
        let ret = {};
        for (const { name } of this._schema.fields) {
            ret[name] = null;
        }
        ret = {
            ...ret,
            table_catalog: 'pgmem',
            table_schema: 'public',
            table_name: table.name,
            column_name: t.id,
            ordinal_position: i,
            is_nullable: 'NO',
            data_type: t.type.primary,
            numeric_precision: null,
            numeric_precision_radix: null,
            numeric_scale: null,
            udt_catalog: 'pgmem',
            udt_schema: 'pg_catalog',
            udt_name: t.type.primary,
            dtd_identifier: i,
            is_self_referencing: 'NO',
            is_identity: 'NO',
            is_updatable: 'YES',
            is_generated: 'NEVER',
            identity_cycle: 'NO',
            [IS_SCHEMA]: true,
        };
        (0, interfaces_private_1.setId)(ret, `/schema/${table.ownerSchema.name}/table/${table.name}/${i}`);
        return ret;
    }
    hasItem(value) {
        return !!(value === null || value === void 0 ? void 0 : value[IS_SCHEMA]);
    }
    getIndex(forValue) {
        if (forValue.id === 'table_name') {
            return new table_index_1.TableIndex(this, forValue);
        }
        return null;
    }
}
exports.ColumnsListSchema = ColumnsListSchema;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesSchema = void 0;
const interfaces_private_1 = __webpack_require__(0);
const datatypes_1 = __webpack_require__(3);
const table_index_1 = __webpack_require__(27);
const readonly_table_1 = __webpack_require__(8);
const IS_SCHEMA = Symbol('_is_schema');
class TablesSchema extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'tables',
            fields: [
                { name: 'table_catalog', type: datatypes_1.Types.text() },
                { name: 'table_schema', type: datatypes_1.Types.text() },
                { name: 'table_name', type: datatypes_1.Types.text() },
                { name: 'table_type', type: datatypes_1.Types.text() },
                { name: 'self_referencing_column_name', type: datatypes_1.Types.text() },
                { name: 'reference_generation', type: datatypes_1.Types.text() },
                { name: 'user_defined_type_catalog', type: datatypes_1.Types.text() },
                { name: 'user_defined_type_schema', type: datatypes_1.Types.text() },
                { name: 'user_defined_type_name', type: datatypes_1.Types.text() },
                { name: 'is_insertable_into', type: datatypes_1.Types.text(3) },
                { name: 'is_typed', type: datatypes_1.Types.text(3) },
                { name: 'commit_action', type: datatypes_1.Types.text() }
            ]
        };
    }
    get ownSymbol() {
        return IS_SCHEMA;
    }
    isOriginOf(v) {
        return v.origin === this || v.origin === this.selection;
    }
    entropy(t) {
        return this.db.listSchemas()
            .reduce((tot, s) => tot + s.tablesCount(t), 0);
    }
    *enumerate(t) {
        for (const s of this.db.listSchemas()) {
            for (const it of s.listTables(t)) {
                yield this.make(it);
            }
        }
    }
    make(t) {
        if (!t) {
            return null;
        }
        const ret = {
            table_catalog: 'pgmem',
            table_schema: 'public',
            table_name: t.name,
            table_type: 'BASE TABLE',
            self_referencing_column_name: null,
            reference_generation: null,
            user_defined_type_catalog: null,
            user_defined_type_schema: null,
            user_defined_type_name: null,
            is_insertable_into: 'YES',
            is_typed: 'NO',
            commit_action: null,
            [IS_SCHEMA]: true,
        };
        (0, interfaces_private_1.setId)(ret, '/schema/table/' + t.name);
        return ret;
    }
    hasItem(value) {
        return !!(value === null || value === void 0 ? void 0 : value[IS_SCHEMA]);
    }
    getIndex(forValue) {
        if ((forValue === null || forValue === void 0 ? void 0 : forValue.id) === 'table_name') {
            return new table_index_1.TableIndex(this, forValue);
        }
        return null;
    }
}
exports.TablesSchema = TablesSchema;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TableConstraints = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
// https://www.postgresql.org/docs/13/catalog-pg-range.html
class TableConstraints extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'table_constraints',
            fields: [
                { name: 'constraint_catalog', type: datatypes_1.Types.text() },
                { name: 'constraint_schema', type: datatypes_1.Types.text() },
                { name: 'constraint_name', type: datatypes_1.Types.text() },
                { name: 'table_catalog', type: datatypes_1.Types.text() },
                { name: 'table_schema', type: datatypes_1.Types.text() },
                { name: 'table_name', type: datatypes_1.Types.text() },
                { name: 'constraint_type', type: datatypes_1.Types.text() },
                { name: 'is_deferrable', type: datatypes_1.Types.bool },
                { name: 'initially_deferred', type: datatypes_1.Types.bool },
                { name: 'enforced', type: datatypes_1.Types.bool }
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
    }
    hasItem(value) {
        return false;
    }
}
exports.TableConstraints = TableConstraints;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyColumnUsage = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
class KeyColumnUsage extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'key_column_usage',
            fields: [
                { name: 'constraint_catalog', type: datatypes_1.Types.text() },
                { name: 'constraint_schema', type: datatypes_1.Types.text() },
                { name: 'constraint_name', type: datatypes_1.Types.text() },
                { name: 'table_catalog', type: datatypes_1.Types.text() },
                { name: 'table_schema', type: datatypes_1.Types.text() },
                { name: 'table_name', type: datatypes_1.Types.text() },
                { name: 'column_name', type: datatypes_1.Types.text() },
                { name: 'ordinal_position', type: datatypes_1.Types.integer },
                { name: 'position_in_unique_constraint', type: datatypes_1.Types.integer }
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
    }
    hasItem(value) {
        return false;
    }
}
exports.KeyColumnUsage = KeyColumnUsage;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintColumnUsage = void 0;
const datatypes_1 = __webpack_require__(3);
const readonly_table_1 = __webpack_require__(8);
class ConstraintColumnUsage extends readonly_table_1.ReadOnlyTable {
    constructor() {
        super(...arguments);
        this._schema = {
            name: 'constraint_column_usage',
            fields: [
                { name: 'constraint_catalog', type: datatypes_1.Types.text() },
                { name: 'constraint_schema', type: datatypes_1.Types.text() },
                { name: 'constraint_name', type: datatypes_1.Types.text() },
                { name: 'table_catalog', type: datatypes_1.Types.text() },
                { name: 'table_schema', type: datatypes_1.Types.text() },
                { name: 'table_name', type: datatypes_1.Types.text() },
                { name: 'column_name', type: datatypes_1.Types.text() }
            ]
        };
    }
    entropy() {
        return 0;
    }
    *enumerate() {
    }
    hasItem(value) {
        return false;
    }
}
exports.ConstraintColumnUsage = ConstraintColumnUsage;


/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map