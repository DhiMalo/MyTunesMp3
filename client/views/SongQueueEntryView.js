// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  //this click event should remove songs from queue --- dequeue
  // events: {
  //   'click': function() {
  //     this.model.add();
  //   }
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
    //HEY!: The attributes property is the internal hash containing the model's state.
  }


});