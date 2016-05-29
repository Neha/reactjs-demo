var React =  require('react');
//var galleryItem =  require('./galleryItem');

var Gallery = React.createClass({
	render : function(){
		return (
			<ul className="galleryList">
				<li><img src="public/images/es6.png" /></li>
				<li><img src="public/images/html5.jpg" /></li>
				<li><img src="public/images/react.png" /></li>
				
			</ul>

		)
	}
});


module.exports = Gallery;