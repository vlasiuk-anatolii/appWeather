const { createListDropDown } = require('./createList').default;
const { clear } = require('./clear');
const { getCities } = require('./api');

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
module.exports = { allCities };
