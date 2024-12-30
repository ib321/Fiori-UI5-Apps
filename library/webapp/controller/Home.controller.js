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
            onSavePress: function () {
                // Get the input values
                var id = this.getView().byId("idInput").getValue();
                var title = this.getView().byId("titleInput").getValue();
                var author = this.getView().byId("authorInput").getValue();
                var isbn = this.getView().byId("isbnInput").getValue();
            
                // Create a new book object
                var newBook = {
                    "id": id,
                    "title": title,
                    "author": author,
                    "isbn": isbn
                };
            
                // Get the "books" model
                var oModel = this.getOwnerComponent().getModel("books");
            
                // Get the current data from the model
                var oData = oModel.getData();
            
                // Add the new book to the data
                oData.Books.push(newBook);
            
                // Update the model with the new data
                oModel.setData(oData);
            },onDeletePress: function () {
                // Get the ID from the input field
                var idToDelete = this.getView().byId("idToDeleteInput").getValue();
            
                // Get the "books" model
                var oModel = this.getOwnerComponent().getModel("books");
            
                // Get the current data from the model
                var oData = oModel.getData();
            
                // Find the index of the book with the given ID
                var indexToDelete = oData.Books.findIndex(function(book) {
                    return book.id == idToDelete;
                });
            
                // If a book with the given ID was found, delete it
                if (indexToDelete !== -1) {
                    oData.Books.splice(indexToDelete, 1);
            
                    // Update the model with the new data
                    oModel.setData(oData);
                } else {
                    // If no book with the given ID was found, show an error message
                    sap.m.MessageToast.show("No book with the given ID was found.");
                }
            },                  
            onAddBook: function () {

            },
            onFindBook: function () {

            }
        });
    });
