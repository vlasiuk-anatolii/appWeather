import createListDropDown from './createList';
import clear from './clear';
import { getCities } from './api';

function allCities(value) {
  getCities(value)
    .then((cityFromServer) => {
      clear();
      if (cityFromServer.code === '400' || cityFromServer.count === 0) {
        createListDropDown();
      } else {
        createListDropDown(cityFromServer.list);
      }
    });
}
export default allCities;
