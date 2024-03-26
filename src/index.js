import './style.css';

import { initialSetup, displayInfo } from './interface';

console.log("working test");



const baseLink = 'http://api.weatherapi.com/v1/';
let requestType = 'current.json?';
const apiKey = 'key=faed28754a2c4013a9453643242303';
let defaultSearch = 'Edinburgh';


initialSetup();
initiateSearch();


// const exampleCities = [ 'London', 'San Diego', 'Edinburgh', 'Sydney' ];

// // so you'd type this in and hit click and THAT would trigger:
// exampleCities.forEach((city) => {
//     searchWeather(createLink(city)).then( (weather) => {
//         console.log(weather);

//         displayInfo(weather);

//         // tempImg.src = weather.iconLink;
//     })
//     .catch( (err) => {
//         console.log('ERROR, do something here later');
//         console.log(err);
//     });
// });


// this is triggered on page load OR clicking search button
export function initiateSearch(searchTerm){
    let link;
    if(searchTerm){
        link = createLink(searchTerm);
    }
    else{
        link = createLink(defaultSearch);
    }

    searchWeather(link).then( (weather) => {
        // console.log(weather);

        displayInfo(weather);

        return true;
    })
    .catch( (err) => {
        // if a search term doesn't work, 'weather' is null, therefore displayInfo-ing it
        // causes a failure
        // probably coulda handled that cleaner
        console.log('ERR: probably an invalid search term');
        console.log(err);

        return false;
    });
}



function createLink(location){
    const format = location.replace(/ /g,'+').toLowerCase();
    const searchTerm = `&q=${format}`;
    return baseLink + requestType + apiKey + searchTerm;
}


async function searchWeather(link){
    try{
        const response = await fetch(link, {mode: 'cors'})
        const data = await response.json();

        return weatherStats(data);
    }    
    catch(err){
        console.log('ERR: invalid search term');
        // console.log(err);
    }

    return null;

    // console.log(data);
}


function weatherStats(data){
    const weatherOb = {};
    weatherOb.locCity = data.location.name;
    weatherOb.locCountry = data.location.country;
    weatherOb.locRegion = data.location.region;

    weatherOb.condition = data.current.condition.text;
    weatherOb.tempC = data.current.temp_c;
    weatherOb.tempF = data.current.temp_f;
    weatherOb.windMph = data.current.wind_mph;
    weatherOb.windKph = data.current.wind_kph;
    weatherOb.humidity = data.current.humidity;

    weatherOb.iconLink = 'http:' + data.current.condition.icon;

    return weatherOb;
}






// http://api.weatherapi.com/v1/current.json?key=faed28754a2c4013a9453643242303&q=san+diego




/*
(how does it handle multi-results? looks like that might be 'search' rather than 'current'
but how do you PROCEED from that...)

info provided:
location object: name, region, coutry (region may or may not exist, ie state name)
api error (maybe)
and weather: temp_c, temp_f, condition:text and condition:icon (icon is a url)
maybe like, wind_mph and wind_kph and humidity (percentage) for more

(region maybe only if 10>= characters, otherwise we get like 'City of Edinburgh' as a region)


temp
icon
name, region, country
*/

// °