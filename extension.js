const Me = imports.misc.extensionUtils.getCurrentExtension()
const require = Me.imports.require.require
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