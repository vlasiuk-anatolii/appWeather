import createCard from './createCard';
import fillWidget from './fillwidget';
import clear from './clear';
import { getCurrentCity } from './api';
import isNight from './isNight';

function createListDropDown(listCities) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('dropdown');
  const list = document.createElement('ul');
  list.setAttribute('id', 'list');
  list.classList.add('dropdown__list');
  listContainer.appendChild(list);
  const label = document.getElementById('label-search');
  const parentDiv = label.parentNode;
  let item;

  if (listCities instanceof Array) {
    listCities.forEach((element) => {
      item = document.createElement('li');
      item.setAttribute('data', `${element.name} ${element.sys.country} ${element.id} ${element.coord.lon} ${element.coord.lat}`);
      list.appendChild(item);
      item.textContent = `${element.name}, ${element.sys.country}`;

      if (isNight()) {
        item.classList.toggle('dropdown__item-night');
      } else {
        item.classList.toggle('dropdown__item');
      }
      item.addEventListener('click', () => {
        getCurrentCity(element.coord.lon, element.coord.lat)
          .then((result) => {
            if (result) {
              fillWidget(result);
            }
          });
        clear();
        createCard(element.name, element.coord.lon, element.coord.lat, element.sys.country);
      });
    });
  } else {
    item = document.createElement('li');
    list.appendChild(item);
    item.textContent = 'City not found!';
    if (isNight()) {
      item.classList.toggle('dropdown__item-night');
    } else {
      item.classList.toggle('dropdown__item');
    }
    item.addEventListener('click', () => {
      clear();
    });
  }

  parentDiv.insertBefore(listContainer, label);
}
export default createListDropDown;
