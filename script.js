weather = {
    key: '0376c7e7c3f905978d9b8dfbdc92fdda',
    fetchWeather: function(city, units){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&appid=' + this.key)
        .then(response => response.json())
        .then(data => this.displayWeather(data))
        .catch(error => console.log("Error: ", error))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector('.city').innerText = name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.temp').innerText =  temp.toFixed(0) + "° C";
        document.querySelector('.desctiption').innerText =  description;
        document.querySelector('.wind').innerText = "wind " + speed + " mph";
        document.querySelector('.humidity').innerText = "humidity " + humidity + "%";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name +"')";
    },
    search: function(){
        units = this.updateUnits()
        // Search City & Units
        this.fetchWeather(document.querySelector('.search-bar').value, units);
    },
    clearSearchText: function(){
        document.querySelector('.search-bar').value = '';
    },
    convertTemperature: function(){
        let temperature = parseFloat(document.querySelector('.temp').innerText)
       

         if (this.isCelsius()){
            let fahrenheit = ((temperature * (9/5)) + 32);
            document.querySelector('.temp').innerText = fahrenheit.toFixed(0) + "° F";

         } else {
            let celsius = ((temperature - 32) * (5/9) );
            document.querySelector('.temp').innerText = celsius.toFixed(0) + "° C";
         }
        
    },
    isCelsius: function(){
        
        return (document.querySelector('.temp').innerText.includes('C') ? true : false)
    },
    updateUnits: function(){
        console.log("is Celsius", this.isCelsius())

        if (this.isCelsius()){
            console.log("change units to fahrenheit")
            return 'imperial' 
        } else {
            console.log("change units to celsius")
            return 'metric' 
        }
    },  
    

}

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
    weather.updateUnits();
    weather.convertTemperature()
})