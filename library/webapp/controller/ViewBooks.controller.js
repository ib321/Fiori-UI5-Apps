sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ib.library.controller.ViewBooks", {
            onInit: function () {
                var oBookModel = this.getOwnerComponent().getModel("books");
                this.getView().setModel(oBookModel, "book");
                console.log("inside init of ViewBooks")
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("ViewBooks").attachMatched(this.onRouteMatched, this);
            },
            onRouteMatched: function (oEvent) {
                console.log("Inside ViewBooks onroutematched")
                var oArgs = oEvent.getParameter("arguments");
                console.log(oArgs);
                var sData = oArgs.bookdata;
                //converted into json object
                var oData = JSON.parse(sData);
                console.log(oData);

                //create a new json model
                var oModel = new sap.ui.model.json.JSONModel();
                //set your existing data into this new model
                //Adding Books to match the structure of view
                oModel.setData({ "Books": oData });
                //attach data to view
                this.getView().setModel(oModel, "book");
              },
        });
    });
