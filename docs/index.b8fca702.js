// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7age3":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3cYfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _accordion = require("./accordion");
var _accordionDefault = parcelHelpers.interopDefault(_accordion);
var _allcities = require("./allcities");
var _allcitiesDefault = parcelHelpers.interopDefault(_allcities);
var _details = require("./details");
var _detailsDefault = parcelHelpers.interopDefault(_details);
var _createCard = require("./createCard");
var _createCardDefault = parcelHelpers.interopDefault(_createCard);
var _isNight = require("./isNight");
var _isNightDefault = parcelHelpers.interopDefault(_isNight);
const input = document.getElementById("search");
input.addEventListener("keyup", (event)=>{
    (0, _allcitiesDefault.default)(event.target.value);
    if (event.code === "Enter") (0, _detailsDefault.default)(event.target.value);
});
const button = document.getElementById("button");
button.addEventListener("click", ()=>{
    (0, _allcitiesDefault.default)(input.value);
    (0, _detailsDefault.default)(input.value);
});
const header = document.getElementById("header");
if ((0, _isNightDefault.default)()) {
    header.classList.add("header-night");
    button.style.backgroundColor = "#2a344b";
} else {
    header.style.backgroundImage = "../images/day.png";
    button.style.backgroundColor = "#90caf9";
}
let saved = localStorage.getItem("obj");
if (saved) {
    saved = JSON.parse(saved);
    saved.forEach((element)=>{
        (0, _createCardDefault.default)(element.name, element.lon, element.lat, element.country);
    });
}
const acc = document.getElementsByClassName("accordion");
(0, _accordionDefault.default)(acc, "active-arrow");
const fotterText = document.getElementById("footer-text");
fotterText.textContent = `Vlasiuk Anatolii - ${new Date().getFullYear()}`;

},{"./accordion":"67NUV","./allcities":"h10Bt","./details":"XRDfr","./createCard":"iFwQo","./isNight":"eJpkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67NUV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function accord(array, classActiveName) {
    for(let i = 0; i < array.length; i += 1)array[i].addEventListener("click", function accordion() {
        this.classList.toggle(`${classActiveName}`);
        const kind = this.classList[0].match(/answer\d/);
        const panel = document.getElementById(kind[0]);
        const section = document.getElementById(`question${kind[0][kind[0].length - 1]}`);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            section.style.boxShadow = "none";
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
            section.style.transitionDuration = ".5s";
            section.style.boxShadow = "0px -1px 62px -6px rgba(144,202,249,1)";
        }
    });
}
exports.default = accord;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h10Bt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createList = require("./createList");
var _createListDefault = parcelHelpers.interopDefault(_createList);
var _clear = require("./clear");
var _clearDefault = parcelHelpers.interopDefault(_clear);
var _api = require("./api");
function allCities(value) {
    (0, _api.getCities)(value).then((cityFromServer)=>{
        (0, _clearDefault.default)();
        if (cityFromServer.code === "400" || cityFromServer.count === 0) (0, _createListDefault.default)();
        else (0, _createListDefault.default)(cityFromServer.list);
    });
}
exports.default = allCities;

},{"./createList":"bhe4Q","./clear":"7igUK","./api":"kcudQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhe4Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCard = require("./createCard");
var _createCardDefault = parcelHelpers.interopDefault(_createCard);
var _fillwidget = require("./fillwidget");
var _fillwidgetDefault = parcelHelpers.interopDefault(_fillwidget);
var _clear = require("./clear");
var _clearDefault = parcelHelpers.interopDefault(_clear);
var _api = require("./api");
var _isNight = require("./isNight");
var _isNightDefault = parcelHelpers.interopDefault(_isNight);
function createListDropDown(listCities) {
    const listContainer = document.createElement("div");
    listContainer.classList.add("dropdown");
    const list = document.createElement("ul");
    list.setAttribute("id", "list");
    list.classList.add("dropdown__list");
    listContainer.appendChild(list);
    const label = document.getElementById("label-search");
    const parentDiv = label.parentNode;
    let item;
    if (listCities instanceof Array) listCities.forEach((element)=>{
        item = document.createElement("li");
        item.setAttribute("data", `${element.name} ${element.sys.country} ${element.id} ${element.coord.lon} ${element.coord.lat}`);
        list.appendChild(item);
        item.textContent = `${element.name}, ${element.sys.country}`;
        if ((0, _isNightDefault.default)()) item.classList.toggle("dropdown__item-night");
        else item.classList.toggle("dropdown__item");
        item.addEventListener("click", ()=>{
            (0, _api.getCurrentCity)(element.coord.lon, element.coord.lat).then((result)=>{
                if (result) (0, _fillwidgetDefault.default)(result);
            });
            (0, _clearDefault.default)();
            (0, _createCardDefault.default)(element.name, element.coord.lon, element.coord.lat, element.sys.country);
        });
    });
    else {
        item = document.createElement("li");
        list.appendChild(item);
        item.textContent = "City not found!";
        if ((0, _isNightDefault.default)()) item.classList.toggle("dropdown__item-night");
        else item.classList.toggle("dropdown__item");
        item.addEventListener("click", ()=>{
            (0, _clearDefault.default)();
        });
    }
    parentDiv.insertBefore(listContainer, label);
}
exports.default = createListDropDown;

},{"./createCard":"iFwQo","./fillwidget":"cqag3","./clear":"7igUK","./api":"kcudQ","./isNight":"eJpkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFwQo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fillwidget = require("./fillwidget");
var _fillwidgetDefault = parcelHelpers.interopDefault(_fillwidget);
var _api = require("./api");
var _isNight = require("./isNight");
var _isNightDefault = parcelHelpers.interopDefault(_isNight);
const arrayTemp = [];
function createCard(nameCity, lon, lat, country) {
    const objForSave = {
        name: nameCity,
        lon,
        lat,
        country
    };
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("card");
    imagesContainer.classList.add("cities__card");
    const imageButtonBox = document.createElement("div");
    imageButtonBox.classList.add("card__images");
    if ((0, _isNightDefault.default)()) imageButtonBox.style.backgroundColor = "#2a344b";
    else imageButtonBox.style.backgroundColor = "#90caf9";
    const cardButton = document.createElement("button");
    cardButton.classList.add("card__button");
    imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${objForSave.country})`;
    if (nameCity) cardButton.textContent = nameCity;
    imageButtonBox.appendChild(cardButton);
    imagesContainer.appendChild(imageButtonBox);
    cardButton.addEventListener("click", ()=>{
        (0, _api.getCurrentCity)(lon, lat).then((result)=>{
            (0, _fillwidgetDefault.default)(result);
            imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${result.sys.country})`;
            objForSave.country = `${result.sys.country}`;
        });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
    const boxImages = document.getElementById("box-images");
    const arrayOfCards = document.getElementsByClassName("cities__card");
    if (arrayOfCards.length === 5) boxImages.firstElementChild.remove();
    if (arrayTemp.length === 5) arrayTemp.shift();
    arrayTemp.push(objForSave);
    localStorage.setItem("obj", JSON.stringify(arrayTemp));
    boxImages.appendChild(imagesContainer);
}
exports.default = createCard;

},{"./fillwidget":"cqag3","./api":"kcudQ","./isNight":"eJpkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqag3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _celsiy = require("./celsiy");
var _celsiyDefault = parcelHelpers.interopDefault(_celsiy);
var _isNight = require("./isNight");
var _isNightDefault = parcelHelpers.interopDefault(_isNight);
const MMMM = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function fillWidget(cityFromServer) {
    if (cityFromServer.cod === "400") {
        const place = document.getElementById("place");
        place.textContent = "Type city";
    } else {
        const temp = document.getElementById("temp");
        if (cityFromServer.main.temp) temp.textContent = (0, _celsiyDefault.default)(cityFromServer.main.temp);
        const icon = document.getElementById("icon");
        const currentUrl = `url(http://openweathermap.org/img/wn/${cityFromServer.weather[0].icon}@2x.png)`;
        if ((0, _isNightDefault.default)()) {
            const nightLayoutUrl = currentUrl.replace(/d(?=@)/, "n");
            icon.style.backgroundImage = nightLayoutUrl;
        } else {
            const dayLayoutUrl = currentUrl.replace(/n(?=@)/, "d");
            icon.style.backgroundImage = dayLayoutUrl;
        }
        const kind = document.getElementById("short-kind");
        kind.textContent = cityFromServer.weather[0].main;
        const kindDescription = document.getElementById("long-kind");
        kindDescription.textContent = cityFromServer.weather[0].description;
        const place1 = document.getElementById("place");
        place1.textContent = `${cityFromServer.name}, ${cityFromServer.sys.country}`;
        const date = document.getElementById("date");
        const currentDate = new Date(cityFromServer.dt * 1000);
        date.textContent = `${currentDate.getDate()} ${MMMM[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        const min = document.getElementById("temp-min");
        min.textContent = (0, _celsiyDefault.default)(cityFromServer.main.temp_min);
        const max = document.getElementById("temp-max");
        max.textContent = (0, _celsiyDefault.default)(cityFromServer.main.temp_max);
    }
}
exports.default = fillWidget;

},{"./celsiy":"g3RWi","./isNight":"eJpkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3RWi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getCelciy(kelvin) {
    const temp = Math.round(kelvin - 273) * 10 / 10;
    if (temp > 0) return `+${temp}°C`;
    if (temp < 0) return `-${temp}°C`;
    return `${temp}°C`;
}
exports.default = getCelciy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJpkE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const nightFrom = 21;
const nightTo = 6;
function isNight() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    if (currentHours > nightFrom || currentHours < nightTo) return true;
    return false;
}
exports.default = isNight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcudQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWeather", ()=>getWeather);
parcelHelpers.export(exports, "getCities", ()=>getCities);
parcelHelpers.export(exports, "getCurrentCity", ()=>getCurrentCity);
async function getWeather(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=79b60acd04707a3adf97329d89451cf2`);
        return response.json();
    } catch (error) {
        return error;
    }
}
async function getCities(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city}&APPID=79b60acd04707a3adf97329d89451cf2`);
        return response.json();
    } catch (error) {
        return error;
    }
}
async function getCurrentCity(lon, lat) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79b60acd04707a3adf97329d89451cf2`);
        return response.json();
    } catch (error) {
        return error;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7igUK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function clear() {
    const prevList = document.getElementsByClassName("dropdown");
    for(let i = 0; i < prevList.length; i += 1)prevList[i].remove();
}
exports.default = clear;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"XRDfr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createList = require("./createList");
var _createListDefault = parcelHelpers.interopDefault(_createList);
var _fillwidget = require("./fillwidget");
var _fillwidgetDefault = parcelHelpers.interopDefault(_fillwidget);
var _api = require("./api");
function getDetails(value) {
    (0, _api.getWeather)(value).then((result)=>{
        if (result.code === "400") (0, _createListDefault.default)();
        else (0, _fillwidgetDefault.default)(result);
    });
}
exports.default = getDetails;

},{"./createList":"bhe4Q","./fillwidget":"cqag3","./api":"kcudQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7age3","3cYfC"], "3cYfC", "parcelRequire6f9a")

//# sourceMappingURL=index.b8fca702.js.map
