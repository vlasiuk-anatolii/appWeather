import fillWidget from './fillwidget';
import { getCurrentCity } from './api';
import isNight from './isNight';

const arrayTemp = [];

function createCard(nameCity, lon, lat, country) {
  const objForSave = {
    name: nameCity,
    lon,
    lat,
    country,
  };
  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('card');
  imagesContainer.classList.add('cities__card');
  const imageButtonBox = document.createElement('div');
  imageButtonBox.classList.add('card__images');
  const imageFlag = document.createElement('img');
  imageButtonBox.appendChild(imageFlag);
  imageFlag.classList.add('card__image');
  imageFlag.setAttribute('crossorigin', 'anonymous');
  if (isNight()) {
    imageButtonBox.style.backgroundColor = '#2a344b';
  } else {
    imageButtonBox.style.backgroundColor = '#90caf9';
  }

  const cardButton = document.createElement('button');
  cardButton.classList.add('card__button');
  imageFlag.setAttribute('src', `https://countryflagsapi.com/svg/${objForSave.country}`);
  // imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${objForSave.country})`;
  if (nameCity) {
    cardButton.textContent = nameCity;
  }
  imageButtonBox.appendChild(cardButton);
  imagesContainer.appendChild(imageButtonBox);
  cardButton.addEventListener('click', () => {
    getCurrentCity(lon, lat)
      .then((result) => {
        fillWidget(result);
        imageFlag.setAttribute('src', `https://countryflagsapi.com/svg/${result.sys.country}`);
        // imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${result.sys.country})`;
        objForSave.country = `${result.sys.country}`;
      });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  const boxImages = document.getElementById('box-images');
  const arrayOfCards = document.getElementsByClassName('cities__card');
  if (arrayOfCards.length === 5) {
    boxImages.firstElementChild.remove();
  }

  if (arrayTemp.length === 5) {
    arrayTemp.shift();
  }

  arrayTemp.push(objForSave);
  localStorage.setItem('obj', JSON.stringify(arrayTemp));

  boxImages.appendChild(imagesContainer);
}
export default createCard;
