var React = require('react');
var Knob = require('./knob');

module.exports = React.createClass({
  htmlClass: function() {
    return this.props.model.name.replace(/\W+/, '-').toLowerCase()
  },
  render: function() {
    var model = this.props.model,
        knobs = this.props.model.knobs.map(function(knob) {
          return <Knob knob={ knob } key={ model.name + "." + knob.label } />;
        });

    return (
      <div className={ "amp " + this.htmlClass() }>
        <div className="amp-plate">
          <div className="knobs">
            { knobs }
          </div>
        </div>
        <div className="amp-speaker">
          <div className="amp-logo">
            { this.props.model.name }
            <small>{ this.props.model.type }</small>
          </div>
        </div>
      </div>
    );
  }
});
