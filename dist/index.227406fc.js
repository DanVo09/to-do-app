// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hkXzs":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b3bb0a59227406fc";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"23obh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _router = require("./routes/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _store = require("./redux/store");
var _dataFetcher = require("./utils/dataFetcher");
var _keys = require("./utils/keys");
const app = document.querySelector("#app");
const onAppInit = async function(e) {
    const todos = await _dataFetcher.dataFetcher('./data/todos.json');
    _store.createStore(_keys.keyGenerator(todos));
    _routerDefault.default(window.location.pathname);
};
window.addEventListener('load', onAppInit);

},{"./routes/router":"3ISf2","./redux/store":"fKkA9","./utils/dataFetcher":"eTj5l","./utils/keys":"ajqSI","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3ISf2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router
);
var _home = require("../pages/home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _todolis = require("../pages/todolis");
var _todolisDefault = parcelHelpers.interopDefault(_todolis);
var _notFound = require("../pages/notFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
const routes = {
    '/': _homeDefault.default,
    '/todolist': _todolisDefault.default
};
const Router = function(pathname) {
    const isValidRoute = Object.keys(routes).find((key)=>key === pathname
    );
    console.log(isValidRoute);
    const app = document.querySelector('#app');
    app.innerHTML = '';
    window.history.pushState({
    }, pathname, window.location.origin + pathname);
    if (isValidRoute === undefined) app.append(_notFoundDefault.default());
    else app.appendChild(routes[window.location.pathname]());
};
exports.default = Router;

},{"../pages/home":"bA5yS","../pages/todolis":"dUQok","../pages/notFound":"52mDr","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bA5yS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("../components/ui/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _link = require("../components/ui/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _header = require("../components/ui/header");
const homePage = function() {
    const div = document.createElement('div');
    const header = _header.headercontent();
    const todobutton = _buttonDefault.default("To Do App");
    const tagline = _linkDefault.default('', '/todolist');
    div.setAttribute('class', 'homepage');
    div.append(header);
    div.append(tagline);
    tagline.append(todobutton);
    return div;
};
exports.default = homePage;

},{"../components/ui/button":"35nla","../components/ui/link":"ipcsc","../components/ui/header":"uox36","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"35nla":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const button = function(label = "ui button", className = "ui-name") {
    const template = `<button class="${className}">${label}</button>`;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = button;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ggL9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const makeElement = function(template = ``) {
    const docFrag = document.createRange().createContextualFragment(template);
    const element = docFrag.children[0];
    return element;
};
exports.default = makeElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"ipcsc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _router = require("../../routes/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
const onRequestNewPage = function(e) {
    e.preventDefault();
    _routerDefault.default(e.currentTarget.dataset.path);
    return false;
};
const link = function(label = "ui-link", path = '/', className = "ui-link") {
    const template = `<a href="${path}"  class="${className}" data-path="${path}"> ${label}</a>`;
    const element = _makeElementDefault.default(template);
    element.addEventListener('click', onRequestNewPage);
    return element;
};
exports.default = link;

},{"../../utils/makeElement":"ggL9Z","../../routes/router":"3ISf2","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"uox36":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headercontent", ()=>headercontent
);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _logo = require("../icons/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
var _levelHeading = require("../ui/levelHeading");
var _levelHeadingDefault = parcelHelpers.interopDefault(_levelHeading);
var _link = require("./link");
var _linkDefault = parcelHelpers.interopDefault(_link);
const headercontent = function() {
    const header = document.createElement('header');
    const archortag = _linkDefault.default("", '/');
    const h1 = _levelHeadingDefault.default('h1', '');
    const logo = _logoDefault.default();
    const template = `<p>Knowledge is power.</p> `;
    const element = _makeElementDefault.default(template);
    header.append(h1);
    h1.append(archortag);
    archortag.append(logo);
    header.append(element);
    return header;
};

},{"../../utils/makeElement":"ggL9Z","../icons/logo":"dErkq","../ui/levelHeading":"7w2RS","./link":"ipcsc","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dErkq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const logoIcon = function() {
    const template = `\n    <?xml version="1.0" encoding="utf-8"?>\n    <!-- Generator: Adobe Illustrator 25.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n         viewBox="0 0 742.86 153.08" style="enable-background:new 0 0 742.86 153.08;" xml:space="preserve">\n    <style type="text/css">\n        .st0{fill:#ED1C24;}\n    </style>\n    <path class="st0" d="M40.63,69.18l-9.2,40.41c2.18,0.36,3.94,0.53,5.26,0.53c2,0,4.48-0.38,7.44-1.14l-0.68,3.73\n        c-3.05,0.71-5.42,1.07-7.11,1.07c-1.78,0-4.4-0.18-7.86-0.53c-3.05-0.36-5.58-0.53-7.59-0.53c-3.65,0-7.86,0.58-12.64,1.75\n        l1.03-4.26c5.01-1.42,8.27-2.82,9.78-4.19c2.28-2.18,4.03-6.01,5.27-11.49l9.57-42.54c1.18-5.43,1.78-8.62,1.78-9.59\n        c0-0.91-0.29-1.6-0.85-2.05c-0.57-0.46-1.7-0.66-3.38-0.61l0.89-3.65c4.59-0.05,10.09-0.99,16.5-2.81\n        c-0.55,1.93-1.26,4.77-2.12,8.52l-5.14,22.45c2.19,0.51,4.04,0.76,5.55,0.76c5.71,0,10.59-2.22,14.65-6.66\n        c4.06-4.44,6.09-9.7,6.09-15.79c0-4.72-1.63-8.6-4.89-11.64c-3.26-3.04-7.69-4.57-13.29-4.57c-7.15,0-14.15,1.93-20.98,5.78\n        c-6.83,3.86-11.96,8.64-15.38,14.35S8.17,58.15,8.17,64.39c0,4.72,1.76,8.78,5.27,12.18c1.78,1.67,2.87,2.89,3.28,3.65\n        c0.41,0.76,0.62,1.57,0.62,2.44c0,1.07-0.36,1.99-1.07,2.78c-0.71,0.79-1.57,1.18-2.58,1.18c-2.48,0-4.68-1.6-6.6-4.79\n        c-2.48-4.16-3.71-9.29-3.71-15.37c0-7.81,1.94-15.09,5.82-21.84c3.88-6.75,9.75-12.33,17.62-16.74c7.87-4.41,16.16-6.62,24.87-6.62\n        c8.12,0,14.8,1.7,20.05,5.1c5.24,3.4,7.87,8.42,7.87,15.07c0,6.24-2.4,12.05-7.21,17.43c-4.81,5.38-11.42,8.83-19.85,10.35\n        c2.1,4.67,3.44,7.81,4.03,9.44c0.96,2.74,2.41,7.36,4.37,13.85c4.6,15.21,9.37,25.93,14.29,32.14c3.65,4.55,7.59,6.82,11.83,6.82\n        c4.38,0,7.18-2.19,8.41-6.58c0.73-2.77,1.41-4.49,2.05-5.15c0.87-0.91,1.85-1.36,2.94-1.36c1.09,0,2.02,0.43,2.77,1.29\n        c0.75,0.86,1.13,1.9,1.13,3.12c0,3.15-1.55,6.14-4.65,8.98c-3.1,2.84-7.09,4.26-11.97,4.26c-4.42,0-8.65-1.19-12.69-3.57\n        c-4.04-2.38-7.96-6.28-11.76-11.7c-3.81-5.42-7.12-11.92-9.95-19.52c-1.41-3.81-3.48-10.78-6.21-20.93\n        c-1.64-6.19-2.66-9.89-3.07-11.11l-1.68-0.15C41.97,69.03,41.39,69.08,40.63,69.18z"/>\n    <path class="st0" d="M121.95,93.61l2.26,3.35c-11.18,11.82-20.75,17.73-28.74,17.73c-3.24,0-5.71-1.22-7.42-3.65\n        s-2.57-6.34-2.57-11.72c0-10.86,2.96-21.66,8.89-32.42c6.66-12.23,14.62-18.34,23.88-18.34c3.24,0,5.71,0.9,7.42,2.7\n        c1.71,1.8,2.57,4.28,2.57,7.42c0,3.3-1.03,6.54-3.08,9.74c-2.05,3.2-5.72,6.52-11.02,9.97c-2.65,1.67-8.3,4.69-16.97,9.06\n        c-0.41,2.74-0.62,5.35-0.62,7.84c0,3.6,0.51,6.11,1.54,7.53c1.03,1.42,2.52,2.13,4.48,2.13c1.87,0,3.92-0.58,6.16-1.75\n        C111.76,101.63,116.16,98.43,121.95,93.61z M98,82.58c7.34-3.65,12.86-7.58,16.56-11.8c2.51-2.94,3.76-5.86,3.76-8.75\n        c0-2.18-0.51-3.92-1.54-5.21c-1.03-1.29-2.36-1.94-4-1.94c-1.69,0-3.33,0.71-4.93,2.13c-2.14,1.88-3.95,4.72-5.4,8.52\n        C100.35,71.11,98.87,76.79,98,82.58z"/>\n    <path class="st0" d="M180.38,47.42l4.51-1.07l-5.13,19.25c-2.05,7.66-3.99,16.49-5.81,26.48c-1,5.43-1.51,8.93-1.51,10.5\n        c0,1.57,0.57,2.36,1.71,2.36c0.73,0,1.89-0.53,3.49-1.6c2.83-1.88,5.54-4.21,8.14-7l2.19,2.97c-5.2,5.28-8.53,8.47-9.99,9.59\n        c-2.92,2.23-5.7,3.88-8.35,4.95c-1.73,0.71-3.42,1.07-5.06,1.07c-1.19,0-2.08-0.3-2.67-0.91c-0.59-0.61-0.89-1.5-0.89-2.66\n        c0-0.76,0.18-1.8,0.55-3.12l2.74-10.35c-3.92,5.23-8.6,9.72-14.03,13.47c-3.33,2.33-6.39,3.5-9.17,3.5c-2.65,0-4.68-1.04-6.09-3.12\n        c-1.92-2.79-2.87-6.44-2.87-10.96c0-5.38,1.29-11.36,3.87-17.96c2.58-6.6,6.03-12.58,10.37-17.96c4.33-5.38,8.89-9.33,13.68-11.87\n        c3.69-1.93,8.44-2.89,14.23-2.89c1.46,0,2.94,0.1,4.45,0.3L180.38,47.42z M171.89,59.06c-2.46-0.56-4.54-0.84-6.23-0.84\n        c-4.1,0-7.69,1.26-10.74,3.77c-3.06,2.51-5.9,7.03-8.52,13.55c-2.62,6.52-3.93,13.03-3.93,19.52c0,3.45,0.52,5.94,1.57,7.46\n        c1.05,1.52,2.42,2.28,4.1,2.28c3.15,0,6.52-1.89,10.13-5.67c3.6-3.78,6.25-9.22,7.94-16.32L171.89,59.06z"/>\n    <path class="st0" d="M245.24,96.96l1.92,2.89c-6.11,5.73-10.65,9.54-13.62,11.42c-4.1,2.59-7.34,3.88-9.72,3.88\n        c-1.09,0-1.98-0.34-2.67-1.03c-0.68-0.68-1.03-1.46-1.03-2.32c0-0.86,0.25-2.28,0.75-4.26l2.39-9.3\n        c-5.47,6.55-10.03,10.99-13.68,13.33c-3.65,2.33-6.93,3.5-9.85,3.5c-2.42,0-4.45-1.18-6.09-3.54c-1.64-2.36-2.46-5.83-2.46-10.4\n        c0-7.21,2.22-15.51,6.67-24.88s9.4-16.31,14.85-20.8c5.45-4.5,10.43-6.74,14.95-6.74c1,0,2.51,0.18,4.52,0.53\n        c2.14-9.88,4.2-17.08,6.16-21.61c1.96-4.53,4.49-8.45,7.59-11.74c3.1-3.29,6.65-5.84,10.64-7.64c3.99-1.8,7.72-2.7,11.19-2.7\n        c1.82,0,3.28,0.53,4.38,1.6s1.64,2.41,1.64,4.03c0,1.57-0.5,2.85-1.51,3.84c-1.01,0.99-2.38,1.48-4.11,1.48\n        c-1.14,0-3.27-0.25-6.38-0.76c-3.11-0.51-5.23-0.76-6.38-0.76c-1.6,0-3.01,0.54-4.22,1.63c-1.21,1.09-2.37,3.43-3.46,7.03\n        c-0.73,2.28-2.39,9.57-4.98,21.85l-9.68,45.97c-1.14,5.43-1.7,9.03-1.7,10.81c0,1.93,0.66,2.9,1.98,2.9c0.82,0,1.78-0.33,2.87-0.99\n        C237.76,103.23,240.77,100.82,245.24,96.96z M230.73,57.62c-3.65-0.91-6.23-1.37-7.73-1.37c-3.06,0-6.04,1.33-8.96,4\n        c-2.92,2.67-5.74,7.84-8.45,15.51c-2.71,7.67-4.07,14.36-4.07,20.05c0,2.59,0.63,4.71,1.88,6.37c1.25,1.65,2.68,2.48,4.28,2.48\n        c1.92,0,4.1-0.94,6.57-2.82c3.51-2.79,6.29-6.2,8.35-10.21c1.23-2.54,2.9-8.77,4.99-18.68L230.73,57.62z"/>\n    <path class="st0" d="M256.39,66.37l-3.01-2.59c4.56-5.58,8.71-9.55,12.47-11.91c3.76-2.36,6.96-3.54,9.6-3.54\n        c1.46,0,2.57,0.36,3.35,1.07c0.77,0.71,1.16,1.67,1.16,2.89c0,1.47-1.48,7.71-4.44,18.72c-4.82,18.01-7.23,28.87-7.23,32.57\n        c0,0.71,0.16,1.31,0.48,1.79c0.32,0.48,0.66,0.72,1.03,0.72c1.46,0,5.2-3.15,11.22-9.44l2.67,2.89\n        c-6.25,6.54-10.81,10.73-13.68,12.56s-5.22,2.74-7.05,2.74c-1.6,0-2.86-0.56-3.8-1.67c-0.94-1.12-1.4-2.66-1.4-4.64\n        c0-6.34,3.42-21.84,10.26-46.5c0.32-1.17,0.48-2.21,0.48-3.12c0-1.01-0.41-1.52-1.23-1.52c-0.91,0-1.95,0.41-3.11,1.22\n        C262.99,59.42,260.4,62,256.39,66.37z M283.28,15.98c1.41,0,2.58,0.52,3.49,1.56c0.91,1.04,1.37,2.37,1.37,4\n        c0,2.23-0.7,4.2-2.09,5.9c-1.39,1.7-2.95,2.55-4.69,2.55c-1.37,0-2.51-0.53-3.42-1.6c-0.91-1.07-1.37-2.46-1.37-4.19\n        c0-2.28,0.66-4.22,1.98-5.82C279.88,16.78,281.45,15.98,283.28,15.98z"/>\n    <path class="st0" d="M289.85,66.59l-2.33-2.66c5.84-6.22,10.5-10.35,13.97-12.39c3.47-2.04,6.44-3.06,8.9-3.06\n        c0.96,0,1.71,0.23,2.26,0.68s0.82,0.99,0.82,1.6c0,0.46-0.11,1.27-0.34,2.44l-3.08,15.32c4.64-5.74,10.47-11.1,17.48-16.07\n        c3.73-2.59,6.81-3.89,9.22-3.89c1.78,0,3.16,0.64,4.17,1.9c1,1.27,1.5,3.1,1.5,5.48c0,1.57-0.21,3.35-0.61,5.33\n        c-0.73,3.3-2.64,10.48-5.73,21.54c-2.91,10.35-4.36,17.23-4.36,20.62c0,1.04,0.14,1.82,0.41,2.34c0.27,0.52,0.66,0.78,1.16,0.78\n        c1.32,0,3.4-1.42,6.23-4.26c2.01-2.03,4.01-3.91,6.02-5.63l1.71,2.74c-4.2,5.15-8.55,9.29-13.07,12.42\n        c-2.87,2.02-5.25,3.03-7.12,3.03c-1.73,0-3.08-0.7-4.04-2.09s-1.44-3.67-1.44-6.81c0-4.52,2.53-15.75,7.59-33.71\n        c1.55-6.39,2.33-10.12,2.33-11.19c0-1.57-0.84-2.36-2.53-2.36c-1.82,0-4.17,1.07-7.05,3.2c-4.29,3.15-7.87,6.86-10.74,11.13\n        c-1.82,2.74-3.35,7.11-4.58,13.11l-5.54,26.6h-10.19c1.92-7.62,3.58-14.91,4.99-21.87l6.09-28.96c0.23-1.17,0.34-2.01,0.34-2.51\n        c0-1.37-0.46-2.06-1.37-2.06c-0.73,0-1.78,0.54-3.15,1.61C294.95,61.02,292.31,63.58,289.85,66.59z"/>\n    <path class="st0" d="M398.3,48.18l5.5-1.38c-3.32,11.88-6.36,23.77-9.14,35.7c-2,8.52-3.39,15.63-4.16,21.31\n        c-0.41,2.84-0.64,6.44-0.68,10.81c-0.09,7.31-0.82,13.19-2.19,17.66c-1.92,6.24-5.49,11.26-10.71,15.07\n        c-5.23,3.81-11.42,5.71-18.58,5.71c-6.16,0-11.01-1.61-14.54-4.83c-3.54-3.22-5.3-6.91-5.3-11.07c0-4.11,1.42-7.94,4.25-11.49\n        c2.1-2.69,6.49-5.94,13.17-9.74c3.38-1.98,6.56-4.01,9.53-6.09c-3.39,1.93-6.03,2.89-7.91,2.89c-1.7,0-3.2-0.88-4.5-2.63\n        c-1.31-1.75-1.96-4.07-1.96-6.96c0-9.33,2.5-18.61,7.49-27.82c5-9.21,11.01-16.12,18.04-20.74c4.33-2.84,9.76-4.26,16.29-4.26\n        c1.28,0,2.85,0.05,4.72,0.15L398.3,48.18z M381.39,100.92c-3.11,3.1-9.09,8.04-17.96,14.84c-7.81,5.88-12.61,10.12-14.39,12.71\n        c-1.78,2.64-2.67,5.43-2.67,8.37c0,2.89,1.15,5.49,3.46,7.8c2.31,2.31,5.11,3.46,8.4,3.46c3.11,0,6.12-0.85,9.05-2.55\n        c2.92-1.7,5.47-4.16,7.64-7.38c2.17-3.22,3.67-6.86,4.49-10.92c0.82-4.06,1.26-9.44,1.3-16.13\n        C380.75,109.64,380.98,106.25,381.39,100.92z M390.66,59.44c-2.19-0.46-4.12-0.69-5.81-0.69c-4.33,0-8.04,1.27-11.14,3.81\n        c-3.1,2.54-5.74,6.8-7.93,12.79c-3.05,8.47-4.58,15.6-4.58,21.39c0,2.39,0.6,4.39,1.81,6.01c1.21,1.62,2.56,2.44,4.07,2.44\n        c1.82,0,4.08-0.98,6.77-2.93c2.69-1.95,4.89-4.4,6.59-7.34c1.71-2.94,3.45-8.02,5.23-15.22L390.66,59.44z"/>\n    <path class="st0" d="M471.08,39.81l0.82-3.73c5.2-0.41,10.82-1.42,16.84-3.05c-1.59,5.23-2.75,9.45-3.48,12.65l-3.69,16.99\n        c8.06,0,14.14-2.25,18.21-6.74c4.08-4.49,6.12-9.84,6.12-16.03c0-4.32-1.47-7.79-4.41-10.43c-2.94-2.64-7.33-3.96-13.17-3.96\n        c-8.26,0-16.12,2.18-23.6,6.55c-7.48,4.37-13.31,10.07-17.48,17.1c-4.17,7.04-6.26,14.08-6.26,21.14c0,1.93,0.24,3.72,0.72,5.37\n        c0.48,1.65,1.17,3.16,2.09,4.53c0.55,0.81,1.76,1.93,3.63,3.35c2.1,1.63,3.4,2.83,3.9,3.62c0.5,0.79,0.75,1.71,0.75,2.78\n        c0,1.07-0.35,1.99-1.06,2.78c-0.71,0.79-1.56,1.18-2.57,1.18c-2.6,0-5.23-2.11-7.9-6.32c-2.67-4.22-4-9.42-4-15.62\n        c0-8.53,2.29-16.8,6.88-24.8c4.58-8,11.07-14.41,19.46-19.24c8.39-4.83,17.63-7.24,27.71-7.24c8.21,0,14.45,1.8,18.71,5.41\n        c4.26,3.61,6.4,8,6.4,13.18c0,4.93-1.44,9.41-4.31,13.44c-2.87,4.04-7.23,7.15-13.07,9.33c4.01,0.71,7.18,1.91,9.51,3.61\n        c2.33,1.7,4.12,3.84,5.37,6.43c1.25,2.59,1.88,5.55,1.88,8.9c0,5.48-1.45,10.66-4.34,15.56c-2.9,4.89-7.16,8.95-12.79,12.17\n        c-5.63,3.22-11.51,4.83-17.62,4.83c-1.78,0-5.59-0.2-11.43-0.61c-2.78-0.15-5.7-0.23-8.76-0.23c-4.65,0-8.78,0.41-12.38,1.22\n        l1.03-4.19c4.79-0.3,8.2-1.58,10.23-3.83c2.03-2.25,3.93-7.22,5.71-14.9l10.12-44.23c0.41-1.89,0.62-3.32,0.62-4.29\n        c0-0.77-0.29-1.44-0.86-2.03c-0.57-0.59-1.29-0.88-2.16-0.88C472.09,39.58,471.63,39.65,471.08,39.81z M480.49,67.24L477,82.55\n        c-1.78,7.92-3.48,14.02-5.12,18.29c-0.97,2.54-2.22,4.69-3.74,6.47c4.1,1.12,7.64,1.67,10.6,1.67c7.98,0,14.01-2.74,18.1-8.23\n        c4.08-5.48,6.12-11.6,6.12-18.36c0-3.35-0.76-6.23-2.29-8.65c-1.53-2.41-3.53-4.1-6.01-5.07C492.18,67.72,487.46,67.24,480.49,67.24\n        z"/>\n    <path class="st0" d="M557.09,48.71c4.47,0,8.19,1.98,11.15,5.94c2.96,3.96,4.45,9.46,4.45,16.52c0,11.26-3.56,21.37-10.67,30.33\n        c-7.12,8.96-14.64,13.43-22.58,13.43c-4.88,0-8.81-1.78-11.8-5.33s-4.48-8.4-4.48-14.54c0-10.65,2.74-20.5,8.21-29.53\n        C538.25,54.32,546.82,48.71,557.09,48.71z M551.27,54.42c-3.88,0-7.63,3.08-11.25,9.25s-5.44,14.68-5.44,25.53\n        c0,6.6,1.12,11.8,3.35,15.6c1.64,2.79,3.83,4.19,6.57,4.19c3.83,0,7.32-2.64,10.47-7.92c4.01-6.85,6.02-15.35,6.02-25.5\n        c0-7.61-0.92-13.04-2.77-16.29C556.37,56.04,554.05,54.42,551.27,54.42z"/>\n    <path class="st0" d="M613.12,48.71c4.47,0,8.19,1.98,11.15,5.94c2.96,3.96,4.45,9.46,4.45,16.52c0,11.26-3.56,21.37-10.67,30.33\n        c-7.12,8.96-14.64,13.43-22.58,13.43c-4.88,0-8.81-1.78-11.8-5.33s-4.48-8.4-4.48-14.54c0-10.65,2.74-20.5,8.21-29.53\n        C594.28,54.32,602.86,48.71,613.12,48.71z M607.3,54.42c-3.88,0-7.63,3.08-11.25,9.25s-5.44,14.68-5.44,25.53\n        c0,6.6,1.12,11.8,3.35,15.6c1.64,2.79,3.83,4.19,6.57,4.19c3.83,0,7.32-2.64,10.47-7.92c4.01-6.85,6.02-15.35,6.02-25.5\n        c0-7.61-0.92-13.04-2.77-16.29C612.4,56.04,610.09,54.42,607.3,54.42z"/>\n    <path class="st0" d="M645.82,112.71h-10.19l8.96-41.48c4.33-20.57,7.17-33.25,8.52-38.02c1.34-4.77,2.96-8.71,4.86-11.81\n        c1.89-3.1,4.26-5.87,7.12-8.3c2.85-2.44,5.93-4.3,9.24-5.6c3.31-1.29,6.21-1.94,8.72-1.94c2.37,0,4.14,0.51,5.3,1.52\n        c1.16,1.02,1.74,2.36,1.74,4.03c0,1.42-0.52,2.64-1.57,3.65c-1.05,1.02-2.37,1.52-3.96,1.52c-2.01,0-5.04-0.38-9.09-1.14\n        c-1.32-0.3-2.48-0.46-3.49-0.46c-1.41,0-2.75,0.56-4,1.68c-1.25,1.12-2.37,3.12-3.35,5.99c-0.98,2.88-2.36,8.84-4.13,17.9\n        l-4.92,24.27c4.38-5.53,8.92-9.79,13.63-12.78c3.56-2.23,6.96-3.35,10.2-3.35c2.28,0,4.21,0.95,5.79,2.85\n        c1.57,1.9,2.36,4.3,2.36,7.19c0,5.43-2.53,10.27-7.59,14.54c-5.06,4.26-12.79,6.55-23.19,6.85c3.51,1.73,6.32,3.62,8.42,5.68\n        s4.16,4.9,6.19,8.53c2.03,3.63,4.64,9.72,7.83,18.25c3.79,10.16,7.3,16.92,10.54,20.27c3.19,3.35,6.71,5.03,10.54,5.03\n        c2.23,0,4.08-0.55,5.54-1.64c1.46-1.09,2.19-2.19,2.19-3.31c0-0.71-0.23-1.67-0.68-2.89c-0.5-1.32-0.75-2.44-0.75-3.35\n        c0-1.17,0.41-2.21,1.23-3.12c0.82-0.91,1.78-1.37,2.87-1.37c1.28,0,2.37,0.57,3.28,1.71c0.91,1.14,1.37,2.65,1.37,4.53\n        c0,3.65-1.5,6.9-4.52,9.74c-3.01,2.84-6.93,4.26-11.77,4.26c-4.97,0-9.42-1.4-13.34-4.19c-3.92-2.79-7.59-7.26-11.01-13.41\n        c-1.96-3.56-5.38-11.66-10.26-24.3c-2.28-5.99-4.33-10.49-6.15-13.49c-1.41-2.34-3.35-4.65-5.81-6.93L645.82,112.71z M653.13,76.64\n        c6.13,0.05,11.09-0.61,14.88-1.98c3.79-1.37,6.49-3.2,8.1-5.48c1.61-2.28,2.42-4.77,2.42-7.46c0-1.93-0.47-3.47-1.4-4.64\n        c-0.93-1.17-2.06-1.75-3.38-1.75c-4.28,0-10.84,5.31-19.67,15.93L653.13,76.64z"/>\n    <path class="st0" d="M726.9,48.71c4.06,0,7.2,0.88,9.41,2.63c2.21,1.75,3.32,3.77,3.32,6.05c0,1.37-0.47,2.56-1.4,3.58\n        c-0.94,1.02-2.06,1.52-3.39,1.52c-0.87,0-1.62-0.21-2.26-0.65c-0.64-0.43-1.55-1.51-2.74-3.23c-2.24-3.3-4.45-4.95-6.64-4.95\n        c-1.87,0-3.52,0.8-4.96,2.4s-2.16,3.59-2.16,5.97c0,2.08,0.46,4.09,1.37,6.04c0.91,1.95,3.22,5.11,6.91,9.46\n        c5.06,5.98,7.59,11.66,7.59,17.03c0,5.37-2.05,10.07-6.16,14.1c-4.1,4.03-9.4,6.04-15.87,6.04c-5.43,0-9.47-1.23-12.11-3.69\n        c-2.65-2.46-3.97-5.49-3.97-9.09c0-1.78,0.5-3.25,1.5-4.41c1-1.17,2.23-1.75,3.69-1.75c1.28,0,2.37,0.47,3.28,1.41\n        c0.91,0.94,1.37,2.04,1.37,3.31c0,0.51-0.03,1.17-0.09,1.98c-0.03,0.66-0.05,1.22-0.05,1.67c0,1.67,0.64,3.1,1.91,4.26\n        c1.23,1.17,2.91,1.75,5.04,1.75c2.45,0,4.61-0.47,6.48-1.41s3.32-2.36,4.36-4.26c1.05-1.9,1.57-3.79,1.57-5.66\n        c0-1.82-0.49-3.65-1.47-5.47c-0.98-1.82-3.18-4.84-6.6-9.05c-4.74-5.88-7.12-11.53-7.12-16.95c0-4.97,1.8-9.31,5.4-13.04\n        C716.75,50.57,721.33,48.71,726.9,48.71z"/>\n    </svg>\n    `;
    return _makeElementDefault.default(template);
};
exports.default = logoIcon;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7w2RS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const heading = function(ElementType = "h2", label = "ui heading", className = "ui-heading") {
    const template = `<${ElementType} class="${className}">${label}</${ElementType}>`;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = heading;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dUQok":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _todoList = require("../components/cards/todoList");
var _todoListDefault = parcelHelpers.interopDefault(_todoList);
var _todo = require("../components/cards/todo");
var _store = require("../redux/store");
var _header = require("../components/ui/header");
var _button = require("../components/ui/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
const todolistPage = function() {
    const page = document.createElement('div');
    const header = _header.headercontent();
    const container = _todoListDefault.default();
    const todoStore = _store.getStore();
    const addbutton = _buttonDefault.default("Add new task", 'ui-newtask');
    page.setAttribute('class', 'todolistpage');
    page.append(header);
    if (todoStore.length !== 0) {
        const elements = todoStore.map((emp)=>{
            return _todo.todo(emp);
        });
        const ul = container.querySelector('#todos');
        elements.forEach((elm)=>{
            ul.append(elm);
        });
        page.append(container);
        page.append(addbutton);
    }
    return page;
};
exports.default = todolistPage;

},{"../components/cards/todoList":"6lGnB","../components/cards/todo":"9ga70","../redux/store":"fKkA9","../components/ui/header":"uox36","../components/ui/button":"35nla","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6lGnB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const todoList = function() {
    const template = `\n    <aside id="todolist" class="todolist">\n    <ul id="todos" class="todos">\n     \n    </ul>\n    <footer>\n\n    </footer>\n</aside>\n    `;
    return _makeElementDefault.default(template);
};
exports.default = todoList;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9ga70":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "todo", ()=>todo
);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _editIcon = require("../icons/editIcon");
var _editIconDefault = parcelHelpers.interopDefault(_editIcon);
var _deleteIcon = require("../icons/deleteIcon");
var _deleteIconDefault = parcelHelpers.interopDefault(_deleteIcon);
const todo = function({ id , category , isComplete , title , endDate  }) {
    const divicon = document.createElement('div');
    const editimg = _editIconDefault.default();
    const deleteimg = _deleteIconDefault.default();
    const template = `\n        <li class="${category}" data-key="${id}">\n           <div>\n               <p>${title}</p> \n               <p>${isComplete}</p> \n               <p>Due: ${endDate}</p> \n           </div>\n        </li>\n      `;
    const element = _makeElementDefault.default(template);
    element.append(divicon);
    divicon.append(editimg);
    divicon.append(deleteimg);
    return element;
};

},{"../../utils/makeElement":"ggL9Z","../icons/editIcon":"5jo1A","../icons/deleteIcon":"jWtMX","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5jo1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const editIcon = function() {
    const template = `\n        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">\n        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>\n        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>\n        </svg>\n    `;
    return _makeElementDefault.default(template);
};
exports.default = editIcon;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jWtMX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const deleteIcon = function() {
    const template = `\n        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">\n        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>\n        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>\n        </svg>\n    `;
    return _makeElementDefault.default(template);
};
exports.default = deleteIcon;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fKkA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStore", ()=>createStore
);
parcelHelpers.export(exports, "getStore", ()=>getStore
);
let store = null;
const createStore = function(data = []) {
    if (store === null) store = [
        ...data
    ];
};
const getStore = function() {
    return store;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"52mDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _link = require("../components/ui/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _header = require("../components/ui/header");
var _errorIcon = require("../components/icons/errorIcon");
var _errorIconDefault = parcelHelpers.interopDefault(_errorIcon);
const notFound = function() {
    const page = document.createElement('div');
    const header = _header.headercontent();
    const logoerror = _errorIconDefault.default();
    const backToSafety = _linkDefault.default("Back to Home page", '/');
    const template = `<p>Seem like we could not find the page you were looking for</p>`;
    const p = _makeElementDefault.default(template);
    page.append(header);
    page.append(logoerror);
    page.append(p);
    page.append(backToSafety);
    page.setAttribute('class', 'errorpage');
    return page;
};
exports.default = notFound;

},{"../utils/makeElement":"ggL9Z","../components/ui/link":"ipcsc","../components/ui/header":"uox36","../components/icons/errorIcon":"cdMX3","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cdMX3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const errorIcon = function() {
    const template = `\n    <?xml version="1.0" encoding="utf-8"?>\n    <!-- Generator: Adobe Illustrator 25.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n         viewBox="0 0 293.65 295.24" style="enable-background:new 0 0 293.65 295.24;" xml:space="preserve">\n    <style type="text/css">\n        .st0{fill:#ED1C24;}\n        .st1{fill:#A7A9AC;}\n        .st2{fill:none;stroke:#000000;stroke-miterlimit:10;}\n    </style>\n    <g>\n        <path class="st0" d="M88,171.75v-22.05H49.53v-7.23l36.94-51.71h12.1v50.34h11.59v8.6H98.57v22.05H88z M88,141.1v-27.04\n            c0-4.24,0.13-8.47,0.38-12.71H88c-2.55,4.73-4.59,8.22-6.88,11.96l-20.25,27.54v0.25H88z"/>\n        <path class="st0" d="M173.72,130.38c0,27.54-10.45,42.74-28.79,42.74c-16.18,0-27.13-14.83-27.39-41.62\n            c0-27.16,11.97-42.12,28.79-42.12C163.79,89.38,173.72,104.59,173.72,130.38z M128.76,131.63c0,21.06,6.62,33.02,16.81,33.02\n            c11.46,0,16.94-13.08,16.94-33.77c0-19.94-5.22-33.02-16.81-33.02C135.89,97.86,128.76,109.57,128.76,131.63z"/>\n        <path class="st0" d="M218.68,171.75v-22.05h-38.47v-7.23l36.94-51.71h12.1v50.34h11.59v8.6h-11.59v22.05H218.68z M218.68,141.1\n            v-27.04c0-4.24,0.13-8.47,0.38-12.71h-0.38c-2.55,4.73-4.58,8.22-6.88,11.96l-20.25,27.54v0.25H218.68z"/>\n    </g>\n    <g>\n        <path class="st1" d="M95.27,215.01c0.12,6.31,4.83,8.91,10.28,8.91c3.9,0,6.25-0.58,8.3-1.33l0.93,3.34\n            c-1.92,0.74-5.2,1.59-9.97,1.59c-9.23,0-14.74-5.2-14.74-12.95s5.33-13.85,14.06-13.85c9.78,0,12.38,7.37,12.38,12.1\n            c0,0.96-0.12,1.7-0.19,2.18H95.27z M111.24,211.66c0.06-2.97-1.42-7.59-7.55-7.59c-5.51,0-7.93,4.35-8.36,7.59H111.24z"/>\n        <path class="st1" d="M123.26,209.33c0-3.02-0.06-5.62-0.25-8.01h4.77l0.19,5.04h0.25c1.36-3.45,4.64-5.62,8.3-5.62\n            c0.62,0,1.05,0.05,1.55,0.16v4.4c-0.56-0.11-1.11-0.16-1.86-0.16c-3.84,0-6.56,2.49-7.31,6c-0.12,0.64-0.25,1.38-0.25,2.17V227\n            h-5.39V209.33z"/>\n        <path class="st1" d="M143.75,209.33c0-3.02-0.06-5.62-0.25-8.01h4.77l0.19,5.04h0.25c1.36-3.45,4.64-5.62,8.3-5.62\n            c0.62,0,1.05,0.05,1.55,0.16v4.4c-0.56-0.11-1.11-0.16-1.86-0.16c-3.84,0-6.56,2.49-7.31,6c-0.12,0.64-0.25,1.38-0.25,2.17V227\n            h-5.39V209.33z"/>\n        <path class="st1" d="M190.51,213.94c0,9.5-7.68,13.63-14.92,13.63c-8.11,0-14.37-5.09-14.37-13.21c0-8.59,6.56-13.64,14.86-13.64\n            C184.69,200.73,190.51,206.09,190.51,213.94z M166.73,214.21c0,5.62,3.78,9.87,9.1,9.87c5.2,0,9.1-4.19,9.1-9.97\n            c0-4.35-2.54-9.87-8.98-9.87S166.73,209.33,166.73,214.21z"/>\n        <path class="st1" d="M197.38,209.33c0-3.02-0.06-5.62-0.25-8.01h4.77l0.19,5.04h0.25c1.36-3.45,4.64-5.62,8.3-5.62\n            c0.62,0,1.05,0.05,1.55,0.16v4.4c-0.56-0.11-1.11-0.16-1.86-0.16c-3.84,0-6.56,2.49-7.31,6c-0.12,0.64-0.25,1.38-0.25,2.17V227\n            h-5.39V209.33z"/>\n    </g>\n    <circle class="st2" cx="147.64" cy="147.67" r="140.5"/>\n    </svg>\n    `;
    return _makeElementDefault.default(template);
};
exports.default = errorIcon;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eTj5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataFetcher", ()=>dataFetcher
);
const dataFetcher = async function(url) {
    const response = await fetch(url);
    const payload = await response.json();
    return payload;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ajqSI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyGenerator", ()=>keyGenerator
);
var _uuid = require("uuid");
// object
const keyGenerator = function(data = []) {
    const keyData = data.map((item)=>{
        item.id = _uuid.v4().substr(0, 8);
        return item;
    });
    return keyData;
};

},{"uuid":"bOtRb","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bOtRb":[function(require,module,exports) {
var v1 = require('./v1');
var v4 = require('./v4');
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

},{"./v1":"fjqjx","./v4":"27jYk"}],"fjqjx":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq;
// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];
    options = options || {
    };
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = rng();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 1,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 16383;
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    var tl = ((msecs & 268435455) * 10000 + nsecs) % 4294967296;
    b[i++] = tl >>> 24 & 255;
    b[i++] = tl >>> 16 & 255;
    b[i++] = tl >>> 8 & 255;
    b[i++] = tl & 255;
    // `time_mid`
    var tmh = msecs / 4294967296 * 10000 & 268435455;
    b[i++] = tmh >>> 8 & 255;
    b[i++] = tmh & 255;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 15 | 16; // include version
    b[i++] = tmh >>> 16 & 255;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 128;
    // `clock_seq_low`
    b[i++] = clockseq & 255;
    // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf ? buf : bytesToUuid(b);
}
module.exports = v1;

},{"./lib/rng":"9kT2H","./lib/bytesToUuid":"kcgOP"}],"9kT2H":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
    module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
    };
} else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    module.exports = function mathRNG() {
        for(var i = 0, r; i < 16; i++){
            if ((i & 3) === 0) r = Math.random() * 4294967296;
            rnds[i] = r >>> ((i & 3) << 3) & 255;
        }
        return rnds;
    };
}

},{}],"kcgOP":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex[i] = (i + 256).toString(16).substr(1);
function bytesToUuid(buf, offset) {
    var i1 = offset || 0;
    var bth = byteToHex;
    // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    return [
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        '-',
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]],
        bth[buf[i1++]]
    ].join('');
}
module.exports = bytesToUuid;

},{}],"27jYk":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');
function v4(options, buf, offset) {
    var i = buf && offset || 0;
    if (typeof options == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
    }
    options = options || {
    };
    var rnds = options.random || (options.rng || rng)();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    // Copy bytes to buffer, if provided
    if (buf) for(var ii = 0; ii < 16; ++ii)buf[i + ii] = rnds[ii];
    return buf || bytesToUuid(rnds);
}
module.exports = v4;

},{"./lib/rng":"9kT2H","./lib/bytesToUuid":"kcgOP"}]},["hkXzs","23obh"], "23obh", "parcelRequire683a")

//# sourceMappingURL=index.227406fc.js.map
