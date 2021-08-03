import React, { Component } from 'react';
import ChartHighstock from '../components/chartHighstock';
import TableStocks from '../components/tableOfStocks';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import axios from 'axios';

class Stats extends Component {
	constructor(props){
        super(props);
        // Initiate the state
        this.state = {
          data: [], 
          title: 'Evolution of stocks (in €) according to time',
          type: 'd3'
        };

        // Bind the function for Children to parent update
        this.updateData = this.updateData.bind(this);
        this.displayButton = this.displayButton.bind(this);
    }

    // Get the data to display
	componentDidMount() {
        // Have the data been modified? (Use database instead)
        let dataStorage = localStorage.getItem('data');
        dataStorage = JSON.parse(dataStorage);

        // Reset error message
        this.resetMsg();

        if (!dataStorage){
            axios.get('http://localhost:3000/stocks?_limit=20')
            .then(response => {
                this.setState({
                  data: response.data
                });
    
                // Save it to Redux or LocalStorage
                localStorage.setItem('data', JSON.stringify(this.state.data));
            })
            .catch(function (error) {
                document.getElementById('container_msg').innerHTML = "Le service est momentanément indisponible"
            })
        } else {
            // S'assurer que le state est bien à jour
            this.setState({
                data: dataStorage
            });
        }
    }

    // Reset the error messages
    resetMsg(){
        if (document.getElementById('container_msg')){
            document.getElementById('container_msg').innerHTML = "";
        }
    }

    // Update the data
    updateData(inputId, index) {
        // Update the array with the correct value
        let newValue = document.getElementById(inputId).value;
        let updatedData = this.state.data;
        updatedData[index].stocks = newValue;

        // Set state with the modified array
        this.setState({
            data: updatedData
        });

        // Save to Redux or localhost (Database is better)
        localStorage.setItem('data', JSON.stringify(this.state.data));

        // Reset the value of the input for esthetic purposes + display none button
        document.getElementById("updateButton_" + index).style.display = "none";
    }

    // Display the button to update
    displayButton(inputId, buttonId){
        if(document.getElementById(inputId).value !== null){
            document.getElementById(buttonId).style.display = "unset";
        } else {
            document.getElementById(buttonId).style.display = "none";
        }
    }

    // Render the page
	render() {
		return (
            <div>
                <Header></Header>
                <div className="main_wrapp">

                    {/* To display important messages */}
                    <div id="container_msg" className="text-center pt-5 pb-5"></div>
                    
                    <div className="col-md-10 offset-md-1 appear pb-5" data-aos="fade">
                        {/* Graph for the stochs gestion */}
                        {!this.state.data.length || !this.state.data ? 
                        <div>
                            <div className="spinner-border" role="status"></div>
                        </div>
                        : <ChartHighstock data={this.state.data} title={this.state.title} />}
                    </div>
                    
                    <div className="pt-5">
                        {/* Table for Data modification */}
                        {!this.state.data.length ? <div className="spinner-border" role="status"></div>
                        : <TableStocks data={this.state.data} title={this.state.title} updateData={this.updateData} displayButton={this.displayButton}/>}
                    </div>
                </div>
                <Footer></Footer>
            </div>
		);
	}
}

export default Stats;