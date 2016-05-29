var React = require('react');

var Logo = React.createClass({
	render : function(){
		return (
			<div className="logo">
				<h1>{this.props.logoName}</h1>
				<p>{this.props.title}</p>
			</div>
		)

	}
});

module.exports = Logo;