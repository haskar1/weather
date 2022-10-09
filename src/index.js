import { retrieveWeather } from './api';
import { locationSearch, locationDisplay } from './search';

locationSearch.addEventListener('search', () => {
  locationDisplay.textContent = '';
  retrieveWeather();
  locationSearch.value = '';
})