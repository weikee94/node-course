const request = require('request');

const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);
// console.log(encodeURIComponent(argv.address));

geocode.geocodeAddress(argv.address, (errorMessage, successResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(successResults.address);
        weather.getWeather(successResults.latitude, successResults.longitude, (errorMsg, successMsg) => {
            if (errorMsg) {
                console.log(errorMsg);
            } else {
                console.log(JSON.stringify(successMsg, undefined, 2));
            }
        });
    }
});



