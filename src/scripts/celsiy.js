function getCelciy(kelvin) {
  const temp = (Math.round((kelvin - 273)) * 10) / 10;
  if (temp > 0) {
    return `+${temp}°C`;
  }

  if (temp < 0) {
    return `-${temp}°C`;
  }

  return `${temp}°C`;
}
module.exports = { getCelciy };
