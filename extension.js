const require = imports.misc.extensionUtils.getCurrentExtension().imports.require.require
const Extension = require('./src/index')

function init() {
  Extension.init()
}

function enable() {
  Extension.enable()
}

function disable() {
  Extension.disable()
}
