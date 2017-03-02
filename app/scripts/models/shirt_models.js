var Backbone = require('backbone');

var Shirt = Backbone.Model.extend({
  idAttribute: '_id'
});
var Cart = Backbone.Model.extend({

})


var ShirtCollection = Backbone.Collection.extend({
  model: Shirt,
});

var CartCollection = Backbone.Collection.extend({
  model: Cart,
});


module.exports = {
  Shirt,
  Cart,
  ShirtCollection,
  CartCollection
};
