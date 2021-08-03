import React, { Component } from 'react';
import ChartHighstock from '../components/chartHighstock';
import AverageData from '../components/averageData';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import axios from 'axios';

class Stats extends Component {
	constructor(props){
        super(props);
        // Initiate the state
        this.state = {
          data: [], 
          title: 'Évolution des stocks en fonction du temps',
          type: 'd3'
        };
    }

    // Get the data to display
	componentDidMount() {
        // Have the data been modified? (Use database instead)
        let dataStorage = localStorage.getItem('data');
        dataStorage = JSON.parse(dataStorage);

        // Reset error message
        this.resetMsg();

        // Get the data for all the year
        axios.get('http://localhost:3000/stocks')
            .then(response => {
                // If the data were modified
                if (dataStorage){
                    let responseSet = response.data.slice(19);
                    response.data = dataStorage.concat(responseSet);
                }

                this.setState({
                  data: response.data
                });
            })
            .catch(function (error) {
                document.getElementById('container_msg').innerHTML = "Le service est momentanément indisponible"
            })
    }

    // Reset the error messages
    resetMsg(){
        if (document.getElementById('container_msg')){
            document.getElementById('container_msg').innerHTML = "";
        }
    }

    // Render the page
	render() {
		return (
            <div>
                <Header></Header>
                <div className="main_wrapp">

                    {/* To display important messages */}
                    <div id="container_msg"></div>
                    
                    <div className="col-md-10 offset-md-1 appear" data-aos="fade">
                        {/* Graph for the stochs gestion */}
                        {!this.state.data.length || !this.state.data ? <div className="spinner-border" role="status"></div>
                        : <ChartHighstock data={this.state.data} title={this.state.title} />}
                    </div>

                    {/* Display the average value of the stock */}
                    {!this.state.data.length || !this.state.data ? <div className="spinner-border" role="status"></div>
                        : <AverageData data={this.state.data} title={this.state.title} />}
                </div>
                <Footer></Footer>
            </div>
		);
	}
}

export default Stats;