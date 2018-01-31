import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
	constructor(props){
		super(props);
		this.state = {
			chartData : {
				labels: [
					'1er arr.',
					 '2e arr.',
					 '3e arr',
					 '4e arr.',
					 '5e arr.',
					 '6 arr.',
					 '7e arr.',
					 '8e arr.',
					 '9e arr.',
					 '10e arr.',
					 '11e arr.',
					 '12e arr.',
					 '13e arr.',
					 '14e arr.',
					 '15e arr.',
					 '16e arr.',
					 '17e arr.',
					 '18e arr.',
					 '19e arr.',
					 '20e arr.',
					],
				datasets: [{
					label: 'Prix des arrondissements autour de Paris (75000)',
					data: [
						11757,
						10858, 
						10787,
						11119,
						12606, 
						13924,
						13538,
						10129, 
						10348,
						9000,
						8995, 
						7757,
						8750,
						8896,
						8980,
						9621,
						8914,
						7529,
						6058,
						7683
					],
					backgroundColor: '#000'
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
					}}
				/>
			</div>
		)
	}
}

export default Chart ;