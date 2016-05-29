var React = require('react');
var Header = require('./header.jsx');
var Nav = require('./navigation.jsx');
var News = require('./newsContent.jsx');
var Footer = require('./footer.jsx');
var LeftNav = require('./leftNav.jsx');
var FormCont = require('./form.jsx');



var Base = React.createClass({
		render : function(){
			
			return (
				
					<section>
						<Header />
						 <section className="content">
						 	<LeftNav />
						 	{this.props.News}
							{this.props.children}
						 </section>
						<Footer />
					</section>
				
					
				
			)
		}	
});

module.exports = Base;