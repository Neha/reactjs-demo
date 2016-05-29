var React = require('react');

var FormCont = React.createClass({
			getInitialState : function(){
				return { items : [] , newItemText : '' };
			},
			onChange : function(e){
				this.setState({ newItemText : e.target.value});
			},
			handleSubmit : function(e){
				e.preventDefault();

				var currentItems = this.state.items;
					currentItems.push(this.state.newItemText),
					txt ='';

				this.setState({ items : currentItems, newItemText : '' })
				
			},
			
			render : function(){
				return (
					<div>
						<form onSubmit = {this.handleSubmit}>
						<input type="text" onChange={this.onChange} value={this.props.currentItems}/>
						<p>{this.state.items}</p>
						<button>Submit</button>
						</form>
				</div>
			)
		}
})

module.exports = FormCont;

