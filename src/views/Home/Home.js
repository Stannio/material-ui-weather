import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import WeahterCard from '../../components/weahter/WeatherCard';
import WeatherAPI from '../../utils/WeatherAPI';

export default class Home extends Component{

    constructor(props) {
        super(props);
        let weather = new WeatherAPI();

        this.state = {
            weather: {},
            forecast: {}
        };

        this.handleChange = this.handleChange.bind(this);

        weather.getWheather("London", function (res) {
            this.setState({ weather: res });
        }.bind(this));
        weather.getForecast("London", function (res) {
            this.setState({ forecast: res });
        }.bind(this))
    }

    handleChange(evt) {
        let weather = new WeatherAPI();

        if(evt.target.value.length > 3) {

            weather.getWheather(evt.target.value, function(res) {
                this.setState({ weather: res });
            }.bind(this));

            weather.getForecast(evt.target.value, function(res) {
                this.setState({ forecast: res });
            }.bind(this));
        }
    }

    render() {
        return (
            <div style={{marginTop: "16px"}}>
                <div className="row">
                    <div className="col s12 offset-l3 l6">
                        <Card>
                            <CardText>
                                <TextField
                                    hintText={"Search"}
                                    fullWidth={true}
                                    onChange={this.handleChange}/>
                            </CardText>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <WeahterCard current={this.state.weather} forecast={this.state.forecast}/>
                </div>
            </div>
        )
    }
}