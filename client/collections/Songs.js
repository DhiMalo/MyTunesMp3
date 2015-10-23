// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  //a collection is an array of models that deal with certain instances.
  model: SongModel

});


var instanceofSong = new Songs;
console.log('instanceofSong is', instanceofSong)