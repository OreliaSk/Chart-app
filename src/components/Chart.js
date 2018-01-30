import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
	constructor(props){
		super(props);
		this.state = {
			chartData : {
				labels: ['test', 'test2', 'test3'],
				datasets: [{
					label: 'titre',
					datasets: [
						10,
						20, 
						30
					]
				}],
			}
		}
	}
	render(){
		return(
			<div className="chart">
				<Bar
					data={this.state.chartData}
					options={{
						maintainAspectRatio: true
					}}
				/>
			</div>
		)
	}
}

export default Chart ;