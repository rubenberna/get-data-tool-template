// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../components/SelectPackageManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectPackageManager = void 0;

var _react = _interopRequireDefault(require("react"));

var _inkSelectInput = _interopRequireDefault(require("ink-select-input"));

var _ink = require("ink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectPackageManager = ({
  selectManager,
  packageManager
}) => {
  const items = [{
    label: 'Yarn (recommended)',
    value: 'yarn'
  }, {
    label: 'Npm',
    value: 'npm'
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !packageManager && /*#__PURE__*/_react.default.createElement(_ink.Box, {
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(_ink.Text, null, "What's your favourite package manager?"), /*#__PURE__*/_react.default.createElement(_inkSelectInput.default, {
    items: items,
    onSelect: selectManager
  })));
};

exports.SelectPackageManager = SelectPackageManager;
},{}],"../components/Loader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _inkSpinner = _interopRequireDefault(require("ink-spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loader = ({
  loadingMsg
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loadingMsg && /*#__PURE__*/_react.default.createElement(_ink.Text, null, /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green"
  }, /*#__PURE__*/_react.default.createElement(_inkSpinner.default, {
    type: "dots"
  })), ` ${loadingMsg}`));
};

exports.Loader = Loader;
},{}],"../components/StaticSteps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticSteps = void 0;

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StaticSteps = ({
  steps
}) => {
  return /*#__PURE__*/_react.default.createElement(_ink.Static, {
    items: steps
  }, step => /*#__PURE__*/_react.default.createElement(_ink.Box, {
    key: step.nr
  }, step.success ? /*#__PURE__*/_react.default.createElement(_ink.Text, null, /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "#006064"
  }, "\u2714 "), /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "#fff"
  }, step.title)) : /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "red"
  }, "\u261E ", step.title)));
};

exports.StaticSteps = StaticSteps;
},{}],"../components/SuccessMsg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuccessMsg = void 0;

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SuccessMsg = ({
  name,
  packageManager,
  completed
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, completed && /*#__PURE__*/_react.default.createElement(_ink.Box, {
    borderStyle: "round",
    borderColor: "green",
    width: 40,
    padding: 2
  }, /*#__PURE__*/_react.default.createElement(_ink.Text, null, /*#__PURE__*/_react.default.createElement(_ink.Text, {
    italic: true
  }, "To install your project:"), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, null, "cd ", /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green",
    bold: true
  }, name)), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green",
    bold: true
  }, packageManager, " install"), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, null, "cd ", /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green",
    bold: true
  }, "example")), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green",
    bold: true
  }, packageManager, " install"), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, null, "To run your project:"), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, null, "From the project root -- ", /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green",
    bold: true
  }, packageManager, " start")), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, {
    italic: true
  }, "To publish your project:"), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green",
    bold: true
  }, packageManager, " publish"), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Newline, null), /*#__PURE__*/_react.default.createElement(_ink.Text, {
    italic: true
  }, "\"If you build it, they will come!\""))));
};

exports.SuccessMsg = SuccessMsg;
},{}],"../utils/connectToFeed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installVstsAuth = installVstsAuth;

var _execa = _interopRequireDefault(require("execa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function installVstsAuth() {
  await (0, _execa.default)('npm', ['install', '-g', 'vsts-npm-auth', '--registry', 'https://registry.npmjs.com', '--always-auth', 'false']);
}
},{}],"../consts/steps.consts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStepsDetails = exports.STEPS = void 0;
const STEPS = {
  NPMRC: 'NPMRC',
  MANAGER: 'MANAGER',
  MAKE_DIR: 'MAKE_DIR',
  COPY: 'COPY',
  INSTALL_ROOT: 'INSTALL_ROOT',
  INSTALL_WORKBENCH: 'INSTALL_WORKBENCH'
};
exports.STEPS = STEPS;

const getStepsDetails = (name, boolean = true, title) => ({
  [STEPS.NPMRC]: {
    nr: 0,
    title: title || 'Connected to feed via vsts-npm-auth',
    success: boolean
  },
  [STEPS.MANAGER]: {
    nr: 1,
    title: 'Selected package manager',
    success: boolean
  },
  [STEPS.MAKE_DIR]: {
    nr: 2,
    title: title || 'Created directory',
    success: boolean
  },
  [STEPS.COPY]: {
    nr: 3,
    title: 'Copied template',
    success: boolean
  },
  [STEPS.INSTALL_ROOT]: {
    nr: 4,
    title: 'Installed dependencies in root',
    success: boolean
  },
  [STEPS.INSTALL_WORKBENCH]: {
    nr: 4,
    title: 'Installed dependencies in workbench',
    success: boolean
  }
})[name];

