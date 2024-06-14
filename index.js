function btnFetchDetails() {
  var cityName = document.getElementById("txtSearchBox").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=831cc1f60354721cc91e0f7cc8983984`
  )
    .then((res) => res.json())
    .then((data) => {
      var temperature = document.getElementById("temp");
      var city = document.getElementById("city");
      var wind = document.getElementById("wind");
      var cityhumidity = document.getElementById("humidity");
      var icon = document.getElementById("icon");

      if (data.name) {
        temperature.innerHTML = "";
        city.innerHTML = "";
        wind.innerHTML = "";
        cityhumidity.innerHTML = "";
        if (data.weather[0].main == "Clouds") {
          icon.className = "";
          icon.className = "bi-cloud-fill";
        } else if (data.weather[0].main == "Clear") {
          icon.className = "";
          icon.className = "bi-brightness-high";
        } else if (data.weather[0].main == "Rain") {
          icon.className = "";
          icon.className = "bi-cloud-rain";
        } else if (data.weather[0].main == "Drizzle") {
          icon.className = "";
          icon.className = "bi-cloud-drizzle-fill";
        } else if (data.weather[0].main == "Mist") {
          icon.className = "";
          icon.className = "bi-cloud-fog2-fill";
        }

        temperature.innerHTML = data.main.temp + "&deg c";
        city.innerHTML = data.name;
        wind.innerHTML = data.wind.speed + " km/hr";
        cityhumidity.innerHTML = data.main.humidity + "% humidity";
      } else {
        alert(`" ${cityName} " city not found `);
      }
    });
}
