import React,{Component} from 'react';
import {Table , TableBody, TableHeader,TableHeaderColumn,TableRow, TableRowColumn} from 'material-ui/Table';

class ChartToTable extends Component{
	constructor(props){
		super(props);
		this.state={
			labelHeading:this.props.labelHeading,
			dataHeading:this.props.dataHeading,
			labels:this.props.labels,
			data:this.props.data,
			// id:[]
		}
	}

	render(){
		return(
			<Table className="animated slideInUp">
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>ID</TableHeaderColumn>
						<TableHeaderColumn>{this.state.labelHeading}</TableHeaderColumn>
						<TableHeaderColumn>{this.state.dataHeading}</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableRowColumn>0</TableRowColumn>
						<TableRowColumn>{this.state.labels[0]}</TableRowColumn>
						<TableRowColumn>{this.state.data[0]}</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>1</TableRowColumn>
						<TableRowColumn>{this.state.labels[1]}</TableRowColumn>
						<TableRowColumn>{this.state.data[1]}</TableRowColumn>
					</TableRow>

					<TableRow>
						<TableRowColumn>2</TableRowColumn>
						<TableRowColumn>{this.state.labels[2]}</TableRowColumn>
						<TableRowColumn>{this.state.data[2]}</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>3</TableRowColumn>
						<TableRowColumn>{this.state.labels[3]}</TableRowColumn>
						<TableRowColumn>{this.state.data[3]}</TableRowColumn>
					</TableRow>

				</TableBody>
			</Table>
			)
	}

}

export default ChartToTable;