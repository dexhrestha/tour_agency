import React ,{Component} from 'react';
import Paper from 'material-ui/Paper';
import SvgIcon from 'material-ui/SvgIcon';
import 'bootstrap/dist/css/bootstrap.css';
import NotificationSms from 'material-ui/svg-icons/notification/sms';
class StatCards extends Component{
	constructor(props){
		super(props);
		this.colors=[
		"#EC644B",
		"#22A7F0",
		"#BDC3C7",
		"#F39C12"
		]
		this.state={color:this.colors[this.props.color]}
	}
	render(){
		return(
	
    <div className="col-md-6 col-xs-12 col-lg-3" style={{marginBottom:10, marginTop:10}}>
    	<Paper zDepth={2} rounded={true}>	
    	<div className="panel panel-green" style={{backgroundColor:this.colors[this.props.color],}}>
    		<div className="row">
    			<div className="col-xs-3">
    				<NotificationSms style={{margin:20 , width:50,height:50,color:"white"}}/>
    			</div>
    			<div className="col-xs-9 text-right">
    				<div className="huge">26</div>
    				<div>New Comments!</div>
    			</div>
    		</div>
    	</div>
    	<a href="#">
    	<div className="panel-footer " style={{color:this.state.color}} onClick={()=>{this.props.color+=1}}>
    		<span className="pull-left">View Details</span>
    		<span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

    	</div>
    	</a>
    	</Paper>
    </div>     
    
    )
	}
}

export default StatCards;