const PopupMenu = imports.ui.popupMenu
const St = imports.gi.St

var Note = class extends PopupMenu.PopupBaseMenuItem {
  constructor(note) {
    super()

    this.label = new St.Label({ text: note.title })
    this.actor.add(this.label, { expand: true })
    this.actor.label_actor = this.label
  }
}
