$(document).ready(function() {

function businessCardViewModel() {
  var self = this;
  // Object
  self.card = {
    name: ko.observable("Bobby Tables"),
    title: ko.observable("Database Administrator"),
    email: ko.observable("btables@drop.com"),
    website: ko.observable("BobbyTables.com")
  }
}

ko.applyBindings(businessCardViewModel);
}); // end of Doc ready

