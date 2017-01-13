var React = require('react');
var {Link} = require('react-router');
// var WeatherMessage = require ('WeatherMessage');


var Examples =  (props) => {
  return (
    <div>
      <h1 className="text-center page-title">  🌎</h1>
      <ol>
        <li className="citiesE">
          <Link to='/?location=London'>London, UK</Link>
        </li>
        <li className="citiesE">
          <Link to='/?location=New York'>NYC, USA</Link>
        </li>
        <li className="citiesE">
          <Link to='/?location=Buenos Aires'>Buenos Aires, ARG</Link>
        </li>
        <li className="citiesE">
          <Link to='/?location=Victoria City'>Victoria City, HK</Link>
        </li>
        <li className="citiesE">
          <Link to='/?location=Bali'>Bali</Link>
        </li>
        <li className="citiesE">
            <Link to='/?location=Los Angeles'>Los Angeles, USA</Link>
            </li>
          <li className="citiesE">
            <Link to='/?location=Tokyo'>Tokyo, JP</Link>
          </li>
            <li className="citiesE">
              <Link to='/?location=Berlin'>Berlin, DE</Link>
            </li>
            <li className="citiesE">
          <Link to="/?location=rio">
            Rio de Janeiro, BR
          </Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
