import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyDrawer from './MyDrawer';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';

class AdminProfile extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div>
			<MuiThemeProvider>
				<MyDrawer />			    
      		</MuiThemeProvider>
      		</div>
			)
	}

}
export default AdminProfile;