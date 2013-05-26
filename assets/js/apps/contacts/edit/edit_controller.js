ContactManager.module('ContactsApp.Edit', function(ContactEdit, ContactManager, Backbone, Marionette, $, _){
  ContactEdit.Controller = {
    editContact: function(id){
      var loadingView = new ContactManager.Common.Views.Loading({
        title: "Artificial Loading Delay",
        message: "Data loading is delayed to demonstrate using a loading view."
      });
      ContactManager.mainRegion.show(loadingView);

      var fetchingContact = ContactManager.request("contact:entity", id);
      $.when(fetchingContact).done(function(contact){
        var view;
        if(contact !== undefined){
          view = new ContactEdit.Contact({
            model: contact
          });
        }
        else{
          view = new ContactManager.ContactsApp.Show.MissingContact();
        }

        ContactManager.mainRegion.show(view);
      });
    }
  };
});