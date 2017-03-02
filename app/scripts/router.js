var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var ShirtCollection = require('./models/shirt_models').ShirtCollection;
var CartCollection = require('./models/shirt_models').CartCollection;

var CatalogContainer = require('./components/shirts.jsx').CatalogContainer;
var CartContainer = require('./components/cart.jsx').CartContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'cart': 'cart'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(CatalogContainer),
      document.getElementById('app')
    )
  }
    cart: function(){
      ReactDOM.render(
        React.createElement(CatalogContainer),
        document.getElementById('appcart')
      )
    }

});

var appRouter = new AppRouter();

module.exports = {
  appRouter
};
