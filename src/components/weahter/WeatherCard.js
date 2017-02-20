import React, { Component, PropTypes } from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

export default class WeatherCard extends Component {

    static propTypes = {
        current: PropTypes.object,
        forecast: PropTypes.object
    };

    render() {

        if(typeof this.props.current.weather === typeof undefined) {
            return (
                <div>
                    <Card className="col s12 offset-l2 l8">
                        <CardText>
                            <CircularProgress style={{paddingLeft: '50%', marginLeft: "-40px"}} size={80} thickness={5} />
                        </CardText>
                    </Card>
                </div>
            )
        }

        return (
            <div>
                <Card className="col s12 offset-l2 l8">
                    <CardHeader
                        title={"City: " + this.props.current.name + ", " + this.props.current.sys.country}
                        subtitle={"Weather: " + this.props.current.weather[0].description}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText>
                        <div className="row">
                            <div className="col s12 l4">
                                <h3 className="bold">Current weather:</h3>
                                <p>Temperature: {this.props.current.main.temp}</p>
                                <p>Pressure: {this.props.current.main.pressure}</p>
                                <p>Humidity: {this.props.current.main.humidity}%</p>
                            </div>
                            { this.props.forecast.list.map((item, index) => {
                                if (index > 0 && index < 3) {
                                    return (
                                        <div className="col s12 l4" key={item.dt}>
                                            <h3 className="bold">{"Time: " + item.dt_txt}</h3>
                                            <p>Temperature: {item.main.temp}</p>
                                            <p>Pressure: {item.main.pressure}</p>
                                            <p>Humidity: {item.main.humidity}%</p>
                                        </div>
                                    )
                                }
                                return '';
                            }) }
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }
}