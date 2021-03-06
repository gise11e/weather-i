var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav  = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text"></li>
          <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>💡</Link>
          </li>
          <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>🌎</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="search weahter by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
        </form>
      </div>
    </div>
  );
}
});

module.exports = Nav;
//
// var old =  {
//   <div>
//   <h2>Nav Component</h2>
//   <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//   <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>about</Link>
//   <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>examples</Link>
// </div>
// };
