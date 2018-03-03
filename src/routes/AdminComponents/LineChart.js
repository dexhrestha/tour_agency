import React,{Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chart from './Chart';
import {Bar, Line, Pie} from 'react-chartjs-2';
import FlatButton from 'material-ui/FlatButton';

class LineChart extends Component{
constructor(props){
	super(props);
	this.handleChange=this.handleChange.bind(this);
	this.state={
		chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [19,50,22,10,5,44],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
			}
}
handleChange(){
	this.setState({chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },})
}
render(){
	return(
		  <Card>
    <CardHeader
      title="Revenue"
      subtitle="by Year"
      
    />
    <CardMedia>
    	<Line data={this.state.chartData}/>
    </CardMedia>
    <CardActions>
      <FlatButton label="Random" onClick={this.handleChange} />
      
    </CardActions>
  </Card>
		)
}
}

export default LineChart;