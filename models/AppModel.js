// AppModel.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {

    this.set('listEntry', new ListEntryModel());
    this.set('listEntryCollection', new ListEntryCollection());





  }



});