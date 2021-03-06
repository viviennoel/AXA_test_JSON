import React from 'react';
import PropTypes from 'prop-types';

const TableStocks = (props) => {
	// Get the data
	const arrayData = props.data;
	console.log(arrayData);

	// Create the table structure
	const chartData = arrayData.map(obj => {
		// Populate the columns
		return (
			<div key={obj.index} className="row d-flex justify-content-around">
                    <div className="cell col-3 col-md-2">{obj.index}</div>
                    <div className="cell col-3 col-md-3">{obj.timestamp.split('T')[0]}</div>
                    <form className="col-6 col-md-7">
						{/* On change, the button appear */}
                    	<input type="number" className="inputStocks" name="stocks" placeholder={obj.stocks} id={'updateInput_' + obj.index} required step="0.01"
							onChange={() => props.displayButton('updateInput_' + obj.index, 'updateButton_' + obj.index)}
						></input>
						
						{/* On click, the value is modified */}
						<button type="submit" className="buttonsStocks" id={'updateButton_' + obj.index} 
							onClick={() => props.updateData('updateInput_' + obj.index, obj.index)}
						>Valider</button>
                    </form>
			</div>
		)
	})

	// Display the table on the page
	return (
		<div className="row pt-5 table_wrapp">
			<div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 justify-content-around table">
				<div className="row text-center title_wrapp">
					<div className="cell title">Tableau des stocks</div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
				<div className="row header d-flex justify-content-around mb-3">
					<div className="cell col-3 col-md-2" >Key</div>
					<div className="cell col-3 col-md-3">Date</div>
					<div className="cell  col-6 col-md-7">Stocks (€)</div>
				</div>
                {chartData}
			</div>
		</div>
	)
}

TableStocks.propTypes = {
  chartData: PropTypes.array
};

export default TableStocks;