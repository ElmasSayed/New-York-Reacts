
var React = require("react");

var Link = require("react-router").Link;

var Main = React.createClass({

  render: function() {

    return (

      <div className="main-container">
        <div className="container">

          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">NYT-React</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
              
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved">Saved Articles</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
            <h3 className="text-center">Search and Save articles.</h3>
          </div>

          {this.props.children}

         </div>
      </div>
    );
  }
});
module.exports = Main;
