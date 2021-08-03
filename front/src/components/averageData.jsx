
import React, { Component } from 'react';

class AverageData extends Component {
	constructor(props){
        super(props);
        // Initiate the state
        this.state = {
          average: 0
        };
	}
	
	componentDidMount() {
		// Calculate the average of the stocks
		let total = 0;
		console.log()
		for(let i = 0; i < this.props.data.length; i++) {
			total += parseInt(this.props.data[i].stocks);
		}
		let avg = total / this.props.data.length;

		// Set state average to the result
		this.setState({
			average: avg
		});
	}

	render() {
		return (
			<div className="mt-5 appear">
				<div id='chart' className="p-5 text-center">
					<h1 className="blue">Average value : {this.state.average.toFixed(2)} euros</h1>
					<p>The average value of the stock market was calculated using the values of all the period selected. This value will be modified when updating the data.</p>
				</div>
			</div>
			
		);
	}
}

export default AverageData;