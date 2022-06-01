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
})({"2xDT7":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d0423473b06b0f7";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
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
            it = it.call(o);
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
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
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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

},{}],"2OD7o":[function(require,module,exports) {
var _tasklistJs = require("./components/tasklist.js");
var _navigationJs = require("./components/navigation.js");
var _timerJs = require("./components/timer.js");
var _layoutJs = require("./components/layout.js"); // import Timer from './components/timer.js';
 // // Pass in a new instance of the timer
 // new Timer (
 //     document.querySelector(".timer")
 // );
 // let button = document.querySelector('.modal');
 // let modal = document.querySelector('.modal');
 // button.addEventListener('click', function() {
 //     modal.classList.add('is-active');
 // })

},{"./components/timer.js":"3skrK","./components/tasklist.js":"5i9SJ","./components/navigation.js":"jFVbj","./components/layout.js":"82z9T"}],"3skrK":[function(require,module,exports) {
// Declare variables for the timer 
var minutes = 25;
var seconds = "00";
//Global scope of variables so it can be used dynamically in other funcitons 
var minutesInterval;
var secondsInterval;
// Sounds for the start and end of pomodoro session 
// Contructor returns new HTML Audio element as instructed in paranthesis 
// var startSound = new Audio("sound/start.wav");
// var bellSound = new Audio("sound/bell.wav");
var startSound = document.getElementById('startSound');
var endSound = document.getElementById('endSound');
//Declare variables of button elements 
var startTimerButton = document.getElementById("timerButtonStart");
// var pauseButton = document.getElementById("timerButtonStart");
var resetTimerButton = document.getElementById("timerButtonReset");
// "DOMContentLoaded" attribute to make sure the event is sent once 
// the HTML document has finished loading. Global scope. 
document.addEventListener("DOMContentLoaded", pomodoro());
function pomodoro() {
    document.getElementById("timerMinutes").innerHTML = minutes;
    document.getElementById("timerSeconds").innerHTML = seconds;
}
//Call startButton() function once the play button is hit
startTimerButton.addEventListener("click", startButton);
function startButton() {
    //User clicks play button, sound occurs 
    startSound.play();
    //HELP HERE Update the play icon to the pause icon 
    // cant use classList as I have used ID's to signify the different types of buttons 
    // also, if i were to change them to classes, how can i style the below icon? 
    //   document.querySelector(".timerButton .timerButtonStart").classList.remove("timerButtonStart");
    //   document.querySelector(".timerButton").innerHTML = `<span class="material-icons">pause</span> `;
    //Declare new variables for timer 
    // As the setInterval function waits 60000 ms to call minutesTimer, we must update the variable so it displays correct countdown time  
    var minutes1 = 24;
    var seconds1 = 59;
    //Update the minutes and seconds HTML variables to count down 
    document.getElementById("timerMinutes").innerHTML = minutes1;
    document.getElementById("timerSeconds").innerHTML = seconds1;
    //Call setInterval function to call respective functions (minutes or seconds) to update the clock at correct times 
    minutesInterval = setInterval(minutesTimer, 60000);
    secondsInterval = setInterval(secondsTimer, 1000);
    function minutesTimer() {
        minutes1 = minutes1 - 1;
        document.getElementById("timerMinutes").innerHTML = minutes1;
    }
    function secondsTimer() {
        seconds1 = seconds1 - 1;
        document.getElementById("timerSeconds").innerHTML = seconds1;
        // COME BACK - FIX NUMBERS WHEN NOT TESTING 
        //Condition to ensure seconds doesn't go into negatives, clocks back to 60 once 0 has been reached. 
        if (seconds1 <= 50) {
            //Once the 25 min session is over, clear the interval and show a message to take a break 
            if (minutes1 <= 24) {
                clearInterval(minutesInterval);
                clearInterval(secondsInterval);
                //Play bell when each session has been completed 
                endSound.play();
                //HOW TO COUNT THE OCCURANCE OF THIS
                //COME BACK - concatenate the string with logic
                // if loop? while?  " X more sessions to go" 
                // Dynamically show a message once 25 min session is complete 
                document.getElementById("timerComplete").innerHTML = "Session complete! Enjoy your 5 min break :)";
                //To ensure the class timer_complete_message is shown dynamically, add it to the Element ID once the above conditions are met 
                document.getElementById("timerComplete").classList.add("timerCompleteMessage");
            }
            seconds1 = 60;
        }
    }
}
//Call setInterval function to call respective functions (minutes or seconds) to update the clock at correct times 
//////////////////////////////////////////////
// var minutesInterval = setInterval(minutesTimer, 60000);
// var secondsInterval = setInterval(secondsTimer, 1000);
// DID ABOVE TO REDFINE THE MINUTESINTERVAL VARIABLE, UNSURE WHY NOT REGISTERING
//Call resetButton() function once the play button is hit
resetTimerButton.addEventListener("click", resetButton);
// If reset btn is clicked, clear the intervals 
function resetButton() {
    clearInterval(minutesInterval);
    clearInterval(secondsInterval);
    minutes = 25;
    seconds = "00";
    pomodoro();
}

},{}],"5i9SJ":[function(require,module,exports) {
//////////////////////////////////////////////////////////////////////
// *NOTE* All code that regards to div class column-2 is in tasklist.js. 
// This inlcudes sub divs Progress Section, Task Form and Kanban Board.
//////////////////////////////////////////////////////////////////////
// Create const variables to get elements from HTML 
const form = document.getElementById("taskform");
// const button = document.querySelector("#taskform > button");
// WHy doesnt the bellow work? 
const subButton = document.getElementById("itemSubmit");
// Create variabales to dynamicly store task input info
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var dueDateInput = document.getElementById("dueDateInput");
// var subjectSelectInput = document.getElementById("subjectInput");
var priorityInput = document.getElementById("priorityInput");
var completionTimeInput = document.getElementById("completionTimeInput");
// var estimatedTimeInput = document.getElementById("estimatedTimeInput");
//Define a function for creating subject tags 
// Bind an event to the submit button to capture the information from the form and 
// store it in localStorage
subButton.addEventListener("click", function(event) {
    event.preventDefault();
    //Get the value of the 
    // let task = taskInput.value;
    let taskDescription = taskInput.value;
    let dueDate = dueDateInput.value;
    // let completionTime = completionTimeInput.value; not used 
    // let estimatedTime = estimatedTimeInput.value; ///// not used 
    //Options is an array of the drop down options, use selectedIndex to access the user's selected option
    // and store in variable priorityRating
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    // let subjectSelect = subjectSelectInput.options[subjectSelectInput.selectedIndex].value;
    //Call addTask function
    // addTask(task, dueDate, estimatedTime, priorityRating, false);
    addTask(taskDescription, dueDate, priorityRating, false);
// console.log(taskList);
});
//Create aray to store tasks
var taskListArray = [];
//Define a function for dynamically creating task objects 
function addTask(taskDescription, dueDate, priorityRating, completionStatus) {
    //Data creation to populate object paramteres
    let d = new Date();
    let dateCreated = d.getFullYear();
    //Create the task object 
    let task = {
        taskDescription,
        dueDate,
        // subject,
        // estimatedTime, 
        priorityRating,
        // completionTime,
        completionStatus
    };
    //Push task object to taskList array 
    taskListArray.push(task);
    renderTask(task);
// return task; - remove this as now we call the renderTask function, which prints it to the screen 
}
function renderTask(task) {
    //Create HTML elements 
    //This is a list item to populate the unordered list made in HTML file 
    //COME BACK //// Create ablock element and elements within it? 
    var itemBlock = document.createElement("div");
    let itemDescription = document.createElement("span");
    itemDescription.innerHTML = '<p>' + task.taskDescription + '</p>';
    // Task list is the array, wach element holds an object 
    taskList.appendChild(itemDescription);
    // itemBlock.appendChild(itemDescription);
    ////////////////////////////////////////////////////////////////////////////////
    //Add attributes like subject, date and priority here 
    ////////////////////////////////////////////////////////////////////////////////
    // Create HTML element of the task attributes 
    var taskAttSection = document.createElement('div');
    //Create HTML section for the buttons in the itemBlock
    //COME BACK 
    var taskButton = document.createElement('div');
    //Create HTML element of Delete Button 
    let delButton = document.createElement('button');
    delButton.setAttribute('id', 'delButton');
    let delButtonText = document.createTextNode('X');
    // COME BACK - CODE BREAKS WHEN BELOW CODE IS IMPLEMENTED 
    // delButtonText.setAttribute('id', 'delButtonText');
    //Append the text to the button element 
    delButton.appendChild(delButtonText);
    //for button to appear on the screen, append button to the item we created
    //itemBlock??
    itemDescription.appendChild(delButton);
    //Event listeners for DOM elements 
    delButton.addEventListener('click', function(event) {
        event.preventDefault();
        //itemBlock??
        itemDescription.remove();
    });
    //Create HTML element of the task completion box 
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', 'checkBox');
    //Clear the input form once a task has been added to the kanban board 
    form.reset();
    //Create HTML element of Complete Button 
    // Alter the completion status attribute of object 
    // intertwine logic with progress bar 
    // completionStatus = true;
    //Condition to check whether a task has been added yet
    /////////// come back - MAKE THIS DYNAMIC 
    if (taskListArray.length >= 1) //Set display to none to remove prompt in task list section 
    document.getElementById("emptyList").style.display = "none";
    else //CODE to get he message back once removes? not dynamic COME BACK 
    document.getElementById("emptyList").style.display = "inline-block";
}
//Fill the progress bar based on whether the check button has been selected
//HOW TO STORE THE NUMBER OF TASKS & NUMBER OF BOXES CHECKED FOR PROGRESS BAR
//
var totalTasks = taskListArray.length; //Condition to check if the checkbox attribute is checked 
 // How to do this for many tasks?? 
 // select from an array 
 // var checked = document.querySelector('tasklist > div ...);
 // loop through the task list array - how ot make this dynamic?? 
 //if

},{}],"jFVbj":[function(require,module,exports) {

},{}],"82z9T":[function(require,module,exports) {
//If timer is active link the wellness bar to give prompts at end of session 
// As eachtask is completed, progress bar shall increase 
// quantifiable value => each element should take a fraction of the bar 
// logic in css? 
// TIMER 
// how to code for different states
// how to set different time incremements 
var homePage = document.querySelector("#home");
var appsPage = document.querySelector("#apps");
homePage.addEventListener("click", function(event) {
    appsPage.style.display = "none";
});
appsPage.addEventListener("click", function(event) {
    homePage.style.display = "none";
});

},{}]},["2xDT7","2OD7o"], "2OD7o", "parcelRequire60da")

//# sourceMappingURL=index.3b06b0f7.js.map
