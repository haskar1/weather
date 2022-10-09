import { createURL, locationDisplay, locationSearch } from "./search";

const retrieveWeather = async () => {
  if (!locationSearch.value) return;

  const location = locationSearch.value;

  try {
    const weatherAPIURL = createURL();
    const response = await fetch(weatherAPIURL, {mode: 'cors'});
    const weatherData = await response.json();
    const currentTemp = weatherData.main.temp;

    locationDisplay.textContent += `${location.charAt(0).toUpperCase()}${location.slice(1)} is currently ${Math.round(currentTemp)}° F`;

  } catch(e) {
    console.log(e);
    locationDisplay.textContent = "Unable to find weather. Please try again."
  }
}

export { retrieveWeather };