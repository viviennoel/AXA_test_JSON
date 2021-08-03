
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Highcharts from 'highcharts/highstock';

class ChartHighstock extends Component {
	
	componentDidMount() {
		this.createChart();
	}

	componentDidUpdate() {
    this.createChart();
  }

	createChart() {
		let formatData = [];
		formatData = this.props.data.map(obj => {
			const dateInSeconds = Date.parse(obj['timestamp']);
			return [dateInSeconds, Number(obj['stocks'])];
		}).reverse();

		Highcharts.stockChart('chart', {
        rangeSelector: {
        	selected: 1
        },

        title: {
          text: this.props.title
        },
				
        series: [{
            name: '',
            data: formatData,
            tooltip: {
              valueDecimals: 2
            }
        }]
    });
	}

	render() {
		return (
			<div id='chart'>Highstock</div>
		);
	}
}

ChartHighstock.propTypes = {
	data: PropTypes.array,
  title: PropTypes.string
};

export default ChartHighstock;