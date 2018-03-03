import React,{Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chart from './Chart';
import {Bar, Line, Pie} from 'react-chartjs-2';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import ChartToTable from './ChartToTable';

class LineChart extends Component{
constructor(props){
	super(props);
	this.handleChange = this.handleChange.bind(this);
    this.handleTable = this.handleTable.bind(this);
	this.state={
		chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [19,50,22,10,5,44],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2,
            pointHoverBackgroundColor:'green',
            pointHoverBorderColor:'green',
            pointRadius:4,

        }]
    },

        status:true

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
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2,
            pointHoverBackgroundColor:'green',
            pointHoverBorderColor:'green',
            pointRadius:4,

        }]
        },
    })
}

handleTable(){
    this.setState({status:!this.state.status})
    console.log(this.state.status);
}
render(){
    console.log(this.state.status)
	
if(this.state.status){
    return(
		  <Card>
    <CardHeader
      title="Revenue"
      subtitle="by Year"
    />
    <CardMedia>
        <Line className="animated slideInDown" data={this.state.chartData} />
    </CardMedia>
    <CardActions>
        <FlatButton label="Random" onClick={this.handleChange} />
        <FlatButton label={(this.state.status)?"Table":"Graph"} onClick={this.handleTable}/>
    </CardActions>
  </Card>)
}
else{
    return(
      <Card>
    <CardHeader
      title="Revenue"
      subtitle="by Year"
    />
    <CardMedia>
        <ChartToTable labelHeading="Color" dataHeading="Price" labels={this.state.chartData.labels} data={this.state.chartData.datasets[0].data}/>
    </CardMedia>
    <CardActions>
        <FlatButton label="Random" onClick={this.handleChange} />
        <FlatButton label={(this.state.status)?"Table":"Graph"} onClick={this.handleTable}/>
    </CardActions>
  </Card>   
  )
}
}
}

export default LineChart;
