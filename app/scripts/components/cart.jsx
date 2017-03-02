var React = require('react');

var CartCollection = require('../models/shirt_models.js').CartCollection;

var CartContainer = React.createClass({


  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12">

            <nav className="navbar navbar-default">
                <div className="navbar-header">

                  <a className="navbar-brand" href="#"><img className="gsdlogo" src="./images/gsdlogo.png" alt=""/></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#"> T-Shirts <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">Cart</a></li>

                  </ul>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Shirt</th>
                        <th>Size</th>
                        <th>QTY</th>
                        <th>Deal Expires</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <th>Shirt</th>
                        <th>Size</th>
                        <th>QTY</th>
                        <th>Deal Expires</th>
                        <th><button type="button" className="btn btn-primary">Remove</button></th>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <th>Shirt</th>
                        <th>Size</th>
                        <th>QTY</th>
                        <th>Deal Expires</th>
                        <th><button type="button" className="btn btn-primary">Remove</button></th>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <th>Shirt</th>
                        <th>Size</th>
                        <th>QTY</th>
                        <th>Deal Expires</th>
                        <th><button type="button" className="btn btn-primary">Remove</button></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
    );
  }
});


module.exports = {
  CartContainer
};
