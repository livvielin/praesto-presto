// ListEntryView.js - Defines a backbone view class for the list entries.


var ListEntryView = Backbone.View.extend({

  template: _.template('<div><%= entry %></div>'),

  events: {
    'click': function() {
      this.model.removeEntry();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});