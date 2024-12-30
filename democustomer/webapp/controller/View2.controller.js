sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ib.democustomer.controller.View2", {
            onInit: function () {
                console.log("View2 init")
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachMatched(this.onRouteMatched, this);
            },

            onRouteMatched: function (oEvent) {
                console.log("View2 onroutematched")
                var oArgs = oEvent.getParameter("arguments");
                console.log(oArgs);
                var sData = oArgs.data;
                //converted into json object
                var oData = JSON.parse(sData);
                console.log(oData);

                //new model to bind data
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(oData);
                //add to view
                this.getView().setModel(oModel);
              },
              onClear: function()
              {
                var oView = this.getView();
                var oBlankData = {
                  custid: oView.byId("input1").getValue(),
                  name: oView.byId("input2").getValue(),
                  lname: oView.byId("input3").getValue(),
                  email: oView.byId("input4").getValue(),
                  street: "",
                  zipcode: "",
                  country: "",
                  phoneno: "",
                };

                  var oModel = new sap.ui.model.json.JSONModel();
                  oModel.setData(oBlankData);
                  this.getView().setModel(oModel);

              },
              onPreview: function(oEvent) {
                var oView = this.getView();
                var custId = this.getView().byId("input1").getValue();
                var Name =  oView.byId("input2").getValue();
                var lName = oView.byId("input3").getValue();
                var sEmail = oView.byId("input4").getValue();

                var sStreet = oView.byId("input5").getValue();
                var sZip =  oView.byId("input6").getValue();
                var sCtry = oView.byId("input7").getValue();
                var sPhone = oView.byId("input8").getValue();

                console.log("print cond:");
                console.log(!this.byId('Did'));
                if (!this.byId('Did')) 
                {
                    sap.ui.core.Fragment.load({
                        name: "com.ib.democustomer.frag.Dailog",
                        controller : this,
                        id: oView.getId()
                    }).then(function(oDailog){
                        oDailog.open();
                        var content = oDailog.getContent();
                        console.log(content);
                        let index = 0;
                        content[index+=2].setValue(custId);
                        content[index+=2].setValue(Name);
                        content[index+=2].setValue(lName);
                        content[index+=2].setValue(sEmail);
                        content[index+=2].setValue(sStreet);
                        content[index+=2].setValue(sZip);
                        content[index+=2].setValue(sCtry);
                        content[index+=2].setValue(sPhone);
                        
                    });
                }
                else
                {
                    this.byId('Did').open();
                    var content = this.byId('Did').getContent();
                    let index = 0;
                    content[index+=2].setValue(custId);
                    content[index+=2].setValue(Name);
                    content[index+=2].setValue(lName);
                    content[index+=2].setValue(sEmail);
                    content[index+=2].setValue(sStreet);
                    content[index+=2].setValue(sZip);
                    content[index+=2].setValue(sCtry);
                    content[index+=2].setValue(sPhone);
                }
            },
            onCancel: function(){
                this.byId('Did').close();
            },
            onSave: function(){
                this.byId('Did').open();
                var content = this.byId('Did').getContent();

                let index = 0;
                var oFragmentData = {
                    custid: content[index+=2].getValue(),
                    name: content[index+=2].getValue(),
                    lname: content[index+=2].getValue(),
                    email: content[index+=2].getValue(),
                    street: content[index+=2].getValue(),
                    zipcode: content[index+=2].getValue(),
                    country: content[index+=2].getValue(),
                    phoneno: content[index+=2].getValue(),
                };

                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(oFragmentData);
                    this.getView().setModel(oModel);

                    this.byId('Did').close();
            }
        });
    });
