const { Button } = require('./src/widgets/Button')
const Main = imports.ui.main

let notes = [
    { title: "Terminar repartir Guias", description: "Esta es un descripton"},
    { title: "Terminar require.js", description: "Hola que hace"},
    { title: "Incorporar Babel.js", description: "Gracias amigo"}
]

let app

exports.init = () => {
    log("Gnote: Init")
}

exports.enable = () => {
    log("Gnote: Enable")
    app = new Button()
    for (let note of notes) {
        app.addNote(note)
    }
    Main.panel.addToStatusArea('g-notes', app)
}

exports.disable = () => {
    log("Gnote: Disable")
}