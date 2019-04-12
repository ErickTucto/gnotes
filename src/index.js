const { require } = imports.misc.extensionUtils.getCurrentExtension().imports.require
const { Button } = require('./src/widgets/Button')
const { exists, create_file, open_file, file_contents, write_file } = require('./src/helpers')
const Main = require('ui/main')
const DB = 'gnotes.json'

let app
let gnotes

var init = () => {
  log("Gnote: Init")
  if (!exists(DB)) {
    create_file(DB)
    write_file(DB, JSON.stringify({ notes: [] }))
  }
}

var enable = () => {
  log("Gnote: Enable")
  gnotes = JSON.parse(file_contents(DB))
  app = new Button()
  if (gnotes.notes.length > 0) {
    for (let note of gnotes.notes) {
      app.addNote(note)
    }
  }
  Main.panel.addToStatusArea('g-notes', app)
}

var disable = () => {
  log("Gnote: Disable")
  app.destroy()
  app = undefined
}
