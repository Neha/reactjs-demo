var React = require('react');

var leftNav = React.createClass({
		render : function(){
			return (
				<ul className="leftNav">
					<li><a href="#">About Us</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">Contact us</a></li>
				</ul>
			)
		}
});

module.exports = leftNav;