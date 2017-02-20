import axios from 'axios';

export default class WeatherAPI {

    getWheather(city, callback) {

        let apiKey = '6835a4d19d6eb84cc90823c06056a7e1';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

        axios.get(url)
            .then((res) => {
                callback(res.data)
            });
    }

    getForecast(city, callback) {

        let apiKey = '6835a4d19d6eb84cc90823c06056a7e1';
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`;

        axios.get(url)
            .then((res) => {
                callback(res.data)
            });
    }
}