// ListEntryModel.js - Defines a backbone model class for entries.

var ListEntryModel = Backbone.Model.extend({

  defaults: {
    entry: ''
  },

  removeEntry: function() {
    this.trigger('removeEntry', this);
  }

});