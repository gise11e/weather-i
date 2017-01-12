var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h1 className="text-center" classID="weatherMessage">it's {temp} °C in {location} right now</h1>

  )
};

module.exports = WeatherMessage;
