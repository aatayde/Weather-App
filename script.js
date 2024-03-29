weather = {
    fetchWeather: function(city) {
        const url = `http://localhost:3000/weather?city=${city}`;
        console.log("checking . . .", city)
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            this.displayWeather(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            //document.getElementById('weatherResult').textContent = 'Failed to load weather data.';
        });
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        const newTemp = temp - 273.15;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector('.city').innerText = name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.temp').innerText =  newTemp.toFixed(0) + "° " + unitSymbol;
        document.querySelector('.desctiption').innerText =  description;
        document.querySelector('.wind').innerText = "wind " + speed + " mph";
        document.querySelector('.humidity').innerText = "humidity " + humidity + "%";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name +"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
       
    },
    clearSearchText: function(){
        document.querySelector('.search-bar').value = '';
    },
    convertTemperature: function(){
        let temperature = parseFloat(document.querySelector('.temp').innerText)
       
         if (this.isCelsius()){
            let farenheit = ((temperature * (9/5)) + 32);
            this.getUnits('imperial')
            document.querySelector('.temp').innerText = farenheit.toFixed(0) + "° F";

         } else {
            let celcius = ((temperature - 32) * (5/9) );
            this.getUnits('metric')
            document.querySelector('.temp').innerText = celcius.toFixed(0) + "° C";
         } 
    },
    isCelsius: function(){
        return (document.querySelector('.temp').innerText.includes('C') ? true : false)
    },
    getUnits: function(systemOfMeasurements){
        console.log("what is system of measurements: ", systemOfMeasurements)

        switch (systemOfMeasurements){
            case 'metric': 
                console.log('Metic Selected')
              
                unitSymbol = 'C'
                testName = 'metric';
                
                return 'metric';
            case 'imperial' : 
            console.log('Imperial Selected')
                unitSymbol = 'F'
                testName = 'imperial';
               
                return 'imperial';
            default : 
            console.log('Default Selected')
                
                unitSymbol = 'C'
                testName = 'metric';
                // break;
                return 'metric';
        }
    }
}



testName = 'metric';
unitSymbol = 'C';

// Add Search Buton Feature
document.querySelector('.search button').addEventListener("click", function(){
    weather.search();
    weather.clearSearchText();
})


// Add event listener for city input on keydown
document.querySelector('.search-bar').addEventListener("keydown", function(event){

    if (event.key=="Enter"){
        weather.search();
        weather.clearSearchText();
    }
})

// add temperature conversion
document.querySelector('.temp').addEventListener("click", function(){
    
    weather.convertTemperature()
})