const { require } = imports.misc.extensionUtils.getCurrentExtension().imports.require
const PanelMenu = imports.ui.panelMenu
const PopupMenu = imports.ui.popupMenu
const St = imports.gi.St
const Clutter = imports.gi.Clutter
const { ButtonAdd } = require('./src/widgets/ButtonAdd')
const { Note } = require('./src/widgets/Note')

var Button = class extends PanelMenu.Button {
  constructor() {
    super(0.0, "Notas para Gnome")
    let box = new St.BoxLayout();
    let label = new St.Label({ text: "Notas", y_align: Clutter.ActorAlign.CENTER })
    box.add(label)
    this.actor.add_child(box)

    this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem())
    let buttonAdd = new ButtonAdd
    this.menu.addMenuItem(buttonAdd)
    buttonAdd.connect('show-modal', () => { this.menu.close() })
  }
  addNote(note) {
    this.menu.addMenuItem(new Note(note), 0)
  }
  destroy() {
    super.destroy()
  }
}
