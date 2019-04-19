const ModalDialog = imports.ui.modalDialog
const St = imports.gi.St

var Modal = class extends ModalDialog.ModalDialog {
  constructor() {
    super({ styleClass: "modal-dialog"})
    super.addButton({
      label: "Cancel",
      action: this.onClose.bind(this),
      isDefault: true
    })
    super.addButton({
      label: "Guardar",
      action: this.onSave.bind(this)
    })
  }
  onClose() {
    super.close()
    super.destroy()
  }
  onSave() {
    this.onClose()
  }
}
