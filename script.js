// variables
let apiKey = "c84eb4f0d313c91844853c334d0ba345";
let url = "http://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=c84eb4f0d313c91844853c334d0ba345&units=imperial"
let currentCity = $("#currentcity");
let cityHumidity = $("#cityhumidity");


$.ajax({
    url: url,
    method: "GET"
}).then(function (response) {
    currentCity.text(response.main.temp);
    console.log(response.main.temp);

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        currentCity.text(response.main.humidity);
        console.log(response.main.humidity);

    });
});

