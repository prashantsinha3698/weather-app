import "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js";
import getLocation from "./test.js";
import { apiKey } from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
  getLocation();

  console.log(dayjs().format());
  const locationInput = document.getElementById("location");
  const suggestionsBox = document.getElementById("suggestions");
  const getLocationBtn = document.getElementById("getLocation");
  const weatherInfo = document.getElementById("weather-info");
  const locationName = document.getElementById("location-name");
  const currentTemp = document.getElementById("current-temp");
  const currentWeather = document.getElementById("current-weather");
  const maxTemp = document.getElementById("max-temp");
  const minTemp = document.getElementById("min-temp");
  const weeklyWeather = document.getElementById("weekly-weather");

  // Function to fetch location suggestions
  locationInput.addEventListener("input", function () {
    const query = locationInput.value;
    if (query.length > 2) {
      fetch(
        `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          suggestionsBox.innerHTML = "";
          data.forEach((location) => {
            const item = document.createElement("a");
            item.classList.add(
              "list-group-item",
              "list-group-item-action",
              "suggestion-item"
            );
            item.innerText = location.name;
            item.addEventListener("click", () => {
              locationInput.value = location.name;
              suggestionsBox.innerHTML = "";
              fetchWeather(location.name);
            });
            suggestionsBox.appendChild(item);
          });
        });
    } else {
      suggestionsBox.innerHTML = "";
    }
  });

  // Function to fetch weather data based on location
  function fetchWeather(location) {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`
    )
      .then((response) => response.json())
      .then((data) => {
        weatherInfo.classList.remove("d-none");
        locationName.innerText = data.location.name;
        currentTemp.innerText = data.current.temp_c;
        currentWeather.innerText = data.current.condition.text;
        maxTemp.innerText = data.forecast.forecastday[0].day.maxtemp_c;
        minTemp.innerText = data.forecast.forecastday[0].day.mintemp_c;

        // Populate weekly forecast
        weeklyWeather.innerHTML = "";
        data.forecast.forecastday.forEach((day) => {
          const listItem = document.createElement("li");
          listItem.classList.add("list-group-item");
          listItem.innerHTML = `<strong>${dayjs(day.date).format(
            "MMM D"
          )}</strong>: 
                  ${day.day.condition.text}, Max: ${
            day.day.maxtemp_c
          }°C, Min: ${day.day.mintemp_c}°C`;
          weeklyWeather.appendChild(listItem);
        });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }

  // Get weather based on user's current location
  getLocationBtn.addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=7`
        )
          .then((response) => response.json())
          .then((data) => {
            locationInput.value = data.location.name;
            fetchWeather(data.location.name);
          })
          .catch((error) =>
            console.error("Error fetching weather data:", error)
          );
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
});
