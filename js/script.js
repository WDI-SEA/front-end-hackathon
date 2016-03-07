$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'end'],
    navigation: true,
    navigationTooltips: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'end'],
    loopBottom: true,
/*    fixedElements: 'nav',
    paddingTop: '50px'];*/
/*    fixedElements: ["nav#header", "nav.row", "div.columns", "ul", "li", "a"]*/
    // paddingTop: '80px'
  });
});