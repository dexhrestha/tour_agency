import React,{Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chart from './Chart';
import {Bar, Line, Pie, Radar} from 'react-chartjs-2';
import FlatButton from 'material-ui/FlatButton';

class RadarChart extends Component{
constructor(props){
	super(props);
    this.handleClick = this.handleClick.bind(this);
	this.state={
		chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [19,50,22,10,5,44],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                
            ],
            borderWidth: 2
        }]
    }
			}

}
handleClick(){
    console.log("click")
    this.setState({chartData:{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50)],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                
            ],
            borderWidth: 2
        }]
    }})
}
render(){
	return(
		  <Card>
    <CardHeader
      title="Revenue"
      subtitle="by Year"
      
    />
    <CardMedia>
    	<Radar data={this.state.chartData}/>
    </CardMedia>
    <CardActions>
      <FlatButton label="Random" onClick={this.handleClick}/>
      
    </CardActions>
  </Card>
		)
}
}

export default RadarChart;