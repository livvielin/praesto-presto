// ListEntryCollection.js - Defines a backbone collection class for entries.
var ListEntryCollection = Backbone.Collection.extend({

  model: ListEntryModel,

  initialize: function() {
    this.on('removeEntry', function(entry) {
      this.handleRemove(entry);
    }, this);
  },

  handleRemove: function(e) {
    this.remove(e);
  },


});