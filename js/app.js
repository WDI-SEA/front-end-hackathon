$(document).ready(function() {

console.log("it's connected!");







$(".fancy_title").lettering();
$(".meat").lettering('lines', 'words');
$('.alcohols').lettering();
$('.sebastian').lettering('lines');
$('.clickMe').lettering();
// #('.demo').lettering();


$(".alcohols *").rotate({bind:{
  click: function(){
    $(this).rotate({
      duration:4000,
      angle: 0,
      animateTo:360
      })
    }
  }
});

$(".sebastian *").rotate({bind:{
  click: function(){
    $(this).rotate({
      duration:4000,
      angle: 0,
      animateTo:360
      })
    }
  }
});

//vue js below
// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})


//document.ready parentheses below
});
