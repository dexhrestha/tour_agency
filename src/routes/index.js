import React from 'react';
import Admin from './Admin';
import AddPackages from './AdminComponents/AddPackages';
import AdminProfile from './AdminComponents/AdminProfile';

import App from "../App"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";


export default ()=>(
	<Router>
		<Switch>
		<Route path="/" exact render ={()=> <App />} />
		<Route path="/admin" exact render={()=> <Admin />} />
		<Route path="/profile" exact render={()=> <AdminProfile />} />
		<Route path="/packages/add" exact render={()=> <AddPackages />} /> 
		</Switch>
	</Router>
);

