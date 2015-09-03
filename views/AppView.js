// AppView.js - Defines a backbone view class for the whole to do app.

var AppView = Backbone.View.extend({

  headerHTML: '<h1>Awesome To Do List</h1>',

  formHTML: '<form><input type="text" name="entry" placeholder="What do you want to do?"></form>',
  
  footerHTML: '<div>Copyright 2015</div>',
  
  el: 'body',

  events: {
    'keypress input': function(e) {
      if (e.which == 13) {
        e.preventDefault();
        this.render();
      }
    }
  },

  render: function() {
    this.$el.children().detach();
    // header html
    this.$el.append(this.headerHTML);

    // html form
    this.$el.append(this.formHTML);

    // listentryviews


    // footer
    this.$el.append(this.footerHTML);

  }


});