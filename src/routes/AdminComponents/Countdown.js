import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardHeader,CardMedia} from 'material-ui/Card'
class Countdown extends Component{
	constructor(props){
		super(props);
		this.date=new Date()
		this.serverDate={month:this.date.getUTCMonth(),
						year:this.date.getUTCFullYear(),
						day:this.date.getUTCDay()}
		
		this.state={month:this.props.month - this.serverDate.month -1 ,
			year:this.props.year  - this.serverDate.year,
			days:this.props.day  - this.serverDate.day+1,
	}}


	tick(){
		this.setState(prevState =>({days:this.props.day  - this.serverDate.day+1}))
	}

	componentDidMount(){
		if(this.isOfferOn()){
		this.timer=setInterval(()=>{
			this.tick()
			},1000)
	}
	}
	isOfferOn(){
		if(this.state.year>0){
			return true
		}
		else{
		}
	}
	render(){
		if(this.isOfferOn()){
			return(
			<Card >
			<CardHeader
			title="Offer Countdown"
			>
			</CardHeader>
			<CardMedia>
			<table>
				<tr>
					<th>Year</th>
					<th>Month</th>
					<th>Day</th>
				</tr>
				<tr>
					<td>{this.state.year}</td>
					<td>{this.state.month}</td>
					<td>{this.state.days}</td>
				</tr>
			</table>
			<table>
				<tr>
					<th style={{textAlign:"left"}}>Offer Price</th>
					<th style={{textAlign:"right"}}>Actual Price</th>						
				</tr>
				<tr>
					<td style={{textAlign:"left"}}>20</td>
					<td style={{textAlign:"right"}}>40</td>
				</tr>
				</table>
			
			</CardMedia>
			</Card>
			)
		}
		else{
			return(
			<Card >
			<div>
			<h2> Offer Not Available</h2>
			<h3>Add offer</h3>
			</div>
			</Card>
			)
		}
		
	}
}

export default Countdown
