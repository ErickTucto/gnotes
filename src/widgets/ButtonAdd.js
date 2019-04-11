const PopupMenu = imports.ui.popupMenu
const St = imports.gi.St
const Clutter = imports.gi.Clutter

class ButtonAdd extends PopupMenu.PopupBaseMenuItem  {
    constructor() {
        super({ reactive: false })
        let button = new St.Button({
            style_class: 'system-menu-action',
            x_expand: true
        })
        button.set_label("+")

        this.actor.add(button)
    }
}

exports.ButtonAdd = ButtonAdd