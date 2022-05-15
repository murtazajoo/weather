let weather = {

    apikey: "ecbb3886f8fe3f8258d1cae670ce6cde",
    fetchweather: function(city) {
        fetch(
                " https://api.openweathermap.org/data/2.5/weather?q=" + city + "&id=524901&units=metric&appid=89398c26e6179eab02ca07386665e27c")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, feels_like, temp_max, temp_min, pressure, humidity } = data.main;
        const { speed } = data.wind;


        document.querySelector("#temps").innerHTML = Math.trunc(temp) + "°C"
        document.querySelector('#icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector('#discription').innerHTML = description
        document.querySelector("#feel").innerHTML = feels_like + "°C"
        document.getElementById('city_name').innerText = name
        document.getElementById('min').innerHTML = temp_min + "°C"
        document.getElementById('max').innerHTML = temp_max + "°C"
        document.getElementById('humid').innerHTML = humidity + "%"
        document.getElementById('press').innerHTML = pressure
        document.getElementById('windspeed').innerHTML = speed + " Km/h"
        document.body.style.backgroundImage = "url(https://source.unsplash.com/random/1080x1080/?" + name + ')'
    },

    search: function() {
        let cityName = document.getElementById('value').value
        this.fetchweather(cityName)
    }

}

document.querySelector("#go").addEventListener('click', () => {
    weather.search()
})
document.querySelector("#value").addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        weather.search()
    }

})


weather.fetchweather("pampore")
    // https://source.unsplash.com/random/1920x1080/?