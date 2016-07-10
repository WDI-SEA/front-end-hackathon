$(document).ready(function() {

$(".fancy_title").lettering();

function businessCardViewModel() {
  var self = this;
  // Object
  self.card = {
    name: ko.observable("Bobby Tables"),
    title: ko.observable("Database Administrator"),
    email: ko.observable("btables@drop.com"),
    website: ko.observable("BobbyTables.com"),
    initials: ko.observable("BT")
  }

  self.availableColors = [];
}

ko.applyBindings(businessCardViewModel);
}); // end of Doc ready

