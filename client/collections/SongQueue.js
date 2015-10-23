// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('remove', this.dequeue, this); //listens for the songQueue Entry View's click event.
  },

  enqueue: function() {
    if(this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function() {
    this.remove(this);
 },

  playFirst: function(){
    this.at(0).play(); // plays the index 0 song in queue.
  },

  playNext: function() {

  },


});

var test = new SongQueue();
console.log('songqueuemodel is:' , test)

