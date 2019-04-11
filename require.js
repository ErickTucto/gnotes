const __dirname = imports.misc.extensionUtils.getCurrentExtension().path;
(function (context) {'use strict';

  // avoid redefinition of the require function
  // in case this is a global context
  if ('require' in context) return;

  var
    // will meomize every required module
    cache = Object.create(null),

    // in charge of actually evaluating modules
    executeAndCache = function (file) {
      var
        // by default, each module has an exports
        // reference object: it's there to export stuff!
        exports = {},
        // however, there is also a module reference
        // which has an exports property that points
        // to the very same object
        module = {exports: exports, id: file}
      ;
      // the file will be evaluated on the global scope
      // using `exports` reference as top level context
      Function(     // each module has 3 references
        'require',  // the require utility
        'exports',  // the exports object
        'module',   // and the module one
        read(file)  // the content to evaluate "sandboxed"
                    // eventually in charge of using
                    // "use strict" at its very beginning
                    // in order to avoid accidental
                    // global scope/context pollution
      ).call(
        exports,    // exports will be top level context
        require,    // require will be passed as utility
        exports,    // there is an exports reference too
        module      // and there is also a module reference
      );
      // cache the exported object
      // we don't cache directly exports
      // because if someone has redefined it
      // within the module content, we gonna
      // trash the exports object and use
      // whatever was exported instead
      // e.g. module.exports = function () {};
      // to export directly a class or a function
      cache[file] = module.exports;
      // return the module and from next time on
      // simply serve the cached one
      return cache[file];
    },

    // used to read a file content
    read =  (context.java &&      // available in Nashorn
            function (file) {
              return new java.lang.String(
                java.nio.file.Files.readAllBytes(
                  java.nio.file.Paths.get(file)
                )
              );
            }) ||
            context.readFile ||   // available in JSC
            context.read     ||   // available in SpiderMonkey
            (typeof imports === 'object' &&
            function(file){       // available in GJS
              return imports.gi.GLib.file_get_contents(file)[1];
            }) ||
            function (file) {     // browsers (sync) fallback
              var xhr = new XMLHttpRequest;
              xhr.open('GET', file, false);
              xhr.send(null);
              return xhr.responseText;
            }

    // read can be eventually normalized
    // for pretty much every other environment
  ;

  // the exported require function
  context.require = require;

  function require(file) {
    if (file.slice(-3) !== '.js') file += '.js';
    if (file.slice(0,2) == './') file = __dirname + file.slice(1)
    // optional logic to path-normalize the module
    // then return the cached result
    // or execute the module in a "sandbox"
    // and store it in the cache

    return cache[file] || executeAndCache(file);
  }

  // in case you'd like to use require in ES2015 too
  // try { eval('export default context.require'); }
  // catch (notES2015) { /*\_(ツ)_*/ }

}(this)); // <= we are going to use `this` context
          //    in order to export the require()