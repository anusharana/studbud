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
})({"lNJce":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d0423473b06b0f7";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
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
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
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
        console.log("[parcel] \u2728 Error resolved");
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
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
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
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
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

},{}],"2OD7o":[function(require,module,exports) {
var _tasklistJs = require("./components/tasklist.js");
var _navigationJs = require("./components/navigation.js");
var _timerJs = require("./components/timer.js");
var _layoutJs = require("./components/layout.js");
var _musicJs = require("./components/music.js"); // import Timer from './components/timer.js';
 // // Pass in a new instance of the timer
 // new Timer (
 //     document.querySelector(".timer")
 // );
 // let button = document.querySelector('.modal');
 // let modal = document.querySelector('.modal');
 // button.addEventListener('click', function() {
 //     modal.classList.add('is-active');
 // })

},{"./components/tasklist.js":"5i9SJ","./components/navigation.js":"jFVbj","./components/timer.js":"3skrK","./components/layout.js":"82z9T","./components/music.js":"2Z4jX"}],"5i9SJ":[function(require,module,exports) {
//////////////////////////////////////////////////////////////////////
// *NOTE* All code that regards to div class column-2 is in tasklist.js. 
// This inlcudes sub divs Progress Section, Task Form and Kanban Board.
//////////////////////////////////////////////////////////////////////
// Create const variables to get elements from HTML 
const form = document.getElementById("taskform");
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
    //Get the value of the task description from object 
    let taskDescription = taskInput.value;
    let dueDate = dueDateInput.value;
    //Options is an array of the drop down options, use selectedIndex to access the user's selected option
    // and store in variable priorityRating
    var priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    //Call addTask function
    addTask(taskDescription, dueDate, priorityRating, false);
    console.log(taskList);
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
    //Create HTML elements for task and task attributes 
    // var itemBlock = document.createElement("div");
    let itemDescription = document.createElement("span");
    itemDescription.setAttribute("class", "taskItem");
    //Use javascript attribute dragable to allow for draggable funcitonality withit kanban board 
    itemDescription.setAttribute("draggable", "true");
    itemDescription.innerHTML = "<p>" + task.taskDescription + "</p>";
    ////////////////////////////////////////////////////////////////////////////////
    // Code not working here - would appreciate feedback 
    ////////////////////////////////////////////////////////////////////////////////
    //Select the first direct decendent <p> tag of <span> tag in.taskItem 
    // let descriptionStyle = document.querySelector('span + p');
    // descriptionStyle.setAttribute('class','taskTitle');
    // Task list is the array, wach element holds an object 
    taskList.appendChild(itemDescription);
    // Priotity rating 
    let priorityScale = document.createElement("p");
    priorityScale.setAttribute("class", "priorityAtt");
    priorityScale.innerHTML = "<p>" + task.priorityRating + "</p>";
    itemDescription.appendChild(priorityScale);
    //Call function to style priority
    // priorityStyling();
    // Due Date 
    let dueDateAtt = document.createElement("p");
    dueDateAtt.setAttribute("class", "dueDateAtt");
    dueDateAtt.innerHTML = "<p>" + task.dueDate + "</p>";
    itemDescription.appendChild(dueDateAtt);
    //Create HTML element of Delete Button 
    let delButton = document.createElement("button");
    delButton.setAttribute("id", "delButton");
    let delButtonText = document.createTextNode("X");
    //Append the text to the button element 
    delButton.appendChild(delButtonText);
    itemDescription.appendChild(delButton);
    // taskList.appendChild(delButton);
    //Event listeners for DOM elements 
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        itemDescription.remove();
    });
    //Create HTML element of the task completion box 
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "checkBox");
    //append it 
    itemDescription.appendChild(checkBox);
    //Clear the input form once a task has been added to the kanban board 
    form.reset();
    //Condition to show prompt for users by checking whether a task has been added yet
    if (taskListArray.length >= 1) //Set display to none to remove prompt in task list section 
    document.getElementById("emptyList").style.display = "none";
    else //CODE to get he message back once removes? not dynamic COME BACK 
    document.getElementById("emptyList").style.display = "inline-block";
}
//////////////////////////////////////////////////////
// Code is doesn't work - feedback would be appreciated 
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Progress Bar Calculations 
//////////////////////////////////////////////////////
// Code is faulty, please give feedback on how to code this 
let totalTasks = taskListArray.length;
var percentageTaskComplete = 0;
let markedTaskCount = 0;
function checkMarkedTasks() {
    //For loop to go through all tasks 
    for(i = 0; i < taskListArray.length + 1; i++)// If checkbox is marked, change completionStatus to true 
    if (task.completionStatus == true) //Add styling here 
    markedTaskCount++;
}
function calculateProgressBar() {
    //If task array length is 0, return 0 percent complete
    if (totalTasks == 0) percentageTaskComplete = 0;
    else {
        percentageTaskComplete = markedTaskCount / totalTasks * 100;
        // Alter the styles of the width of progress bar 
        document.querySelector(".progressBarMeasure").style.width = "percentageTaskComplete";
    }
}
//////////////////////////////////////////////////////
// Code here doesn't work - feedback would be appreciated 
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Drag and drop functionality for kanban board 
//////////////////////////////////////////////////////
// Code for the drag and drop funcitonality for the taskItem components 
// SRC: https://www.geeksforgeeks.org/html-draggable-attribute/
var draggableItem = document.querySelectorAll(".draggable");
// Select the element where the draggabe item can be stored
var kanbanBoard = document.querySelector(".board"); // Event listener for all draggable elements 
 // Using arrow function for event listener call back method
 // SRC: https://developpaper.com/how-to-use-the-arrow-function-as-a-callback-to-the-event-listener/
 // draggableItem.forEach(draggableItem => {
 //   // When the draggable element is picked up by cursor, add class for styling 
 //   draggable.addEventListener('dragStart', () => {
 //     draggable.classList.add('draggingCurrent');
 //   });
 //   //When draggable element is dropped, remove the pick u styling 
 //   draggable.addEventListener('dragEnd', () => {
 //     draggable.classList.remove('draggingCurrent');
 //   });
 // ////////////////////////////////////////////////////////////////////////////////
 // // Create a funciton to allow the task item to be shifted in the order of the <ul> 
 // // SRC: https://betterprogramming.pub/create-a-sortable-list-with-draggable-items-using-javascript-9ef38f96b258
 // // Call this below function in renderTasks() ?
 // // COME BACK HERE - UNFINISHED CODE 
 // ////////////////////////////////////////////////////////////////////////////////
 // });
 //////////////////////////////////////////////////////
 // Code here doesn't work - feedback would be appreciated 
 ///////////////////////////////////////////////////////
 //Function which determines the styling of the priority rating
 // function priorityStyling() {
 //   //Switch statement to determine which stylings to add 
 //   var priorityStylingClass;
 //   switch (priorityStylingClass) {
 //     //Cases are the potential variable held by priorityRating
 //     case "Low" :
 //       //Add styling of priority rating to PR element 
 //       // priorityScale.classList.add('priorityAttLow');
 //       priorityStylingClass = priorityAttLow;
 //       break;
 //     case "Medium" :
 //       // priorityScale.classList.add('priorityAttMed');
 //       priorityStylingClass = priorityAttMed;
 //       break;
 //     case "High" :
 //       // priorityScale.classList.add('priorityAttHigh');
 //       priorityStylingClass = priorityAttHigh;
 //       break;
 //   }
 //   //Add the styling class based on what the variable priorityStylingClass has stored 
 //   priorityScale.classList.add('priorityStylingClass');
 // }

},{}],"jFVbj":[function(require,module,exports) {
// Create variables for the nav buttons 
var homePageNavBtn = document.getElementById("homeNavBtn");
var appsPageNavBtn = document.getElementById("appsNavBtn");
//Create variables for the home and apps page contents 
var homePage = document.querySelector(".row-home");
var appsPage = document.querySelector(".row-apps");
//When user clicks home nav button, display only .row-home
homePageNavBtn.addEventListener("click", function(event) {
    // appsPage.style.display = "none";
    appsPage.style.visibility = "hidden";
    homePage.style.visibility = "visible";
// appsPage.classList.toggle('row-home');
});
//When user clicks apps nav button, display only .row-apps
appsPageNavBtn.addEventListener("click", function(event) {
    // homePage.style.display = "none";
    appsPage.style.visibility = "visible";
    homePage.style.visibility = "hidden";
// homePage.classList.toggle('row-apps');
});

},{}],"3skrK":[function(require,module,exports) {
// Declare variables for the timer 
var minutes = 25;
var seconds = "00";
//Global scope of variables so it can be used dynamically in other funcitons 
var minutesInterval;
var secondsInterval;
var sessionCount = 0;
// Sounds for the start and end of pomodoro session 
var startSound = document.getElementById("startSound");
var endSound = document.getElementById("endSound");
//Declare variables of button elements 
var startTimerButton = document.getElementById("timerButtonStart");
var resetTimerButton = document.getElementById("timerButtonReset");
//Timer complete DOM element
let timerComplete = document.getElementById("timerComplete");
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
    //Declare new variables for timer 
    // As the setInterval function waits 60000 ms to call minutesTimer, we must update the variable so it displays correct countdown time  
    var minutes1 = 24;
    var seconds1 = 59;
    //Update the minutes and seconds HTML variables to count down 
    document.getElementById("timerMinutes").innerHTML = minutes1;
    document.getElementById("timerSeconds").innerHTML = seconds1;
    //Call setInterval function to call respective functions (minutes or seconds) to update the clock at correct times 
    // SRC: https://theprogrammingexpert.com/javascript-countdown-timer/
    minutesInterval = setInterval(minutesTimer, 60000);
    secondsInterval = setInterval(secondsTimer, 1000);
    function minutesTimer() {
        minutes1 = minutes1 - 1;
        document.getElementById("timerMinutes").innerHTML = minutes1;
    }
    function secondsTimer() {
        seconds1 = seconds1 - 1;
        document.getElementById("timerSeconds").innerHTML = seconds1;
        //Condition to ensure seconds doesn't go into negatives, clocks back to 60 once 0 has been reached. 
        if (seconds1 <= 00) {
            //Once the 25 min session is over, clear the interval and show a message to take a break 
            if (minutes1 <= 00) {
                clearInterval(minutesInterval);
                clearInterval(secondsInterval);
                //Play bell when each session has been completed 
                endSound.play();
                //Incremement sessionCount
                sessionCount++;
                //if condition to ensure the sessionCount is no more than 4 to indicate a 
                //2 hour study session 
                if (sessionCount == 4) //Reset the sessionCount number 
                sessionCount;
                //Alter the message
                timerComplete.innerHTML = "Session " + sessionCount + " complete! Enjoy your 5 min break :) \n Press anywhere on this bar to continue your sessions. Only" + (4 - sessionCount) + " sessions to go";
                //To ensure the class timer_complete_message is shown dynamically, add it to the Element ID once the above conditions are met 
                timerComplete.classList.add("timerCompleteMessage");
            }
            //Reset seconds counter back to 60 once the full minute has elapsed
            seconds1 = 60;
        }
    }
}
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
//Event listener so user can click the session complete message to resume the next session 
timerComplete.addEventListener("click", ()=>{
    //When the timer complete message is clicked, trigger the start button functionality
    // to reset the timer to 25
    startButton();
    //Add the fade out animation once the user has clicked on the notification 
    timerComplete.classList.add("timerCompleteDissolve");
});

},{}],"82z9T":[function(require,module,exports) {

},{}],"2Z4jX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
//Using the glob resolver to import multiple files at a time, rather than 
// import each individual mp3 and jpeg file. 
// SRC: https://parceljs.org/blog/rc0/#glob-resolver-plugin
var _mp3 = require("url:../music/*.mp3");
var _mp3Default = parcelHelpers.interopDefault(_mp3);
var _jpeg = require("url:../music/images/*.jpeg");
var _jpegDefault = parcelHelpers.interopDefault(_jpeg);
// For debugging purposes
// console.log(musicFiles);
// console.log(thumbnailImages);
//Define constants and variables to start manipulating DOM of music player
const musicContainer = document.querySelector(".music-container");
var playBtn = document.querySelector("#playButton");
const prevBtn = document.querySelector("#prevButton");
const nextBtn = document.querySelector("#nextButton");
const musicAudio = document.querySelector("#musicAudio");
const progressContainer = document.querySelector(".musicProgressContainer");
const musicTitle = document.querySelector("#musicTitle");
const musicArt = document.querySelector("#musicArt");
//Store the titles of ths songs in an array that match the audio file names
const musicArray = [
    "Boom",
    "France",
    "JackJ",
    "Rudie"
];
//Index varible to help keep track of songs
let musicIndex = 2;
// Initially load the music info DOM by calling function
loadMusic(musicArray[musicIndex]);
// FUNCTIONS
// Function to update the song details of title, audio source and cover art 
function loadMusic(music) {
    musicTitle.innerText = music;
    //Access the music and image files from the object returned by the glob resolver plugin
    musicAudio.src = (0, _mp3Default.default)[music];
    musicArt.src = (0, _jpegDefault.default)[music];
}
//Function to play music
function playMusic() {
    //Add the class of .play to .musicContainer
    musicContainer.classList.add("play");
    //Once the play button is selected, switch it to a play button 
    playBtn.querySelector("span.material-symbols-outlined").classList.remove("play_arrow");
    playBtn.querySelector("span.material-symbols-outlined").classList.add("pause");
    playBtn.querySelector("span.material-symbols-outlined").innerHTML = "pause";
    //To play song, take the audio tag and select play 
    musicAudio.play();
}
//Function to pause music
function pauseMusic() {
    //Add the class of .play to .musicContainer
    musicContainer.classList.remove("play");
    //Once the play button is selected, switch it to a play button 
    playBtn.querySelector("span.material-symbols-outlined").classList.add("play_arrow");
    playBtn.querySelector("span.material-symbols-outlined").classList.remove("pause");
    playBtn.querySelector("span.material-symbols-outlined").innerHTML = "play_arrow";
    //To pause song, take the audio tag and select pause
    musicAudio.pause();
}
function prevMusic() {
    //Negate musicIndex by 1 to retrieve previous song 
    musicIndex = musicIndex - 1;
    //Set up condition to make sure musicIndex doenst go lower than 0 
    if (musicIndex < 0) //Shift index to the last song 
    musicIndex = musicArray.length - 1;
    //Call the funciton to load music with updated Index and play music 
    loadMusic(musicArray[musicIndex]);
    playMusic();
}
function nextMusic() {
    //Incremement musicIndex by 1 to retrieve previous song 
    musicIndex = musicIndex + 1;
    //Set up condition to make sure musicIndex doenst go larger than the number of songs in array  
    if (musicIndex > musicArray.length - 1) //Shift index to the first song 
    musicIndex = 0;
    //Call the funciton to load music with updated Index and play music 
    loadMusic(musicArray[musicIndex]);
    playMusic();
}
//Progress bar functionality 
// updateProgress will Take in an event object called timeStamp
// SRC: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
function updateProgress(timeStamp) {
    //Collect attributes of duration of song and current time of song playing into timeStamp object 
    const { duration , currentTime  } = timeStamp.srcElement;
    //Calculate the proportion of the song played at each moment 
    const progressPercent = currentTime / duration * 100;
    // Alter the styles of the width of progress bar 
    progressContainer.style.width = "progressPercent";
///////////////////////////////////////////////////////////////////////////////////
// Doesn't work, unsure how to convert the data type of progressPercent to match element width
}
//EVENT LISTENERS
//Bind event listener to play button of music player 
playBtn.addEventListener("click", function(event) {
    //Check if music is currently playing 
    const isPlaying = musicContainer.classList.contains("play");
    //If the above condition returns true in variable isPlaying, pause the music 
    // by calling pauseMusic() function  
    if (isPlaying == true) //CHECK IF THEY ARE SWAPPED 
    pauseMusic();
    else playMusic();
});
//Change song through music navigation buttons 
prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
// Use the 'timeupdate' event with the addEventListener API for progress bar functionality 
// SRC: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
musicAudio.addEventListener("timeupdate", updateProgress);

},{"url:../music/*.mp3":"6HVUr","url:../music/images/*.jpeg":"8WNbw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HVUr":[function(require,module,exports) {
const _temp0 = require("url:./Boom.mp3");
const _temp1 = require("url:./France.mp3");
const _temp2 = require("url:./JackJ.mp3");
const _temp3 = require("url:./Rudie.mp3");
module.exports = {
    "Boom": _temp0,
    "France": _temp1,
    "JackJ": _temp2,
    "Rudie": _temp3
};

},{"url:./Boom.mp3":"83Wz5","url:./France.mp3":"cHYca","url:./JackJ.mp3":"4Kmzo","url:./Rudie.mp3":"hcVJD"}],"83Wz5":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "Boom.ab7e37ec.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cHYca":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "France.498e2e56.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4Kmzo":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "JackJ.857e715b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hcVJD":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "Rudie.6eb81f52.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8WNbw":[function(require,module,exports) {
const _temp0 = require("url:./Boom.jpeg");
const _temp1 = require("url:./France.jpeg");
const _temp2 = require("url:./JackJ.jpeg");
const _temp3 = require("url:./Rudie.jpeg");
module.exports = {
    "Boom": _temp0,
    "France": _temp1,
    "JackJ": _temp2,
    "Rudie": _temp3
};

},{"url:./Boom.jpeg":"gQ9dG","url:./France.jpeg":"hOciR","url:./JackJ.jpeg":"83NSj","url:./Rudie.jpeg":"hrv8B"}],"gQ9dG":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "Boom.56417d79.jpeg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hOciR":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "France.508000a0.jpeg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"83NSj":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "JackJ.e82bd173.jpeg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hrv8B":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("6BXdU") + "Rudie.4f9693c8.jpeg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gkKU3":[function(require,module,exports) {
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

},{}]},["lNJce","2OD7o"], "2OD7o", "parcelRequire60da")

//# sourceMappingURL=index.3b06b0f7.js.map
