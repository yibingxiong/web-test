(function (modules) { // webpackBootstrap
  // The module cache
  var installedModules = {};

  // The require function
  function __webpack_require__(moduleId) {

    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }
  return __webpack_require__(__webpack_require__.s = "./test2.js");
})
  ({

    "./test2.js":
      (function (module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nconsole.log('1');\n\n//# sourceURL=webpack:///./test2.js?");

      })

  });