const { require } = imports.misc.extensionUtils.getCurrentExtension().imports.require
const { Modal } = require('./src/widgets/Modal')
const PopupMenu = imports.ui.popupMenu
const St = imports.gi.St
const Clutter = imports.gi.Clutter

var ButtonAdd = class extends PopupMenu.PopupBaseMenuItem  {
  constructor() {
    super({ reactive: false })
    let button = new St.Button({
      style_class: 'system-menu-action',
      x_expand: true
    })

    button.set_label("+")
    button.connect('clicked', this.onClick.bind(this))

    this.actor.add(button)
  }
  onClick() {
    this.emit('show-modal')
    this.modal = new Modal
    this.modal.open()
    this.emit('shown-modal')
  }
}
