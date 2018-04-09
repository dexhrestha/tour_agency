import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StatCards from './AdminComponents/StatCards'
import MyDrawer from './AdminComponents/MyDrawer';
import Chart from './AdminComponents/Chart';
import Paper from 'material-ui/Paper';
import LineChart from './AdminComponents/LineChart';
import RadarChart from './AdminComponents/RadarChart';
import Countdown from './AdminComponents/Countdown';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css'
class Admin extends Component{
	constructor(props){
		super(props);
		this.style={marginTop:10 ,marginRight:10,marginLeft: 10} 

	}
	
	render(){		
		return(
			<div style={this.style}>
			<MuiThemeProvider>
			    <MyDrawer />
			    <div className="row">
	        		<StatCards color='0'/>
	        		<StatCards color='1'/>
	        		<StatCards color='2'/>
	        		<StatCards color='3'/>

	        	</div>
	        	<div className="row">
	        	<div className="col-md-8 col-lg-8">
	        	<LineChart />
	        	</div>
	        	<div className="col-md-4 col-lg-4">
	        	
	        	<Countdown year="2019" month ="6" day="24" />
	        	</div>
	        	</div>
	        	
	        		
	        	
      		</MuiThemeProvider>
      		</div>
			)
	}
}


export default Admin;