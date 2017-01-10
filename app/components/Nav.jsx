var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav  = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>about</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>examples</Link>
    </div>
  );
}

module.exports = Nav;
