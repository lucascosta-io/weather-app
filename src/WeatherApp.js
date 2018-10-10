import React, { Component } from 'react';
import axios from 'axios';
import ForecastRow from './ForecastRow';

export default class WeatherApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            forecast: [],
            isLoaded : false,
            city:'Vancouver, BC'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    citiesToSelect = [
        'Vancouver, BC',
        'Sao Paulo, Brazil',
        'Tokio, Japan',
        'Sydney, Australia',
        'London, UK'
    ]

    handleChange(e){
        
        if(e.target.value){
            this.setState({
                city:e.target.value
            })
            this.getWeatherFromAPI(e.target.value);
        }

        
    }

    componentDidMount(){
        this.getWeatherFromAPI('Vancouver BC');
    }

    getWeatherFromAPI(city){
        axios.get(`https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")`).then((response) => {
            this.setState({
                isLoaded: true,
                forecast: response.data.query.results.channel.item.forecast
            })
        })
    }

    renderSelectOptions(){
        return(
            this.citiesToSelect.map((city) => {
                return(
                    <option key={city}>{city}</option>
                )
            })
        )
    }




    render() {
        return (
            <div>
                <select onChange={this.handleChange}>
                    {this.renderSelectOptions()}
                </select>
                <h2>10 Day Forecast</h2>
                {
                    this.state.forecast.map((day) => {
                return(
                    <ForecastRow key={day.date} day={day}  />
                )
            })}
            </div>
        )
    }
}
