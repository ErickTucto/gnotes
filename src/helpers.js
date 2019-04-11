const __dirname = imports.misc.extensionUtils.getCurrentExtension().path
const { Gio, GLib } = imports.gi

function exists(path) {
    filename = `${__dirname}/path`
    log(filename)
    return Gio.file_test(filename, GLib.FileTest.EXISTS)
}

exports.exists = exists