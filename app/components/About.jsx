var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">about</h1>
        <p>
          this is an application i built with react
        </p>
        <p>
          tools i used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">react</a> this was the js framework used.
              <li>
                <a href="http://openweathermap.org">open weather map</a> i used open weather map to search for weather data by city name
              </li>
          </li>
        </ul>
      </div>
    )
};

module.exports = About;
