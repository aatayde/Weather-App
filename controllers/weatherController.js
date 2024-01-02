const request = require('request');
require('dotenv').config()
const apiKey = process.env.WEATHER_API; // Replace with your OpenWeatherMap API key

exports.getWeather = (req, res) => {
  const city = req.query.city; // Assume city is passed as a query parameter
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;



  request(url, (err, response, body) => {
    if (err) {
      res.status(500).send('Internal server error');
    } else {
      const weather = JSON.parse(body);
      if (weather.main == undefined) {
        res.status(404).send('City not found');
      } else {
        // Send back only the temperature
        res.json(weather);
      }
    }
  });
  
};