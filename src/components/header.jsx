var React = require('react');
var Logo = require('./logo.jsx');
var Navigation = require('./navigation.jsx');
var SocialMedia = require('./SocialMedia.jsx');

var Header = React.createClass({
		render : function(){
			return(
				<header>
					<div className="logoContainer">
						<Logo logoName = "Reactjs Demo" title="this is the demo for JSLovers' event"/>
					</div>
					<div className="socialContainer">
						<SocialMedia />
					</div>
					<div className="navigationContainer">
						<Navigation />
					</div>
					
					
					
				</header>
			)
		}
});

module.exports = Header;