exports.getStepsDetails = getStepsDetails;
},{}],"../utils/createLibrary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars"));

var _fs = _interopRequireDefault(require("fs"));

var _globby = _interopRequireDefault(require("globby"));

var _makeDir = _interopRequireDefault(require("make-dir"));

var _path = _interopRequireDefault(require("path"));

var _execa = _interopRequireDefault(require("execa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const templateBlacklist = new Set(['example/public/favicon.ico', 'example/public/.gitignore', '.git']);

var _default = (() => {
  const _createDir = async info => {
    const {
      name
    } = info;
    const parts = name.split('/');
    info.shortName = parts[parts.length - 1];

    const dest = _path.default.join(process.cwd(), info.shortName);

    info.dest = dest;
    await (0, _makeDir.default)(dest);

    const source = _path.default.join(__dirname, '..', '..', 'template', 'data-tool');

    return {
      source,
      dest,
      info
    };
  };

  const _getFiles = async source => {
    return await (0, _globby.default)(source.replace(/\\/g, '/'), {
      dot: true
    });
  };

  const _copyTemplate = async opts => {
    const {
      file,
      source,
      dest,
      info
    } = opts;

    const fileRelativePath = _path.default.relative(source, file).replace(/\\/g, '/');

    if (fileRelativePath.startsWith('.git')) {
      return;
    }

    const destFilePath = _path.default.join(dest, fileRelativePath);

    const destFileDir = _path.default.parse(destFilePath).dir;

    await (0, _makeDir.default)(destFileDir);

    const isAFontFile = fileRelativePath => {
      const array = fileRelativePath.split('/');
      return array.includes('fonts');
    };

    if (templateBlacklist.has(fileRelativePath) || isAFontFile(fileRelativePath)) {
      const content = _fs.default.readFileSync(file);

      _fs.default.writeFileSync(destFilePath, content);
    } else {
      const template = _handlebars.default.compile(_fs.default.readFileSync(file, 'utf8')); // error


      const content = template(_objectSpread(_objectSpread({}, info), {}, {
        yarn: info.packageManager === 'yarn'
      }));

      _fs.default.writeFileSync(destFilePath, content, 'utf8');
    }

    return fileRelativePath;
  };

  const _initPackagesRoot = ({
    dest,
    info
  }) => {
    return (0, _execa.default)(info.packageManager, ['install'], {
      cwd: dest
    });
  };

  const _initPackagesWorkbench = ({
    dest,
    info
  }) => {
    const workbench = _path.default.join(dest, 'example');

    return (0, _execa.default)(info.packageManager, ['install'], {
      cwd: workbench
    });
  };

  return {
    createDir: _createDir,
    getFiles: _getFiles,
    copyTemplate: _copyTemplate,
    initPackagesRoot: _initPackagesRoot,
    initPackagesWorkbench: _initPackagesWorkbench
  };
})();

exports.default = _default;
},{}],"../utils/tryCatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryCatchWrapper = void 0;

var _steps = require("../consts/steps.consts");

const tryCatchWrapper = async (asyncFunc, args, updateSteps, step) => {
  try {
    const res = await asyncFunc(args);
    updateSteps && updateSteps((0, _steps.getStepsDetails)(step));
    return res;
  } catch (e) {
    console.log(e);
    updateSteps((0, _steps.getStepsDetails)(step, false));
  }
};

exports.tryCatchWrapper = tryCatchWrapper;
},{"../consts/steps.consts":"../consts/steps.consts.js"}],"../hooks/useStartProject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStartProject = void 0;

var _connectToFeed = require("../utils/connectToFeed");

var _steps = require("../consts/steps.consts");

var _createLibrary = _interopRequireDefault(require("../utils/createLibrary.js"));

