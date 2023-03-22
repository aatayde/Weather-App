// let icon_link = 'https://openweathermap.org/img/wn/' + weather.icon + '@' + icon_size + '.png'

weather = {
    key: '0376c7e7c3f905978d9b8dfbdc92fdda',
    fetchWeather: function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.key)
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
        document.querySelector('.temp').innerText =  temp + "° C";
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
    }
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

