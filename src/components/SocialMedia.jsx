var React = require('react');

var SocialMedia = React.createClass({
		render : function(){
			return (
				<div className="social-links">
					<ul>
						<li><a herf="#">Faceboook</a></li>
						<li><a herf="#">Twitter</a></li>
						<li><a herf="#">G+</a></li>
					</ul>
				</div>
			)
		}

})

module.exports = SocialMedia;