const __dirname = imports.misc.extensionUtils.getCurrentExtension().path
const { Gio, GLib } = imports.gi

var exists = (path) => {
  let filename = `${__dirname}/${path}`
  return GLib.file_test(filename, GLib.FileTest.EXISTS)
}

var create_file = (name) => {
  let file = Gio.File.new_for_path(`${__dirname}/${name}`)
  return file.create(Gio.FileCreateFlags.PRIVATE, null)
}

var write_file = (file, contents) => {
  return GLib.file_set_contents(`${__dirname}/${file}`, contents)
}

var open_file = (path) => {
  return Gio.File.new_for_commandline_arg(`${__dirname}/${path}`)
}

var file_contents = (file) => {
  return GLib.file_get_contents(`${__dirname}/${file}`)[1]
}
