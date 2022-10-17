import accord from './acordion';
import allCities from './allcities';
import getDetails from './details';
import createCard from './createCard';
import isNight from './isNight';

const acc = document.getElementsByClassName('accordion');
accord(acc, 'active-arrow');

const input = document.getElementById('search');

input.addEventListener('keyup', (event) => {
  allCities(event.target.value);

  if (event.code === 'Enter') {
    getDetails(event.target.value);
  }
});

const button = document.getElementById('button');

button.addEventListener('click', () => {
  allCities(input.value);
  getDetails(input.value);
});
const header = document.getElementById('header');

if (isNight()) {
  header.classList.add('header-night');
  button.style.backgroundColor = '#2a344b';
} else {
  header.style.backgroundImage = '../images/day.png';
  button.style.backgroundColor = '#90caf9';
}
let saved = localStorage.getItem('obj');

if (saved) {
  saved = JSON.parse(saved);
  saved.forEach((element) => {
    createCard(element.name, element.lon, element.lat, element.country);
  });
}

const fotterText = document.getElementById('footer-text');
fotterText.textContent = `Vlasiuk Anatolii - ${new Date().getFullYear()}`;
