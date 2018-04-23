// forecast secret
// e9886bbe9019f1a2370d1de7e8f3e816
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e9886bbe9019f1a2370d1de7e8f3e816/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather');
        }
    });

}

module.exports.getWeather = getWeather;

