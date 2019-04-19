const PopupMenu = imports.ui.popupMenu
const Clutter = imports.gi.Clutter
const St = imports.gi.St
const { CheckBox } = imports.ui.checkBox

var Note = class extends PopupMenu.PopupBaseMenuItem {
  constructor(note) {
    super()
    this.check = new CheckBox
    this.check.actor.connect('clicked', event => {
      log("Fui marcado")
    })
    this.label = new St.Label({ text: note.title, y_align: Clutter.ActorAlign.CENTER })

    let container =  new St.BoxLayout
    container.add_actor(this.check.actor)
    container.add_actor(this.label)
    this.actor.add(container)
  }
}
