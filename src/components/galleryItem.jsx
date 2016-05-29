var React = require('react');

var GalleryData = [{
	"image" : "1"
}, {
	"image" : "2"
}, {
	"image" : "3"
}];

var GalleryContent = React.createClass({
	render : function(){
		var list = GalleryData.map(function(item){
				return (
					<div>
						<h3>{item.image}</h3>
						
					</div>
				) });
				return ( 
						<ul>{list}</ul>
					)	
	}	
});

module.exports = GalleryContent;