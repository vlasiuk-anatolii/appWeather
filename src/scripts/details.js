const { createListDropDown } = require('./createList').default;
const { fillWidget } = require('./fillwidget');
const { getWeather } = require('./api');

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
module.exports = { getDetails };
