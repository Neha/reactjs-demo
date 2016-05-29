var React = require('react');

var Logo = require('./logo.jsx');
var Navigation = require('./navigation.jsx');
var SocialMedia = require('./SocialMedia.jsx');

var Footer = React.createClass({
	render : function(){
		return (
			<footer>
				<Logo logoName = "Reactjs Demo" title="this is the demo for JSLovers' event"/>
			    <SocialMedia />
			</footer>
		)
	}
});

module.exports = Footer;