// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  

  
  
  initialize: function(){
    this.on('add', this.enqueue, this)

  },

  enqueue: function(OURS){

    console.log('this is the storage', this.storage);
  },

  // dequeue: function(){

  // }

});

var test = new SongQueue();
console.log('songqueuemodel is:' , test)

