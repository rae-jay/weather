import { initiateSearch } from ".";



const searchForm = document.querySelector('form');
const searchIcon = document.querySelector('.searchIcon');
const searchBox = document.querySelector('#placeSearch');

const cityText = document.querySelector('.cityText');
const regionText = document.querySelector('#regionText')
const countryText = document.querySelector('#countryText');
const conditionText = document.querySelector('.weatherDescription');
const weatherIcon = document.querySelector('#weatherIcon');
const degreeNum = document.querySelector('#weatherDegrees');
const humidityNum = document.querySelector('#humidityNum');
const windNum = document.querySelector('#windNum');




let metric = false;
let formHasMouse = false;



export function initialSetup(){


    // these handle the search bar appearing/disappearing
    searchForm.addEventListener('mouseenter', () => {
        formHasMouse = true;
        searchBoxHide();
    })
    searchForm.addEventListener('mouseleave', () => {
        formHasMouse = false;
        searchBoxHide();
    })

    searchBox.addEventListener('focusout', () => {
        searchBoxHide();
    })

    searchIcon.addEventListener('click', () => {
        // returns true if successful
        if(initiateSearch(searchBox.value)){
            searchBox.value = '';
            // this is to lose doc focus
            document.activeElement.blur();
        }

    })
}


function searchBoxHide(){
    if(formHasMouse || document.activeElement == searchBox || searchBox.value != ""){
        searchBox.classList.remove('hide');
        if(!searchIcon.classList.contains('inputShow')){
            searchIcon.classList.add('inputShow');
        }
    }
    else{
        searchIcon.classList.remove('inputShow');
        if(!searchBox.classList.contains('hide')){
            searchBox.classList.add('hide');
        }
    }
}


export function displayInfo(data){
    cityText.textContent = data.locCity;
    countryText.textContent = data.locCountry;
    if(data.locRegion.length <= 10){
        regionText.textContent = data.locRegion;
        regionText.classList.remove('hide');
    }
    else{
        regionText.textContent = '';
        if(!regionText.classList.contains('hide')){
            regionText.classList.add('hide');
        }
    }

    conditionText.textContent = data.condition;
    weatherIcon.src = data.iconLink;

    if(metric == true){
        degreeNum.textContent = data.tempC + '°';
        windNum.textContent = data.windKph + ' kph';
    }
    else{
        degreeNum.textContent = data.tempF + '°';
        windNum.textContent = data.windMph + ' mph';
    }

    humidityNum.textContent = data.humidity + '%';
}



// newForm.addEventListener("submit", (event)=> {