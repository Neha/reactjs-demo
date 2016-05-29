var React = require('react');
var Link = require('react-router').Link;

var Nav = React.createClass({
	render : function(){
			return (
				<div className="topNav">
					<Link to={'/news'}>News</Link>
					<Link to={'/gallery'}>Gallery</Link>

				</div>  
			)

	}

});

module.exports = Nav;