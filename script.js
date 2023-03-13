let API_key = '0376c7e7c3f905978d9b8dfbdc92fdda';
let link = 'https://api.openweathermap.org/data/2.5/weather?q=';
let city = 'Seattle';
let call = link + city + '&units=metric&appid=' + API_key;

let icon_size = '2x'
let icon_link = 'https://openweathermap.org/img/wn/' + weather.icon + '@' + icon_size + '.png'


console.log(call)
