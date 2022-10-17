import createListDropDown from './createList';
import fillWidget from './fillwidget';
import { getWeather } from './api';

function getDetails(value) {
  getWeather(value)
    .then((result) => {
      if (result.code === '400') {
        createListDropDown();
      } else {
        fillWidget(result);
      }
    });
}
export default getDetails;
