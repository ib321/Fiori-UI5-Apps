sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ib.democustomer.controller.View1", {
            onInit: function () {

            },onCreateEmp: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("View3");

            },
            onSubmit: function () {
                // get the input values
                var oModel = this.getView();
                var custId = this.getView().byId("input1").getValue();
                var Name =  oModel.byId("input2").getValue();
                var lName = oModel.byId("input3").getValue();
                var sEmail = oModel.byId("input4").getValue();
                //var sPhone = oModel.getProperty("/phone");
                console.log("Hii View1");
                // create a JSON object to store the data\
                var oData = {
                    custid: custId,
                    name: Name,
                    lname: lName,
                    email: sEmail,
                };
                // Convert JSON data to string with indentation
                var sData = JSON.stringify(oData, null, 2);
                console.log(sData);
                // creates a router object 
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // /View2/data(sData)
                oRouter.navTo("View2", {data: sData});
                /*
                sap.m.MessageBox.show(sData, { // Show message box with JSON data
                    icon: sap.m.MessageBox.Icon.INFORMATION, // Set icon type
                    title: "JSON Data", // Set title
                    actions: [sap.m.MessageBox.Action.OK], // Set action button
                    onClose: function (oAction) { // Set callback function when message box is closed
                        // Do something
                    }});
                */
            }

        });
    });
