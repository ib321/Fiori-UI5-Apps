sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], function (Controller, Fragment) {
    "use strict";
    return Controller.extend("myController", {
        onOpenDialog: function () {
            if (!this._oDialog) {
                this._oDialog = sap.ui.xmlfragment("myFragment", this);
                this.getView().addDependent(this._oDialog);
            }
            this._oDialog.open();
        },
        onCloseDialog: function () {
            this._oDialog.close();
        }
    });
});
