var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
    render: function() {
      return (
      <div className="columns small-12">
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="city"/>
          <button className="button expanded hollow">get weather</button>
        </form>
      </div>

    );
  }
});

module.exports = WeatherForm;
