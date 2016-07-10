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
    initials: ko.observable("BT"),
    colors: ko.observableArray(['black', 'blue', 'green', 'red', 'pink', 'rebeccapurple'])
  }

  self.selectedColor = ko.observable('black');

  // Operations
  // self.addColor = function() {
  //   // $('.initials').css('color', colors[0]);
  //   return colors;
  // }
  self.letterCharge = ko.computed(function() {
    var total = 0;
    var cost = (1/100);
    total =+ (
      (cost * self.card.name().length)
      + (cost * self.card.title().length)
      + (cost * self.card.email().length)
      + (cost * self.card.website().length)
      + (cost * self.card.initials().length)
      );
    return total;
  })
}

ko.applyBindings(businessCardViewModel);
}); // end of Doc ready

