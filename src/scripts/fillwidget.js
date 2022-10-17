const { getCelciy } = require('./celsiy');

const MMMM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fillWidget(cityFromServer) {
  if (cityFromServer.cod === '400') {
    const place = document.getElementById('place');
    place.textContent = 'Type city';
  } else {
    const temp = document.getElementById('temp');

    if (cityFromServer.main.temp) {
      temp.textContent = getCelciy(cityFromServer.main.temp);
    }
    const icon = document.getElementById('icon');
    const currentUrl = `url(http://openweathermap.org/img/wn/${cityFromServer.weather[0].icon}@2x.png)`;
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    if (currentHours > 21 || currentHours < 6) {
      const nightLayoutUrl = currentUrl.replace(/d(?=@)/, 'n');
      icon.style.backgroundImage = nightLayoutUrl;
    } else {
      const dayLayoutUrl = currentUrl.replace(/n(?=@)/, 'd');
      icon.style.backgroundImage = dayLayoutUrl;
    }
    const kind = document.getElementById('short-kind');
    kind.textContent = cityFromServer.weather[0].main;
    const kindDescription = document.getElementById('long-kind');
    kindDescription.textContent = cityFromServer.weather[0].description;
    const place = document.getElementById('place');
    place.textContent = `${cityFromServer.name}, ${cityFromServer.sys.country}`;
    const date = document.getElementById('date');
    const currentDate = new Date(cityFromServer.dt * 1000);
    date.textContent = `${currentDate.getDate()} ${MMMM[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    const min = document.getElementById('temp-min');
    min.textContent = getCelciy(cityFromServer.main.temp_min);
    const max = document.getElementById('temp-max');
    max.textContent = getCelciy(cityFromServer.main.temp_max);
  }
}
module.exports = { fillWidget };
