const PanelMenu = imports.ui.panelMenu
const PopupMenu = imports.ui.popupMenu
const St = imports.gi.St
const Clutter = imports.gi.Clutter
const { ButtonAdd } = require('./src/widgets/ButtonAdd')
const { Note } = require('./src/widgets/Note')

class Button extends PanelMenu.Button {
    constructor() {
        super(0.0, "Notas para Gnome")
        let box = new St.BoxLayout();
        let label = new St.Label({ text: "Notas", y_align: Clutter.ActorAlign.CENTER })
        box.add(label)
        this.actor.add_child(box)

        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem())
        this.menu.addMenuItem(new ButtonAdd)
    }
    addNote(note) {
        this.menu.addMenuItem(new Note(note), 0)
    }
}

exports.Button = Button