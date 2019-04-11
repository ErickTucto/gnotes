const __dirname = imports.misc.extensionUtils.getCurrentExtension().path
const { Gio, GLib } = imports.gi

function exists(path) {
  let filename = `${__dirname}/${path}`
  return GLib.file_test(filename, GLib.FileTest.EXISTS)
}

function create_file(name) {
  let file = Gio.File.new_for_path(`${__dirname}/${name}`)
  return file.create(Gio.FileCreateFlags.PRIVATE, null)
}

function write_file(file, contents) {
  return GLib.file_set_contents(`${__dirname}/${file}`, contents)
}

function open_file(path) {
  return Gio.File.new_for_commandline_arg(`${__dirname}/${path}`)
}

function file_contents(file) {
  return GLib.file_get_contents(`${__dirname}/${file}`)[1]
}

exports.exists = exists
exports.create_file = create_file
exports.file_contents = file_contents
exports.open_file = open_file
exports.write_file = write_file
