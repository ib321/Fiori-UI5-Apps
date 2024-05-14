sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ib.library.controller.Home", {
            onInit: function () {
                var oDeviceModel = this.getOwnerComponent().getModel("device");
                console.log(oDeviceModel);
            },
            onViewAllBook: function () {
                var oBookModel = this.getOwnerComponent().getModel("books");
                var books = oBookModel.oData.Books;
                var jsonStringData = JSON.stringify(books);
                console.log(jsonStringData);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                console.log(oRouter);
                oRouter.navTo("ViewBooks", {bookdata: jsonStringData});
                
            },
            onAddBook: function () {

            },
            onFindBook: function () {

            }
        });
    });