var _tryCatch = require("../utils/tryCatch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStartProject = (name, packageManager, setLoadingMsg, updateSteps, setCompleted, exit) => {
  const promptDetails = {
    name,
    packageManager
  };

  const start = async () => {
    await connectToFeed();
    const {
      source,
      dest,
      info
    } = await createDir(promptDetails);
    const files = await _createLibrary.default.getFiles(source);
    await copyTemplate({
      files,
      source,
      dest,
      info
    }); // await installDependencies(dest, info)

    finish();
  };

  const connectToFeed = async () => {
    setLoadingMsg('Setting connection to feed');
    const os = process.platform;

    if (os === 'win32') {
      await (0, _tryCatch.tryCatchWrapper)(_connectToFeed.installVstsAuth, undefined, updateSteps, _steps.STEPS.NPMRC);
      setLoadingMsg(undefined);
    } else {
      updateSteps((0, _steps.getStepsDetails)(_steps.STEPS.NPMRC, false, 'You are not a Windows user. Please check how to connect to the Azure feed here: https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops#set-up-authentication-on-your-dev-box'));
      setLoadingMsg(undefined);
    }
  };

  const createDir = async () => {
    setLoadingMsg('Creating directory');
    return await (0, _tryCatch.tryCatchWrapper)(_createLibrary.default.createDir, promptDetails, updateSteps, _steps.STEPS.MAKE_DIR);
  };

  const copyTemplate = async ({
    files,
    source,
    dest,
    info
  }) => {
    setLoadingMsg('Copying template');
    const promises = files.map(async file => await (0, _tryCatch.tryCatchWrapper)(_createLibrary.default.copyTemplate, {
      file,
      source,
      dest,
      info
    }));
    await Promise.all(promises);
    return updateSteps((0, _steps.getStepsDetails)(_steps.STEPS.COPY));
  };

  const installDependencies = async (dest, info) => {
    setLoadingMsg('Installing dependencies in root');
    await _createLibrary.default.initPackagesRoot({
      dest,
      info
    });
    updateSteps((0, _steps.getStepsDetails)(_steps.STEPS.INSTALL_ROOT));
    setLoadingMsg('Installing dependencies in workbench');
    await _createLibrary.default.initPackagesWorkbench({
      dest,
      info
    });
    return updateSteps((0, _steps.getStepsDetails)(_steps.STEPS.INSTALL_WORKBENCH));
  };

  const finish = () => {
    setLoadingMsg(undefined);
    setCompleted(true);
    exit();
  };

  return {
    start
  };
};

exports.useStartProject = useStartProject;
},{"../utils/connectToFeed":"../utils/connectToFeed.js","../consts/steps.consts":"../consts/steps.consts.js","../utils/createLibrary.js":"../utils/createLibrary.js","../utils/tryCatch":"../utils/tryCatch.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ink = require("ink");

var _SelectPackageManager = require("../components/SelectPackageManager");

var _Loader = require("../components/Loader");

var _StaticSteps = require("../components/StaticSteps");

var _SuccessMsg = require("../components/SuccessMsg");

var _useStartProject = require("../hooks/useStartProject");

var _steps = require("../consts/steps.consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/// Name your project command
const App = ({
  name
}) => {
  const {
    exit
  } = (0, _ink.useApp)();
  const [packageManager, setPackageManager] = (0, _react.useState)(undefined);
  const [loadingMsg, setLoadingMsg] = (0, _react.useState)(undefined);
  const [steps, setSteps] = (0, _react.useState)([]);
  const [completed, setCompleted] = (0, _react.useState)(false);

  const updateSteps = newStep => {
    setSteps(previousSteps => [...previousSteps, newStep]);
  };

  const handleSelectManager = item => {
    setPackageManager(item.value);
    updateSteps((0, _steps.getStepsDetails)(_steps.STEPS.MANAGER));
  };

  const {
    start
  } = (0, _useStartProject.useStartProject)(name, packageManager, setLoadingMsg, updateSteps, setCompleted, exit);
  (0, _react.useEffect)(() => {
    if (packageManager) {
      start();
    }
  }, [packageManager]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_StaticSteps.StaticSteps, {
    steps: steps
  }), /*#__PURE__*/_react.default.createElement(_Loader.Loader, {
    loadingMsg: loadingMsg
  }), /*#__PURE__*/_react.default.createElement(_SelectPackageManager.SelectPackageManager, {
    selectManager: handleSelectManager,
    packageManager: packageManager
  }), /*#__PURE__*/_react.default.createElement(_SuccessMsg.SuccessMsg, {
    name: name,
    packageManager: packageManager,
    completed: completed
  }));
};

App.propTypes = {
  /// Name of your project
  name: _propTypes.default.string.isRequired
};
var _default = App;
exports.default = _default;
},{"../components/SelectPackageManager":"../components/SelectPackageManager.js","../components/Loader":"../components/Loader.js","../components/StaticSteps":"../components/StaticSteps.js","../components/SuccessMsg":"../components/SuccessMsg.js","../hooks/useStartProject":"../hooks/useStartProject.js","../consts/steps.consts":"../consts/steps.consts.js"}]},{},["index.js"], null)
//# sourceMappingURL=/index.js.map