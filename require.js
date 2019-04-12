const __dirname = imports.misc.extensionUtils.getCurrentExtension().path
const GLib = imports.gi.GLib

var getConfig = (path) => {
  if (typeof path == "object") {
    return path
  }
  if (GLib.file_test(path, GLib.FileTest.EXISTS)) {
    return JSON.parse(GLib.file_get_contents(path)[1])
  }
  return {
    separator: "/",
    home: __dirname
  }
}

/**
 * @todo Agregar alias de rutas
 */
var require = (path, config = `${__dirname}/require.config.json`) => {
  config = getConfig(config)
  let module
  if (path.slice(0,2) === './') {
    path = path.slice(2)
    let abs_path = `${config.home}/${path}`
    module = 'imports.misc.extensionUtils.getCurrentExtension().imports'

    for(let p of path.split(config.separator)) {
      module = module.concat(`["${p}"]`)
    }

    return eval(module)
  } else {
    module = 'imports'
    for(let p of path.split(config.separator)) {
      module = module.concat(`["${p}"]`)
    }
    return eval(module)
  }
}
