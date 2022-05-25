//declaring variables

let inputcit = document.querySelector('#cityinput');

let btn = document.querySelector('#add')
let city = document.querySelector('#cityoutput');
let descriptions = document.querySelector('#description');
let temp = document.querySelector('#temp')
let windspeed = document.querySelector('#wind')

 apik = "936d9e82a5ca5899f7604fd484b9b979"

// function to get values and fetch javascript functions

btn.addEventListener('click', function(){
    console.log(inputcit.value)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputcit.value+'&appid='+apik)
    .then(res => res.json())
    .then(res => console.log(data))
    .then(data => {
        var nameval = data['name']
        var descript = data['weather'][0]['description']
        var tempvalue = data['main']['temp']
        var windspd = data['wind']['speed']


        city.innerHTML = 'city: ${namecal}';
        descriptions.innerHTML = 'Conditions: ${descript}';
        temp.innerHTML = 'Temperature: ${tempvalue}';
        windspeed.innerHTML = 'Wind speed: ${windspd}'
    })
    .catch(err => alert('Wrong City name'))
})