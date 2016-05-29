var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var HashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var History = require("history");
var useRouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = History.createHashHistory;
var CreateHashHistory = require('history/lib/createHashHistory.js');

var Base = require('./components/base.jsx');
var Gallery = require('./components/gallery.jsx');
var News = require('./components/newsContent.jsx');
var PageOne = require('./components/compOne.jsx');
var FormCont = require('./components/form.jsx');

// Remove the hash issue
var appHistory = useRouterHistory(CreateHashHistory)({ 
	queryKey: false 
})

var Routes = (
 <Router history={appHistory}>
 	<Route path="/" component={Base} >
	 	<IndexRoute components= { {News : News, Other : PageOne } }/>
		<Route path="/gallery" component= {Gallery}></Route>
		<Route path="/news" component= {News}></Route>
		<Route path="/form" component= {FormCont}></Route>
 	</Route>
 </Router>
);

module.exports = Routes;

