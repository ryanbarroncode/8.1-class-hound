var React = require('react');

var ShirtCollection = require('../models/shirt_models.js').ShirtCollection;

var CatalogContainer = React.createClass({


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
                </div>
            </nav>

            <div className="page-header">
              <h1>Programmers have a great sense of humor! <br/> <small> Pick from our wide variety of hilarious shirts!</small></h1>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src="http://6dollarshirts.com/image/cache//data/designs/6ds-replacement-thumbnails/foundthishumerus-t-shirt-tn-300x300.jpg" alt="humerus" />
                  <div className="caption">
                    <h3 className="centertext">Humerus T-Shirt</h3>
                    <p className="centertext">If you find this shirt humerus, or someone you know might find it humerus, get this shirt!!!</p>
                    <p className="centertext green">$6.99</p>
                    <p className="centertext"></p>
                      <div className="form-group">
                        <select className="form-control sizebar" id="sel1">
                          <option>size</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                        </select>
                        <a href="#" className="btn btn-primary" role="button">Add To Cart</a>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src="https://ih1.redbubble.net/image.298755345.1876/ra,unisex_tshirt,x1000,322e3f:696a94a5d4,front-c,235,200,225,294-bg,ffffff.u2.jpg" alt="!false lol" />
                  <div className="caption">
                    <h3 className="centertext">!False</h3>
                    <p className="centertext">Clever programmers often time think they are funny but they are usually !funny</p>
                    <p className="centertext green"> $6.99</p>
                    <p className="centertext"></p>
                      <div className="form-group">
                        <select className="form-control sizebar" id="sel2">
                          <option>size</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                        </select>
                        <a href="#" className="btn btn-primary" role="button">Add To Cart</a>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src="https://ih0.redbubble.net/image.308761562.3763/ra,vneck,x1000,101010:01c5ca27c6,front-c,235,190,225,294-bg,ffffff.u2.jpg" alt="127.0.0.1" />
                  <div className="caption">
                    <h3 className="centertext">Home</h3>
                    <p className="centertext">127.0.0.1 is where you make it! Everybody knows that</p>
                    <p className="centertext green">$6.99</p>
                    <p className="centertext"></p>
                      <div className="form-group">
                        <select className="form-control sizebar" id="sel3">
                          <option>size</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                        </select>
                        <a href="#" className="btn btn-primary" role="button">Add To Cart</a>

                      </div>
                  </div>
                </div>
              </div>

            </div>


        </div>
      </div>
    </div>
    );
  }
});


module.exports = {
  CatalogContainer
};
