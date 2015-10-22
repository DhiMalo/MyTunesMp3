// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    console.log('in libraryView, this is:', this);

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      }) // line 16 creates an array for each song and appends them under the Library element.
    );
  }

});
