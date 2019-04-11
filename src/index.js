const { Button } = require('./src/widgets/Button')
const { exists, create_file, open_file, file_contents, write_file } = require('./src/helpers')
const Main = imports.ui.main
const DB = 'gnotes.json'

let notes = [
    { title: "Terminar repartir Guias", description: "Esta es un descripton"},
    { title: "Terminar require.js", description: "Hola que hace"},
    { title: "Incorporar Babel.js", description: "Gracias amigo"}
]

let app
let gnotes

exports.init = () => {
    log("Gnote: Init")
    if (!exists(DB)) {
        create_file(DB)
        write_file(DB, JSON.stringify({
                notes: [
                    { title: "Terminar con Wortix", description: "Terminar con proyecto" }
                ]
            })
        )
    }
}

exports.enable = () => {
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

exports.disable = () => {
    log("Gnote: Disable")
    app.destroy()
    app = undefined
}