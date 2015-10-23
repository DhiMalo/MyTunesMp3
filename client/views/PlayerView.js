// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {//work on this next?
    this.model.on('remove', this.render, this);
    // on.('') - use this to: (1) listen for change or remove from the songQueue, then (2) if changed, re-render.
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : ''); //creates a new attribute (or property) to the audio element just defined, and sets it equal to the url destination (if song exists).  ...if not, sets src to an empty string.
  }

});
