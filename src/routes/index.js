import React from 'react';
import Admin from './Admin';
import App from "../App"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";


export default ()=>(
	<Router>
		<Switch>
		<Route path="/" exact render ={()=> <App />} />
		<Route path="/admin" exact render={()=> <Admin />} />
		</Switch>
	</Router>
);

