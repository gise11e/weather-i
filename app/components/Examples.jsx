var React = require('react');
var {Link} = require('react-router');

var Examples =  (props) => {
  return (
    <div>
      <h1 className="text-center page-title">examples</h1>
      <p>
        here are some example locations to try out
      </p>
      <ol>
        <li>
          <Link to='/?location=London'>london, uk</Link>
        </li>
        <li>
          <Link to="/?location=rio">
            rio, brazil
          </Link>
        </li>
      </ol>
    </div>

  )
};

module.exports = Examples;
