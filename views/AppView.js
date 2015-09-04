// AppView.js - Defines a backbone view class for the whole to do app.

var AppView = Backbone.View.extend({

  headerHTML: '<h1>Awesome To Do List</h1>',

  formHTML: '<form><input type="text" name="entry" placeholder="What do you want to do?"></form>',
  
  footerHTML: '<div>Copyright 2015</div>',
  
  el: 'body',

  events: {
    'keypress input': 'handleAdd'
  },

  handleAdd: function(e) {
    if (e.which == 13) {
      e.preventDefault();
      // create a new list entry model based on user input
      var userInput = $('input').val();
      var newEntry = new ListEntryModel();
      newEntry.set('entry', userInput);
      // add the new list entry model to the list entry collection
      this.model.get('listEntryCollection').add(newEntry);
      this.render();
    }
  },

  render: function() {
    this.$el.children().detach();

    // header html
    this.$el.append(this.headerHTML);

    // html form
    this.$el.append(this.formHTML);

    // listentryviews
    this.$el.append(
      this.model.get('listEntryCollection').map(function(entry) {
        return new ListEntryView({model: entry}).render();
      })
    ); 

    // footer
    this.$el.append(this.footerHTML);

  }


});