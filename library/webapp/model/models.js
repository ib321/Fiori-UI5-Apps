sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },
            createBookModel: function () {
                var bookJson = {
                    "Books": [
                        {
                            "id": 1,
                            "title": "Book Title1",
                            "author": "Author Name1",
                            "isbn": "ISBN Number1"
                        },
                        {
                            "id": 2,
                            "title": "Book Title2",
                            "author": "Author Name2",
                            "isbn": "ISBN Number2"
                        },
                        {
                            "id": 3,
                            "title": "Book Title3",
                            "author": "Author Name3",
                            "isbn": "ISBN Number3"
                        },
                        {
                            "id": 4,
                            "title": "Book Title4",
                            "author": "Author Name4",
                            "isbn": "ISBN Number4"
                        },
                    ]
                };
                var oData = new JSONModel(bookJson);
                return oData;
            }
        };
});