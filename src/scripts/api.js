async function getWeather(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=79b60acd04707a3adf97329d89451cf2`);

    return response.json();
  } catch (error) {
    return error;
  }
}

async function getCities(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city}&APPID=79b60acd04707a3adf97329d89451cf2`);

    return response.json();
  } catch (error) {
    return error;
  }
}

async function getCurrentCity(lon, lat) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79b60acd04707a3adf97329d89451cf2`);

    return response.json();
  } catch (error) {
    return error;
  }
}

module.exports = {
  getCities,
  getWeather,
  getCurrentCity,
};
