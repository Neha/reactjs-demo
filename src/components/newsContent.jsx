var React = require('react');

var NewsData = [{
	"headline": "JSLovers June's Event",
	"subheadline": "Make your June techful",
	"desc": "This is the description of the JSLovers upcoming event in June 2016. These sessions will have all information about the latest and upcomiing trend of the market.",
	"author": "Neha Sharma"
}, {
	"headline": "JSLovers Job openings",
	"subheadline": "Companies are looking for you",
	
	"desc": "This is the description of the JSLovers upcoming event in June 2016. These sessions will have all information about the latest and upcomiing trend of the market.",
	"author": "Jaswant Singh Sandhu"
}, {
	"headline": "JSLovers Projects openings",
	"subheadline": "We are looking for developers...",
	"desc": "This is the description of the JSLovers upcoming event in June 2016. These sessions will have all information about the latest and upcomiing trend of the market.",
	"author": "Guest Author"
}];

var NewsContent = React.createClass({
	render : function(){
		var list = NewsData.map(function(item){
				return (
					<div>
						<h3>{item.headline}</h3>
						<h5>{item.subheadline}</h5>
						<span> - {item.author}</span>
						<p>{item.desc}</p>
					</div>
				) });
				return ( 
						<ul>{list}</ul>
					)	
	}	
});

module.exports = NewsContent;