let API_key = '0376c7e7c3f905978d9b8dfbdc92fdda';
let link = 'https://api.openweathermap.org/data/2.5/weather?q=';
let city = document.getElementsByClassName('search-bar').value;
let call = link + city + '&units=metric&appid=' + API_key;

let icon_size = '2x'
// let icon_link = 'https://openweathermap.org/img/wn/' + weather.icon + '@' + icon_size + '.png'


console.log(call)

// fetch(call)
//     .then((response) =>response.json)
//     .then((data => console.log(data)))


function getCity(){
   city = document.querySelector('.search-bar').value
   document.querySelector('.city').innerText = city
}

// Add event listener for city input on keydown
document.querySelector('.search-bar').addEventListener("keydown", function(event){
    if (event.key=="Enter"){
        getCity()
    }
})

// update title 
