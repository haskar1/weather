const locationSearch = document.querySelector('#location-search');
const locationDisplay = document.querySelector('.location-display');

function createURL() {
  const location = locationSearch.value;
  const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=d1502904053949d3808a220590a67f7c`;
  return weatherAPIURL;
}

export { createURL, locationSearch, locationDisplay };