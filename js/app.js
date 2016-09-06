//check that annyang is running
if (annyang) {
  var greeting = "Please sign in (say sign in, and then your username)"

  var index1=0;

  var intObject= setInterval(function() {
         document.getElementById("p").innerHTML+=greeting[index1];
         index1++;
         if(index1==greeting.length){
               clearInterval(intObject);
          }
      }, 100);


//define the functions our commands will run
    var jsonFlickrApi = function (results) {
      var photos = results.photos.photo;
      $.each(photos, function(index, photo) {
        $(document.createElement("img"))
          .attr({ src: '//farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_s.jpg' })
          //.addClass("flickrGallery")
          .appendTo(".flickrGallery");
      });
    };


  //define a command
  var commands = {
    'show pictures of *tag': function(tag) {
      $("#p").html("");
      var pictureGreeting = "Showing pictures of " + tag
      var index3 = 0
      var intObject= setInterval(function() {
               document.getElementById("p").innerHTML+=pictureGreeting[index3];
               index3++;
               if(index3==pictureGreeting.length){
                     clearInterval(intObject);
                }
            }, 100);


      // $("#p").html("Showing pictures of " + tag);
      $("img").remove();
      if (tag == "dog" || tag == "dogs" || tag == "puppies" || tag == "puppy") {
        $("#p").html("You said cats right? If you didn't, you should have...here's some cats.")
        tag = "cats"
      }
      var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e8e61a553ae71a5f7997b0dfdc1215b&sort=interestingness-desc&per_page=4&format=json&callback=jsonFlickrApi&tags='+tag;
      $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonFlickrApi',
        contentType: "application/json",
        dataType: 'jsonp'
      });
    },

    'sign in *username': function(username) {
        var sentence = ("Hello " + username + ", please say a command...(show pictures of ___ , search for ___ , tell a joke)")
        var index2=0;
        var intObject= setInterval(function() {
               document.getElementById("p").innerHTML+=sentence[index2];
               index2++;
               if(index2==sentence.length){
                     clearInterval(intObject);
                }
            }, 100);
        $("#p").html("");
        $("img").remove();
    },

    'search for *term': function(term) {
      var url = 'https://www.google.com/search?q='+term
      window.open(url, '_blank')
    },

    'tell a joke': function(){
      $("#p").html("Error...Humor module not found...");
      $("img").remove();
    }

    // 'self destruct': function(){
    //   $("body")
    // }

  };
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.///////////////////////////////////////////////////////////////////////////////////////////////////
  annyang.start();
}



